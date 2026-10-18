# Aplica+ Manaus Mobile — Homologação

Repositório do aplicativo mobile-first (React + TypeScript + Vite, PWA) destinado à homologação **somente com dados fictícios**.

## Estado

O repositório foi inicializado para receber o código HML 0.3. **O código da aplicação ainda precisa ser importado** do pacote `aplica-mais-mobile-github-vercel.zip` gerado nesta conversa. Este README sozinho não é uma implantação funcional.

## Implantação

Importar os arquivos da pasta `aplica-mais-mobile/` para a raiz do repositório. Configurar Vercel com Framework Preset `Vite`, comando `npm run build`, output `dist`, e variáveis publicáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` conforme `.env.example`. Nunca expor `service_role` ou credenciais secretas.

Não sobrescrever a versão em produção antes de compilar, validar as permissões Supabase/RLS e testar no iPhone/Android. Não utilizar dados reais de pacientes nesta homologação.
