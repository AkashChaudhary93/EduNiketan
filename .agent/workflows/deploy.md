---
description: How to deploy the application to Vercel
---

# Deploying to Vercel

Since your code is already on GitHub, Vercel can automatically deploy it whenever you push new changes.

## Method 1: Vercel Dashboard (Recommended)

1.  **Sign Up/Login:** Go to [vercel.com](https://vercel.com) and sign in using your GitHub account.
2.  **Add New Project:** Click the **"Add New..."** button and select **"Project"**.
3.  **Import Repository:** Find your `TeacherDashboard` repository and click **"Import"**.
4.  **Configure Project:**
    *   **Framework Preset:** Vercel should automatically detect **"Vite"**.
    *   **Root Directory:** Keep as `./`.
    *   **Build Command:** `npm run build` (automatic).
    *   **Output Directory:** `dist` (automatic).
5.  **Deploy:** Click **"Deploy"**. Vercel will build your React app and provide a live URL (e.g., `teacher-dashboard-xxx.vercel.app`).

## Method 2: Vercel CLI

If you want to deploy directly from your terminal:

1.  **Install CLI:** 
    ```powershell
    npm install -g vercel
    ```
2.  **Login:**
    ```powershell
    vercel login
    ```
3.  **Deploy:**
    ```powershell
    vercel
    ```
    Follow the prompts in the terminal to link the project and deploy.

## Troubleshooting

*   **Routing Issues:** If your subpages (like `/about`) give a 404 on refresh, create a `vercel.json` file in the root directory with this content:
    ```json
    {
      "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
    }
    ```
