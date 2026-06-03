/* Global, non-catalog configuration: brand, store/social/legal links,
   trailer host and asset folders. Edit links here — never in a component. */

export const config = {
  brand: {
    name: 'ReelSaga',
    logo: '/assets/logos/reelsaga-logo.png',
  },
  // Real store URLs go here when available; the download buttons currently
  // just flash a toast (see copy.toasts.download), preserving today's behaviour.
  stores: {
    ios: '',
    android: '',
  },
  social: {
    facebook: '',
  },
  legal: {
    privacy: '/privacy',
    terms: '/terms',
  },
  // Trailers stream from `${trailerBaseUrl}/${type}/${id}/${kind}.mp4`.
  trailerBaseUrl: 'https://videos.nanobitgames.com/trailers',
  // Asset folders (used when building image paths in the data files).
  assets: {
    images: '/assets/images/',
    fig: '/assets/fig/',
  },
} as const;

export default config;
