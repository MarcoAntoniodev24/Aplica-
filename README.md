# Aplica+ Manaus — Homologação clínica

Frontend React + TypeScript + Vite e PWA instalável. Autenticação profissional pelo Supabase Auth, autorização por funções e vínculos, consulta clínica por RPC e formulários de rascunho para médico, nutricionista e personal. **Somente dados fictícios de pacientes.**

## Desenvolvimento

1. Crie um **novo** projeto Supabase exclusivo para HML, com migrações clínicas autorizadas (não use a produção).
2. Copie `.env.example` para `.env.local`, preenchendo `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` e `VITE_APLICA_HML_PROJECT_REF` do mesmo projeto HML. Não envie `.env.local` ao GitHub.
3. Instale as dependências com `npm ci` (quando existir lockfile) ou `npm install` durante desenvolvimento; execute `npm run build` e `npm run dev`.
4. Configure a Vercel como Vite, build `npm run build`, saída `dist`, variáveis públicas do HML somente em Preview.
5. Valide permissões, autenticação protegida e operações de prontuário com pacientes sintéticos antes de convidar os avaliadores.

**Este repositório não fornece um banco HML nem convites de usuários automaticamente.** A versão clínica permanecerá fechada até esse ambiente existir e sua configuração corresponder ao projeto HML.

Detalhes e checklist de segurança: [SECURITY_HML.md](./SECURITY_HML.md).
