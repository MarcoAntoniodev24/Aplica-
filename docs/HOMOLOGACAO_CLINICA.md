# Aplica+ Manaus — Clínica HML V1
## Regra principal
Profissionais reais podem autenticar com Supabase Auth. **Somente pacientes sintéticos** são permitidos na homologação. Não copiar prontuários de produção. Não usar dados de pacientes reais antes da aprovação técnica, jurídica e de privacidade.
## Escopo implementado
Login por e-mail e senha via Supabase Auth; validação do perfil ativo; leitura das funções reais em aplica_professional_roles; dashboard da equipe via RPC aplica_care('dashboard'); detalhamento da equipe via RPC aplica_care('detail') com VITE_APLICA_HML_ENABLED=true.
## Proteção de dados
A seleção visual de função NÃO concede permissões: o Supabase é a autoridade. Sem service_role no cliente. Não existe gravação clínica nem avatar/vídeo definitivo nesta etapa; permissões RLS e sessão protegida dependem das políticas existentes. O dashboard só aceita funcionários autenticados e vinculados.
## Preparação do HML
1. Criar projeto Supabase HML distinto e configurar as migrações existentes antes de ativar o app.
2. Adicionar VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY do HML ao ambiente Preview (valores publicáveis, nunca service_role).
3. Criar contas reais dos avaliadores, cadastrar seus perfis e funções pelo fluxo administrativo autorizado; pacientes e dados devem ser integralmente inventados.
4. Após verificar RLS por função e sessão protegida, definir VITE_APLICA_HML_ENABLED=true para disponibilizar detalhes autorizados.
5. Verificar manualmente tentativa de acesso cruzado, negação de perfis não atribuídos, logout, expiração de sessão, logs e cache.
## Pendências bloqueantes
- Proteção contra senhas vazadas desabilitada no Supabase existente.
- aplica_care_deliveries tem RLS habilitada e nenhum acesso direto; confirmar contrato RPC.
- Implementar escrita clínica específica apenas depois do ambiente HML isolado e testes de autorização.
- Incorporar avatares originais e vídeos quando os ativos estiverem acessíveis.
- Testar build e dispositivos; não afirmar homologação nem produção pronta sem evidência.
