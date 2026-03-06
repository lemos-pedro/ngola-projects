import { motion } from "framer-motion";

const seals = [
  { icon: "🔒", label: "ISO 27001", sub: "Certificação activa" },
  { icon: "🇪🇺", label: "GDPR Compliant", sub: "Conformidade total" },
  { icon: "🛡️", label: "SOC 2 Type II", sub: "Auditoria independente" },
  { icon: "⚡", label: "99.9% Uptime", sub: "SLA garantido contrat." },
  { icon: "🔑", label: "SSO & SAML 2.0", sub: "Azure AD, Okta, Google" },
];

export default function SecuritySeals() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {seals.map((seal) => (
            <div
              key={seal.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] transition-all"
            >
              <span className="text-xl">{seal.icon}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{seal.label}</p>
                <p className="text-xs text-muted-foreground">{seal.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
