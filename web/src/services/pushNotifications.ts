// Push Notifications Service for Web

export class PushNotificationService {
  private static instance: PushNotificationService;
  private permission: NotificationPermission = 'default';

  private constructor() {
    if ('Notification' in window) {
      this.permission = Notification.permission;
    }
  }

  static getInstance(): PushNotificationService {
    if (!PushNotificationService.instance) {
      PushNotificationService.instance = new PushNotificationService();
    }
    return PushNotificationService.instance;
  }

  // Check if notifications are supported
  isSupported(): boolean {
    return 'Notification' in window;
  }

  // Get current permission status
  getPermission(): NotificationPermission {
    return this.permission;
  }

  // Request notification permission
  async requestPermission(): Promise<NotificationPermission> {
    if (!this.isSupported()) {
      console.warn('Notifications not supported');
      return 'denied';
    }

    if (this.permission === 'granted') {
      return 'granted';
    }

    try {
      this.permission = await Notification.requestPermission();

      // Save preference
      localStorage.setItem('notificationPermission', this.permission);

      return this.permission;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return 'denied';
    }
  }

  // Send a notification
  async sendNotification(title: string, options?: NotificationOptions): Promise<void> {
    if (!this.isSupported()) {
      console.warn('Notifications not supported');
      return;
    }

    if (this.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return;
    }

    const defaultOptions: NotificationOptions = {
      icon: '/icon-192.png',
      badge: '/badge-72.png',
      vibrate: [200, 100, 200],
      ...options,
    };

    try {
      const notification = new Notification(title, defaultOptions);

      // Auto-close after 5 seconds
      setTimeout(() => notification.close(), 5000);

      // Handle click
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  // Predefined notification types
  async notifyNewEpisode(dramaName: string, episodeNumber: number): Promise<void> {
    await this.sendNotification(
      `New Episode Released! 🎬`,
      {
        body: `${dramaName} - Episode ${episodeNumber} is now available!`,
        tag: 'new-episode',
        requireInteraction: false,
      }
    );
  }

  async notifyContinueWatching(dramaName: string, episodeNumber: number): Promise<void> {
    await this.sendNotification(
      `Continue Watching 📺`,
      {
        body: `${dramaName} - Episode ${episodeNumber} is waiting for you!`,
        tag: 'continue-watching',
        requireInteraction: false,
      }
    );
  }

  async notifyDailyRecommendation(): Promise<void> {
    await this.sendNotification(
      `Fresh Drama Awaits! ✨`,
      {
        body: 'We have new personalized recommendations for you today!',
        tag: 'daily-recommendation',
        requireInteraction: false,
      }
    );
  }

  async notifyChoicePoint(): Promise<void> {
    await this.sendNotification(
      `Decision Time! 🤔`,
      {
        body: 'Your choice matters! Make a decision to continue the story.',
        tag: 'choice-point',
        requireInteraction: true,
      }
    );
  }

  // Schedule a notification (simulated - real implementation would need service worker)
  scheduleNotification(delay: number, title: string, options?: NotificationOptions): void {
    setTimeout(() => {
      this.sendNotification(title, options);
    }, delay);
  }

  // Clear all notifications
  clearAllNotifications(): void {
    // Note: Web API doesn't provide a way to clear all notifications
    // This would need to be tracked manually or done via service worker
    console.log('Clearing notifications...');
  }
}

// Export singleton instance
export const pushNotifications = PushNotificationService.getInstance();

// Helper hook for React components
export function usePushNotifications() {
  const service = PushNotificationService.getInstance();

  const requestPermission = async () => {
    return await service.requestPermission();
  };

  const isSupported = service.isSupported();
  const permission = service.getPermission();

  return {
    requestPermission,
    sendNotification: service.sendNotification.bind(service),
    notifyNewEpisode: service.notifyNewEpisode.bind(service),
    notifyContinueWatching: service.notifyContinueWatching.bind(service),
    notifyDailyRecommendation: service.notifyDailyRecommendation.bind(service),
    notifyChoicePoint: service.notifyChoicePoint.bind(service),
    isSupported,
    permission,
  };
}
