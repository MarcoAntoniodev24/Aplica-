# Aplica+ Manaus — implantação de homologação

1. Crie um repositório **privado** chamado `aplica-mais-mobile` na conta GitHub `MarcoAntoniodev24`.
2. Envie os arquivos desta pasta para a raiz do repositório, preservando `vercel.json` e `package.json`.
3. No Vercel, importe esse repositório no escopo ao qual sua conta tem acesso, com framework **Vite**, build `npm run build`, saída `dist`.
4. Configure as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` conforme `.env.example` (chave publicável, nunca service_role).
5. Proteja o preview com Vercel Authentication. Cadastre no Supabase apenas usuários e pacientes fictícios.
6. Valide build e acesso de paciente, médico, nutricionista e personal antes de atribuir domínio ou promover para produção.
7. No iPhone, abra o URL HTTPS de preview no Safari e selecione Compartilhar > Adicionar à Tela de Início.

**Atenção:** o ambiente de homologação ideal utiliza outro projeto Supabase, com migrações reproduzidas e sem dados reais; a URL em `.env.example` é a referência do projeto atual, não um projeto isolado. Não se deve usar informações clínicas reais nesta versão.
