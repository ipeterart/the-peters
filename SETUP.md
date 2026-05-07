# The Peters - Website

A modern, minimal website for The Peters music project built with Next.js, TypeScript, and Tailwind CSS.

## Setup Instructions

### 1. Add Font Files

To use Neue Haas Grotesk Display Pro (as specified), add the font files to the `public/fonts/` directory:

- `NeueHaasGroteskDisplayPro-Bold.woff2`
- `NeueHaasGroteskDisplayPro-Bold.woff`
- `NeueHaasGroteskDisplayPro-Roman.woff2`
- `NeueHaasGroteskDisplayPro-Roman.woff`

If you don't have these font files, the site will use a fallback font (Space Grotesk via Google Fonts).

### 2. Add Music Streaming Links

Edit `app/listen/page.tsx` and update the `musicPlatforms` array with your actual links:

```typescript
const musicPlatforms = [
  {
    name: 'Spotify',
    url: 'YOUR_SPOTIFY_LINK', // Replace this
    icon: '🎵'
  },
  // ... other platforms
];
```

### 3. Links Configuration

The site includes:
- **Shop**: https://positivelyrecords.la
- **Contact**: https://instagram.com/thepeters3000
- **Listen**: Local page with music streaming links

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 to see the site.

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel at https://vercel.com
3. Deploy with one click
4. Add your custom domain `thepeters.us` in Vercel's domain settings

## File Structure

```
app/
├── page.tsx           # Homepage
├── listen/
│   └── page.tsx       # Listen page with music links
├── layout.tsx         # Root layout
└── globals.css        # Global styles

public/
└── fonts/             # Add font files here
```

## Design

- **Color Scheme**: Black background with accent color (#ef4136)
- **Typography**: Neue Haas Grotesk Display Pro (Bold & Roman weights)
- **Layout**: Centered, minimal design with clear navigation

## License

© 2026 The Peters. All rights reserved.
