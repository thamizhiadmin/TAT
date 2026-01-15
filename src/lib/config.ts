// Configuration file for the application
// 
// To configure Formspree for receiving form submissions:
// 
// Option 1 (Recommended for GitHub Pages): Hardcode your Formspree ID below
//   1. Go to https://formspree.io/
//   2. Sign up or log in
//   3. Create a new form
//   4. Copy the form ID from the form URL (e.g., from https://formspree.io/f/xqknvqyz, copy 'xqknvqyz')
//   5. Paste it in FALLBACK_FORMSPREE_ID below (replace the empty string)
//
// Option 2: Use environment variable (for local development)
//   Create a .env file in the root directory with: VITE_FORMSPREE_ID=your_form_id
//
// Option 3: Use GitHub Secrets (advanced)
//   Set VITE_FORMSPREE_ID as a GitHub Secret and it will be used during build

// ⚠️ IMPORTANT: Replace the empty string below with your actual Formspree ID
// Example: const FALLBACK_FORMSPREE_ID = 'xqknvqyz'
// NOTE: Only put the form ID (e.g., 'xeeeovjz'), NOT the full URL!
const FALLBACK_FORMSPREE_ID = 'xeeeovjz'

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || FALLBACK_FORMSPREE_ID
