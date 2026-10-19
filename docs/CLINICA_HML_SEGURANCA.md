# Clínica Aplica+ — controle de homologação

Esta branch é para avaliação de profissionais **reais** com pacientes **100% fictícios**. Não conectar ao banco de produção. O projeto de produção `yjtdptpcicgrxlnicxbf` está explicitamente bloqueado no frontend; o controle real de acesso depende das RLS e RPC no Supabase HML independente.

## Requisitos

1. Criar outro projeto Supabase para HML (custo a confirmar antes da criação); aplicar migrações do banco existente sem transportar dados reais.
2. Em Preview na hospedagem, definir VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY e VITE_APLICA_HML_PROJECT_REF para **o mesmo projeto HML**. Nunca commitar `.env.local`, senhas ou chaves secretas.
3. Convidar os profissionais com contas individuais; habilitar MFA e proteção contra senhas comprometidas no Auth HML. Vincular pacientes fictícios por fluxo administrativo autenticado.
4. Testar que um médico não visualiza paciente de outro, que o paciente não lê registros não publicados, que profissional desativado perde acesso, que alteração de função limpa o estado e que as RPC exigem sessão protegida.
5. Auditar políticas de mensagens multidisciplinares e visualização de entregas. `aplica_care_deliveries` tem RLS sem acesso direto por desenho; não abrir uma política geral para remover um aviso informativo.

## Correções aplicadas nesta branch

- Inicialização do cliente Supabase falha de forma segura quando projeto HML não foi configurado.
- Verificação de perfil e função ativos no servidor; nenhuma chave `service_role` no cliente.
- Desvinculação limpa estado clínico carregado; nenhum prontuário fica armazenado em cache offline nesta prévia.
- O código completo de formulários médico, nutrição, treinos, PDF por impressão e ilustrações de avatares está no pacote clínico HML v2 entregue na conversa; **ainda precisa ser integralmente importado e compilado nesta branch**.

## Bloqueios

Acesso à Vercel pelo conector: HTTP 403 para o espaço administrativo. Nenhum link Preview validado. Build deve passar antes da promoção. Não usar dados reais de pacientes nem afirmar homologação.
