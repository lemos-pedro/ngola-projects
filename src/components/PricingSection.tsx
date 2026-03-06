import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter", tagline: "Para pequenas equipas",
    monthlyPrice: 12, annualPrice: 10,
    annualBilling: "Faturado anualmente ($120/ano)", monthlyBilling: "Faturado mensalmente",
    ctaStyle: "outline" as const,
    features: [
      { text: "Até 5 membros da equipa", ok: true },
      { text: "Até 10 projectos activos", ok: true },
      { text: "10 GB de armazenamento", ok: true },
      { text: "Quadros Kanban e listas", ok: true },
      { text: "Suporte por email (48h)", ok: true },
      { text: "Automações avançadas", ok: false },
      { text: "SSO & SAML 2.0", ok: false },
      { text: "Relatórios executivos", ok: false },
    ],
  },
  {
    name: "Professional", tagline: "Para equipas em crescimento",
    monthlyPrice: 49, annualPrice: 39,
    annualBilling: "Faturado anualmente ($468/ano)", monthlyBilling: "Faturado mensalmente",
    popular: true, ctaStyle: "primary" as const,
    features: [
      { text: "Até 25 membros da equipa", ok: true },
      { text: "Projectos ilimitados", ok: true },
      { text: "100 GB de armazenamento", ok: true },
      { text: "Automações ilimitadas", ok: true },
      { text: "Rastreamento de tempo", ok: true },
      { text: "Relatórios exportáveis PDF/Excel", ok: true },
      { text: "Integrações (Slack, Google, MS365)", ok: true },
      { text: "Suporte chat prioritário (4h)", ok: true },
    ],
  },
  {
    name: "Enterprise", tagline: "Para grandes organizações",
    monthlyPrice: null, annualPrice: null,
    ctaStyle: "outline" as const,
    features: [
      { text: "Membros ilimitados", ok: true },
      { text: "Armazenamento ilimitado", ok: true },
      { text: "SSO & SAML 2.0", ok: true },
      { text: "Auditoria completa + logs", ok: true },
      { text: "SLA 99.9% garantido contrat.", ok: true },
      { text: "Gestor de conta dedicado", ok: true },
      { text: "Suporte prioritário 24/7", ok: true },
      { text: "Onboarding e treinamento", ok: true },
    ],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Preços</span>
          <h2 className="mt-3 font-display font-black text-3xl md:text-5xl tracking-tight">
            Simples, transparente, sem surpresas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o plano certo. Sem taxas ocultas, sem contratos de longo prazo.
          </p>

          <div className="mt-8 inline-flex items-center bg-card rounded-full p-1 border border-[hsl(var(--border))]">
            {["Mensal", "Anual"].map((label, i) => (
              <button
                key={label}
                onClick={() => setAnnual(i === 1)}
                className={`px-5 py-2 rounded-full border-none font-body text-sm font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                  (i === 1) === annual
                    ? "bg-gradient-brand text-primary-foreground"
                    : "bg-transparent text-muted-foreground"
                }`}
              >
                {label}
                {i === 1 && (
                  <span className="text-xs bg-primary-foreground/20 px-1.5 py-0.5 rounded-full">-20%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl border transition-all ${
                plan.popular
                  ? "bg-card border-primary/30 shadow-[0_0_40px_hsl(var(--brand-glow))]"
                  : "bg-card border-[hsl(var(--border))]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-primary-foreground text-xs font-bold">
                  Mais Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.tagline}</p>

              {plan.monthlyPrice ? (
                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">$</span>
                    <span className="font-display font-black text-4xl text-foreground">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {annual ? plan.annualBilling : plan.monthlyBilling}
                  </p>
                </div>
              ) : (
                <div className="mt-4">
                  <span className="font-display font-black text-4xl text-foreground">Custom</span>
                  <p className="text-xs text-muted-foreground mt-1">Proposta personalizada</p>
                </div>
              )}

              <hr className="my-5 border-[hsl(var(--border))]" />

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feat) => (
                  <li key={feat.text} className="flex items-center gap-2.5 text-sm">
                    {feat.ok ? (
                      <Check size={14} className="text-primary flex-shrink-0" />
                    ) : (
                      <X size={14} className="text-muted-foreground/40 flex-shrink-0" />
                    )}
                    <span className={feat.ok ? "text-foreground" : "text-muted-foreground/50"}>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(plan.name === "Enterprise" ? "/contact" : "/signup")}
                className={`w-full py-3 rounded-xl font-body text-sm font-bold cursor-pointer transition-all ${
                  plan.ctaStyle === "primary"
                    ? "bg-gradient-brand text-primary-foreground border-none hover:brightness-110"
                    : "bg-transparent text-foreground border border-[hsl(var(--border))] hover:bg-secondary"
                }`}
              >
                {plan.monthlyPrice ? (plan.popular ? "Testar 14 dias grátis" : "Começar grátis") : "Falar com vendas"}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos os planos incluem 14 dias de teste gratuito completo · Sem cartão de crédito · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}
