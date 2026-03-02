'use client'

import { Button } from '@/components/ui/button'
import { MoreVertical, Plus } from 'lucide-react'

const projects = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete redesign of company website',
    progress: 75,
    status: 'In Progress',
    members: 3,
    dueDate: '2024-04-15',
  },
  {
    id: '2',
    name: 'Mobile App',
    description: 'iOS and Android app development',
    progress: 45,
    status: 'In Progress',
    members: 5,
    dueDate: '2024-06-30',
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Third-party API integration',
    progress: 100,
    status: 'Completed',
    members: 2,
    dueDate: '2024-03-01',
  },
  {
    id: '4',
    name: 'Database Migration',
    description: 'Migrate to new database system',
    progress: 30,
    status: 'In Progress',
    members: 4,
    dueDate: '2024-05-20',
  },
]

export function ProjectsGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Projects</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Progress
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  project.status === 'Completed'
                    ? 'bg-green-500/10 text-green-700 dark:text-green-400'
                    : 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
                }`}>
                  {project.status}
                </span>
                <span className="text-xs text-muted-foreground">
                  Due: {new Date(project.dueDate).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    {project.members} team member{project.members !== 1 ? 's' : ''}
                  </p>
                </div>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
