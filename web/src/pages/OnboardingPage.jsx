import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { chipsFor, payoffSeries, payoffBooks } from '../lib/personalization';
import { track, trackOnce } from '../lib/analytics';
import { getUser, saveUser, loadTable } from '../lib/userState';
import { coverGradient, RS_PREFIX } from '../data/seriesMedia';
import './OnboardingPage.css';

// GDD screens 1-7: intro, path, chips, gender, age, attribution, (loading), payoff.
const QUESTION_STEPS = ['path', 'chips', 'gender', 'age', 'attribution'];

const GENDER_OPTIONS = ['Female', 'Male', 'Non-binary', 'Prefer not to say']; // QA fix: "Non-binary"
const AGE_OPTIONS = ['18–24', '25–34', '35–44', '45–54', '55+', 'Prefer not to say'];
const ATTRIBUTION_OPTIONS = ['TikTok', 'Instagram', 'Facebook', 'YouTube', 'App Store', 'A friend', 'Other'];

function OnboardingPage() {
  const navigate = useNavigate();
  const table = loadTable();
  const [screen, setScreen] = useState('intro');
  const [answers, setAnswers] = useState(() => {
    const u = getUser();
    return { path: u.path, picks: u.picks, gender: u.gender, age: u.age, attribution: u.attribution };
  });
  const payoffFiredRef = useRef(false);

  useEffect(() => {
    trackOnce(`viewed:${screen}`, 'onb_screen_viewed', { screen });
  }, [screen]);

  const stepIndex = QUESTION_STEPS.indexOf(screen);

  const answer = (step, value, patch) => {
    setAnswers(a => ({ ...a, ...patch, [step]: value }));
    saveUser(patch); // answers persist immediately
    trackOnce(`answered:${step}`, 'onb_answered', { step, value });
    advance(step);
  };

  const skipStep = (step) => {
    trackOnce(`skipped:${step}`, 'onb_skipped', { step });
    if (step === 'chips') saveUser({ picks: [] });
    if (step === 'gender') saveUser({ gender: null }); // skipped demographics stored as null
    if (step === 'age') saveUser({ age: null });
    if (step === 'attribution') saveUser({ attribution: null });
    advance(step);
  };

  const advance = (from) => {
    if (from === 'intro') { setScreen('path'); return; }
    const i = QUESTION_STEPS.indexOf(from);
    if (i >= 0 && i < QUESTION_STEPS.length - 1) {
      setScreen(QUESTION_STEPS[i + 1]);
    } else {
      // fail-open: no table -> payoff cannot render, go straight home
      if (!table) { finish(false); return; }
      setScreen('loading');
    }
  };

  // Skip the whole flow — never blocks home.
  const skipAll = () => {
    trackOnce(`skipped:${screen}`, 'onb_skipped', { screen, all: true });
    finish(true);
  };

  const finish = (skipped) => {
    saveUser({ onboardingDone: true, skipped });
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (screen !== 'loading') return;
    const t = setTimeout(() => setScreen('payoff'), 2000);
    return () => clearTimeout(t);
  }, [screen]);

  const path = answers.path || 'videos';
  const picks = answers.picks || [];
  const payoff = useMemo(() => {
    if (screen !== 'payoff' || !table) return [];
    return path === 'books' ? payoffBooks(table, picks) : payoffSeries(table, picks);
  }, [screen, table, path, picks]);

  useEffect(() => {
    if (screen === 'payoff' && payoff.length && !payoffFiredRef.current) {
      payoffFiredRef.current = true;
      track('payoff_impressions', { path, ids: payoff.map(c => c.id), picks });
    }
  }, [screen, payoff, path, picks]);

  const playPayoff = (card, index) => {
    track('payoff_play', { path, id: card.id, index });
    saveUser({ onboardingDone: true, skipped: false });
    if (path === 'books') {
      navigate(`/?tab=books&read=${card.id}`, { replace: true });
    } else {
      navigate(`/player/${RS_PREFIX}${card.id}?episode=0`, { replace: true });
    }
  };

  // --- render helpers ---

  const progressBar = stepIndex >= 0 && (
    // QA fix: segment count equals the number of question steps
    <div className="onb-progress" aria-label={`Step ${stepIndex + 1} of ${QUESTION_STEPS.length}`}>
      {QUESTION_STEPS.map((s, i) => (
        <div key={s} className={`onb-progress-seg ${i <= stepIndex ? 'filled' : ''}`} />
      ))}
    </div>
  );

  const header = screen !== 'loading' && screen !== 'payoff' && (
    <div className="onb-header">
      <span className="onb-logo">ReelSaga</span>
      <button className="onb-skip" onClick={screen === 'intro' ? skipAll : () => skipStep(screen)}>
        Skip
      </button>
    </div>
  );

  const singleSelect = (step, title, options, toPatch) => (
    <div className="onb-screen">
      <h1 className="onb-title">{title}</h1>
      <div className="onb-options">
        {options.map(opt => (
          <button
            key={opt}
            className={`onb-option ${answers[step] === opt ? 'selected' : ''}`}
            onClick={() => answer(step, opt, toPatch(opt))}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="onb-page">
      {header}
      {progressBar}

      {screen === 'intro' && (
        <div className="onb-screen onb-intro">
          <div className="onb-intro-art">🎬</div>
          <h1 className="onb-title">Stories that know you</h1>
          <p className="onb-sub">
            Answer a few quick questions and we&apos;ll line up bingeable series and
            books picked for your taste. Skip anytime — you can always browse everything.
          </p>
          <button className="onb-cta" onClick={() => advance('intro')}>Get Started</button>
        </div>
      )}

      {screen === 'path' && (
        <div className="onb-screen">
          <h1 className="onb-title">What do you want first?</h1>
          <p className="onb-sub">Pick one — you get both either way.</p>
          <div className="onb-path-cards">
            {[
              { key: 'videos', icon: '📺', label: 'Videos', desc: 'Bingeable vertical series' },
              { key: 'books', icon: '📚', label: 'Books', desc: 'Addictive serialized reads' },
            ].map(p => (
              <button
                key={p.key}
                className={`onb-path-card ${answers.path === p.key ? 'selected' : ''}`}
                onClick={() => answer('path', p.key, { path: p.key })}
              >
                <span className="onb-path-icon">{p.icon}</span>
                <span className="onb-path-label">{p.label}</span>
                <span className="onb-path-desc">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === 'chips' && (
        <ChipsScreen
          chips={chipsFor(table, path)}
          initial={picks}
          onContinue={(selected) => answer('chips', selected, { picks: selected })}
        />
      )}

      {screen === 'gender' &&
        singleSelect('gender', 'How do you identify?', GENDER_OPTIONS,
          v => ({ gender: v === 'Prefer not to say' ? null : v }))}

      {screen === 'age' &&
        // QA fix: "What is your age?"
        singleSelect('age', 'What is your age?', AGE_OPTIONS,
          v => ({ age: v === 'Prefer not to say' ? null : v }))}

      {screen === 'attribution' &&
        singleSelect('attribution', 'Where did you hear about us?', ATTRIBUTION_OPTIONS,
          v => ({ attribution: v }))}

      {screen === 'loading' && (
        <div className="onb-screen onb-loading">
          <div className="onb-spinner" />
          <h1 className="onb-title">Building your story mix…</h1>
          <p className="onb-sub">Matching {picks.length ? picks.join(', ') : 'top picks'} to our catalog</p>
        </div>
      )}

      {screen === 'payoff' && (
        <div className="onb-screen onb-payoff">
          <h1 className="onb-title">Made for you</h1>
          <p className="onb-sub">
            {picks.length ? `Because you picked ${picks.join(', ')}` : 'Our global favorites to get you started'}
          </p>
          <div className="onb-payoff-cards">
            {payoff.map((card, i) => (
              <div key={card.id} className={`onb-payoff-card ${i === 0 ? 'focused' : ''}`}>
                <div className="onb-payoff-art" style={{ background: coverGradient(card.title) }}>
                  {i === 0 && <span className="onb-payoff-badge">TOP MATCH</span>}
                </div>
                <div className="onb-payoff-info">
                  <h3>{card.title}</h3>
                  <p className="onb-payoff-why">
                    {card.hits?.length ? `Matches: ${card.hits.join(', ')}` : 'Trending worldwide'}
                  </p>
                  <button className="onb-cta onb-payoff-cta" onClick={() => playPayoff(card, i)}>
                    {path === 'books' ? '📖 READ Chapter 1' : '▶ PLAY Free Episode 1'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="onb-skip onb-payoff-skip" onClick={() => finish(false)}>
            Explore Home instead
          </button>
        </div>
      )}
    </div>
  );
}

// Screen 3: path-conditional 12-chip set; Continue disabled until >=3 picks.
function ChipsScreen({ chips, initial, onContinue }) {
  const [selected, setSelected] = useState(initial || []);

  const toggle = (chip) => {
    setSelected(sel => sel.includes(chip) ? sel.filter(c => c !== chip) : [...sel, chip]);
  };

  return (
    <div className="onb-screen">
      <h1 className="onb-title">What are you into?</h1>
      <p className="onb-sub">Pick at least 3 — we&apos;ll tune your home screen around them.</p>
      <div className="onb-chips">
        {chips.map(chip => (
          <button
            key={chip}
            className={`onb-chip ${selected.includes(chip) ? 'selected' : ''}`}
            onClick={() => toggle(chip)}
          >
            {chip}
          </button>
        ))}
      </div>
      <button
        className="onb-cta"
        disabled={selected.length < 3}
        onClick={() => onContinue(selected)}
      >
        {selected.length < 3 ? `Continue (pick ${3 - selected.length} more)` : 'Continue'}
      </button>
    </div>
  );
}

export default OnboardingPage;
