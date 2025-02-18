import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    { user: "Alice", action: "updated", project: "Climate Change Analysis", time: "2 hours ago" },
    { user: "Bob", action: "commented on", project: "AI Ethics Survey", time: "4 hours ago" },
    { user: "Charlie", action: "created", project: "Quantum Computing Simulation", time: "1 day ago" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium text-blue-600 dark:text-blue-400">{activity.user}</span> {activity.action}{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">{activity.project}</span>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

