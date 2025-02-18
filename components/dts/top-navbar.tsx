import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Share2, Settings } from "lucide-react"

export function TopNavbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Deep Team Serce</h1>
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            File
          </Button>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
          <Button variant="ghost" size="sm">
            View
          </Button>
          <Button variant="ghost" size="sm">
            Help
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 pr-4 py-1 w-64 text-sm bg-gray-100 dark:bg-gray-700 border-none rounded-md"
          />
        </div>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}

