# Vercel Deployment Guide

## Build Error Fix

The build was failing because Resend client was being initialized without an API key during build time. This has been fixed - the code now handles missing API keys gracefully.

## Required Environment Variables in Vercel

You **must** set these environment variables in your Vercel project settings:

### Steps to Add Environment Variables:

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add the following variables:

```env
RESEND_API_KEY=re_Y2XZqUfv_6zPjFuV3U5Hc1VpdpjWog5Xn
ADMIN_EMAIL=yousifmangi32@gmail.com
FROM_EMAIL=noreply@konnectingdots.com
FROM_NAME=Konnecting Dots
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

### Important Notes:

- **RESEND_API_KEY** is **REQUIRED** for emails to work in production
- Add these for **Production**, **Preview**, and **Development** environments
- After adding variables, **redeploy** your project

## After Setting Environment Variables

1. Go to **Deployments** tab in Vercel
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. The build should now succeed

## Verification

After deployment:
1. Test the contact form
2. Check that emails are being sent
3. Verify admin notifications arrive at `yousifmangi32@gmail.com`

## Troubleshooting

If build still fails:
- Verify all environment variables are set correctly
- Check that there are no typos in variable names
- Ensure RESEND_API_KEY starts with `re_`
- Redeploy after adding variables

