import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, FileUp, Share2 } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Project
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <FileUp className="mr-2 h-4 w-4" />
          Upload Data
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
      </CardContent>
    </Card>
  )
}

