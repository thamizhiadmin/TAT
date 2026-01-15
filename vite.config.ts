import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get repository name from environment or default to 'TAT'
// For GitHub Pages: if repo is 'username/TAT', base should be '/TAT/'
// For custom domain: base should be '/'
// Update 'TAT' below to match your GitHub repository name
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'TAT'
const base = process.env.GITHUB_PAGES ? `/${repoName}/` : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
})
