# Landing-page images

The ReelSaga landing page (`web/src/pages/LandingPage.jsx`) was implemented from
the Figma file **"Web"** (key `qNpZnM6Agm9pbTZ8sUPYZq`, node `109:173`).

The design references 82 image fills (cover art, logos, stills). Those binaries
are **not** committed here: the environment this page was built in blocks
`figma.com` network egress, so the Figma asset URLs could not be downloaded.

Until real artwork is added, each poster/banner renders a styled gradient
placeholder (the `rs-tone-*` classes in `LandingPage.css`) with its title — the
layout is complete and looks intentional without the images.

## Adding the real images

`figma-assets.json` lists every asset with a `figmaName`, `assetId`, and a
`suggestedFile` name. To wire one in, drop the file in this folder and set the
matching `image` field in `web/src/data/landingData.js`, e.g.:

```js
{ id: 'o1', title: 'The Phantom’s Kiss', /* … */ image: '/images/the-phantoms-kiss-preview1.png' },
```

To pull the originals straight from Figma, run a session in an environment whose
network policy allows `figma.com`, then the assets can be fetched via the Figma
MCP `get_design_context` URLs and saved here.
