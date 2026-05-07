# The Peters - Deployment Guide to thepeters.us

Follow these steps to deploy your website to Vercel and connect it to your domain.

## Step 1: Prepare Font Files (Optional but Recommended)

To use the Neue Haas Grotesk Display Pro font as specified:

1. Download or obtain the font files:
   - `NeueHaasGroteskDisplayPro-Bold.woff2`
   - `NeueHaasGroteskDisplayPro-Bold.woff`
   - `NeueHaasGroteskDisplayPro-Roman.woff2`
   - `NeueHaasGroteskDisplayPro-Roman.woff`

2. Place them in `/public/fonts/` directory

3. The site will automatically use them via `@font-face` declarations in `app/globals.css`

## Step 2: Add Your Music Streaming Links

Edit `app/listen/page.tsx` and replace the placeholder URLs with your actual links:

```typescript
const musicPlatforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/YOUR_ID', // Your link here
    icon: '🎵'
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/artist/YOUR_ID', // Your link here
    icon: '🍎'
  },
  // ... etc
];
```

## Step 3: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial website commit"

# Create a repository on GitHub and push
git remote add origin https://github.com/yourusername/the-peters.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/peter/Design/WEBSITE/the-peters
   vercel
   ```

3. **Follow the prompts:**
   - Choose "Yes" to create a new project
   - Choose your project name (e.g., "the-peters")
   - Accept default build settings

### Option B: Using Vercel Dashboard

1. Visit https://vercel.com and sign in (create account if needed)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Deploy"

## Step 5: Connect Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add your domain: `thepeters.us`

2. **Update DNS Settings (at your domain registrar):**
   - Go to your domain provider's DNS settings
   - Vercel will provide you with nameservers or DNS records to add
   - Add the provided records:
     - **Option 1 (Recommended):** Use Vercel's nameservers
     - **Option 2:** Add CNAME/A records manually

3. **Wait for DNS to propagate:**
   - Usually takes 5-48 hours
   - You can check status at: https://www.whatsmydns.net/

## Step 6: Verify Everything Works

Once deployed:

1. Visit https://thepeters.us
2. Test all navigation links:
   - Click "listen" → should show music platforms
   - Click "contact" → should open Instagram
   - Click "shop" → should open Positively Records
3. Test mobile responsiveness by resizing your browser

## Updating Your Site

Whenever you make changes:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically rebuild and deploy your changes within seconds!

## Troubleshooting

### Fonts not loading?
- Make sure font files are in `/public/fonts/`
- Check browser console for 404 errors
- Site will use fallback font if files are missing (no error)

### Domain not working?
- Wait 24-48 hours for DNS propagation
- Check Vercel's DNS configuration page for correct records
- Verify domain is added in Vercel project settings

### Changes not showing up?
- Vercel may cache old pages
- Try a hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check "Deployments" tab in Vercel to see latest deploy status

## Environment Variables (If Needed Later)

To add environment variables:

1. In Vercel dashboard → Settings → Environment Variables
2. Add name and value
3. Redeploy for changes to take effect

## Support

For Vercel help: https://vercel.com/docs
For Next.js help: https://nextjs.org/docs
