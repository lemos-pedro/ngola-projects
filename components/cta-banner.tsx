'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent">Oferta Limitada</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Comece gratuitamente por 14 dias
            </h3>
            <p className="text-muted-foreground mt-1">
              Sem cartão de crédito necessário. Acesso completo a todos os recursos.
            </p>
          </div>

          <Button
            size="lg"
            className="gap-2 rounded-lg whitespace-nowrap flex-shrink-0"
          >
            Iniciar agora
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
