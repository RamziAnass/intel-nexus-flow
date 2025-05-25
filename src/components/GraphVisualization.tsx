
import React from 'react';

interface Source {
  id: string;
  title: string;
  type: string;
  country: string;
}

interface GraphVisualizationProps {
  sources: Source[];
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({ sources }) => {
  return (
    <div className="w-full h-96 bg-muted/20 rounded-lg flex items-center justify-center border">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground font-mono">
          Visualisation interactive en cours de chargement...
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {sources.length} sources disponibles
        </p>
      </div>
    </div>
  );
};

export default GraphVisualization;
