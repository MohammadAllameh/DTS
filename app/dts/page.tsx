import { TopNavbar } from "@/components/dts/top-navbar"
import { LeftSidebar } from "@/components/dts/left-sidebar"
import { Canvas } from "@/components/dts/canvas"
import { RightSidebar } from "@/components/dts/right-sidebar"

export default function DTSPage() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <Canvas />
        <RightSidebar />
      </div>
    </div>
  )
}

