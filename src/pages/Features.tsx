import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: "📋", title: "Gestão Visual Kanban & Gantt", desc: "Visualize projectos em múltiplas vistas: Kanban, Lista, Gantt e Calendário. Arraste tarefas, defina dependências e ajuste cronogramas em tempo real.", tag: "Mais usado", detail: "Vistas: Kanban, Lista, Gantt, Calendário, Timeline" },
  { icon: "⚡", title: "Colaboração em Tempo Real", desc: "Edição simultânea, comentários em linha e @menções. Cada alteração é propagada instantaneamente para todos os membros.", detail: "Actualizações em < 100ms · Histórico 365 dias" },
  { icon: "⏱", title: "Rastreamento de Tempo Avançado", desc: "Timers automáticos, registo manual e importação de timesheets. Relatórios de utilização por colaborador, projecto e cliente.", detail: "Exportação CSV/Excel · Aprovação de timesheets" },
  { icon: "🔐", title: "Segurança Enterprise Nativa", desc: "AES-256 em repouso e trânsito, SSO com SAML 2.0 e OAuth 2.0, autenticação multifactor obrigatória.", tag: "ISO 27001", detail: "Conformidade: GDPR, SOC 2, ISO 27001" },
  { icon: "🤖", title: "Automações e Workflows", desc: "Construtor visual de automações sem código. Configure regras complexas para eliminar tarefas repetitivas.", detail: "500+ automações disponíveis · API Zapier/Make" },
  { icon: "📊", title: "Relatórios e Dashboards", desc: "Dashboards personalizáveis com gráficos de burndown, velocidade de sprint e KPIs de projecto.", detail: "15+ tipos de gráfico · Agendamento automático" },
  { icon: "🔗", title: "Integrações Nativas", desc: "Conecte com Slack, Microsoft Teams, Google Workspace, GitHub, Jira e mais de 100 ferramentas.", detail: "100+ integrações · REST API + Webhooks" },
  { icon: "👥", title: "Gestão de Equipas e Recursos", desc: "Organize hierarquias de equipas, defina capacidades e acompanhe a carga de trabalho em tempo real.", detail: "Capacity planning · Organogramas visuais" },
  { icon: "💬", title: "Comunicação Centralizada", desc: "Mensagens de equipa, discussões em tarefas e canais por projecto com integração de video.", detail: "Mensagens criptografadas · Video integrado" },
];

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Plataforma Completa</span>
          <h1 className="mt-3 font-display font-black text-4xl md:text-6xl tracking-tight">
            Todos os recursos para <span className="text-gradient-brand">excelência operacional</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            9 módulos integrados, construídos para equipas que não aceitam mediocre.
          </p>
          <button onClick={() => navigate("/signup")} className="mt-8 px-8 py-4 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-base font-bold cursor-pointer hover:brightness-110 transition-all">
            Experimentar todos os recursos grátis →
          </button>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] hover:bg-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              {f.tag && (
                <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-[hsl(var(--brand-dim))] text-primary text-xs font-semibold">
                  {f.tag}
                </span>
              )}
              <p className="mt-3 text-xs text-muted-foreground border-t border-[hsl(var(--border))] pt-3">{f.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
