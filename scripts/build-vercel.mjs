import fs from 'node:fs';
fs.mkdirSync('vercel-public',{recursive:true});
fs.writeFileSync('vercel-public/index.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Knox Diagnostics</title><meta http-equiv="refresh" content="0;url=https://knox-diagnostics-lab.brakwesi88.chatgpt.site/"></head><body><p><a href="https://knox-diagnostics-lab.brakwesi88.chatgpt.site/">Open Knox Diagnostics</a></p></body></html>');
console.log('Built Vercel entry point. Application and authenticated API remain on the canonical hosted site.');
