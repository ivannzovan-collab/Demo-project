/* All user-facing strings that are NOT catalog content (series/book titles
   live in series.ts / books/). Centralised here so copy can be edited in one
   place and the site is translation-ready. Rule: if a component shows a
   string to a user, it comes from here (or another data file) — never inline. */

export const copy = {
  // One-line marketing blurb reused across hero + section sub-headlines.
  blurb:
    'ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.',

  copyright: '2026 Reel saga',

  buttons: {
    download: 'Download the app',
    watchNow: 'Watch now',
    watchTrailer: 'Watch Trailer',
    startReading: 'Start Reading',
    watchMore: 'Watch more',
    seeAll: 'See all',
    browseMore: 'Browse more',
    read: 'Read',
  },

  // App-download gating messages.
  gating: {
    watch: 'Download the app to keep watching',
    read: 'Download the app to keep reading',
    seriesContinue: 'Download the app to continue watching',
    bookContinueButton: 'Download the app to continue',
  },

  // Transient toast messages.
  toasts: {
    download: 'Heading to the App Store…',
    privacy: 'Privacy Policy',
    terms: 'Terms',
  },

  // Sign in / create account modal.
  auth: {
    signInTitle: 'Welcome back',
    signInSub: 'Pick up every saga right where you left off.',
    createTitle: 'Create your account',
    createSub: 'New chapters drop daily. Don’t miss a cliffhanger.',
    haveAccount: 'Already have an account?',
    noAccount: 'New to ReelSaga?',
    signIn: 'Sign in',
    createAccount: 'Create an account',
    createAccountSubmit: 'Create account',
    continueWith: 'or continue with',
    fields: { name: 'Name', email: 'Email', password: 'Password' },
    placeholders: { name: 'Your name', email: 'you@example.com', password: '••••••••' },
    welcomeBackToast: 'Welcome back!',
    createdToast: 'Account created — check your inbox',
  },

  // Search overlay.
  search: {
    placeholder: 'Search shows, books, genres…',
    trending: 'Trending now',
    empty: 'No results for', // followed by the query
    emptyHint: 'Try a genre like Romance or Werewolf.',
    escHint: 'Press Esc to close',
    typeLabels: { books: 'Book', animated: 'Animated', realistic: 'Realistic' },
  },

  // Book reader.
  reader: {
    chaptersLabel: 'Chapters:',
    storyLabel: 'Story:',
    statusComplete: 'Complete',
    statusOngoing: 'Ongoing',
    finishChapter: 'Finish Chapter', // followed by the chapter number
    previous: '← Previous',
    notFound: 'Book not found.',
    backToBooks: 'Back to Books',
  },

  // Series preview modal fallback synopsis.
  series: {
    fallbackSynopsis:
      'A new ReelSaga original. Tap play to watch the first scene, then continue in the app.',
  },
} as const;

export default copy;
