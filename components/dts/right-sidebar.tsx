import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RightSidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
      <Tabs defaultValue="properties">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>
        <TabsContent value="properties" className="mt-4 space-y-4">
          <div>
            <Label htmlFor="elementName">Element Name</Label>
            <Input id="elementName" placeholder="Enter name" />
          </div>
          <div>
            <Label htmlFor="elementType">Element Type</Label>
            <Input id="elementType" placeholder="Type" />
          </div>
          <div>
            <Label htmlFor="dataSource">Data Source</Label>
            <Input id="dataSource" placeholder="Select data source" />
          </div>
          <Button className="w-full">Update Properties</Button>
        </TabsContent>
        <TabsContent value="comments" className="mt-4">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
              <p className="text-sm font-semibold">User1</p>
              <p className="text-sm">This is an interesting data point. We should investigate further.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
              <p className="text-sm font-semibold">User2</p>
              <p className="text-sm">I agree. Let's schedule a meeting to discuss this.</p>
            </div>
            <Input placeholder="Add a comment..." />
            <Button className="w-full">Post Comment</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

