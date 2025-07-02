import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './charts.css';

interface FunnelData {
  stage: string;
  value: number;
  rate: number;
}

interface D3FunnelChartProps {
  data: FunnelData[];
  width?: number;
  height?: number;
}

const D3FunnelChart: React.FC<D3FunnelChartProps> = ({ data, width = 600, height = 400 }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const margin = { top: 20, right: 140, bottom: 20, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const maxValue = d3.max(data, d => d.value) as number;
    
    // Calculate trapezoid dimensions
    const stageHeight = innerHeight / data.length;
    const getWidth = (value: number) => (value / maxValue) * innerWidth;

    // Create gradient
    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'funnel-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#4f46e5')
      .attr('stop-opacity', 0.9);

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#7c3aed')
      .attr('stop-opacity', 0.7);

    // Draw funnel stages
    data.forEach((d, i) => {
      const topWidth = i === 0 ? innerWidth : getWidth(data[i - 1].value);
      const bottomWidth = getWidth(d.value);
      const xOffset = (innerWidth - topWidth) / 2;
      const xOffsetBottom = (innerWidth - bottomWidth) / 2;
      
      const pathData = `
        M ${xOffset} ${i * stageHeight}
        L ${xOffset + topWidth} ${i * stageHeight}
        L ${xOffsetBottom + bottomWidth} ${(i + 1) * stageHeight}
        L ${xOffsetBottom} ${(i + 1) * stageHeight}
        Z
      `;

      const stage = g.append('g').attr('class', 'funnel-stage');

      // Draw trapezoid
      stage.append('path')
        .attr('d', pathData)
        .attr('fill', 'url(#funnel-gradient)')
        .attr('stroke', 'white')
        .attr('stroke-width', 2)
        .style('opacity', 0)
        .transition()
        .duration(800)
        .delay(i * 200)
        .style('opacity', 1);

      // Stage label with dynamic font size
      const textWidth = bottomWidth;
      const fontSize = Math.max(10, Math.min(14, textWidth / 8));
      
      stage.append('text')
        .attr('x', innerWidth / 2)
        .attr('y', i * stageHeight + stageHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('fill', 'white')
        .attr('font-size', `${fontSize}px`)
        .attr('font-weight', '500')
        .style('opacity', 0)
        .text(d.stage)
        .transition()
        .duration(800)
        .delay(i * 200 + 400)
        .style('opacity', 1);

      // Value label
      stage.append('text')
        .attr('x', innerWidth + 10)
        .attr('y', i * stageHeight + stageHeight / 2)
        .attr('text-anchor', 'start')
        .attr('dy', '-0.5em')
        .attr('fill', '#18181b')
        .attr('font-size', '12px')
        .attr('font-weight', '500')
        .style('opacity', 0)
        .text(d.value.toLocaleString())
        .transition()
        .duration(800)
        .delay(i * 200 + 400)
        .style('opacity', 1);

      // Overall conversion rate from start
      const overallRate = i === 0 ? 100 : Math.round((d.value / data[0].value) * 100);
      stage.append('text')
        .attr('x', innerWidth + 10)
        .attr('y', i * stageHeight + stageHeight / 2)
        .attr('text-anchor', 'start')
        .attr('dy', '1em')
        .attr('fill', '#71717a')
        .attr('font-size', '10px')
        .style('opacity', 0)
        .text(`${overallRate}%`)
        .transition()
        .duration(800)
        .delay(i * 200 + 400)
        .style('opacity', 1);

      // Conversion arrow and rate
      if (i < data.length - 1) {
        const conversionRate = Math.round((data[i + 1].value / d.value) * 100);
        
        g.append('line')
          .attr('x1', innerWidth + 90)
          .attr('y1', i * stageHeight + stageHeight * 0.75)
          .attr('x2', innerWidth + 90)
          .attr('y2', (i + 1) * stageHeight + stageHeight * 0.25)
          .attr('stroke', '#71717a')
          .attr('stroke-width', 1)
          .attr('marker-end', 'url(#arrowhead)')
          .style('opacity', 0)
          .transition()
          .duration(800)
          .delay(i * 200 + 600)
          .style('opacity', 0.5);

        g.append('text')
          .attr('x', innerWidth + 100)
          .attr('y', i * stageHeight + stageHeight)
          .attr('text-anchor', 'start')
          .attr('fill', conversionRate > 50 ? '#059669' : '#dc2626')
          .attr('font-size', '10px')
          .attr('font-weight', '500')
          .style('opacity', 0)
          .text(`${conversionRate}%`)
          .transition()
          .duration(800)
          .delay(i * 200 + 600)
          .style('opacity', 1);
      }
    });

    // Arrow marker
    svg.append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('markerWidth', 10)
      .attr('markerHeight', 7)
      .attr('refX', 0)
      .attr('refY', 3.5)
      .attr('orient', 'auto')
      .append('polygon')
      .attr('points', '0 0, 10 3.5, 0 7')
      .attr('fill', '#71717a');

  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default D3FunnelChart;