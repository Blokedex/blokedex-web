const configured = process.env.NEXT_PUBLIC_SITE_URL;
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteUrl = configured
  ? new URL(configured).origin
  : vercelHost
    ? `https://${vercelHost}`
    : "http://localhost:3000";
export const reviewedAt = "2026-09-09";
