'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StatsOverview } from '@/components/dashboard/stats-overview'
import { ProjectsGrid } from '@/components/dashboard/projects-grid'
import { ActivityFeed } from '@/components/dashboard/activity-feed'

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="h-12 w-12 rounded-full border-4 border-border border-t-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome, {user?.name}!
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your projects and team activity.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-12">
          <StatsOverview />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <ProjectsGrid />
          </div>

          {/* Activity Feed Sidebar */}
          <div>
            <ActivityFeed />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
