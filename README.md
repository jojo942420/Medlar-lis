# Knox Diagnostics

Cloudflare-compatible Worker with shared D1 storage, server-authorized staff roles, 179 test/panel templates, result review and reporting, and a Mindray integration inbox. Frontend source: web/index.html. Backend: worker/api.js. Database schema: db/schema.ts; generated migrations: drizzle/.

Build: npm ci && npm run build. Migrations: npm run db:generate after schema changes. Sites provisions the logical DB binding and applies migrations before publication. Runtime owner email is configured through hosting, not committed to the repository.

Owner signs in with ChatGPT. Staff sign in with their individual accounts and must have both private Site access and an active application role. No reusable admin password is embedded or generated. See integration/README.md for API contracts, hardware limitations and local gateway setup.

This remains an unvalidated laboratory application; do not claim regulatory compliance or universal device compatibility. Reports retain the demonstration label pending clinical validation.

## Finance and imaging

The Finance page stores administrator-managed GHS test prices and sale records with historical unit prices, payment status, receipt number, patient, quantity and timestamp. It reports current week, month and year totals, pending balances, and CSV export. Price changes do not rewrite earlier sales.

The catalogue includes ultrasound templates for abdominal, pelvic, gynaecological, early and standard obstetric, detailed anatomy, growth/wellbeing, breast, thyroid/neck, renal, KUB, prostate, scrotal, venous/arterial/carotid/aortic Doppler, musculoskeletal, neonatal cranial, soft-tissue and guided procedures. Templates are structured starting points and must be reviewed against local practice parameters; AIUM practice parameters provide a reference list at https://www.aium.org/resources/practice-parameters.
