
import React from 'react';
import { Source, SourceType } from '../data/sources';
import { ExternalLink } from 'lucide-react';

const typeToColor: Record<SourceType, string> = {
  [SourceType.PRESS]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [SourceType.THINK_TANK]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  [SourceType.BLOG]: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  [SourceType.GOVERNMENT]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [SourceType.ACADEMIC]: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  [SourceType.NGO]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  [SourceType.SPECIALIZED]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

interface SourceCardProps {
  source: Source;
}

const SourceCard: React.FC<SourceCardProps> = ({ source }) => {
  const handleClick = () => {
    window.open(source.url, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
         onClick={handleClick}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold font-mono tracking-tight">{source.title}</h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {source.description}
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeToColor[source.type]}`}>
            {source.type}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {source.country}
          </span>
        </div>
        
        {source.ideology && (
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold">Orientation:</span> {source.ideology}
          </div>
        )}
        
        <div className="flex flex-wrap gap-1">
          {source.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              {tag}
            </span>
          ))}
          {source.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              +{source.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="text-xs text-muted-foreground truncate">
          {source.url.replace('https://', '')}
        </div>
      </div>
    </div>
  );
};

export default SourceCard;
