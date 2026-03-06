import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cases = [
  { quote: "Eliminamos reuniões de status desnecessárias e economizamos 20 horas por semana em toda a organização.", name: "João Silva", role: "Director de Projectos", company: "TechAO Soluções", metric: "-68%", metricLabel: "reuniões", color: "bg-accent" },
  { quote: "O nosso time-to-market melhorou 40% em apenas 3 meses. A visibilidade em tempo real é transformadora.", name: "Maria Costa", role: "CTO", company: "Inovação Digital", metric: "+40%", metricLabel: "velocidade", color: "bg-purple-600" },
  { quote: "Migramos 120 colaboradores em dois dias. O suporte em português foi determinante para adopção rápida.", name: "Carlos Neves", role: "COO", company: "Construções Angola", metric: "95%", metricLabel: "adopção", color: "bg-primary" },
  { quote: "A automação de workflows reduziu erros humanos em 90%. A equipa agora foca-se no que realmente importa.", name: "Ana Ferreira", role: "VP Operações", company: "Grupo Sofala", metric: "-90%", metricLabel: "erros", color: "bg-accent" },
  { quote: "O rastreamento de tempo integrado permitiu-nos faturar 30% mais horas ao mês com total transparência.", name: "Pedro Santos", role: "Gestor de Projectos", company: "Atlântico Bank", metric: "+30%", metricLabel: "faturação", color: "bg-primary" },
  { quote: "Implementámos em 3 dias. A curva de aprendizagem é quase zero graças à interface intuitiva.", name: "Luísa Mendes", role: "HR Director", company: "Educação Plus", metric: "3 dias", metricLabel: "implementação", color: "bg-purple-600" },
];

export default function CustomersPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Casos de Sucesso</span>
          <h1 className="mt-3 font-display font-black text-4xl md:text-6xl tracking-tight">
            Resultados <span className="text-gradient-brand">comprovados</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como equipas em Angola e além estão a transformar a sua produtividade com Ngola Projects.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex items-baseline gap-1">
                <span className="font-display font-black text-2xl text-primary">{t.metric}</span>
                <span className="text-sm text-muted-foreground">{t.metricLabel}</span>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}
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
      </section>

      <section className="py-16 px-6 text-center">
        <button onClick={() => navigate("/signup")} className="px-8 py-4 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-base font-bold cursor-pointer hover:brightness-110 transition-all">
          Junte-se a estas equipas →
        </button>
      </section>
      <Footer />
    </div>
  );
}
