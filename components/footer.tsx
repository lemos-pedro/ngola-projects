'use client'

import Link from 'next/link'
import { Instagram, Linkedin, MessageCircle, Facebook } from 'lucide-react'; // exemplo de icons

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Produto',
      links: [
        { label: 'Recursos', href: '#recursos' },
        { label: 'Preços', href: '#precos' },
        { label: 'Segurança', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidade', href: '#' },
        { label: 'Termos', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ]


const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/ngolaprojects/', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/+244959499380', label: 'WhatsApp' },
  { icon: Facebook, href: 'https://www.facebook.com/seuusuario', label: 'Facebook' },
];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer content */}
        <div className="grid gap-8 md:grid-cols-5 mb-8">
          {/* Brand */}
          <div>
             <div className="flex h-8 w-8 items-center justify-center ">
              <img src="/logo0.png" alt="" />
            </div>
            <p className="text-sm text-muted-foreground">
              Gestão de projetos profissional para equipes angolanas.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} projects. Todos os direitos reservados.</p>
          <p>Feito pela Zentury co.</p>
        </div>
      </div>
    </footer>
  )
}
