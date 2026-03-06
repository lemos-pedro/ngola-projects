import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "./LogoIcon";

const links = [
  { label: "Início", path: "/" },
  { label: "Produto", path: "/features" },
  { label: "Clientes", path: "/customers" },
  { label: "Preços", path: "/pricing" },
  { label: "Sobre", path: "/about" },
  { label: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-[hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
          <LogoIcon size={36} />
          <span className="font-display font-bold text-lg text-foreground tracking-tight">Ngola Projects</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => { navigate(path); window.scrollTo(0, 0); }}
              className={`px-3.5 py-1.5 rounded-lg border-none font-body text-sm font-medium cursor-pointer transition-all duration-200 ${
                location.pathname === path
                  ? "bg-[hsl(var(--brand-dim))] text-primary"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg border border-[hsl(var(--border))] bg-transparent text-foreground font-body text-sm font-medium cursor-pointer hover:bg-secondary transition-all"
          >
            Entrar
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 rounded-lg border-none bg-gradient-brand text-primary-foreground font-body text-sm font-bold cursor-pointer hover:brightness-110 transition-all flex items-center gap-1.5"
          >
            Testar grátis <ArrowRight size={14} />
          </button>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-foreground cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-[hsl(var(--border))] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => { navigate(path); setMenuOpen(false); window.scrollTo(0, 0); }}
                  className={`text-left px-3 py-2.5 rounded-lg border-none font-body text-sm cursor-pointer transition-all ${
                    location.pathname === path
                      ? "bg-[hsl(var(--brand-dim))] text-primary"
                      : "bg-transparent text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="flex gap-2 mt-3">
                <button onClick={() => { navigate("/login"); setMenuOpen(false); }} className="flex-1 px-4 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-transparent text-foreground font-body text-sm font-medium cursor-pointer">Entrar</button>
                <button onClick={() => { navigate("/signup"); setMenuOpen(false); }} className="flex-1 px-4 py-2.5 rounded-lg border-none bg-gradient-brand text-primary-foreground font-body text-sm font-bold cursor-pointer">Testar grátis</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
