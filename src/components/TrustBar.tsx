export default function TrustBar() {
  const companies = [
    { id: "antosc", type: "image" as const, src: "/antosc.png", alt: "Antosc" },
    { id: "inovacao", type: "text" as const, label: "Inovação Digital" },
    { id: "sofala", type: "text" as const, label: "Grupo Sofala" },
    { id: "sonangol", type: "image" as const, src: "/sonangol.png", alt: "Sonangol" },
    { id: "construcoes", type: "text" as const, label: "Construções Angola" },
    { id: "educacao", type: "text" as const, label: "Educação Plus" },
  ];

  return (
    <section className="py-16 border-y border-[hsl(var(--border))]">
      <p className="text-center text-sm text-muted-foreground mb-8">
        Confiado por líderes de mercado em Angola e além
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-6">
        {companies.map((company) =>
          company.type === "image" ? (
            <img
              key={company.id}
              src={company.src}
              alt={company.alt}
              className="h-8 opacity-40 hover:opacity-70 transition-opacity"
            />
          ) : (
            <span
              key={company.id}
              className="text-muted-foreground/40 font-display font-bold text-lg tracking-tight hover:text-muted-foreground/70 transition-colors cursor-default"
            >
              {company.label}
            </span>
          )
        )}
      </div>
    </section>
  );
}