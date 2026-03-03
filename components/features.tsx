'use client'

import {
  BarChart3,
  Users,
  Clock,
  Shield,
  Zap,
  MessageSquare,
} from 'lucide-react'
import { useScrollAnimate } from '@/hooks/use-scroll-animate'

const features = [
  {
    icon: BarChart3,
    title: 'Gestão Visual',
    description:
      'Visualize todos os seus projetos com quadros Kanban e cronogramas interativos em tempo real.',
  },
  {
    icon: Users,
    title: 'Colaboração em Tempo Real',
    description:
      'Trabalhe junto com sua equipe com atualizações instantâneas, comentários e atribuições.',
  },
  {
    icon: Clock,
    title: 'Rastreamento de Tempo',
    description:
      'Monitore o tempo gasto em tarefas e otimize a produtividade da sua equipe eficientemente.',
  },
  {
    icon: Shield,
    title: 'Segurança Empresarial',
    description:
      'Dados criptografados, controles de acesso granulares e conformidade com padrões internacionais.',
  },
  {
    icon: Zap,
    title: 'Automações Inteligentes',
    description:
      'Configure workflows automáticos para eliminar tarefas repetitivas e economizar tempo.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação Integrada',
    description:
      'Mensagens, comentários e notificações organizadas tudo em um único lugar.',
  },
  {
    icon: Users,
    title: 'Gestão de Equipes',
    description:
      'Organize sua equipe, defina funções e acompanhe o desempenho com facilidade.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Personalizados',
    description:
      'Gere relatórios detalhados para acompanhar o progresso e tomar decisões informadas.',  
  }
]

export function Features() {
  const { ref, isVisible } = useScrollAnimate()

  return (
    <section id="recursos" className="py-20 sm:py-32 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo que sua equipe precisa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recursos poderosos e intuitivos para colaboração eficiente e entrega de projetos
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-all duration-300 hover:shadow-lg ${
                  isVisible ? `fade-in` : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
