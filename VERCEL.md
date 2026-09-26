# Vercel deployment

Vercel hosts an entry point that redirects to the canonical Knox Diagnostics Site. It does not run the Cloudflare Worker, D1 database or Sites authentication. vercel.json selects the dedicated dependency-free build and vercel-public output, fixing STATIC_BUILD_NO_OUT_DIR. Keep the existing npm build command for the Worker deployment. Instrument clients must use the canonical Site API URL directly.
