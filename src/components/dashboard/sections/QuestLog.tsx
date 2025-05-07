import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const QuestLog: React.FC = () => {
  const quests = [
    {
      id: 1,
      title: "Dragon's Lair",
      description: "Defeat the ancient dragon terrorizing the village",
      reward: "5000 XP, Dragon Scale Armor",
      status: "active",
      progress: 75
    },
    {
      id: 2,
      title: "Lost Artifacts",
      description: "Recover the sacred artifacts from the abandoned temple",
      reward: "3000 XP, Rare Staff",
      status: "completed",
      progress: 100
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-display text-white">Quest Log</h1>

      <div className="space-y-6">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`bg-gray-900/80 rounded-lg p-6 border ${
              quest.status === 'completed' ? 'border-green-800/50' : 'border-gray-800'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  {quest.status === 'completed' ? (
                    <CheckCircle2 className="text-green-500" />
                  ) : (
                    <Circle className="text-red-500" />
                  )}
                  <h2 className="text-xl font-display text-white">{quest.title}</h2>
                </div>
                <p className="mt-2 text-gray-400">{quest.description}</p>
                
                {quest.status === 'active' && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{quest.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div
                        className="h-full bg-red-600 rounded-full"
                        style={{ width: `${quest.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-400">Reward: </span>
                  <span className="text-sm text-red-400">{quest.reward}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestLog;