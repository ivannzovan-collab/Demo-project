import React from 'react';
import { createRoot } from 'react-dom/client';
import * as amplitude from '@amplitude/unified';

// Stylesheets — loaded in the same order as the original prototype's index.html
import './styles.css';
import './sections.css';
import './home.css';
import './atmosphere.css';
import './figma-home.css';
import './catalog2.css';
import './blog2.css';
import './series-modal.css';
import './book.css';

import { App } from './app.jsx';

// Amplitude Analytics + Session Replay — client-side only, initialized exactly once
// at app startup. autocapture tracks key interactions (page views, clicks, etc.).
if (typeof window !== 'undefined') {
  amplitude.initAll('eb163fb30edb7f327e93dcf51bb3c059', { serverZone: 'EU', analytics: { autocapture: true }, sessionReplay: { sampleRate: 1 } });
  // Explicit test event — fires once on load to confirm the connection.
  amplitude.track('App Loaded');
}

createRoot(document.getElementById('root')).render(<App />);
