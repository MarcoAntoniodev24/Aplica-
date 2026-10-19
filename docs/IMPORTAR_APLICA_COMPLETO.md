# Importacao segura do Aplica+ Manaus V4
Esta branch foi preparada para receber a versao completa do aplicativo clinico sem alterar a branch `main`.
O arquivo de importacao e `aplica-mais-clinica-hml-seguranca-v4.zip`, conferido por SHA-256 antes de descompactar.
**Importante:** somente frontend e codigo de homologacao. Nao utilizar pacientes reais e nao configurar o banco de producao como HML.

## Como concluir
1. Baixar no ChatGPT o ZIP de homologacao V4.
2. Abrir no GitHub a pasta `upload` desta branch, clicar `Add file > Upload files` e enviar **o ZIP sem descompactar**.
3. Confirmar o commit na branch `homologacao/clinica-mobile-completa` (nao em `main`).
4. A GitHub Action verifica o hash, extrai a estrutura React/TypeScript e faz novo commit nesta mesma branch.
5. Conferir o workflow no menu Actions; nao fazer merge na producao antes de testar build e autenticacao com Supabase HML dedicado.

Nenhum arquivo .env de producao nem service_role e usado nesta importacao.
