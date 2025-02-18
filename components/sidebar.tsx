import type React from "react"
import Link from "next/link"
import { Home, FileText, Database, FlaskRoundIcon as Flask, Users, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:block">
      <nav className="p-4 space-y-2">
        <SidebarLink href="/dashboard" icon={Home} label="Dashboard" />
        <SidebarLink href="/projects" icon={FileText} label="Projects" />
        <SidebarLink href="/data" icon={Database} label="Data Collection" />
        <SidebarLink href="/sandbox" icon={Flask} label="Sandbox" />
        <SidebarLink href="/team" icon={Users} label="Team" />
        <SidebarLink href="/settings" icon={Settings} label="Settings" />
      </nav>
    </aside>
  )
}

function SidebarLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  )
}

