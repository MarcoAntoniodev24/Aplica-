-- Somente para projeto Supabase de homologação ISOLADO.
-- Aplicar após as migrações existentes do Aplica+ e testar com contas sintéticas.
-- Não executar no banco de produção sem revisão/backup/planejamento próprios.
BEGIN;
CREATE OR REPLACE FUNCTION aplica_private.is_staff(require_mfa boolean DEFAULT true)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO ''
AS $fn$
 SELECT aplica_private.has_protected_session()
   AND (NOT require_mfa OR aplica_private.has_mfa())
   AND EXISTS (
     SELECT 1 FROM public.aplica_professional_roles r
     WHERE r.user_id=aplica_private.actor_id() AND r.active
   )
$fn$;

CREATE OR REPLACE FUNCTION aplica_private.is_assigned(target_patient uuid, target_specialty text DEFAULT NULL)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO ''
AS $fn$
 SELECT aplica_private.has_protected_session() AND aplica_private.has_mfa()
   AND EXISTS (
     SELECT 1 FROM public.aplica_care_assignments a
     JOIN public.aplica_professional_roles r ON r.user_id=a.professional_id AND r.role=a.specialty AND r.active
     WHERE a.patient_id=target_patient
       AND a.professional_id=aplica_private.actor_id()
       AND a.active
       AND (target_specialty IS NULL OR a.specialty=target_specialty)
   )
$fn$;
CREATE INDEX IF NOT EXISTS aplica_care_deliveries_sender_idx
 ON public.aplica_care_deliveries(sender_id);
COMMIT;

-- Auditoria no HML após aplicação:
-- select * from pg_policies where schemaname='public' and tablename like 'aplica_%';
-- select aplica_private.has_mfa(), aplica_private.has_protected_session() (executar apenas em sessão de teste autenticada).
