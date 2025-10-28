import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete splash after 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-pulse">
          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            🎬
          </div>
        </div>

        {/* App Name with Gradient */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse mb-4">
          DramaSnap
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-lg animate-fade-in">
          AI-Powered Short Drama
        </p>

        {/* Loading Indicator */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="h-2 w-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
