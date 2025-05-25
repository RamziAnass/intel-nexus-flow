import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Source, SourceType } from '../data/sources';
import { SourceType as EnrichedSourceType } from '../data/enrichedSources';
import { toast } from '@/components/ui/use-toast';

interface GraphVisualizationProps {
  sources: Source[];
}

type Node = d3.SimulationNodeDatum & {
  id: string;
  title: string;
  url: string;
  type: SourceType | EnrichedSourceType;
  country: string;
  group: string;
  radius: number;
};

type Link = d3.SimulationLinkDatum<Node> & {
  source: string | Node;
  target: string | Node;
  value: number;
};

interface Graph {
  nodes: Node[];
  links: Link[];
}

const typeToColor: Record<string, string> = {
  [SourceType.PRESS]: '#3b82f6',
  [SourceType.THINK_TANK]: '#8b5cf6',
  [SourceType.BLOG]: '#ec4899',
  [SourceType.GOVERNMENT]: '#10b981',
  [SourceType.ACADEMIC]: '#f59e0b',
  [SourceType.NGO]: '#6366f1',
  [SourceType.SPECIALIZED]: '#ef4444',
  // New enriched source types
  'INTELLIGENCE': '#10b981',
  'MILITARY': '#64748b',
  'ECONOMIC': '#fb923c',
  'DIPLOMATIC': '#14b8a6',
  'CYBER': '#8b5cf6',
  'SOCIAL_MEDIA': '#f43f5e',
  'RESEARCH_INSTITUTE': '#06b6d4',
};

const GraphVisualization = ({ sources }: GraphVisualizationProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: Math.max(containerRef.current.clientWidth * 0.6, 400),
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current || !tooltipRef.current || sources.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Create graph data
    const graph: Graph = {
      nodes: [],
      links: []
    };

    // Create nodes from sources
    sources.forEach(source => {
      graph.nodes.push({
        id: source.id,
        title: source.title,
        url: source.url,
        type: source.type,
        country: source.country,
        group: source.type.toString(),
        radius: 12
      });
    });

    // Create links based on tags
    const tagMap: Record<string, string[]> = {};
    
    sources.forEach(source => {
      source.tags.forEach(tag => {
        if (!tagMap[tag]) {
          tagMap[tag] = [];
        }
        tagMap[tag].push(source.id);
      });
    });

    Object.values(tagMap).forEach(sourceIds => {
      for (let i = 0; i < sourceIds.length; i++) {
        for (let j = i + 1; j < sourceIds.length; j++) {
          graph.links.push({
            source: sourceIds[i],
            target: sourceIds[j],
            value: 1
          });
        }
      }
    });

    // Create visualization
    const width = dimensions.width;
    const height = dimensions.height;

    const container = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Add zoom capability
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        container.attr('transform', event.transform);
      });

    svg.call(zoom as any);

    // Create a forceSimulation
    const simulation = d3.forceSimulation(graph.nodes)
      .force('link', d3.forceLink(graph.links).id((d: any) => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius((d: any) => d.radius + 15));

    // Create links
    const link = container
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.4)
      .selectAll('line')
      .data(graph.links)
      .join('line')
      .attr('stroke-width', 1.5)
      .attr('class', 'link');

    // Create nodes
    const node = container
      .append('g')
      .selectAll('.node')
      .data(graph.nodes)
      .join('g')
      .attr('class', 'node')
      .on('click', (_event, d: any) => {
        window.open(d.url, '_blank');
        toast({
          title: "Ouverture du lien",
          description: `Redirection vers ${d.title}`,
        });
      })
      .on('mouseover', (event, d: any) => {
        const tooltip = d3.select(tooltipRef.current);
        tooltip
          .style('opacity', '1')
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`)
          .html(`
            <div class="font-bold mb-1 text-sm">${d.title}</div>
            <div class="text-muted-foreground text-xs">${d.type.replace('_', ' ')}</div>
            <div class="text-muted-foreground text-xs">${d.country}</div>
            <div class="mt-2 text-emerald-400 text-xs">${d.url.replace('https://', '')}</div>
          `);
      })
      .on('mouseout', () => {
        d3.select(tooltipRef.current).style('opacity', '0');
      })
      .call(d3.drag<any, any>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
      );

    // Add circles to nodes
    node.append('circle')
      .attr('r', (d: any) => d.radius)
      .attr('fill', (d: any) => typeToColor[d.type.toString()] || '#999')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('class', 'transition-all duration-200 hover:stroke-emerald-400');

    // Add labels to nodes
    node.append('text')
      .attr('class', 'node-label')
      .attr('dx', 18)
      .attr('dy', 4)
      .text((d: any) => d.title.length > 20 ? d.title.substring(0, 20) + '...' : d.title)
      .attr('fill', 'currentColor')
      .attr('stroke', 'none')
      .style('font-size', '10px');

    // Add type indicator
    node.append('text')
      .attr('class', 'node-type')
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .text((d: any) => d.type.toString().charAt(0))
      .attr('fill', '#fff')
      .attr('font-size', '10px')
      .attr('font-weight', 'bold')
      .attr('pointer-events', 'none');

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [sources, dimensions]);

  return (
    <div className="w-full" ref={containerRef}>
      <svg ref={svgRef} className="w-full border rounded-lg bg-muted/20" />
      <div ref={tooltipRef} className="node-tooltip"></div>
    </div>
  );
};

export default GraphVisualization;
