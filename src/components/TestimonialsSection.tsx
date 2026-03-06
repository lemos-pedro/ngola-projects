import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Eliminamos reuniões de status desnecessárias e economizamos 20 horas por semana em toda a organização.",
    name: "João Silva", role: "Director de Projectos", company: "TechAO Soluções",
    metric: "-58%", metricLabel: "reuniões", color: "bg-accent"
  },
  {
    quote: "O nosso time-to-market melhorou 40% em apenas 3 meses. A visibilidade em tempo real é transformadora.",
    name: "Maria Costa", role: "CTO", company: "Inovação Digital",
    metric: "+40%", metricLabel: "velocidade", color: "bg-purple-600"
  },
  {
    quote: "Migramos 120 colaboradores em dois dias. O suporte em português foi determinante para adopção rápida.",
    name: "Carlos Neves", role: "COO", company: "Construções Angola",
    metric: "95%", metricLabel: "adopção", color: "bg-primary"
  },
];

export default function TestimonialsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Casos de Sucesso</span>
          <h2 className="mt-3 font-display font-black text-3xl md:text-5xl tracking-tight">
            Resultados reais de equipas reais
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex items-baseline gap-1">
                <span className="font-display font-black text-2xl text-primary">{t.metric}</span>
                <span className="text-sm text-muted-foreground">{t.metricLabel}</span>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-foreground`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => { navigate("/customers"); window.scrollTo(0, 0); }}
            className="px-6 py-3 rounded-xl border border-[hsl(var(--border))] bg-transparent text-foreground font-body text-sm font-semibold cursor-pointer hover:bg-secondary transition-all"
          >
            Ver todos os casos de estudo →
          </button>
        </div>
      </div>
    </section>
  );
}
