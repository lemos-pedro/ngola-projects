'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$12',
    description: 'Perfect for small teams getting started',
    features: [
      'Basic dashboard',
      'Simple project management',
      'Task assignment',
      'Up to 5 projects',
      '5 team members',
      'Basic reporting',
      'Email support',
      '5GB storage',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'For growing teams and businesses',
    features: [
      'Advanced dashboard',
      'Comprehensive project management',
      'Task dependencies',
      'File sharing and version control',
      'Unlimited projects',
      '25 team members',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'Custom integrations',
      'API access',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with custom needs',
    features: [
      'Tailored dashboard and features',
      'Dedicated account manager',
      'Custom onboarding and training',
      'Unlimited projects and teams',
      'Enterprise-grade security',
      'Custom SLAs',
      '24/7 priority support',
      'Dedicated infrastructure options',
      'Unlimited everything',
      'Unlimited team members',
      'Custom analytics',
      '24/7 phone support',
      'Unlimited storage',
      'White-label options',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'border-primary bg-primary/5 shadow-lg scale-105'
                  : 'border-border bg-card hover:border-primary/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
              </div>

              <Button
                className="w-full mb-8"
                variant={plan.highlight ? 'default' : 'outline'}
              >
                Get Started
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-card border border-border rounded-xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.',
              },
              {
                question: 'Do you offer discounts for annual billing?',
                answer: 'Yes, annual plans come with a 20% discount compared to monthly billing.',
              },
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
