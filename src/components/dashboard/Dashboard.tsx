import React from 'react';
import Sidebar from './Sidebar';
import Announcements from './sections/Announcements';
import QuestLog from './sections/QuestLog';
import CharacterProfile from './sections/CharacterProfile';
import Inventory from './sections/Inventory';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('character');

  const renderSection = () => {
    switch (activeSection) {
      case 'announcements':
        return <Announcements />;
      case 'quests':
        return <QuestLog />;
      case 'character':
        return <CharacterProfile />;
      case 'inventory':
        return <Inventory />;
      default:
        return <CharacterProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;