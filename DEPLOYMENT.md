# GitHub Pages Deployment Guide

## Quick Start

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it `TAT` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Update Repository Name in Config

**Important:** If your repository name is NOT `TAT`, update `vite.config.ts`:

```typescript
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'YOUR_REPO_NAME'
```

Replace `'TAT'` with your actual repository name.

### Step 3: Push Code to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ready for GitHub Pages"

# Add your GitHub repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy!

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once done, your site will be live!

### Step 6: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example, if your username is `john` and repo is `TAT`:
```
https://john.github.io/TAT/
```

## Automatic Updates

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages
3. Make it live within 2-3 minutes

Just run:
```bash
git add .
git commit -m "Your update message"
git push
```

## Troubleshooting

### Site shows 404 or blank page

1. Check that your repository name matches in `vite.config.ts`
2. Verify GitHub Pages is enabled (Settings → Pages)
3. Check the Actions tab for any errors
4. Wait a few minutes - first deployment can take time

### Routes not working (404 on navigation)

- This is normal for GitHub Pages with React Router
- The base path is automatically configured
- If you have issues, check that `App.tsx` has the `basename` prop set correctly

### Custom Domain

If you want to use a custom domain:

1. Update `vite.config.ts` and change `base: '/'` (remove the repo name)
2. Create a `CNAME` file in the `public/` folder with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS in your domain provider
4. Update DNS settings in GitHub (Settings → Pages → Custom domain)

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the Actions tab for error messages
- Make sure all files are committed and pushed
