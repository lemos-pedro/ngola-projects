'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { CTABanner } from '@/components/cta-banner'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { LoginDialog } from '@/components/auth/login-dialog'
import { SignupDialog } from '@/components/auth/signup-dialog'

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar onLoginClick={() => setLoginOpen(true)} onSignupClick={() => setSignupOpen(true)} />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />

      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onSignupClick={() => {
          setLoginOpen(false)
          setSignupOpen(true)
        }}
      />

      <SignupDialog
        open={signupOpen}
        onOpenChange={setSignupOpen}
        onLoginClick={() => {
          setSignupOpen(false)
          setLoginOpen(true)
        }}
      />
    </main>
  )
}
