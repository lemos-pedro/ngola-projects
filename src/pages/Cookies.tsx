import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Legal</span>
          <h1 className="mt-3 font-display font-black text-4xl tracking-tight">Política de Cookies</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: 1 de Março de 2026</p>

          <div className="mt-10 space-y-8 text-sm text-foreground/80 leading-relaxed">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">1. O que são Cookies?</h2>
              <p>Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita o nosso site. Permitem que o site reconheça o seu dispositivo e melhore a sua experiência de navegação.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">2. Cookies Essenciais</h2>
              <p>Necessários para o funcionamento básico do site. Incluem cookies de sessão, autenticação e segurança. Não podem ser desactivados pois são indispensáveis ao serviço.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">3. Cookies de Desempenho</h2>
              <p>Recolhem informações sobre como utiliza o nosso site, como as páginas mais visitadas e possíveis erros. Ajudam-nos a melhorar o desempenho e funcionalidade do site.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">4. Cookies de Funcionalidade</h2>
              <p>Permitem que o site recorde as suas escolhas (como idioma e região) e forneça funcionalidades personalizadas melhoradas.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">5. Cookies de Marketing</h2>
              <p>Utilizados para apresentar anúncios relevantes e medir a eficácia de campanhas publicitárias. Podem ser definidos por parceiros de publicidade através do nosso site.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">6. Gestão de Cookies</h2>
              <p>Pode controlar e eliminar cookies através das definições do seu navegador. Note que desactivar certos cookies pode afectar a funcionalidade do site. Pode também alterar as suas preferências através do nosso banner de cookies.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">7. Contacto</h2>
              <p>Para questões sobre cookies: privacidade@ngolaprojects.ao</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
