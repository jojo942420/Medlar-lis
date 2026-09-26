import fs from 'node:fs';
const html=fs.readFileSync('web/index.html','utf8');
const api=fs.readFileSync('worker/api.js','utf8');
fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist/server',{recursive:true});fs.mkdirSync('dist/.openai',{recursive:true});
fs.writeFileSync('dist/server/index.js','const HTML='+JSON.stringify(html)+';\n'+api);
fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');
console.log('Built authenticated Worker and UI');
