import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, CheckCheck, Clock, Mail, AlertTriangle, Eye} from "lucide-react"

export default function NotificationsPage() {
  const [notificationList, setNotificationList] = useState(notifications)

  const handleMarkAllAsRead = () => {
    setNotificationList((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">Notificaciones</CardTitle>
              <CardDescription>Mantente alerta con las ultmas notificaciones</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={handleMarkAllAsRead}
            >
              <CheckCheck className="h-4 w-4" />
              <span>Marcar todos como leido</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notificationList.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className={`rounded-full p-2 ${getIconBackground(notification.type)}`}>
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                </div>
                {!notification.read && <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Helper functions
function getNotificationIcon(type) {
  switch (type) {
    case "message":
      return <Mail className="h-4 w-4 text-white" />
    case "alert":
      return <AlertTriangle className="h-4 w-4 text-white" />
    default:
      return <Eye className="h-4 w-4 text-white" />
  }
}

function getIconBackground(type) {
  switch (type) {
    case "message":
      return "bg-blue-500"
    case "alert":
      return "bg-orange-500"
    default:
      return "bg-green-500"
  }
}

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: "message",
    title: "",
    message: "You have a new message from Sarah about the project deadline.",
    time: "Just now",
    read: false,
  },
  {
    id: 2,
    type: "alert",
    title: "Payment reminder",
    message: "Your subscription will expire in 3 days. Please renew to avoid service interruption.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "default",
    title: "50 personas han visto tu anuncio",
    message: "Tu anuncio ha sido visto por 50 personas en las últimas 24 horas.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 4,
    type: "message",
    title: "Se ha publicado tu nuevo anuncio",
    message: "Tu anuncio ha sido publicado con éxito y está visible para los usuarios.",
    time: "2 days ago",
    read: true,
  },
]
