import {readFileSync} from 'node:fs';
const source=readFileSync('src/main.jsx','utf8');
const config=readFileSync('.env.example','utf8');
const failed=[];
if (!source.includes("urlRef!=='yjtdptpcicgrxlnicxbf'")) failed.push('Production Supabase reference is not blocked');
if (!source.includes('requestedHmlRef===urlRef')) failed.push('HML environment must match URL');
if (!source.includes('sb_publishable_')) failed.push('Publishable key not required');
if (/sb_secret_[A-Za-z0-9_-]{16,}|service_role\s*[:=]/.test(source+config)) failed.push('Possible secret in frontend');
if (!config.includes('VITE_APLICA_HML_PROJECT_REF=')) failed.push('HML project env missing');
if (failed.length){console.error(failed.join('\\n'));process.exit(1)}
console.log('HML frontend safety guards: OK');
