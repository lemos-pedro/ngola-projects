import { useNavigate } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import StatCounter from "./StatCounter";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--brand-dim))] border border-primary/20 text-primary text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
            Certificado ISO 27001 · Enterprise-Ready
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-display font-black text-5xl md:text-7xl leading-[1.05] tracking-tight"
        >
          Gestão de Projectos{" "}
          <span className="text-gradient-brand">Enterprise-Grade</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Ngola Projects centraliza colaboração, rastreamento e entrega numa única plataforma segura.
          Construída para equipas que exigem resultados reais, com segurança de nível bancário e suporte 24/7 em português.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-base font-bold cursor-pointer hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 shadow-[0_12px_40px_hsl(var(--brand-glow))]"
          >
            Começar 14 dias grátis <ArrowRight size={18} />
          </button>
          <button
            onClick={() => navigate("/features")}
            className="px-8 py-4 rounded-xl border border-[hsl(var(--border))] bg-transparent text-foreground font-body text-base font-semibold cursor-pointer hover:bg-secondary hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <Play size={16} className="text-primary" /> Ver demonstração
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Sem cartão de crédito · Cancelamento imediato · GDPR compliant
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 mt-16 mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 px-6"
      >
        <StatCounter value={500} suffix="+" label="Empresas activas" />
        <StatCounter value={12} suffix="K+" label="Projectos geridos" />
        <StatCounter value={50} suffix="h" label="Economizadas/mês" />
        <StatCounter value={99} suffix=".9%" label="Uptime SLA" />
      </motion.div>
    </section>
  );
}
