# GitHub Pages Deployment - Two Methods

## Method 1: GitHub Actions (Recommended - Automatic)

### Enable GitHub Actions:
1. Go to: https://github.com/thamizhiadmin/TAT/settings/actions
2. Under "Actions permissions", select **"Allow all actions and reusable workflows"**
3. Click **Save**

### Check Workflow:
1. Go to: https://github.com/thamizhiadmin/TAT/actions
2. You should see "Deploy to GitHub Pages" workflow
3. If it shows, click on it and then click **"Run workflow"** → **"Run workflow"**

### Enable GitHub Pages:
1. Go to: https://github.com/thamizhiadmin/TAT/settings/pages
2. Under **"Source"**, select **"GitHub Actions"**
3. Save

Your site will be at: https://thamizhiadmin.github.io/TAT/

---

## Method 2: Traditional Deployment (If Actions doesn't work)

### Step 1: Build and Deploy
Run this command:
```bash
npm run deploy
```

This will:
- Build your site
- Deploy it to the `gh-pages` branch
- Make it live on GitHub Pages

### Step 2: Enable GitHub Pages
1. Go to: https://github.com/thamizhiadmin/TAT/settings/pages
2. Under **"Source"**, select **"Deploy from a branch"**
3. Select branch: **gh-pages**
4. Select folder: **/ (root)**
5. Click **Save**

### Step 3: Access Your Site
Your site will be at: https://thamizhiadmin.github.io/TAT/

---

## Troubleshooting

### If Actions tab is empty:
- The workflow file exists at `.github/workflows/deploy.yml`
- You may need to enable Actions in repository settings
- Or use Method 2 (traditional deployment)

### If you get 404:
- Make sure GitHub Pages is enabled in Settings → Pages
- Wait 2-3 minutes for deployment to complete
- Clear your browser cache

### To update your site:
- **Method 1**: Just push to `main` branch - it deploys automatically
- **Method 2**: Run `npm run deploy` whenever you make changes
