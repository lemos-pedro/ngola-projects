'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Como começo a usar Ngola Suite?',
    answer:
      'Crie uma conta gratuita em poucos minutos. Não é necessário cartão de crédito para começar os 14 dias de teste gratuito. Você terá acesso a todos os recursos e pode convidar sua equipe imediatamente.',
  },
  {
    question: 'Posso importar dados de outras ferramentas?',
    answer:
      'Sim! Temos integrações para as principais ferramentas como Asana, Monday.com, Jira e outras. Nossa equipe também pode ajudar com importações personalizadas.',
  },
  {
    question: 'Qual é o suporte disponível?',
    answer:
      'Oferecemos suporte por email para todos os planos e chat ao vivo para planos Professional e Enterprise. Nosso time responde em português em até 24 horas.',
  },
  {
    question: 'Como funcionam os pagamentos?',
    answer:
      'Aceitamos cartões de crédito (Visa, Mastercard), transferência bancária e MB Way. Os pagamentos são processados mensalmente ou anualmente conforme sua preferência.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer:
      'Sim. Todos os dados são criptografados em trânsito e em repouso. Realizamos auditorias de segurança regulares e estamos em conformidade com GDPR e outras regulamentações.',
  },
  {
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer:
      'Sim, você pode cancelar sua assinatura a qualquer momento sem penalidades. Se tiver algum problema, nossa equipe está disponível para ajudar a resolver sua questão.',
  },
]

export function FAQ() {
  return (
    <section className="py-20 sm:py-32 bg-background/50 border-y border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre Ngola Suite
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-4 text-left hover:text-primary transition-colors">
                <span className="font-semibold text-foreground text-lg">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-12 p-8 bg-card border border-border rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground mb-4">
            Entre em contato com nosso time de suporte. Respondemos em português em até 24 horas.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}
