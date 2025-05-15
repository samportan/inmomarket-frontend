import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Renamed from "Notification" to "NotificationsList" to avoid conflict with browser's Notification API

const mockNotifications = [
  {
    id: 1,
    title: 'New message received',
    description: 'You have a new message from John Doe.',
    date: '2025-05-14',
    read: false,
  },
  {
    id: 2,
    title: 'Property approved',
    description: 'Your property listing has been approved.',
    date: '2025-05-13',
    read: true,
  },
];

export default function NotificationsList() {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const filtered = notifications.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.description.toLowerCase().includes(search.toLowerCase())
  );
  
  function handleMarkAllAsRead() {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  }
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white p-4">
      <section className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold mb-2">Notifications</h1>
        
        <div>
          <Label htmlFor="search" className="mb-1 block">Buscar notificaciones</Label>
          <Input
            id="search"
            placeholder="Buscar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-4"
          />
        </div>
        
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <Card className="p-6 text-center text-muted-foreground">
              No notifications found.
            </Card>
          ) : (
            filtered.map(n => (
              <Card
                key={n.id}
                className={`p-4 border flex flex-col gap-2 ${
                  n.read
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary/10 border-primary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{n.title}</span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <div>{n.description}</div>
                {!n.read && (
                  <span className="inline-block text-xs text-primary font-medium">
                    • New
                  </span>
                )}
              </Card>
            ))
          )}
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleMarkAllAsRead}>
            Mark all as read
          </Button>
        </div>
      </section>
    </div>
  );
}