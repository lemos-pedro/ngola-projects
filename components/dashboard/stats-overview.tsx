import { BarChart3, Users, CheckCircle, Clock } from 'lucide-react'

const stats = [
  {
    label: 'Total Projects',
    value: '12',
    icon: BarChart3,
    color: 'text-blue-500',
  },
  {
    label: 'Team Members',
    value: '8',
    icon: Users,
    color: 'text-green-500',
  },
  {
    label: 'Completed Tasks',
    value: '156',
    icon: CheckCircle,
    color: 'text-emerald-500',
  },
  {
    label: 'In Progress',
    value: '23',
    icon: Clock,
    color: 'text-orange-500',
  },
]

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
              <Icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
