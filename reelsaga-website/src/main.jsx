import React from 'react';
import { createRoot } from 'react-dom/client';
import { initAnalytics, track } from './lib/analytics';

// Stylesheets — loaded in the same order as the original prototype.
import './styles.css';
import './sections.css';
import './home.css';
import './atmosphere.css';
import './figma-home.css';
import './catalog2.css';
import './blog2.css';
import './series-modal.css';
import './book.css';

import App from './app.jsx';

// Amplitude analytics + Session Replay — client-side only, initialised once.
initAnalytics();
track('App Loaded');

createRoot(document.getElementById('root')).render(<App />);
