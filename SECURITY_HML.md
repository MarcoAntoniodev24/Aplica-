# Aplica+ Manaus — Política de segurança da homologação

**Escopo:** profissionais reais podem usar autenticação individual; todos os pacientes, anotações, consultas, planos, vídeos e exames da homologação devem ser fictícios. Nunca reutilizar um prontuário real ou copiar a base de produção.

## Proteções implementadas no frontend

- A aplicação clínica bloqueia a conexão ao projeto Supabase de produção `yjtdptpcicgrxlnicxbf`. Exige `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` e `VITE_APLICA_HML_PROJECT_REF` apontando para o mesmo projeto HML independente.
- Identidade validada com `auth.getUser`, perfil habilitado em `aplica_profiles` e função ativa em `aplica_professional_roles`.
- Seleção de função limitada ao conjunto concedido pelo banco; mudança de usuário/funcão/paciente limpa os registros carregados e invalida requisições pendentes.
- Dados sensíveis da equipe são lidos via RPC `aplica_care(detail)` — nunca por consultas globais a `aplica_care_entries` ou por chaves de serviço. A consulta de agenda possui filtros e RLS próprios.
- As gravações de avaliação, nutrição, treino e encaminhamento utilizam RPC `aplica_care(write)`, cuja autoridade depende da função e do vínculo no banco. Rascunhos permanecem não publicados.
- Rascunhos clínicos não são guardados em localStorage, sessionStorage ou service worker. PDFs são gerados pela impressão local do navegador e não enviados automaticamente.
- Vídeos clínicos não são falsamente substituídos por animações não validadas; avatares de interface são apenas ilustrações.

## Pendências antes de convidar profissionais

1. Criar um projeto Supabase HML **separado**, autorizar eventuais custos e aplicar o esquema/migrações da aplicação sem dados pessoais.
2. Configurar o Auth da HML (proteção de senhas vazadas, MFA para equipe, política de senha, links de recuperação e limites de taxa); nunca pedir senhas dos profissionais pelo chat.
3. Criar as contas dos profissionais por convite; conceder as funções por processo administrativo autenticado. Criar pacientes sintéticos via Admin Auth/fluxo de cadastro seguro e vincular equipe fictícia.
4. Verificar por testes de autorização que médico A não obtém paciente de médico B, que paciente vê apenas materiais publicados e que administração não acessa notas clínicas sem atribuição.
5. Revisar a RPC `aplica_care`: `care_api` deve limitar mensagens clínicas ao destinatário/autor, e o fluxo de entrega ao paciente deve estar auditado. A tabela `aplica_care_deliveries` atualmente usa RPC sem SELECT direto e o alerta de RLS sem política é esperado nesta arquitetura — **não adicionar política ampla apenas para suprimir o lint**.
6. Testar sessão protegida `aplica_private.has_protected_session()` e o fluxo de vínculo antes de habilitar escrita. Desligar qualquer conta inativa. Auditar todos os endpoints, storage de vídeo e PDFs.
7. Testar build CI e mobile iPhone/Android; configurar política de cache HTTP e exclusão de dados clínicos offline.
8. Ativos originais dos avatares/vídeos ainda não fornecidos. Conferir licença, revisão profissional e armazenamento privado antes de disponibilizar demonstrações.

## Notas de operação

- Nada neste frontend impede um cliente modificado de enviar requisições; **segurança é garantida pelo Supabase Auth, RLS e RPC**, que devem ser validados por testes negativos.
- Credenciais `service_role`, secret keys, tokens e `.env.local` nunca pertencem ao repositório ou navegador.
- Não utilizar dados reais de pacientes na HML, mesmo que profissionais reais façam login.
- Separar host/domínios de HML e produção. Não promover sem revisão aprovada e sem teste de ponta a ponta.
