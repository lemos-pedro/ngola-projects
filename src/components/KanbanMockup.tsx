import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const cols = [
  {
    title: "Backlog", count: 5, colorClass: "text-muted-foreground",
    tasks: [
      { title: "Redesign onboarding", tag: "UX", tagColor: "bg-blue-500/20 text-blue-400", avatar: "JS", avColor: "bg-blue-600" },
      { title: "API v2 docs", tag: "Dev", tagColor: "bg-primary/20 text-primary", avatar: "MC", avColor: "bg-purple-600" },
    ]
  },
  {
    title: "Em Progresso", count: 3, colorClass: "text-accent",
    tasks: [
      { title: "Dashboard analytics", tag: "Alta", tagColor: "bg-accent/20 text-accent", avatar: "CN", avColor: "bg-primary" },
      { title: "Relatório Q4", tag: "Revisão", tagColor: "bg-muted text-muted-foreground", avatar: "AD", avColor: "bg-accent" },
    ]
  },
  {
    title: "Concluído", count: 9, colorClass: "text-primary",
    tasks: [
      { title: "Setup produção", tag: "Done ✓", tagColor: "bg-primary/20 text-primary", avatar: "TP", avColor: "bg-gray-600" },
      { title: "Testes segurança", tag: "Done ✓", tagColor: "bg-primary/20 text-primary", avatar: "AK", avColor: "bg-primary" },
    ]
  },
];

export default function KanbanMockup() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Dashboard Intuitivo</span>
          <h2 className="mt-3 font-display font-black text-3xl md:text-4xl tracking-tight">
            Interface que a sua equipa vai adorar
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Navegação simples, informação estruturada. O Ngola Suite foi desenhado para que qualquer colaborador seja produtivo desde o primeiro dia.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Vista Kanban, Lista, Gantt e Calendário",
              "Actualizações em tempo real sem refresh",
              "Notificações inteligentes e não intrusivas",
              "Modo escuro e claro, mobile-first",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-5 h-5 rounded-full bg-[hsl(var(--green-dim))] flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="mt-8 px-6 py-3 rounded-xl border-none bg-primary text-primary-foreground font-body text-sm font-bold cursor-pointer hover:brightness-110 transition-all"
          >
            Experimentar grátis →
          </button>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-[hsl(var(--border))] overflow-hidden"
        >
          {/* Topbar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(var(--border))]">
            <div className="flex gap-1.5">
              {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c) => (
                <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
            </div>
            <span className="ml-3 text-xs text-muted-foreground font-mono">app.ngolasuite.ao/projetos/sprint-q1</span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-xs text-primary font-medium">Live</span>
            </div>
          </div>

          {/* Progress */}
          <div className="px-4 py-3 border-b border-[hsl(var(--border))] flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Sprint Q1 2026</span>
            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[78%] rounded-full bg-primary" />
            </div>
            <span className="text-xs text-primary font-semibold">78%</span>
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-3 gap-3 p-4">
            {cols.map((col) => (
              <div key={col.title} className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold ${col.colorClass}`}>{col.title}</span>
                  <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{col.count}</span>
                </div>
                {col.tasks.map((task) => (
                  <div key={task.title} className="p-2.5 rounded-lg bg-surface border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] transition-all cursor-default">
                    <p className="text-xs text-foreground font-medium leading-snug">{task.title}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`w-5 h-5 rounded-full ${task.avColor} flex items-center justify-center text-[8px] text-foreground font-bold`}>
                        {task.avatar}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${task.tagColor}`}>{task.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
