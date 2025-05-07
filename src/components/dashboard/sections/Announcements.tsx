import React from 'react';
import { Bell, Star, Shield } from 'lucide-react';

const Announcements: React.FC = () => {
  const announcements = [
    {
      id: 1,
      title: "New Dungeon Released!",
      content: "Explore the Shadows of the Forgotten Keep - a new challenging dungeon for levels 20-30",
      type: "update",
      date: "2025-03-15",
      icon: Star
    },
    {
      id: 2,
      title: "Server Maintenance",
      content: "Scheduled maintenance on March 20th, 2025, from 2 AM to 6 AM UTC",
      type: "system",
      date: "2025-03-18",
      icon: Shield
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display text-white">Announcements</h1>
        <Bell className="text-red-500" />
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-gray-900/80 rounded-lg p-6 border border-gray-800 hover:border-red-900 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center">
                <announcement.icon className="text-red-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display text-white">{announcement.title}</h2>
                  <span className="text-sm text-gray-400">{announcement.date}</span>
                </div>
                <p className="mt-2 text-gray-400">{announcement.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;