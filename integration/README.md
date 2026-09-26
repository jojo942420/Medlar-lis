# Knox Diagnostics instrument API

This is an integration foundation, not certification that every Mindray analyzer works. Check the exact model, firmware, LIS protocol manual, parameter codes, sample identifiers, result encoding and unit conventions with Mindray before connecting hardware. The BS-240 product brochure confirms bidirectional LIS capability but does not establish one interface for every model: https://www.mindray.com/content/dam/xpace/en_in/resources/brochures/bs-240-product-brochure-en_in.pdf

## Administrator and staff

Sign in using the owner's ChatGPT account (the configured owner email). The owner is always an administrator. The Staff accounts page adds staff email addresses and one of admin, scientist, reception or viewer roles. No default or shared passwords exist. Staff must also be granted access through the private Site's Share controls; an application account does not override the hosting access policy. No invitations are sent automatically.

## Register an instrument

Use Analyzers → Configure interface. Enter the exact model and firmware, choose JSON or HL7, and map each device observation code to a catalogue test code, exact parameter name and unit. Copy the newly generated interface token into the local gateway's environment. The server stores only its SHA-256 digest. Editing the interface rotates and invalidates the previous token. Disable a profile to reject further messages.

For example, for the RBS template: `GLU` maps to `{ "testId": "RBS", "parameter": "Random plasma glucose", "unit": "mmol/L" }`. Real device codes must be confirmed, not inferred from this example.

## HTTP contract

POST `/api/mindray/{interface-id}/messages`

Headers:
- `Content-Type: application/json`
- `Authorization: Bearer <interface-token>`
- `OAI-Sites-Authorization: <private-site-access-credential>` when dispatch requires a private-site credential. This credential is issued by the hosting platform; an instrument token alone cannot bypass private-site access. Keep it out of source control. Access credential issuance and gateway configuration require the site owner/hosting administrator.

JSON:
```json
{"messageId":"unique-message-001","sampleId":"KDX-accession-ID","results":[{"code":"GLU","value":"5.2","unit":"mmol/L"}]}
```

Values are strings, including detection-limit values such as `<0.1`. Each message has 1–300 observations and a unique message ID per instrument. Identical retries are acknowledged; changed content with an existing ID is rejected. Sample identifiers must match the Knox order accession or shared request ID before import. No unit conversion is performed.

Response: HTTP 202 `{"accepted":true,"id":"…","status":"pending_review"}`; an identical duplicate receives HTTP 200 with `duplicate:true`. Invalid data is 400/422, bad credentials 401 and conflicting IDs 409. A successful acknowledgement means safely received into the inbox, not clinically reviewed or released.

HL7 profile: send `{"format":"hl7","raw":"MSH|…\rOBR|…\rOBX|…\r"}`. The adapter supports standard separators, one OBR, ORU^R01, and final/corrected NM or ST observations. Unsupported profiles, repeats, escapes and structured numerics are rejected for explicit model-specific normalization. OBR-3 (or OBR-2) supplies the sample identifier. No bidirectional order-download protocol is implemented.

## Local gateway

`mindray-gateway.mjs` is a minimal Node.js 20+ MLLP receiver. Set KNOX_ENDPOINT (the full HTTPS endpoint), KNOX_INTERFACE_TOKEN and KNOX_SITE_ACCESS_TOKEN in the gateway process environment. Set MLLP_HOST to a private network interface and MLLP_PORT to the port specified by your validated analyzer setup; the default host is loopback. Run `node integration/mindray-gateway.mjs` on the laboratory network. Restrict its listener by firewall to the intended instrument. Configure the instrument to retain/retry unacknowledged messages; the gateway acknowledges only after the API confirms storage. It has no durable local spool. ASTM serial/TCP transport, polling protocols and proprietary model formats require a separate validated adapter and are not implemented here.

## Review

Receive the patient sample first. In the instrument inbox, review the result against the matching order, then import to draft. Only empty fields with explicit mappings and exactly matching units can be filled; existing or reviewed results cannot be overwritten. For multi-test messages, import each matching order separately. Inspect and review the draft before printing. Local clinical validation, backups, and device acceptance testing are still required; report output continues to carry the demonstration label.
