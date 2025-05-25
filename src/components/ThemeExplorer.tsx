
import React, { useState, useMemo } from 'react';
import { enrichedSources, EnrichedSource } from '../data/enrichedSources';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Globe, Shield, Brain, Users } from 'lucide-react';

interface ThemeExplorerProps {
  theme: string;
  onSourceSelect: (sources: EnrichedSource[]) => void;
}

const ThemeExplorer: React.FC<ThemeExplorerProps> = ({ theme, onSourceSelect }) => {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);

  const clusters = useMemo(() => {
    // Filtrer les sources pertinentes pour le thème
    const relevantSources = enrichedSources.filter(source =>
      source.tags.some(tag => 
        tag.toLowerCase().includes(theme.toLowerCase()) ||
        theme.toLowerCase().includes(tag.toLowerCase())
      ) ||
      source.title.toLowerCase().includes(theme.toLowerCase()) ||
      source.description.toLowerCase().includes(theme.toLowerCase())
    );

    // Grouper par type
    const grouped = relevantSources.reduce((acc, source) => {
      if (!acc[source.type]) {
        acc[source.type] = [];
      }
      acc[source.type].push(source);
      return acc;
    }, {} as Record<string, EnrichedSource[]>);

    return grouped;
  }, [theme]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Gouvernement': return Shield;
      case 'Intelligence': return Brain;
      case 'Médias': return Globe;
      case 'Académique': return Users;
      default: return Globe;
    }
  };

  const getTypeDescription = (type: string) => {
    switch (type) {
      case 'Gouvernement': return 'Sources officielles et institutionnelles';
      case 'Intelligence': return 'Analyses et renseignements stratégiques';
      case 'Médias': return 'Couverture médiatique et journalistique';
      case 'Académique': return 'Recherches et analyses universitaires';
      default: return 'Autres sources spécialisées';
    }
  };

  const handleClusterClick = (type: string) => {
    setSelectedCluster(type);
    onSourceSelect(clusters[type]);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold font-mono mb-2">
          Exploration thématique : <span className="text-primary">{theme}</span>
        </h2>
        <p className="text-muted-foreground">
          Découvrez les clusters de sources organisés par domaine d'expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(clusters).map(([type, sources]) => {
          const Icon = getTypeIcon(type);
          const isSelected = selectedCluster === type;
          
          return (
            <Card 
              key={type}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                isSelected ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => handleClusterClick(type)}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-primary' : ''}`} />
                  {type}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {getTypeDescription(type)}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="font-mono">
                    {sources.length} source{sources.length > 1 ? 's' : ''}
                  </Badge>
                  <div className="flex gap-1">
                    {sources.slice(0, 3).map(source => (
                      <div 
                        key={source.id}
                        className="w-2 h-2 rounded-full bg-primary/60"
                        title={source.country}
                      />
                    ))}
                    {sources.length > 3 && (
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  {sources.slice(0, 2).map(source => (
                    <div key={source.id} className="text-xs">
                      <p className="font-medium line-clamp-1">{source.title}</p>
                      <p className="text-muted-foreground">{source.country}</p>
                    </div>
                  ))}
                  {sources.length > 2 && (
                    <p className="text-xs text-muted-foreground">
                      +{sources.length - 2} autres sources...
                    </p>
                  )}
                </div>

                <Button 
                  variant={isSelected ? "default" : "outline"} 
                  size="sm" 
                  className="w-full font-mono"
                >
                  {isSelected ? 'Cluster sélectionné' : 'Explorer ce cluster'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {Object.keys(clusters).length === 0 && (
        <div className="text-center py-12">
          <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Aucun cluster trouvé</h3>
          <p className="text-muted-foreground">
            Essayez un autre terme de recherche pour explorer différents domaines thématiques.
          </p>
        </div>
      )}

      {selectedCluster && clusters[selectedCluster] && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Sources du cluster : {selectedCluster}
              <Badge variant="outline">{clusters[selectedCluster].length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {clusters[selectedCluster].map(source => (
                <div 
                  key={source.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{source.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {source.description}
                    </p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {source.country}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Fiabilité: {source.reliability}/10
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(source.url, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ThemeExplorer;
