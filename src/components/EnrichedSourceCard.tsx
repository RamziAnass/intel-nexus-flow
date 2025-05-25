
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, Shield } from 'lucide-react';
import { EnrichedSource } from '../data/enrichedSources';

interface EnrichedSourceCardProps {
  source: EnrichedSource;
}

const EnrichedSourceCard: React.FC<EnrichedSourceCardProps> = ({ source }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'intelligence': return 'bg-purple-100 text-purple-800';
      case 'government': return 'bg-blue-100 text-blue-800';
      case 'media': return 'bg-green-100 text-green-800';
      case 'academic': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-mono line-clamp-2">
            {source.title}
          </CardTitle>
          <a 
            href={source.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Globe className="w-4 h-4" />
          <span>{source.country}</span>
          <span>•</span>
          <span>{source.region}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {source.description}
        </p>
        
        <div className="flex items-center space-x-2">
          <Badge className={getTypeColor(source.type)}>
            {source.type}
          </Badge>
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span className="text-xs font-mono">
              {source.reliability}/5
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {source.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {source.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{source.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EnrichedSourceCard;
