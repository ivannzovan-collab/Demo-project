import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getCopy } from '../../content';
import I from '../common/icons';
import BrandMark from '../common/BrandMark';

/* Sign in / create account modal. Toggles between the two modes; all strings
   come from copy.auth. */
export default function AuthModal({ onClose }) {
  const { toast } = useRS();
  const a = getCopy().auth;
  const [mode, setMode] = React.useState('signin');
  React.useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc);
  }, []);
  const submit = (e) => { e.preventDefault(); onClose(); toast(mode === 'signin' ? a.welcomeBackToast : a.createdToast); };
  return (
    <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="mclose" onClick={onClose} aria-label="Close"><I.close/></button>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}><BrandMark /></div>
        <h2>{mode === 'signin' ? a.signInTitle : a.createTitle}</h2>
        <p className="msub">{mode === 'signin' ? a.signInSub : a.createSub}</p>
        <form onSubmit={submit}>
          {mode === 'signup' && <div className="field"><label>{a.fields.name}</label><input type="text" placeholder={a.placeholders.name} required/></div>}
          <div className="field"><label>{a.fields.email}</label><input type="email" placeholder={a.placeholders.email} required/></div>
          <div className="field"><label>{a.fields.password}</label><input type="password" placeholder={a.placeholders.password} required/></div>
          <button className="btn btn--primary" type="submit" style={{ width: '100%', marginTop: 22 }}>{mode === 'signin' ? a.signIn : a.createAccountSubmit}</button>
        </form>
        <div className="divider">{a.continueWith}</div>
        <div className="oauth">
          <button onClick={() => { onClose(); toast('Continuing with Google…'); }}><I.google s={18}/>Google</button>
          <button onClick={() => { onClose(); toast('Continuing with Apple…'); }}><I.apple s={18}/>Apple</button>
        </div>
        <p className="fineprint">
          {mode === 'signin'
            ? <>{a.noAccount} <span className="switch" onClick={() => setMode('signup')}>{a.createAccount}</span></>
            : <>{a.haveAccount} <span className="switch" onClick={() => setMode('signin')}>{a.signIn}</span></>}
        </p>
      </div>
    </div>
  );
}
