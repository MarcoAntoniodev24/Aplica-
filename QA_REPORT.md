# Aplica+ Clínica HML — verificação desta entrega

- Confirmação de API Supabase: existem `public.aplica_care(action, payload)`, tabelas de perfis, funções, vínculos, agenda e registros; RLS ativo em todas as 10 tabelas públicas do projeto principal.
- Segurança: app bloqueia a referência do projeto Supabase original em `src/supabase.ts` e exige configuração específica para HML.
- Formulários: rascunhos via RPC para avaliação clínica, avaliação nutricional, plano alimentar, ficha de treino e comunicação entre profissionais; servidor deve validar permissão e conteúdo.
- Cache: apenas assets estáticos PWA; não há cache de respostas do Supabase nos scripts de serviço.
- Avatar: duas figuras SVG provisórias no frontend; **vídeos e avatares originais não estão integrados**.
- TypeScript: `transpileModule` executado nos arquivos `ConnectedApp.tsx`, `App.tsx`, `main.tsx`, `supabase.ts` sem erro sintático.
- Build completo Vite: **NÃO VALIDADO** — `npm install --prefer-offline` excedeu o tempo disponível devido à falta de dependências acessíveis.
- Teste com contas e dados fictícios reais no HML: **NÃO EXECUTADO**, pois o projeto Supabase HML ainda não existe.
- Segurança do Supabase original: aviso de senha vazada desativado e aviso informativo de tabela de entregas com RLS sem política. Essa última é bloqueada diretamente e acessada por API específica, não se deve abrir RLS ampla só para suprimir o alerta.
- Vercel: acesso administrativo 403 ao espaço original, não publicado.

- Repositório da branch clínica JS: GitHub Actions **build, validação de guardas HML e npm audit de runtime aprovados** no commit `0d0b9018` após atualizar Vite de 6.0.5 para 6.4.4. Esse resultado **não cobre** o ZIP TSX independente, que permanece sem build completo.
- Sessão clínica: exige `has_protected_session` e `has_mfa` no HML. A ativação necessita aprovação administrativa no servidor; MFA somente no frontend não basta. Migração aditiva preparada em `sql/hml_mfa_hardening.sql`; **não aplicada no banco de produção**.
