import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LogoIcon from "@/components/LogoIcon";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Login", description: "Funcionalidade de autenticação em breve." });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4"><LogoIcon size={48} /></div>
            <h1 className="font-display font-black text-2xl">Entrar na sua conta</h1>
            <p className="text-sm text-muted-foreground mt-2">Bem-vindo de volta ao Ngola Projects</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-card border border-[hsl(var(--border))] space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-[hsl(var(--border))] text-foreground font-body text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl border-none bg-gradient-brand text-primary-foreground font-body text-sm font-bold cursor-pointer hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Entrar <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Não tem conta?{" "}
            <button onClick={() => navigate("/signup")} className="text-primary bg-transparent border-none cursor-pointer font-body font-semibold hover:underline">Criar conta grátis</button>
          </p>
        </div>
      </div>
    </div>
  );
}
