import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './charts.css';

interface BarData {
  region: string;
  sales: number;
  growth: number;
}

interface D3BarChartProps {
  data: BarData[];
  width?: number;
  height?: number;
}

const D3BarChart: React.FC<D3BarChartProps> = ({ data, width = 600, height = 300 }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length || width <= 0 || height <= 0) return;

    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.region))
      .range([0, innerWidth])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.sales) as number])
      .range([innerHeight, 0]);

    // Color scale based on growth
    const colorScale = d3.scaleLinear<string>()
      .domain([-5, 0, 15])
      .range(['#dc2626', '#71717a', '#059669']);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickFormat(() => '')
      )
      .style('stroke-dasharray', '2,2')
      .style('opacity', 0.3);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .style('color', '#71717a')
      .style('font-size', '12px');

    g.append('g')
      .call(d3.axisLeft(yScale)
        .tickFormat(d => `₩${(d as number / 1000000).toFixed(1)}M`)
      )
      .style('color', '#71717a')
      .style('font-size', '12px');

    // Bars
    const bars = g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.region) as number)
      .attr('width', xScale.bandwidth())
      .attr('y', innerHeight)
      .attr('height', 0)
      .attr('fill', d => colorScale(d.growth))
      .attr('rx', 2);

    // Animate bars
    bars.transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .attr('y', d => yScale(d.sales))
      .attr('height', d => innerHeight - yScale(d.sales));

    // Growth labels
    g.selectAll('.growth-label')
      .data(data)
      .enter().append('text')
      .attr('class', 'growth-label')
      .attr('x', d => (xScale(d.region) as number) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.sales) - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('font-weight', '500')
      .attr('fill', d => d.growth >= 0 ? '#059669' : '#dc2626')
      .style('opacity', 0)
      .text(d => `${d.growth > 0 ? '+' : ''}${d.growth}%`)
      .transition()
      .delay(1000)
      .duration(300)
      .style('opacity', 1);

    // Tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'd3-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '8px 12px')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('pointer-events', 'none');

    bars
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition()
          .duration(100)
          .attr('opacity', 0.8);
        
        tooltip.transition().duration(200).style('opacity', .9);
        tooltip.html(`${d.region}<br/>매출: ₩${d.sales.toLocaleString()}<br/>성장률: ${d.growth}%`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .duration(100)
          .attr('opacity', 1);
        
        tooltip.transition().duration(500).style('opacity', 0);
      });

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

export default D3BarChart;