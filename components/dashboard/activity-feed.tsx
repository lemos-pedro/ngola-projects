import { CheckCircle, MessageSquare, Users, FileText } from 'lucide-react'

const activities = [
  {
    id: '1',
    type: 'task',
    title: 'Completed task',
    description: 'Finished "Homepage Design" in Website Redesign',
    user: 'João Silva',
    timestamp: '2 hours ago',
    icon: CheckCircle,
  },
  {
    id: '2',
    type: 'comment',
    title: 'Left a comment',
    description: 'Commented on "Mobile App" project',
    user: 'Maria Santos',
    timestamp: '4 hours ago',
    icon: MessageSquare,
  },
  {
    id: '3',
    type: 'member',
    title: 'Added team member',
    description: 'Carlos joined the Website Redesign project',
    user: 'Project Admin',
    timestamp: '1 day ago',
    icon: Users,
  },
  {
    id: '4',
    type: 'file',
    title: 'Uploaded file',
    description: 'design-mockups.figma uploaded to API Integration',
    user: 'Anna Ferreira',
    timestamp: '2 days ago',
    icon: FileText,
  },
]

export function ActivityFeed() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors flex gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">
                    {activity.user}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
