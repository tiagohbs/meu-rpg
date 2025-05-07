import React from 'react';
import { Shield, Heart, Zap, Swords } from 'lucide-react';

const CharacterProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Character Preview Panel */}
      <div className="bg-gray-900/80 rounded-lg border border-gray-800 p-6 flex flex-col items-center">
        <div className="w-full aspect-[3/4] bg-gradient-to-b from-red-900/20 to-gray-900/40 rounded-lg border-2 border-gray-800 mb-6 relative overflow-hidden">
          {/* Character Image/Avatar would go here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/7887135/pexels-photo-7887135.jpeg" 
              alt="Character Preview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <h2 className="text-2xl font-display text-white mb-2">Shadowblade</h2>
        <p className="text-red-400 mb-4">Level 23 Warrior</p>
        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
          <div className="bg-red-600 h-full rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-sm text-gray-400">15,750 / 21,000 XP</p>
      </div>

      {/* Stats Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-display text-white mb-4">Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Heart className="text-red-500" />
              <div>
                <p className="text-sm text-gray-400">Health</p>
                <p className="text-lg font-medium text-white">2450/2450</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-400">Defense</p>
                <p className="text-lg font-medium text-white">185</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Swords className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Attack</p>
                <p className="text-lg font-medium text-white">320</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="text-purple-500" />
              <div>
                <p className="text-sm text-gray-400">Magic</p>
                <p className="text-lg font-medium text-white">150</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Abilities */}
        <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-display text-white mb-4">Skills & Abilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Sword Mastery', 'Shield Block', 'Battle Cry', 'Charge'].map((skill) => (
              <div key={skill} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center mb-3">
                  <Swords className="text-red-500" />
                </div>
                <h3 className="font-medium text-white">{skill}</h3>
                <p className="text-sm text-gray-400 mt-1">Level 3</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;