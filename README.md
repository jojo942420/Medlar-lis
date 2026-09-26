# Knox Diagnostics

Cloudflare-compatible Worker with shared D1 storage, server-authorized staff roles, 179 test/panel templates, result review and reporting, and a Mindray integration inbox. Frontend source: web/index.html. Backend: worker/api.js. Database schema: db/schema.ts; generated migrations: drizzle/.

Build: npm ci && npm run build. Migrations: npm run db:generate after schema changes. Sites provisions the logical DB binding and applies migrations before publication. Runtime owner email is configured through hosting, not committed to the repository.

Owner signs in with ChatGPT. Staff sign in with their individual accounts and must have both private Site access and an active application role. No reusable admin password is embedded or generated. See integration/README.md for API contracts, hardware limitations and local gateway setup.

This remains an unvalidated laboratory application; do not claim regulatory compliance or universal device compatibility. Reports retain the demonstration label pending clinical validation.
