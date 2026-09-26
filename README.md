# Knox Diagnostics

Cloudflare-compatible Worker with shared D1 storage, server-authorized staff roles, 179 test/panel templates, result review and reporting, and a Mindray integration inbox. Frontend source: web/index.html. Backend: worker/api.js. Database schema: db/schema.ts; generated migrations: drizzle/.

Build: npm ci && npm run build. Migrations: npm run db:generate after schema changes. Sites provisions the logical DB binding and applies migrations before publication. Runtime owner email is configured through hosting, not committed to the repository.

The login screen uses manual username entry. Entering the configured owner username `brakwesi88@gmail.com` grants administrator access automatically; no application password is stored or requested. Staff usernames must be created by an administrator and should only be shared with authorized staff. See integration/README.md for API contracts, hardware limitations and local gateway setup.

This remains an unvalidated laboratory application; do not claim regulatory compliance or universal device compatibility. Reports retain the demonstration label pending clinical validation.

## Finance and imaging

The Finance page stores administrator-managed GHS test prices and sale records with historical unit prices, payment status, receipt number, patient, quantity and timestamp. It reports current week, month and year totals, pending balances, and CSV export. Price changes do not rewrite earlier sales.

The catalogue includes ultrasound templates for abdominal, pelvic, gynaecological, early and standard obstetric, detailed anatomy, growth/wellbeing, breast, thyroid/neck, renal, KUB, prostate, scrotal, venous/arterial/carotid/aortic Doppler, musculoskeletal, neonatal cranial, soft-tissue and guided procedures. Templates are structured starting points and must be reviewed against local practice parameters; AIUM practice parameters provide a reference list at https://www.aium.org/resources/practice-parameters.
