'use client'

import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    role: 'Diretor de Projetos',
    company: 'TechAO Soluções',
    image: '👨‍💼',
    text: 'Ngola Suite transformou como nossa equipe colabora. Economizamos cerca de 20 horas por semana em reuniões desnecessárias.',
    rating: 5,
  },
  {
    name: 'Maria Costa',
    role: 'CEO',
    company: 'Inovação Digital',
    image: '👩‍💼',
    text: 'A melhor ferramenta que encontramos no mercado. Simples, poderosa e feita para empresas angolanas entenderem.',
    rating: 5,
  },
  {
    name: 'Carlos Neves',
    role: 'Gestor de Equipa',
    company: 'Construções Angola',
    image: '👨‍🔧',
    text: 'Implementamos em 2 dias. Todos os membros da equipe estão usando. A integração com outras ferramentas foi perfeita.',
    rating: 5,
  },
  {
    name: 'Amelia Dias',
    role: 'Product Manager',
    company: 'Educação Plus',
    image: '👩‍💻',
    text: 'O suporte é excepcional. Responderam todas as nossas dúvidas em português e com conhecimento real do nosso mercado.',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Confiado por empresas em crescimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre Ngola Suite
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current testimonial */}
            <div className="flex flex-col justify-center">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-xl text-foreground mb-6 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonials[current].rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role} •{' '}
                    {testimonials[current].company}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-lg"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-lg"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Testimonials grid */}
            <div className="grid grid-cols-1 gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    index === current
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card hover:border-primary/20'
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl">
                      {testimonial.image}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-accent text-accent"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
