import { createClient } from '@supabase/supabase-js';

const url = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const publishableKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '').trim();
const hmlRef = (import.meta.env.VITE_APLICA_HML_PROJECT_REF || '').trim();
const urlRef = /^https:\/\/([a-z0-9]+)\.supabase\.co\/?$/.exec(url)?.[1];
// This application must never connect to the existing Aplica+ production database.
// HML requires an independently provisioned Supabase project with separate test accounts.
export const configured = Boolean(urlRef && publishableKey.startsWith('sb_publishable_') && hmlRef && urlRef === hmlRef && urlRef !== 'yjtdptpcicgrxlnicxbf');
export const supabase = configured ? createClient(url, publishableKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
}) : null;
export const hmlConfigError = configured ? '' : 'Ambiente HML não configurado: é obrigatório usar um projeto Supabase separado, com chave publicável e referência correspondente. O banco original não será utilizado.';
