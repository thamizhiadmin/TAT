# Thamizhi Automate Technology - Website

A modern, responsive website built with React, TypeScript, Vite, and Bootstrap 5.

## Features

- 🎨 Emerald green theme matching company branding
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🚀 Ready for GitHub Pages deployment
- 📄 SEO optimized with meta tags and sitemap

## Tech Stack

- React 19
- TypeScript
- Vite
- Bootstrap 5
- React Router
- Sass

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/TAT.git
cd TAT
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Create a GitHub repository** (if you haven't already):
   - Go to GitHub and create a new repository
   - Name it `TAT` (or your preferred name)

2. **Push your code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/TAT.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on the next push

4. **Update the base path** (if your repo name is different):
   - Edit `.github/workflows/deploy.yml`
   - Change the `GITHUB_REPOSITORY` environment variable or update `vite.config.ts` with your repo name

Your site will be available at: `https://yourusername.github.io/TAT/`

### Option 2: Manual Deployment

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Build and deploy:
```bash
npm run deploy
```

Note: Make sure to update the `base` path in `vite.config.ts` to match your repository name.

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FORMSPREE_ID=your_formspree_id
VITE_GA_ID=your_google_analytics_id
```

### Custom Domain

If you're using a custom domain:

1. Update `vite.config.ts` and set `base: '/'`
2. Add a `CNAME` file in the `public` folder with your domain name
3. Configure DNS settings in your domain provider

## Project Structure

```
TAT/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Images and static assets
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── lib/                   # Utilities
│   │   ├── analytics.ts
│   │   └── seo.tsx
│   ├── pages/                 # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   │   └── theme.scss         # Bootstrap theme overrides
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Build

To build for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## License

© 2025 Thamizhi Automate Technology. All rights reserved.
