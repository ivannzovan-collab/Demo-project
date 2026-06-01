import React from 'react';
import { createRoot } from 'react-dom/client';

// Stylesheets — loaded in the same order as the original prototype's index.html
import './styles.css';
import './sections.css';
import './home.css';
import './atmosphere.css';
import './figma-home.css';
import './catalog2.css';
import './series-modal.css';

import { App } from './app.jsx';

createRoot(document.getElementById('root')).render(<App />);
