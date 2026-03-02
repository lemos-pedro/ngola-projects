'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { BookOpen, Video, FileText, HelpCircle, ExternalLink } from 'lucide-react'

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    resources: [
      { name: 'Getting Started', url: '#' },
      { name: 'Installation Guide', url: '#' },
      { name: 'API Reference', url: '#' },
      { name: 'Best Practices', url: '#' },
    ],
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for all features',
    resources: [
      { name: 'Project Setup', url: '#' },
      { name: 'Team Collaboration', url: '#' },
      { name: 'Advanced Features', url: '#' },
      { name: 'Integration Guide', url: '#' },
    ],
  },
  {
    icon: FileText,
    title: 'Blog & Articles',
    description: 'Tips, insights, and industry news',
    resources: [
      { name: 'Project Management Tips', url: '#' },
      { name: 'Team Productivity Guide', url: '#' },
      { name: 'Case Studies', url: '#' },
      { name: 'Industry Trends', url: '#' },
    ],
  },
  {
    icon: HelpCircle,
    title: 'Support & FAQ',
    description: 'Common questions and troubleshooting',
    resources: [
      { name: 'FAQ', url: '#' },
      { name: 'Troubleshooting', url: '#' },
      { name: 'Contact Support', url: '#' },
      { name: 'Community Forum', url: '#' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master Ngola Projects and maximize your team productivity.
          </p>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="border border-border rounded-xl p-6 bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      className="flex items-center justify-between text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>{resource.name}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Links Section */}
        <div className="bg-card border border-border rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Quick Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'API Documentation', url: '#' },
              { label: 'Webhook Events', url: '#' },
              { label: 'SDK Downloads', url: '#' },
              { label: 'Status Page', url: '#' },
              { label: 'Release Notes', url: '#' },
              { label: 'Security Policy', url: '#' },
              { label: 'Terms of Service', url: '#' },
              { label: 'Privacy Policy', url: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="px-4 py-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-foreground text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/10 border border-primary/20 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Get in touch with us and we'll be happy to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Support</Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
