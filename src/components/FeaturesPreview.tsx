import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  { icon: "📋", title: "Gestão Visual Kanban", desc: "Quadros Kanban e cronogramas interativos em tempo real. Arraste, reorganize e priorize com a sua equipa.", tag: "Mais usado" },
  { icon: "⚡", title: "Colaboração em Tempo Real", desc: "Atualizações instantâneas, comentários contextuais e atribuição com notificações inteligentes." },
  { icon: "⏱", title: "Rastreamento de Tempo", desc: "Monitore horas por tarefa e projeto. Relatórios de produtividade automáticos para gestão executiva." },
  { icon: "🔐", title: "Segurança Enterprise", desc: "AES-256, SSO/SAML, controlos de acesso granulares e auditoria completa de actividades.", tag: "ISO 27001" },
  { icon: "🤖", title: "Automações Inteligentes", desc: "Configure workflows automáticos que eliminam tarefas repetitivas e mantêm consistência." },
  { icon: "📊", title: "Relatórios Executivos", desc: "Dashboards exportáveis em PDF/Excel. Decisões baseadas em dados com visibilidade total." },
];

export default function FeaturesPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Plataforma Completa</span>
          <h2 className="mt-3 font-display font-black text-3xl md:text-5xl tracking-tight">
            Tudo que a sua equipa precisa,<br />num único lugar
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Recursos poderosos e intuitivos para colaboração eficiente, rastreamento em tempo real e entrega consistente de resultados enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] hover:bg-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feat.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground">{feat.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              {feat.tag && (
                <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-[hsl(var(--brand-dim))] text-primary text-xs font-semibold">
                  {feat.tag}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => { navigate("/features"); window.scrollTo(0, 0); }}
            className="px-6 py-3 rounded-xl border border-[hsl(var(--border))] bg-transparent text-foreground font-body text-sm font-semibold cursor-pointer hover:bg-secondary transition-all"
          >
            Ver todos os recursos →
          </button>
        </div>
      </div>
    </section>
  );
}
