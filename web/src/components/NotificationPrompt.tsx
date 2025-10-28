import { useState } from 'react';
import { Bell, X } from 'lucide-react';

interface NotificationPromptProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function NotificationPrompt({ onAccept, onDecline }: NotificationPromptProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg shadow-2xl p-4 border border-purple-500">
        {/* Close button */}
        <button
          onClick={() => {
            setIsVisible(false);
            onDecline();
          }}
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex items-start space-x-4">
          <div className="bg-purple-500 rounded-full p-3">
            <Bell className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">
              Stay Updated! 🔔
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              Get notified about new episodes, daily recommendations, and exclusive content.
            </p>

            {/* Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setIsVisible(false);
                  onAccept();
                }}
                className="flex-1 bg-white text-purple-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Enable
              </button>
              <button
                onClick={() => {
                  setIsVisible(false);
                  onDecline();
                }}
                className="flex-1 bg-transparent border border-white text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
