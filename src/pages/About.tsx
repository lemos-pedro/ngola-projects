import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import LogoIcon from "@/components/LogoIcon";
import { useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo.jpeg";


const values = [
  { icon: "🎯", title: "Foco no Cliente", desc: "Cada recurso nasce de uma necessidade real das equipas que servimos." },
  { icon: "🔒", title: "Segurança Primeiro", desc: "A protecção dos dados dos nossos clientes é a nossa prioridade número um." },
  { icon: "🌍", title: "Made in Angola", desc: "Orgulhosamente construído em Angola, para o mundo lusófono e além." },
  { icon: "⚡", title: "Velocidade de Execução", desc: "Iteramos rapidamente e entregamos valor contínuo às nossas equipas." },
];

const team = [
  { 
    name: "Ariclene de Lemos", 
    role: "CEO & Co-Founder", 
    color: "bg-primary",
  },
  { 
    name: "Teresa Machado", 
    role: "CTO & Co-Founder", 
    color: "bg-accent",
    image: null
  },
  { 
    name: "Ricardo Sousa", 
    role: "VP Engineering", 
    color: "bg-purple-600",
    image: null
  },
  { 
    name: "Cláudia Santos", 
    role: "Head of Design", 
    color: "bg-primary",
    image: null
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Sobre Nós</span>
          <h1 className="mt-3 font-display font-black text-4xl md:text-6xl tracking-tight">
            A equipa por trás do <span className="text-gradient-brand">Ngola Projects</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos uma equipa apaixonada por produtividade e tecnologia, dedicada a construir as melhores ferramentas de gestão de projectos para o mercado empresarial.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card border border-[hsl(var(--border))]">
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">A Nossa Missão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Democratizar o acesso a ferramentas enterprise de gestão de projectos, permitindo que equipas em Angola e em todo o mundo lusófono possam competir globalmente com as melhores práticas de gestão e colaboração. Acreditamos que tecnologia de qualidade não deve ter barreiras linguísticas ou geográficas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">Os Nossos Valores</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] hover:border-[hsl(var(--border-hover))] transition-all"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">Liderança</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-card border border-[hsl(var(--border))] text-center hover:border-[hsl(var(--border-hover))] transition-all"
              >
                <div className={`w-14 h-14 rounded-full ${m.color} flex items-center justify-center text-lg font-bold text-foreground mx-auto mb-3`}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <p className="font-semibold text-sm text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
