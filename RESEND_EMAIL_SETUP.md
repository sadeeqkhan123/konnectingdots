# Resend Email Setup Guide

## Problem
Emails are not being sent because the `FROM_EMAIL` domain is not verified in Resend.

## Solution

### Option 1: Use Resend Test Domain (Quick Fix - Already Applied)

The code now defaults to using `onboarding@resend.dev` which is Resend's test domain that works immediately.

**No action needed** - This should work right away!

### Option 2: Use Your Resend Domain (Recommended for Production)

Based on your Resend dashboard, you have the domain `bievtriie.resend.app` available.

1. **Update Environment Variable in Vercel:**
   - Go to Vercel → Your Project → Settings → Environment Variables
   - Add or update:
     ```
     FROM_EMAIL=onboarding@resend.dev
     ```
   - Or use your Resend domain:
     ```
     FROM_EMAIL=noreply@bievtriie.resend.app
     ```

2. **Redeploy** your Vercel project

### Option 3: Verify Your Custom Domain (Best for Production)

To use `noreply@konnectingdots.com`:

1. **In Resend Dashboard:**
   - Go to **Domains** section
   - Click **Add Domain**
   - Enter `konnectingdots.com`
   - Follow the DNS setup instructions
   - Add the required DNS records in your domain provider (Namecheap)

2. **DNS Records to Add in Namecheap:**
   - Resend will provide you with specific records like:
     - TXT record for domain verification
     - MX records for receiving emails
     - SPF, DKIM, and DMARC records

3. **After DNS is verified:**
   - Update Vercel environment variable:
     ```
     FROM_EMAIL=noreply@konnectingdots.com
     ```
   - Redeploy

## Current Configuration

- **FROM_EMAIL**: `onboarding@resend.dev` (test domain - works immediately)
- **FROM_NAME**: `Konnecting Dots`
- **ADMIN_EMAIL**: `yousifmangi32@gmail.com` (where all notifications go)

## Testing

After updating environment variables and redeploying:

1. Submit a contact form on your website
2. Check Resend dashboard → **Sending** tab
3. You should see the email in the logs
4. Check your inbox (`yousifmangi32@gmail.com`) for the notification

## Troubleshooting

### Emails still not sending?

1. **Check Vercel Logs:**
   - Go to Vercel → Your Project → Deployments → Latest → Functions
   - Look for email-related errors

2. **Verify Environment Variables:**
   - Make sure `RESEND_API_KEY` is set correctly
   - Make sure `FROM_EMAIL` is set to a verified domain

3. **Check Resend Dashboard:**
   - Go to **Sending** tab
   - Check for any error messages
   - Verify your API key is active

4. **Test Email Sending:**
   - The code now logs email attempts to console
   - Check Vercel function logs for detailed email sending information

## Next Steps

1. ✅ Code updated to use Resend test domain
2. ⏳ Verify `RESEND_API_KEY` is set in Vercel
3. ⏳ Redeploy on Vercel
4. ⏳ Test contact form submission
5. ⏳ (Optional) Set up custom domain for production

