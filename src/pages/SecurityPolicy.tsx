import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Legal</span>
          <h1 className="mt-3 font-display font-black text-4xl tracking-tight">Política de Segurança</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: 1 de Março de 2026</p>

          <div className="mt-10 space-y-8 text-sm text-foreground/80 leading-relaxed">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">1. Compromisso com a Segurança</h2>
              <p>A segurança dos dados dos nossos clientes é a nossa prioridade máxima. Implementamos medidas de segurança de nível enterprise para proteger todas as informações confiadas à nossa plataforma.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">2. Encriptação</h2>
              <p>Todos os dados são encriptados em trânsito com TLS 1.3 e em repouso com AES-256. As chaves de encriptação são geridas através de um sistema de gestão de chaves com rotação automática.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">3. Certificações</h2>
              <p>Mantemos certificações activas ISO 27001, conformidade SOC 2 Type II e GDPR. As nossas práticas são auditadas regularmente por entidades independentes.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">4. Controlo de Acesso</h2>
              <p>Implementamos autenticação multifactor (MFA), Single Sign-On (SSO) com SAML 2.0 e OAuth 2.0, e controlos de acesso baseados em funções (RBAC) com princípio de menor privilégio.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">5. Infraestrutura</h2>
              <p>Os nossos servidores estão alojados em data centers Tier IV com redundância geográfica, backups automáticos a cada 6 horas e um SLA de 99.9% de disponibilidade.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">6. Monitorização e Resposta a Incidentes</h2>
              <p>Mantemos monitorização de segurança 24/7 com detecção automática de anomalias. O nosso tempo médio de resposta a incidentes é inferior a 15 minutos, com processos documentados de notificação ao cliente.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">7. Testes de Segurança</h2>
              <p>Realizamos testes de penetração trimestrais, análise contínua de vulnerabilidades e programas de recompensas (bug bounty) para garantir a resiliência da plataforma.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">8. Reporte de Vulnerabilidades</h2>
              <p>Para reportar vulnerabilidades de segurança: seguranca@ngolaprojects.ao. Comprometemo-nos a responder em 24 horas.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
