"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, Move } from "lucide-react"

export function Canvas() {
  const [zoom, setZoom] = useState(100)

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10 flex space-x-2">
        <Button variant="outline" size="sm" onClick={() => setZoom(zoom + 10)}>
          <ZoomIn className="h-4 w-4 mr-1" />
          Zoom In
        </Button>
        <Button variant="outline" size="sm" onClick={() => setZoom(Math.max(10, zoom - 10))}>
          <ZoomOut className="h-4 w-4 mr-1" />
          Zoom Out
        </Button>
        <Button variant="outline" size="sm">
          <Move className="h-4 w-4 mr-1" />
          Pan
        </Button>
      </div>
      <div
        className="w-full h-full"
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "0 0",
        }}
      >
        {/* Canvas content goes here */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Research Canvas</h2>
          <p className="mb-4">Drag and drop elements here to start your research project.</p>
          {/* Placeholder for draggable elements */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
            <h3 className="font-semibold mb-2">Data Visualization</h3>
            <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded flex items-center justify-center">
              Chart Placeholder
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Research Notes</h3>
            <p>Add your research notes and findings here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

