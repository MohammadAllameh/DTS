import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">ResearchSpace</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User menu">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

