'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-32 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Nossa História</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Feito por Angolanos,
              <br />
              <span className="text-primary">para o mundo</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Ngola Suite nasceu da necessidade real de empresas a nivel mundial terem uma ferramenta de gestão de projetos que entendesse suas particularidades, falasse a sua lingua, e oferecesse suporte integral.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Desde 2025, ajudamos algumas denzenas de empresas a organizar seus projetos, melhorar a colaboração em equipe e entregar resultados de forma mais eficiente.
            </p>

            <div className="space-y-4">
              {[
                'Mais de 100 empresas usando Ngola Suite',
                '100+ projetos geridos com sucesso',
                'Suporte em português 24/7',
                'Suporte em inglês 24/7',
                'Equipe dedicada de especialistas',
                'Integração com ferramentas populares',
                'Segurança e privacidade de dados de nível empresarial',
                'Atualizações regulares com novos recursos',
                'Satisfação do cliente de 95%',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>

            <Button className="mt-8 gap-2 rounded-lg">
              Conheça nosso time
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
             <img src="/logo0.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
