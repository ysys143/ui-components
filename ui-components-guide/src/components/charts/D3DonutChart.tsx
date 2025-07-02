import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { chartColors } from '../../theme/chartColors';
import './charts.css';

interface DonutData {
  segment?: string;
  category?: string;
  value: number;
  revenue: number;
}

interface D3DonutChartProps {
  data: DonutData[];
  width?: number;
  height?: number;
}

const D3DonutChart: React.FC<D3DonutChartProps> = ({ data, width = 300, height = 300 }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length || width <= 0 || height <= 0) return;

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Helper function to get the label key
    const getLabel = (d: DonutData) => d.segment || d.category || '';

    // Color scale with distinct colors for each segment
    const colorScale = d3.scaleOrdinal()
      .domain(data.map(getLabel))
      .range(chartColors.categorical.slice(0, data.length));

    // Create pie generator
    const pie = d3.pie<DonutData>()
      .value(d => d.value)
      .sort(null);

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<DonutData>>()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    // Create hover arc
    const hoverArc = d3.arc<d3.PieArcDatum<DonutData>>()
      .innerRadius(innerRadius)
      .outerRadius(radius + 10);

    // Create arcs
    const arcs = g.selectAll('.arc')
      .data(pie(data))
      .enter().append('g')
      .attr('class', 'arc');

    // Draw paths
    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => colorScale(getLabel(d.data)) as string)
      .style('opacity', 0)
      .transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .style('opacity', 1)
      .attrTween('d', function(d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
          return arc(interpolate(t)) as string;
        };
      });

    // Center text
    const centerGroup = g.append('g');
    
    const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
    
    centerGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.2em')
      .attr('font-size', '24px')
      .attr('font-weight', '500')
      .attr('fill', chartColors.text.primary)
      .text(`₩${(totalRevenue / 1000000).toFixed(1)}M`);
    
    centerGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .attr('font-size', '12px')
      .attr('fill', chartColors.text.secondary)
      .text('총 매출');

    // Tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'd3-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', chartColors.tooltip.background)
      .style('color', chartColors.tooltip.text)
      .style('padding', '8px 12px')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('box-shadow', '0 2px 4px rgba(0,0,0,0.2)');

    // Add interactivity
    arcs.select('path')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', hoverArc(d as any) as string);
        
        tooltip.transition().duration(200).style('opacity', .9);
        tooltip.html(`${getLabel(d.data)}<br/>비율: ${d.data.value}%<br/>매출: ₩${d.data.revenue.toLocaleString()}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function(_event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arc(d as any) as string);
        
        tooltip.transition().duration(500).style('opacity', 0);
      });

    // Add labels
    const labelArc = d3.arc<d3.PieArcDatum<DonutData>>()
      .innerRadius(radius * 0.8)
      .outerRadius(radius * 0.8);

    arcs.append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', '500')
      .attr('fill', chartColors.text.inverse)
      .style('opacity', 0)
      .text(d => d.data.value > 10 ? `${d.data.value}%` : '')
      .transition()
      .delay(800)
      .duration(300)
      .style('opacity', 1);

    return () => {
      d3.select('body').selectAll('.d3-tooltip').remove();
    };
  }, [data, width, height]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg ref={svgRef} width={width} height={height} style={{ display: 'block' }}></svg>
    </div>
  );
};

export default D3DonutChart;