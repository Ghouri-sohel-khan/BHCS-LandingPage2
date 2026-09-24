# BHCS Landing Page — GitHub + Vercel

This is a static HTML/CSS/JavaScript website. The published website files are in `dist/`. The Arabic right-to-left version is available at `/ar/`.

## Publish with GitHub and Vercel

1. Extract this ZIP on your computer.
2. Create a new GitHub repository (private is fine).
3. Upload the extracted `dist` folder and this `README.md` to the repository root, then commit to `main`.
4. In Vercel, choose **Add New → Project**, connect GitHub if prompted, and import this repository.
5. Configure the project:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** leave blank
   - **Output Directory:** `dist`
6. Choose **Deploy**. Vercel will provide a `vercel.app` URL.

After the GitHub repository is connected, commits pushed to the production branch can trigger deployments automatically. Add a custom domain from the Vercel project's Domains settings if desired.

The website form creates a WhatsApp draft for visitors to review and send; it does not save submissions on this static site.
