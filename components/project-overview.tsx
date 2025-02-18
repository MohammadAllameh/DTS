import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProjectOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Climate Change Analysis</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">75%</span>
            </div>
            <Progress value={75} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">AI Ethics Survey</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">40%</span>
            </div>
            <Progress value={40} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Quantum Computing Simulation</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">10%</span>
            </div>
            <Progress value={10} className="w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

