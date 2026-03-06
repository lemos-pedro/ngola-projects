import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contacto em breve." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contacto</span>
            <h1 className="mt-3 font-display font-black text-4xl tracking-tight">
              Fale <span className="text-gradient-brand">connosco</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tem dúvidas? Precisa de uma demonstração personalizada? A nossa equipa está pronta para ajudar.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>info@ngolaprojects.ao</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+244 923 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Luanda, Angola</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
              <input
                type="text" required value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email" required value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
              <input
                type="text" value={form.company}
                onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                required rows={4} value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-sm font-bold cursor-pointer hover:brightness-110 transition-all">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
