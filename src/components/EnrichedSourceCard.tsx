
import React from 'react';
import { EnrichedSource, SourceType } from '../data/enrichedSources';
import { ExternalLink, Shield, Lock, Globe, Star } from 'lucide-react';

const typeToColor: Record<SourceType, string> = {
  [SourceType.PRESS]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [SourceType.THINK_TANK]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  [SourceType.BLOG]: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  [SourceType.GOVERNMENT]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [SourceType.ACADEMIC]: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  [SourceType.NGO]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  [SourceType.SPECIALIZED]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  [SourceType.INTELLIGENCE]: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
  [SourceType.MILITARY]: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200',
  [SourceType.ECONOMIC]: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  [SourceType.DIPLOMATIC]: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  [SourceType.CYBER]: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
  [SourceType.SOCIAL_MEDIA]: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  [SourceType.RESEARCH_INSTITUTE]: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
};

const accessIcons = {
  public: Globe,
  restricted: Shield,
  classified: Lock
};

interface EnrichedSourceCardProps {
  source: EnrichedSource;
}

const EnrichedSourceCard: React.FC<EnrichedSourceCardProps> = ({ source }) => {
  const handleClick = () => {
    window.open(source.url, '_blank');
  };

  const AccessIcon = accessIcons[source.accessLevel];

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
         onClick={handleClick}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold font-mono tracking-tight group-hover:text-primary transition-colors">
          {source.title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2 group-hover:text-primary transition-colors" />
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {source.description}
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeToColor[source.type]}`}>
            {source.type.replace('_', ' ')}
          </span>
          <div className="flex items-center space-x-2">
            <AccessIcon className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-mono">
              {source.accessLevel}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">
            {source.country} • {source.region}
          </span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < source.reliability ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{source.language}</span>
          <span>{source.frequency}</span>
        </div>
        
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

export default EnrichedSourceCard;
