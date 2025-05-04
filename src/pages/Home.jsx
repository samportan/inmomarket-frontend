import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is your main screen. The sidebar should be visible on the left.
          </p>
          <Button className="mt-4">Action</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Another Section</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You can customize this screen as needed.</p>
        </CardContent>
      </Card>
    </div>
  )
}
