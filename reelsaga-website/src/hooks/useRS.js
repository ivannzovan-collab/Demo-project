import React from 'react';

/* App context: routing (go), overlays (openSeries/openSearch/openSignIn),
   toasts, and the current view. Provided by App; read via useRS() anywhere. */
const RSCtx = React.createContext({});
const useRS = () => React.useContext(RSCtx);

export { RSCtx, useRS };
