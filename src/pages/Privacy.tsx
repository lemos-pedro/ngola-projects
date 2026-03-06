import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Legal</span>
          <h1 className="mt-3 font-display font-black text-4xl tracking-tight">Política de Privacidade</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: 1 de Março de 2026</p>

          <div className="mt-10 space-y-8 text-sm text-foreground/80 leading-relaxed">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">1. Dados Recolhidos</h2>
              <p>Recolhemos dados pessoais que nos fornece directamente, incluindo nome, email, empresa e informações de contacto. Também recolhemos dados de utilização automaticamente, como endereço IP, tipo de navegador, páginas visitadas e tempos de sessão.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">2. Finalidade do Tratamento</h2>
              <p>Utilizamos os seus dados para: fornecer e manter os nossos serviços; personalizar a sua experiência; comunicar consigo sobre atualizações e suporte; cumprir obrigações legais; e melhorar os nossos produtos com base em análises agregadas.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">3. Base Legal</h2>
              <p>Processamos os seus dados com base no consentimento, execução de contrato, obrigação legal e interesses legítimos conforme o RGPD/GDPR e a legislação angolana de protecção de dados.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">4. Partilha de Dados</h2>
              <p>Não vendemos os seus dados pessoais. Podemos partilhar informações com prestadores de serviços de confiança que nos auxiliam na operação da plataforma, sempre sob acordos de confidencialidade rigorosos.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">5. Retenção de Dados</h2>
              <p>Mantemos os seus dados apenas pelo tempo necessário para cumprir as finalidades descritas. Dados de conta são mantidos enquanto a conta estiver activa e até 30 dias após o cancelamento.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">6. Os Seus Direitos</h2>
              <p>Tem direito a aceder, rectificar, apagar, limitar o tratamento e portar os seus dados. Para exercer estes direitos, contacte-nos em privacidade@ngolaprojects.ao.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">7. Segurança</h2>
              <p>Implementamos medidas técnicas e organizativas para proteger os seus dados, incluindo encriptação AES-256, controlos de acesso e monitorização contínua.</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">8. Contacto</h2>
              <p>Para questões sobre privacidade: privacidade@ngolaprojects.ao | Ngola Projects, Luanda, Angola.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
