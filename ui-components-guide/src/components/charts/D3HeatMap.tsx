import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { chartColors } from '../../theme/chartColors';
import './charts.css';

interface HeatMapData {
  hour: number;
  visitors: number;
  pageViews: number;
  bounceRate: number;
}

interface D3HeatMapProps {
  data: HeatMapData[];
  width?: number;
  height?: number;
}

const D3HeatMap: React.FC<D3HeatMapProps> = ({ data, width = 600, height = 200 }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length || width <= 0 || height <= 0) return;

    const margin = { top: 50, right: 20, bottom: 20, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Calculate cell dimensions
    const cellWidth = innerWidth / 24;
    const cellHeight = innerHeight / 2;

    // Color scales
    const visitorColorScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.visitors) as number])
      .range([0, 1]);

    const bounceColorScale = d3.scaleLinear()
      .domain([55, 30])
      .range([1, 0]);

    // Create cells for visitors
    g.selectAll('.visitor-cell')
      .data(data)
      .enter().append('rect')
      .attr('class', 'visitor-cell')
      .attr('x', d => d.hour * cellWidth)
      .attr('y', 0)
      .attr('width', cellWidth - 1)
      .attr('height', cellHeight - 1)
      .attr('fill', d => visitorColorScale(d.visitors))
      .style('opacity', 0)
      .transition()
      .duration(500)
      .delay((_, i) => i * 20)
      .style('opacity', 1);

    // Create cells for bounce rate
    g.selectAll('.bounce-cell')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bounce-cell')
      .attr('x', d => d.hour * cellWidth)
      .attr('y', cellHeight + 2)
      .attr('width', cellWidth - 1)
      .attr('height', cellHeight - 1)
      .attr('fill', d => bounceColorScale(d.bounceRate))
      .style('opacity', 0)
      .transition()
      .duration(500)
      .delay((_, i) => i * 20)
      .style('opacity', 1);

    // Hour labels
    g.selectAll('.hour-label')
      .data(data.filter((_, i) => i % 3 === 0))
      .enter().append('text')
      .attr('class', 'hour-label')
      .attr('x', d => d.hour * cellWidth + cellWidth / 2)
      .attr('y', -5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('fill', chartColors.text.secondary)
      .text(d => `${d.hour}:00`);

    // Metric labels
    g.append('text')
      .attr('x', -30)
      .attr('y', cellHeight / 2)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('fill', chartColors.text.secondary)
      .attr('transform', `rotate(-90, -30, ${cellHeight / 2})`)
      .text('방문자');

    g.append('text')
      .attr('x', -30)
      .attr('y', cellHeight + cellHeight / 2 + 2)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('fill', chartColors.text.secondary)
      .attr('transform', `rotate(-90, -30, ${cellHeight + cellHeight / 2 + 2})`)
      .text('이탈률');

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
    g.selectAll('.visitor-cell, .bounce-cell')
      .on('mouseover', function(event, d) {
        const data = d as HeatMapData;
        d3.select(this)
          .transition()
          .duration(100)
          .attr('stroke', chartColors.text.primary)
          .attr('stroke-width', 2);
        
        // const isVisitorCell = d3.select(this).classed('visitor-cell');
        
        tooltip.transition().duration(200).style('opacity', .9);
        tooltip.html(`${data.hour}:00-${data.hour + 1}:00<br/>
          방문자: ${data.visitors}명<br/>
          페이지뷰: ${data.pageViews}<br/>
          이탈률: ${data.bounceRate.toFixed(1)}%`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .duration(100)
          .attr('stroke', 'none');
        
        tooltip.transition().duration(500).style('opacity', 0);
      });

    // Add legend for visitors
    const visitorLegend = svg.append('g')
      .attr('transform', `translate(${margin.left + innerWidth - 80}, 15)`);

    const visitorGradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'visitor-gradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '100%').attr('y2', '0%');

    const visitorSteps = 10;
    for (let i = 0; i <= visitorSteps; i++) {
      visitorGradient.append('stop')
        .attr('offset', `${(i / visitorSteps) * 100}%`)
        .attr('stop-color', visitorColorScale(i / visitorSteps * d3.max(data, d => d.visitors)!));
    }

    visitorLegend.append('rect')
      .attr('width', 60)
      .attr('height', 8)
      .style('fill', 'url(#visitor-gradient)');

    visitorLegend.append('text')
      .attr('x', 30)
      .attr('y', -5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', chartColors.text.secondary)
      .text('방문자 수');

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

export default D3HeatMap;