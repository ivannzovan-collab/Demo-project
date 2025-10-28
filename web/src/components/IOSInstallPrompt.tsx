import { useState, useEffect } from 'react';

export function IOSInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if device is iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    // Check if already installed (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        (navigator as any).standalone === true;

    // Check if user has dismissed the prompt before
    const hasSeenPrompt = localStorage.getItem('ios-install-prompt-dismissed');

    // Show prompt if: iOS device, not installed, and hasn't been dismissed
    if (isIOS && !isStandalone && !hasSeenPrompt) {
      // Show after 3 seconds
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('ios-install-prompt-dismissed', 'true');
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl animate-slide-down">
      <div className="max-w-md mx-auto">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white text-2xl font-bold w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🎬
            </div>
          </div>

          <div className="flex-1 text-white">
            <h3 className="font-bold text-lg mb-1">Install DramaSnap</h3>
            <p className="text-sm text-white text-opacity-90 mb-3">
              Add to your home screen for the full app experience!
            </p>

            <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-2xl">1️⃣</span>
                <span>Tap the <strong>Share</strong> button</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/>
                </svg>
              </div>

              <div className="flex items-center space-x-2 text-sm mt-2">
                <span className="text-2xl">2️⃣</span>
                <span>Select <strong>"Add to Home Screen"</strong></span>
              </div>

              <div className="flex items-center space-x-2 text-sm mt-2">
                <span className="text-2xl">3️⃣</span>
                <span>Tap <strong>"Add"</strong> ✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
