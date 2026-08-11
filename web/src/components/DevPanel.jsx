import { useState } from 'react';
import { getEvents, resetAnalytics } from '../lib/analytics';
import {
  getUser,
  resetUser,
  getABVariant,
  setABVariant,
  isSimulatingMissingTable,
  setSimulateMissingTable,
} from '../lib/userState';
import './DevPanel.css';

// Demo-only control surface: A/B arm (kill switch = same flag), fail-open
// simulation, onboarding reset, and the analytics event log.
function DevPanel() {
  const [open, setOpen] = useState(false);
  const [, setTick] = useState(0);
  const refresh = () => setTick(t => t + 1);

  const user = getUser();
  const variant = getABVariant();
  const events = getEvents().slice(-12).reverse();

  const toggleArm = () => {
    setABVariant(variant === 'treatment' ? 'control' : 'treatment');
    window.location.href = '/';
  };

  const toggleTable = () => {
    setSimulateMissingTable(!isSimulatingMissingTable());
    window.location.reload();
  };

  const resetDemo = () => {
    resetUser();
    resetAnalytics();
    window.location.href = '/';
  };

  if (!open) {
    return (
      <button className="devpanel-fab" onClick={() => setOpen(true)} title="Demo controls">
        ⚙
      </button>
    );
  }

  return (
    <div className="devpanel">
      <div className="devpanel-head">
        <strong>Demo controls</strong>
        <button className="devpanel-close" onClick={() => setOpen(false)}>✕</button>
      </div>

      <div className="devpanel-row">
        <span>A/B arm</span>
        <button className="devpanel-btn" onClick={toggleArm}>
          {variant} → switch
        </button>
      </div>
      <div className="devpanel-row">
        <span>Ordering table</span>
        <button className="devpanel-btn" onClick={toggleTable}>
          {isSimulatingMissingTable() ? 'missing → restore' : 'present → simulate missing'}
        </button>
      </div>
      <div className="devpanel-row">
        <span>Onboarding</span>
        <button className="devpanel-btn" onClick={resetDemo}>reset demo</button>
      </div>

      <div className="devpanel-user">
        path: {String(user.path)} · picks: {user.picks.length ? user.picks.join(', ') : '—'}
        <br />
        gender: {String(user.gender)} · age: {String(user.age)} · via: {String(user.attribution)}
      </div>

      <div className="devpanel-events">
        <strong>Events ({getEvents().length})</strong>
        <button className="devpanel-btn devpanel-btn-small" onClick={refresh}>refresh</button>
        {events.length === 0 && <div className="devpanel-event">none yet</div>}
        {events.map((e, i) => (
          <div key={i} className="devpanel-event">
            <code>{e.event}</code> {JSON.stringify(e.props)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevPanel;
