
import React from 'react';
import { SourceType } from '../data/sources';

const typeToColor: Record<SourceType, string> = {
  [SourceType.PRESS]: '#3b82f6',
  [SourceType.THINK_TANK]: '#8b5cf6',
  [SourceType.BLOG]: '#ec4899',
  [SourceType.GOVERNMENT]: '#10b981',
  [SourceType.ACADEMIC]: '#f59e0b',
  [SourceType.NGO]: '#6366f1',
  [SourceType.SPECIALIZED]: '#ef4444',
};

const Legend: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4">
      {Object.entries(typeToColor).map(([type, color]) => (
        <div key={type} className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: color }}
          />
          <span className="text-xs font-mono">{type}</span>
        </div>
      ))}
      <div className="text-xs font-mono text-muted-foreground ml-4">
        <span className="italic">Cliquez sur un nœud pour ouvrir la source</span>
      </div>
    </div>
  );
};

export default Legend;
