import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Shield, Sword, X, Flame, Droplets, Zap, Wind } from 'lucide-react';

interface ElementalAttributes {
  fire: number;
  water: number;
  lightning: number;
  wind: number;
}

interface Item {
  id: number;
  name: string;
  damage: number;
  durability: number;
  requiredLevel: number;
  description: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  creator: string;
  elementalAttributes: ElementalAttributes;
  type: string;
  icon: any;
  slot?: number;
}

interface ItemDetailsModalProps {
  item: Item;
  onClose: () => void;
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'Common': return 'text-gray-400';
    case 'Uncommon': return 'text-green-400';
    case 'Rare': return 'text-blue-400';
    case 'Epic': return 'text-purple-400';
    case 'Legendary': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
};

const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className={`text-2xl font-display ${getRarityColor(item.rarity)}`}>{item.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-red-900/30 flex items-center justify-center">
            <item.icon className="text-red-500 w-8 h-8" />
          </div>
          <div>
            <p className="text-gray-400">{item.type}</p>
            <span className={`inline-block px-2 py-1 bg-opacity-20 rounded mt-1 ${getRarityColor(item.rarity)}`}>
              {item.rarity}
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-medium mb-1">Damage</h3>
              <p className="text-red-400">{item.damage}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Durability</h3>
              <p className="text-blue-400">{item.durability}/100</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Required Level</h3>
              <p className="text-purple-400">{item.requiredLevel}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Creator</h3>
              <p className="text-green-400">{item.creator}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-2">Elemental Attributes</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Flame className="text-red-500" size={16} />
                <span className="text-red-400">{item.elementalAttributes.fire}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className="text-blue-500" size={16} />
                <span className="text-blue-400">{item.elementalAttributes.water}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-yellow-500" size={16} />
                <span className="text-yellow-400">{item.elementalAttributes.lightning}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="text-green-500" size={16} />
                <span className="text-green-400">{item.elementalAttributes.wind}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-2">Description</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InventorySlot: React.FC<{ item?: Item; index: number; onDrop: (item: Item, index: number) => void }> = ({ item, index, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (droppedItem: Item) => onDrop(droppedItem, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-16 h-16 bg-gray-800/50 rounded-lg border ${
        isOver ? 'border-red-500' : 'border-gray-700'
      } flex items-center justify-center`}
    >
      {item && <DraggableItem item={item} />}
    </div>
  );
};

const DraggableItem: React.FC<{ item: Item }> = ({ item }) => {
  const [, drag] = useDrag(() => ({
    type: 'item',
    item: item,
  }));

  return (
    <div
      ref={drag}
      className={`w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center cursor-move hover:ring-2 ${
        getRarityColor(item.rarity).replace('text', 'ring')
      }`}
    >
      <item.icon className={getRarityColor(item.rarity)} />
    </div>
  );
};

const Inventory: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Dragon Slayer",
      damage: 250,
      durability: 85,
      requiredLevel: 20,
      description: "A legendary sword forged in dragon's breath, capable of slaying the mightiest beasts.",
      rarity: "Legendary",
      creator: "MasterSmith",
      elementalAttributes: {
        fire: 75,
        water: 0,
        lightning: 30,
        wind: 15
      },
      type: "Sword",
      icon: Sword,
      slot: 0
    },
    {
      id: 2,
      name: "Guardian Shield",
      damage: 50,
      durability: 95,
      requiredLevel: 15,
      description: "An enchanted shield that pulses with protective magic.",
      rarity: "Epic",
      creator: "ShieldMaster",
      elementalAttributes: {
        fire: 0,
        water: 60,
        lightning: 0,
        wind: 40
      },
      type: "Shield",
      icon: Shield,
      slot: 1
    }
  ]);

  const handleDrop = (item: Item, newSlot: number) => {
    setItems(items.map(i => {
      if (i.id === item.id) {
        return { ...i, slot: newSlot };
      }
      if (i.slot === newSlot) {
        return { ...i, slot: item.slot };
      }
      return i;
    }));
  };

  const slots = Array(40).fill(null).map((_, index) => {
    const item = items.find(i => i.slot === index);
    return (
      <div key={index} onClick={() => item && setSelectedItem(item)}>
        <InventorySlot
          item={item}
          index={index}
          onDrop={handleDrop}
        />
      </div>
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-display text-white">Inventory</h1>
          <div className="text-gray-400">
            <span className="font-medium text-white">{items.length}</span>/40 slots
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2 bg-gray-900/80 rounded-lg p-6 border border-gray-800">
          {slots}
        </div>

        {selectedItem && (
          <ItemDetailsModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default Inventory;