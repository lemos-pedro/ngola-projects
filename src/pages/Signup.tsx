import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LogoIcon from "@/components/LogoIcon";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Conta criada!", description: "Funcionalidade de autenticação em breve." });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4"><LogoIcon size={48} /></div>
            <h1 className="font-display font-black text-2xl">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground mt-2">14 dias grátis · Sem cartão de crédito</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome completo</label>
              <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email profissional</label>
              <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input type="password" required value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <p className="text-xs text-muted-foreground">
              Ao criar conta, aceita os nossos{" "}
              <button onClick={() => navigate("/privacy")} className="text-primary bg-transparent border-none cursor-pointer font-body underline text-xs">Termos</button> e{" "}
              <button onClick={() => navigate("/privacy")} className="text-primary bg-transparent border-none cursor-pointer font-body underline text-xs">Política de Privacidade</button>.
            </p>
            <button type="submit" className="w-full py-3 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-sm font-bold cursor-pointer hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Começar grátis <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Já tem conta?{" "}
            <button onClick={() => navigate("/login")} className="text-primary bg-transparent border-none cursor-pointer font-body font-semibold hover:underline">Entrar</button>
          </p>
        </div>
      </div>
    </div>
  );
}
