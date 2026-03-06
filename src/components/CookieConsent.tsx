import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Shield, BarChart2, Target, Sliders, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, XCircle } from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type ConsentLevel = "all" | "essential" | "custom";

interface CookiePreferences {
  essential: boolean;      // sempre true, não pode ser desligado
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentRecord {
  level: ConsentLevel;
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const COOKIE_KEY = "ngola_cookie_consent";
const CONSENT_VERSION = "1.2"; // incrementar quando política mudar

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

// ─── COOKIE CATEGORIES ───────────────────────────────────────────────────────

const COOKIE_CATEGORIES = [
  {
    id: "essential" as keyof CookiePreferences,
    icon: Shield,
    label: "Estritamente Necessários",
    color: "#00d87a",
    required: true,
    description:
      "Essenciais para o funcionamento do site. Incluem autenticação, segurança de sessão e preferências básicas. Não podem ser desactivados pois o site não funcionaria sem eles.",
    examples: [
      { name: "ngola_session", purpose: "Autenticação segura do utilizador", duration: "Sessão", provider: "Ngola Suite" },
      { name: "csrf_token", purpose: "Protecção contra ataques CSRF", duration: "Sessão", provider: "Ngola Suite" },
      { name: "ngola_cookie_consent", purpose: "Registo das suas preferências de cookies", duration: "12 meses", provider: "Ngola Suite" },
      { name: "locale", purpose: "Idioma preferido do utilizador", duration: "12 meses", provider: "Ngola Suite" },
    ],
  },
  {
    id: "functional" as keyof CookiePreferences,
    icon: Sliders,
    label: "Funcionais",
    color: "#60a5fa",
    required: false,
    description:
      "Permitem funcionalidades melhoradas como chat de suporte, personalização de interface e lembrança de preferências entre sessões.",
    examples: [
      { name: "intercom_session", purpose: "Chat de suporte ao vivo", duration: "6 meses", provider: "Intercom" },
      { name: "theme_preference", purpose: "Modo claro/escuro selecionado", duration: "12 meses", provider: "Ngola Suite" },
      { name: "sidebar_state", purpose: "Estado da navegação lateral", duration: "30 dias", provider: "Ngola Suite" },
    ],
  },
  {
    id: "analytics" as keyof CookiePreferences,
    icon: BarChart2,
    label: "Analíticos",
    color: "#a78bfa",
    required: false,
    description:
      "Ajudam-nos a compreender como os visitantes utilizam o site, identificar erros e melhorar continuamente a experiência. Todos os dados são anonimizados antes do processamento.",
    examples: [
      { name: "_ga", purpose: "Análise de tráfego e comportamento (anonimizado)", duration: "24 meses", provider: "Google Analytics 4" },
      { name: "_ga_XXXXXX", purpose: "Estado da sessão de analytics", duration: "24 meses", provider: "Google Analytics 4" },
      { name: "hotjar_session", purpose: "Mapas de calor e gravação de sessões (anonimizado)", duration: "12 meses", provider: "Hotjar" },
    ],
  },
  {
    id: "marketing" as keyof CookiePreferences,
    icon: Target,
    label: "Marketing & Publicidade",
    color: "#f5c842",
    required: false,
    description:
      "Utilizados para mostrar anúncios relevantes e medir a eficácia de campanhas. Podem ser partilhados com parceiros de publicidade confiáveis.",
    examples: [
      { name: "_fbp", purpose: "Rastreamento de conversões Facebook Ads", duration: "3 meses", provider: "Meta (Facebook)" },
      { name: "_gcl_au", purpose: "Conversões Google Ads", duration: "3 meses", provider: "Google Ads" },
      { name: "li_sugr", purpose: "Publicidade LinkedIn", duration: "3 meses", provider: "LinkedIn" },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function saveConsent(level: ConsentLevel, preferences: CookiePreferences) {
  const record: ConsentRecord = {
    level,
    preferences,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(COOKIE_KEY, JSON.stringify(record));
}

function loadConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const parsed: ConsentRecord = JSON.parse(raw);
    // Se versão mudou, pedir consentimento novamente
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

// ─── TOGGLE SWITCH ────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  disabled,
  color,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  color: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      style={{
        width: 44, height: 24,
        borderRadius: 12,
        border: "none",
        background: checked ? color : "rgba(255,255,255,0.1)",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.25s ease",
        flexShrink: 0,
        outline: "none",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <span style={{
        position: "absolute",
        top: 3, left: checked ? 23 : 3,
        width: 18, height: 18,
        borderRadius: "50%",
        background: "white",
        transition: "left 0.25s ease",
        boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
      }} />
    </button>
  );
}

// ─── MAIN COOKIE CONSENT BANNER ───────────────────────────────────────────────

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<"banner" | "customize">("banner");
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existing = loadConsent();
    if (!existing) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const all: CookiePreferences = { essential: true, functional: true, analytics: true, marketing: true };
    saveConsent("all", all);
    setSaved(true);
    setTimeout(() => { setSaved(false); setVisible(false); }, 900);
  };

  const handleEssentialOnly = () => {
    saveConsent("essential", DEFAULT_PREFERENCES);
    setSaved(true);
    setTimeout(() => { setSaved(false); setVisible(false); }, 900);
  };

  const handleSaveCustom = () => {
    saveConsent("custom", prefs);
    setSaved(true);
    setTimeout(() => { setSaved(false); setVisible(false); }, 900);
  };

  const togglePref = (key: keyof CookiePreferences) => {
    if (key === "essential") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      aria-modal="true"
      style={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        zIndex: 9999,
        padding: "clamp(12px, 2vw, 24px)",
        animation: "cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cookieFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div style={{
        maxWidth: view === "customize" ? 720 : 680,
        margin: "0 auto",
        background: "rgba(13, 16, 24, 0.97)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        boxShadow: "0 -4px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,216,122,0.05)",
        backdropFilter: "blur(32px)",
        overflow: "hidden",
        animation: "cookieFadeIn 0.3s ease both",
      }}>
        {/* Barra de acento verde no topo */}
        <div style={{ height: 3, background: "linear-gradient(90deg, #00d87a, #00a85e)" }} />

        {view === "banner" ? (
          <BannerView
            onAcceptAll={handleAcceptAll}
            onEssentialOnly={handleEssentialOnly}
            onCustomize={() => setView("customize")}
            onClose={() => setVisible(false)}
            onViewPolicy={() => { navigate("/cookies"); setVisible(false); }}
            saved={saved}
          />
        ) : (
          <CustomizeView
            prefs={prefs}
            onToggle={togglePref}
            onSave={handleSaveCustom}
            onAcceptAll={handleAcceptAll}
            onBack={() => setView("banner")}
            saved={saved}
          />
        )}
      </div>
    </div>
  );
}

// ─── BANNER VIEW ──────────────────────────────────────────────────────────────

function BannerView({
  onAcceptAll, onEssentialOnly, onCustomize, onClose, onViewPolicy, saved
}: {
  onAcceptAll: () => void;
  onEssentialOnly: () => void;
  onCustomize: () => void;
  onClose: () => void;
  onViewPolicy: () => void;
  saved: boolean;
}) {
  return (
    <div style={{ padding: "24px 28px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div style={{ flex: 1 }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "rgba(0,216,122,0.12)",
              border: "1px solid rgba(0,216,122,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Shield size={16} color="#00d87a" />
            </div>
            <div>
              <h3 style={{
                fontFamily: "'Cabinet Grotesk', 'Syne', sans-serif",
                fontWeight: 800, fontSize: 15,
                color: "#eef1f7", margin: 0, letterSpacing: "-0.01em",
              }}>
                A sua privacidade importa-nos
              </h3>
              <p style={{ fontSize: 11, color: "#5a6478", margin: 0, fontWeight: 500 }}>
                Ngola Suite · Política v1.2 · Última revisão: Jan 2026
              </p>
            </div>
          </div>

          {/* Body */}
          <p style={{
            fontSize: 14, color: "rgba(238,241,247,0.7)",
            lineHeight: 1.7, marginBottom: 6,
          }}>
            Utilizamos cookies e tecnologias similares para garantir o funcionamento seguro da plataforma, melhorar a sua experiência e analisar como o site é utilizado — sempre em conformidade com o{" "}
            <strong style={{ color: "#eef1f7" }}>GDPR</strong> e a{" "}
            <strong style={{ color: "#eef1f7" }}>Lei Angolana de Protecção de Dados</strong>.
          </p>
          <p style={{ fontSize: 13, color: "#5a6478", lineHeight: 1.6, marginBottom: 20 }}>
            Pode aceitar todos os cookies, escolher apenas os essenciais ou personalizar as suas preferências em detalhe. A sua decisão é armazenada por 12 meses e pode ser alterada a qualquer momento em{" "}
            <button
              onClick={onViewPolicy}
              style={{
                background: "none", border: "none",
                color: "#00d87a", cursor: "pointer",
                fontSize: 13, fontWeight: 600,
                textDecoration: "underline", padding: 0,
                display: "inline-flex", alignItems: "center", gap: 3,
              }}
            >
              Política de Cookies <ExternalLink size={11} />
            </button>
            .
          </p>

          {/* Category summary pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {COOKIE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} style={{
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "4px 10px", borderRadius: 6,
                  background: `${cat.color}14`,
                  border: `1px solid ${cat.color}28`,
                  fontSize: 11, fontWeight: 600,
                  color: cat.color,
                }}>
                  <Icon size={11} />
                  {cat.label}
                  {cat.required && (
                    <span style={{ fontSize: 9, opacity: 0.7, marginLeft: 2 }}>OBRIG.</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
            <button
              onClick={onAcceptAll}
              style={{
                padding: "10px 22px",
                background: saved ? "#00a85e" : "linear-gradient(135deg, #00d87a, #00a85e)",
                border: "none", borderRadius: 10,
                color: "#04050a",
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 14, fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 6,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {saved ? <><CheckCircle2 size={14} /> Guardado!</> : "Aceitar todos os cookies"}
            </button>

            <button
              onClick={onEssentialOnly}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                color: "#eef1f7",
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 13, fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Apenas essenciais
            </button>

            <button
              onClick={onCustomize}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "none",
                color: "#00d87a",
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 13, fontWeight: 600,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: 5,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <Sliders size={13} />
              Personalizar preferências
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Fechar banner de cookies"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            color: "#5a6478", cursor: "pointer",
            width: 30, height: 30, borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s", flexShrink: 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "#eef1f7"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "#5a6478"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── CUSTOMIZE VIEW ───────────────────────────────────────────────────────────

function CustomizeView({
  prefs, onToggle, onSave, onAcceptAll, onBack, saved
}: {
  prefs: CookiePreferences;
  onToggle: (k: keyof CookiePreferences) => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onBack: () => void;
  saved: boolean;
}) {
  const [expanded, setExpanded] = useState<string | null>("essential");

  return (
    <div style={{ padding: "24px 28px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
            color: "#5a6478", cursor: "pointer", width: 28, height: 28,
            borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, transition: "all 0.2s", flexShrink: 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "#eef1f7"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "#5a6478"; }}
          aria-label="Voltar"
        >←</button>
        <div>
          <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 800, fontSize: 15, color: "#eef1f7", margin: 0 }}>
            Personalizar preferências de cookies
          </h3>
          <p style={{ fontSize: 12, color: "#5a6478", margin: 0 }}>
            Active ou desactive cada categoria. Os cookies essenciais são sempre necessários.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20, maxHeight: 360, overflowY: "auto", paddingRight: 4 }}>
        {COOKIE_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isOpen = expanded === cat.id;
          const isActive = prefs[cat.id];

          return (
            <div key={cat.id} style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${isActive ? `${cat.color}30` : "rgba(255,255,255,0.06)"}`,
              borderRadius: 12,
              overflow: "hidden",
              transition: "border-color 0.3s",
            }}>
              {/* Row */}
              <div style={{
                display: "flex", alignItems: "center",
                padding: "14px 16px", gap: 12, cursor: "pointer",
              }}
              onClick={() => setExpanded(isOpen ? null : cat.id)}
              >
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: `${cat.color}14`, border: `1px solid ${cat.color}28`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={15} color={cat.color} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: 14, fontWeight: 700, color: "#eef1f7",
                    }}>{cat.label}</span>
                    {cat.required && (
                      <span style={{
                        fontSize: 9, fontWeight: 800, letterSpacing: "0.08em",
                        padding: "2px 7px", borderRadius: 4,
                        background: "rgba(0,216,122,0.12)", color: "#00d87a",
                        textTransform: "uppercase",
                      }}>OBRIGATÓRIO</span>
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: "#5a6478", margin: 0, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {cat.examples.length} cookies · Clique para ver detalhes
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Toggle
                    checked={isActive}
                    onChange={() => onToggle(cat.id)}
                    disabled={cat.required}
                    color={cat.color}
                  />
                  {isOpen ? <ChevronUp size={14} color="#5a6478" /> : <ChevronDown size={14} color="#5a6478" />}
                </div>
              </div>

              {/* Expanded detail */}
              {isOpen && (
                <div style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  padding: "14px 16px",
                  animation: "cookieFadeIn 0.2s ease both",
                }}>
                  <p style={{ fontSize: 13, color: "rgba(238,241,247,0.65)", lineHeight: 1.7, marginBottom: 14 }}>
                    {cat.description}
                  </p>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr>
                          {["Nome do Cookie", "Finalidade", "Duração", "Fornecedor"].map((h) => (
                            <th key={h} style={{
                              padding: "6px 10px", textAlign: "left",
                              color: "#5a6478", fontWeight: 700,
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              letterSpacing: "0.04em", textTransform: "uppercase", fontSize: 10,
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cat.examples.map((ex, i) => (
                          <tr key={ex.name} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                            <td style={{ padding: "8px 10px", color: "#eef1f7", fontFamily: "monospace", fontSize: 11 }}>{ex.name}</td>
                            <td style={{ padding: "8px 10px", color: "rgba(238,241,247,0.65)" }}>{ex.purpose}</td>
                            <td style={{ padding: "8px 10px", color: "rgba(238,241,247,0.5)", whiteSpace: "nowrap" }}>{ex.duration}</td>
                            <td style={{ padding: "8px 10px", color: "rgba(238,241,247,0.5)" }}>{ex.provider}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer actions */}
      <div style={{
        display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center",
        paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <button
          onClick={onSave}
          style={{
            padding: "10px 22px",
            background: saved ? "#00a85e" : "linear-gradient(135deg, #00d87a, #00a85e)",
            border: "none", borderRadius: 10,
            color: "#04050a", fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: 14, fontWeight: 800, cursor: "pointer",
            transition: "all 0.2s",
            display: "flex", alignItems: "center", gap: 6,
          }}
        >
          {saved ? <><CheckCircle2 size={14} /> Guardado!</> : "Guardar minhas preferências"}
        </button>
        <button
          onClick={onAcceptAll}
          style={{
            padding: "10px 20px", background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10,
            color: "#eef1f7", fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          Aceitar todos
        </button>
        <p style={{ fontSize: 11, color: "#5a6478", marginLeft: "auto" }}>
          As suas preferências são guardadas localmente por 12 meses.
        </p>
      </div>
    </div>
  );
}

// ─── COOKIE POLICY PAGE ───────────────────────────────────────────────────────

export function CookiePolicyPage() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "what",
      title: "1. O que são cookies?",
      content: `Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo (computador, tablet ou telemóvel) quando visita um website. São amplamente utilizados para fazer os websites funcionarem de forma mais eficiente, fornecer informações aos proprietários do site e personalizar a sua experiência.

Além dos cookies convencionais, utilizamos também tecnologias similares como pixels de rastreamento (web beacons), armazenamento local (localStorage/sessionStorage) e identificadores de dispositivo, todos sujeitos às mesmas regras desta política.

Os cookies podem ser "de sessão" — apagados automaticamente quando fecha o browser — ou "persistentes" — que ficam no seu dispositivo durante um período determinado ou até os apagar manualmente.`,
    },
    {
      id: "why",
      title: "2. Por que razão utilizamos cookies?",
      content: `Utilizamos cookies e tecnologias similares para as seguintes finalidades:

**Segurança e autenticação:** Garantir que apenas utilizadores autorizados acedem às suas contas e proteger contra ataques como CSRF (Cross-Site Request Forgery) e session hijacking.

**Funcionamento da plataforma:** Memorizar as suas preferências de idioma, tema e configurações de interface para que não precise de as redefinir a cada visita.

**Análise e melhoria contínua:** Compreender como os utilizadores interagem com a plataforma para identificar problemas, melhorar a usabilidade e tomar decisões de produto baseadas em dados reais. Todos os dados analíticos são anonimizados antes do processamento.

**Suporte ao cliente:** Permitir que o nosso chat de suporte ao vivo funcione corretamente e que os agentes de suporte possam contextualizar melhor o seu pedido de ajuda.

**Marketing (com o seu consentimento):** Apresentar comunicações relevantes sobre o Ngola Suite em outras plataformas, exclusivamente se tiver dado consentimento explícito para esta finalidade.`,
    },
    {
      id: "types",
      title: "3. Tipos de cookies que utilizamos",
      content: `**3.1 Cookies Estritamente Necessários**
Estes cookies são indispensáveis para que o website funcione corretamente. Incluem cookies de autenticação, segurança de sessão e preferências básicas. Não requerem o seu consentimento, mas pode desactivá-los nas configurações do browser, embora isso possa impedir o correto funcionamento da plataforma.

**3.2 Cookies Funcionais**
Melhoram a sua experiência ao memorizar escolhas que fez (como o idioma preferido ou o modo claro/escuro). Estes cookies não rastreiam a sua actividade em outros websites.

**3.3 Cookies Analíticos**
Recolhem informações sobre como os visitantes utilizam o website — quais páginas visitam, quanto tempo passam em cada uma e se recebem mensagens de erro. Toda a informação recolhida é agregada e anonimizada. Utilizamos Google Analytics 4 (com anonimização de IP activada) e Hotjar para análise de comportamento.

**3.4 Cookies de Marketing**
Utilizados para apresentar anúncios relevantes quando visita outras plataformas. Estes cookies rastreiam o seu browser em diferentes websites e constroem um perfil dos seus interesses. Apenas são activados com o seu consentimento explícito.`,
    },
    {
      id: "providers",
      title: "4. Fornecedores terceiros e transferências internacionais",
      content: `Alguns dos nossos fornecedores de cookies processam dados fora da União Europeia ou da Angola. Quando isso acontece, garantimos que estão implementadas salvaguardas adequadas:

**Google LLC (Analytics):** Processamento nos EUA ao abrigo das Cláusulas Contratuais-Tipo da UE e do Data Privacy Framework EU-EUA. Política de privacidade: policies.google.com/privacy

**Meta Platforms (Facebook Pixel):** Processamento nos EUA ao abrigo das Cláusulas Contratuais-Tipo. Política de privacidade: facebook.com/privacy/policy

**Hotjar Ltd:** Processamento na UE (Malta). Certificado GDPR. Política de privacidade: hotjar.com/legal/privacy

**Intercom, Inc.:** Processamento nos EUA ao abrigo das Cláusulas Contratuais-Tipo. Política de privacidade: intercom.com/legal/privacy

**LinkedIn Corporation:** Processamento nos EUA ao abrigo das Cláusulas Contratuais-Tipo. Política de privacidade: linkedin.com/legal/privacy-policy

Para exercer direitos em relação a dados tratados por estes fornecedores, pode contactá-los directamente ou contactar-nos através de privacidade@ngolasuite.ao.`,
    },
    {
      id: "manage",
      title: "5. Como gerir e retirar o seu consentimento",
      content: `Tem várias opções para controlar os cookies:

**Através do nosso gestor de cookies:** A qualquer momento, pode alterar as suas preferências clicando no botão "Preferências de Cookies" no rodapé do website. As alterações entram em vigor imediatamente.

**Através do seu browser:**
• Chrome: Definições > Privacidade e segurança > Cookies
• Firefox: Preferências > Privacidade e Segurança > Cookies
• Safari: Preferências > Privacidade > Gerir dados de websites
• Edge: Definições > Privacidade, pesquisa e serviços > Cookies

**Opt-out específico por fornecedor:**
• Google Analytics: tools.google.com/dlpage/gaoptout
• Google Ads: adssettings.google.com
• Facebook: facebook.com/settings/?tab=ads
• Hotjar: hotjar.com/legal/compliance/opt-out

**Importante:** A retirada do consentimento não afecta a licitude do tratamento realizado com base no consentimento anteriormente dado. Os cookies estritamente necessários não podem ser desactivados através do nosso gestor de cookies pois são essenciais ao funcionamento seguro da plataforma.`,
    },
    {
      id: "rights",
      title: "6. Os seus direitos",
      content: `Ao abrigo do GDPR e da Lei Angolana de Protecção de Dados Pessoais (Lei n.º 22/11), tem os seguintes direitos:

**Direito de acesso:** Pode solicitar uma cópia dos dados pessoais que tratamos sobre si, incluindo os dados recolhidos via cookies.

**Direito de rectificação:** Pode solicitar a correcção de dados incorrectos ou incompletos.

**Direito ao apagamento:** Pode solicitar a eliminação dos seus dados pessoais, sujeito a determinadas condições legais.

**Direito de oposição:** Pode opor-se ao tratamento dos seus dados para fins de marketing directo ou quando o tratamento se baseie em interesses legítimos.

**Direito à portabilidade:** Pode solicitar os seus dados num formato estruturado e legível por máquina.

**Direito de retirar o consentimento:** Pode retirar o consentimento em qualquer momento, sem que isso afecte a licitude do tratamento anteriormente efectuado.

Para exercer qualquer destes direitos, contacte o nosso Encarregado de Protecção de Dados (EPD) através de: **privacidade@ngolasuite.ao** ou por correio para: Ngola Suite / Zentury Co., Luanda, Angola.

Tem também o direito de apresentar reclamação à autoridade de controlo competente.`,
    },
    {
      id: "updates",
      title: "7. Actualizações desta política",
      content: `Esta Política de Cookies pode ser actualizada periodicamente para reflectir alterações nas nossas práticas de utilização de cookies, mudanças regulatórias ou melhorias da plataforma.

Quando fizermos alterações materiais, iremos:
• Actualizar a data de "Última revisão" no topo desta política
• Incrementar o número de versão no nosso gestor de consentimento
• Solicitar novo consentimento aos utilizadores afectados pelas alterações
• Enviar notificação por email aos utilizadores registados quando as alterações forem significativas

Recomendamos que reveja periodicamente esta política. O uso continuado do website após a publicação de alterações constitui a sua aceitação dessas alterações, na medida em que tal seja permitido por lei.`,
    },
    {
      id: "contact",
      title: "8. Contactos e Encarregado de Protecção de Dados",
      content: `Para qualquer questão relacionada com esta Política de Cookies ou com o tratamento dos seus dados pessoais, pode contactar-nos através de:

**Encarregado de Protecção de Dados (EPD):**
Email: privacidade@ngolasuite.ao

**Responsável pelo Tratamento:**
Zentury Co. / Ngola Suite
Luanda, Angola
suporte@ngolasuite.ao
+244 939 900 016

**Prazo de resposta:** Comprometemo-nos a responder a todos os pedidos no prazo máximo de 30 dias úteis, em conformidade com o GDPR. Em casos complexos, este prazo pode ser prorrogado por mais 60 dias, com notificação prévia.

Para reclamações não resolvidas, pode contactar a autoridade de protecção de dados competente na sua jurisdição.`,
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#04050a",
      color: "#eef1f7",
      fontFamily: "'Instrument Sans', sans-serif",
      paddingTop: 80,
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px clamp(20px, 4vw, 40px) 100px" }}>
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#5a6478", cursor: "pointer",
            padding: "8px 16px", borderRadius: 8,
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600,
            marginBottom: 48, transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "#eef1f7"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "#5a6478"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
        >← Voltar</button>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 14px", borderRadius: 100,
            border: "1px solid rgba(0,216,122,0.25)",
            background: "rgba(0,216,122,0.08)",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#00d87a", marginBottom: 20,
          }}>
            <Shield size={11} /> Privacidade & Conformidade
          </div>

          <h1 style={{
            fontFamily: "'Cabinet Grotesk', 'Syne', sans-serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900, letterSpacing: "-0.03em",
            lineHeight: 1.05, color: "#eef1f7",
            marginBottom: 16,
          }}>Política de Cookies</h1>

          <p style={{ fontSize: 16, color: "#5a6478", lineHeight: 1.7, maxWidth: 640 }}>
            Esta política explica como o Ngola Suite utiliza cookies e tecnologias similares, os seus direitos enquanto titular de dados e como pode gerir as suas preferências — sempre em conformidade com o <strong style={{ color: "#eef1f7" }}>GDPR</strong> e a <strong style={{ color: "#eef1f7" }}>Lei Angolana de Protecção de Dados</strong>.
          </p>

          {/* Meta info */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 24, marginTop: 24,
            padding: "16px 20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
          }}>
            {[
              { label: "Versão", value: "1.2" },
              { label: "Última revisão", value: "Janeiro 2026" },
              { label: "Próxima revisão", value: "Janeiro 2027" },
              { label: "Responsável", value: "Zentury Co. / Ngola Suite" },
              { label: "EPD", value: "privacidade@ngolasuite.ao" },
            ].map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5a6478", marginBottom: 3 }}>{m.label}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#eef1f7" }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 48 }}>
          {COOKIE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} style={{
                padding: "16px 18px",
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${cat.color}22`,
                borderRadius: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <Icon size={16} color={cat.color} />
                  {cat.required
                    ? <CheckCircle2 size={13} color="#00d87a" />
                    : <XCircle size={13} color="#5a6478" />}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#eef1f7", marginBottom: 2 }}>{cat.label}</div>
                <div style={{ fontSize: 11, color: "#5a6478" }}>{cat.examples.length} cookies · {cat.required ? "Obrigatório" : "Opcional"}</div>
              </div>
            );
          })}
        </div>

        {/* Accordion sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sections.map((sec) => {
            const isOpen = openSection === sec.id;
            return (
              <div key={sec.id} style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${isOpen ? "rgba(0,216,122,0.2)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}>
                <button
                  onClick={() => setOpenSection(isOpen ? null : sec.id)}
                  style={{
                    width: "100%", padding: "18px 22px",
                    background: "transparent", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: 15, fontWeight: 800,
                    color: isOpen ? "#00d87a" : "#eef1f7",
                    transition: "color 0.2s",
                  }}>{sec.title}</span>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    border: `1px solid ${isOpen ? "rgba(0,216,122,0.3)" : "rgba(255,255,255,0.1)"}`,
                    background: isOpen ? "rgba(0,216,122,0.1)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isOpen ? "#00d87a" : "#5a6478",
                    flexShrink: 0, transition: "all 0.3s",
                  }}>
                    {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 22px 22px",
                    animation: "cookieFadeIn 0.25s ease both",
                  }}>
                    <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 18 }} />
                    {sec.content.split("\n\n").map((para, i) => (
                      <p key={i} style={{
                        fontSize: 14, color: "rgba(238,241,247,0.72)",
                        lineHeight: 1.8, marginBottom: 14,
                      }}>
                        {para.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                          j % 2 === 1
                            ? <strong key={j} style={{ color: "#eef1f7", fontWeight: 700 }}>{part}</strong>
                            : part
                        )}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#eef1f7", margin: 0, marginBottom: 4 }}>
              Quer alterar as suas preferências de cookies?
            </p>
            <p style={{ fontSize: 13, color: "#5a6478", margin: 0 }}>
              Pode gerir o seu consentimento a qualquer momento.
            </p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem(COOKIE_KEY);
              navigate("/");
              window.location.reload();
            }}
            style={{
              padding: "11px 22px",
              background: "linear-gradient(135deg, #00d87a, #00a85e)",
              border: "none", borderRadius: 10,
              color: "#04050a",
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 14, fontWeight: 800, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <Sliders size={14} />
            Gerir preferências
          </button>
        </div>

        
    </div>
  );
}