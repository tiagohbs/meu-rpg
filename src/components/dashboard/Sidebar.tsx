import React from 'react';
import { ScrollText, Sword, Backpack, Bell } from 'lucide-react';
import Logo from '../ui/Logo';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'character', label: 'Character', icon: Sword },
    { id: 'inventory', label: 'Inventory', icon: Backpack },
    { id: 'quests', label: 'Quest Log', icon: ScrollText },
    { id: 'announcements', label: 'Announcements', icon: Bell },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col">
      <Logo size="sm" className="mb-12" />
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => onSectionChange(id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeSection === id
                    ? 'bg-red-900/30 text-red-500'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="pt-6 border-t border-gray-800">
        <div className="flex items-center px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center">
            <span className="text-red-200 font-bold">JS</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">John Smith</p>
            <p className="text-xs text-gray-400">Level 23 Warrior</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;