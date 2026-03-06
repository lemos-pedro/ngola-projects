import { useNavigate } from "react-router-dom";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  const navigate = useNavigate();

  const legalLinks = [
    { label: "Política de Privacidade", path: "/privacy" },
    { label: "Política de Cookies", path: "/cookies" },
    { label: "Política de Segurança", path: "/security-policy" },
  ];

  const siteLinks = [
    { label: "Início", path: "/" },
    { label: "Produto", path: "/features" },
    { label: "Preços", path: "/pricing" },
    { label: "Sobre", path: "/about" },
    { label: "Contacto", path: "/contact" },
  ];

  return (
    <footer className="border-t border-[hsl(var(--border))] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <LogoIcon size={28} />
              <span className="font-display font-bold text-foreground">Ngola Projects</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma enterprise de gestão de projectos. Segura, rápida em português e em Inglês.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-3">Plataforma</h4>
            <ul className="space-y-2">
              {siteLinks.map(l => (
                <li key={l.path}>
                  <button onClick={() => { navigate(l.path); window.scrollTo(0, 0); }} className="text-sm text-muted-foreground hover:text-foreground bg-transparent border-none cursor-pointer font-body transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(l => (
                <li key={l.path}>
                  <button onClick={() => { navigate(l.path); window.scrollTo(0, 0); }} className="text-sm text-muted-foreground hover:text-foreground bg-transparent border-none cursor-pointer font-body transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[hsl(var(--border))] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Ngola Projects. Todos os direitos reservados. 
          </p>
        </div>
      </div>
    </footer>
  );
}
