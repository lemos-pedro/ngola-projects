import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase">Comece Hoje</span>
        <h2 className="mt-3 font-display font-black text-3xl md:text-5xl tracking-tight">
          Pronto para transformar<br />a sua equipa?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Junte-se a mais de 500 empresas que entregam projectos mais rápido, com mais qualidade. Sem compromissos, sem riscos.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-base font-bold cursor-pointer hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-[0_12px_40px_hsl(var(--brand-glow))]"
          >
            Começar 14 dias grátis <ArrowRight size={18} />
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 rounded-xl border border-[hsl(var(--border))] bg-transparent text-foreground font-body text-base font-semibold cursor-pointer hover:bg-secondary transition-all"
          >
            Falar com vendas
          </button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Sem cartão de crédito · Todos os recursos incluídos · Suporte dedicado
        </p>
      </div>
    </section>
  );
}
