'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfeito para pequenos projetos',
    price: '12',
    period: '/mês',
    featured: false,
    cta: 'Começar',
    features: [
      'Até 5 membros da equipe',
      'Até 10 projetos',
      'Armazenamento 10GB',
      'Suporte por email',
      'Atualizações de projetos básicas',
    ],
  },
  {
    name: 'Professional',
    description: 'Para equipes em crescimento',
    price: '49',
    period: '/mês',
    featured: true,
    cta: 'Comece teste gratuito',
    features: [
      'Até 25 membros da equipe',
      'Projetos ilimitados',
      'Armazenamento 100GB',
      'Suporte por chat e email',
      'Relatórios avançados',
      'Integrações customizadas',
      'Automações ilimitadas',
      'Rastreamento de tempo',
      'Histórico completo',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Para grandes organizações',
    price: 'Customizado',
    period: '',
    featured: false,
    cta: 'Falar com vendas',
    features: [
      'Membros ilimitados',
      'Projetos ilimitados',
      'Armazenamento ilimitado',
      'Suporte prioritário 24/7',
      'Conta dedicada',
      'SSO & SAML',
      'Auditoria completa',
      'SLA garantido',
      'Treinamento customizado',
    ],
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-20 sm:py-32 bg-background/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preços simples e transparentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para sua equipe. Sem taxas ocultas.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.featured
                  ? 'border-primary bg-card shadow-xl scale-105 md:scale-100'
                  : 'border-border bg-card hover:border-primary/20 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-1.5">
                  <span className="text-sm font-semibold text-primary-foreground">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mb-8 rounded-lg"
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>

                {/* Features list */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Todos os planos incluem 14 dias de teste gratuito. Sem cartão de crédito necessário.
        </p>
      </div>
    </section>
  )
}
