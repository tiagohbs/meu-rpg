import React from 'react';
import Sidebar from './Sidebar';
import Announcements from './sections/Announcements';
import QuestLog from './sections/QuestLog';
import CharacterProfile from './sections/CharacterProfile';
import Inventory from './sections/Inventory';

interface DashboardProps {
  onLogout: () => void; // Função de logout passada como prop
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
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
      {/* Sidebar para navegação */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Botão de logout */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Sair
            </button>
          </div>

          {/* Renderiza a seção ativa */}
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;