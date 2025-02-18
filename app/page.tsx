import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProjectOverview } from "@/components/project-overview"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Dashboard</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectOverview />
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  )
}

