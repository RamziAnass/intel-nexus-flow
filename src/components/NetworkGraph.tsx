
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { EnrichedSource } from '../data/enrichedSources';

interface NetworkGraphProps {
  sources: EnrichedSource[];
  searchKeyword?: string;
}

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  title: string;
  type: string;
  country: string;
  url: string;
  reliability: number;
  accessLevel: string;
  ideology?: string;
  group: number;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  value: number;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ sources, searchKeyword }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      'Gouvernement': '#3b82f6',
      'Médias': '#10b981',
      'Intelligence': '#8b5cf6',
      'Académique': '#f59e0b',
      'Think Tank': '#ef4444',
      'ONG': '#06b6d4',
      'Entreprise': '#84cc16',
      'Autre': '#6b7280'
    };
    return colors[type] || '#6b7280';
  };

  const getReliabilityRadius = (reliability: number): number => {
    return Math.max(8, reliability * 3);
  };

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: Math.max(400, container.clientHeight)
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current || sources.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { width, height } = dimensions;

    // Créer les nœuds
    const nodes: GraphNode[] = sources.map((source, i) => ({
      id: source.id,
      title: source.title,
      type: source.type,
      country: source.country,
      url: source.url,
      reliability: source.reliability,
      accessLevel: source.accessLevel,
      ideology: source.ideology,
      group: source.type === 'Gouvernement' ? 0 : 
             source.type === 'Médias' ? 1 :
             source.type === 'Intelligence' ? 2 :
             source.type === 'Académique' ? 3 : 4,
      x: width / 2 + Math.random() * 100 - 50,
      y: height / 2 + Math.random() * 100 - 50
    }));

    // Créer les liens basés sur les tags communs
    const links: GraphLink[] = [];
    for (let i = 0; i < sources.length; i++) {
      for (let j = i + 1; j < sources.length; j++) {
        const commonTags = sources[i].tags.filter(tag => 
          sources[j].tags.includes(tag)
        );
        if (commonTags.length > 0) {
          links.push({
            source: sources[i].id,
            target: sources[j].id,
            value: commonTags.length
          });
        }
      }
    }

    // Configuration de la simulation
    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force("link", d3.forceLink<GraphNode, GraphLink>(links)
        .id(d => d.id)
        .distance(80)
        .strength(0.1))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => getReliabilityRadius(d.reliability) + 5));

    // Conteneur principal
    const container = svg.append("g");

    // Zoom et pan
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom as any);

    // Liens
    const link = container.append("g")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => Math.sqrt(d.value));

    // Nœuds
    const node = container.append("g")
      .selectAll("g")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node")
      .style("cursor", "pointer");

    // Cercles des nœuds
    node.append("circle")
      .attr("r", d => getReliabilityRadius(d.reliability))
      .attr("fill", d => getTypeColor(d.type))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .on("mouseover", function(event, d) {
        // Effet de survol
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", getReliabilityRadius(d.reliability) * 1.5);

        // Tooltip
        const tooltip = svg.append("g")
          .attr("class", "tooltip")
          .attr("transform", `translate(${d.x}, ${d.y})`);

        const rect = tooltip.append("rect")
          .attr("x", 10)
          .attr("y", -30)
          .attr("width", 200)
          .attr("height", 60)
          .attr("fill", "rgba(0, 0, 0, 0.9)")
          .attr("rx", 4);

        tooltip.append("text")
          .attr("x", 15)
          .attr("y", -10)
          .attr("fill", "white")
          .attr("font-size", "12px")
          .attr("font-family", "monospace")
          .text(d.title.substring(0, 25) + "...");

        tooltip.append("text")
          .attr("x", 15)
          .attr("y", 5)
          .attr("fill", "#10b981")
          .attr("font-size", "10px")
          .attr("font-family", "monospace")
          .text(`${d.type} • ${d.country}`);

        tooltip.append("text")
          .attr("x", 15)
          .attr("y", 20)
          .attr("fill", "#64ffda")
          .attr("font-size", "10px")
          .attr("font-family", "monospace")
          .text(`Fiabilité: ${d.reliability}/10`);
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", getReliabilityRadius(d.reliability));

        svg.selectAll(".tooltip").remove();
      })
      .on("click", function(event, d) {
        window.open(d.url, '_blank');
      });

    // Labels des nœuds
    node.append("text")
      .text(d => d.title.substring(0, 12) + (d.title.length > 12 ? "..." : ""))
      .attr("x", 0)
      .attr("y", d => getReliabilityRadius(d.reliability) + 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("font-family", "monospace")
      .attr("fill", "currentColor");

    // Drag behavior
    const drag = d3.drag<SVGGElement, GraphNode>()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag as any);

    // Animation de la simulation
    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as GraphNode).x!)
        .attr("y1", d => (d.source as GraphNode).y!)
        .attr("x2", d => (d.target as GraphNode).x!)
        .attr("y2", d => (d.target as GraphNode).y!);

      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [sources, dimensions]);

  return (
    <div className="w-full h-full bg-card border border-border rounded-lg overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm rounded-lg p-3">
        <h3 className="font-mono text-sm font-semibold mb-2">Cartographie Interactive</h3>
        <div className="space-y-1 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Gouvernement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Médias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Académique</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 max-w-48">
          Cliquez sur un nœud pour accéder à la source. Glissez pour explorer.
        </p>
      </div>
      
      {searchKeyword && (
        <div className="absolute top-4 right-4 z-10 bg-primary/90 backdrop-blur-sm rounded-lg p-3">
          <p className="font-mono text-sm text-primary-foreground">
            Analyse: <span className="font-bold">{searchKeyword}</span>
          </p>
          <p className="font-mono text-xs text-primary-foreground/80">
            {sources.length} sources identifiées
          </p>
        </div>
      )}

      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
};

export default NetworkGraph;
