
import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="bg-muted/40 p-4 border-t">
      <h3 className="font-semibold font-mono mb-3 text-sm">Légende</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="font-mono">Gouvernement</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-mono">Médias</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="font-mono">Intelligence</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="font-mono">Académique</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
