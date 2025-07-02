import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { chartColors } from '../../theme/chartColors';
import './charts.css';

interface DataPoint {
  date: string;
  revenue: number;
  orders: number;
}

interface D3LineChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
}

const D3LineChart: React.FC<D3LineChartProps> = ({ data, width = 600, height = 300 }) => {
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

    // Parse dates
    const parseDate = d3.timeParse('%Y-%m-%d');
    const parsedData = data.map(d => ({
      ...d,
      parsedDate: parseDate(d.date) as Date
    }));

    // Scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(parsedData, d => d.parsedDate) as [Date, Date])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.revenue) as number])
      .range([innerHeight, 0]);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale)
        .tickSize(-innerHeight)
        .tickFormat(() => '')
      )
      .style('stroke', chartColors.grid)
      .style('stroke-dasharray', '2,2')
      .style('opacity', 0.5);

    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickFormat(() => '')
      )
      .style('stroke', chartColors.grid)
      .style('stroke-dasharray', '2,2')
      .style('opacity', 0.5);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat('%m/%d') as any)
      )
      .style('color', chartColors.text.secondary)
      .style('font-size', '12px');

    g.append('g')
      .call(d3.axisLeft(yScale)
        .tickFormat(d => `₩${(d as number / 1000).toFixed(0)}k`)
      )
      .style('color', chartColors.text.secondary)
      .style('font-size', '12px');

    // Line generator
    const line = d3.line<any>()
      .x(d => xScale(d.parsedDate))
      .y(d => yScale(d.revenue))
      .curve(d3.curveLinear);

    // Gradient
    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'revenue-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0).attr('y1', yScale(0))
      .attr('x2', 0).attr('y2', yScale(d3.max(data, d => d.revenue) as number));

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', chartColors.gradient.primary.start)
      .attr('stop-opacity', chartColors.gradient.primary.startOpacity);

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', chartColors.gradient.primary.end)
      .attr('stop-opacity', chartColors.gradient.primary.endOpacity);

    // Area
    const area = d3.area<any>()
      .x(d => xScale(d.parsedDate))
      .y0(innerHeight)
      .y1(d => yScale(d.revenue))
      .curve(d3.curveLinear);

    g.append('path')
      .datum(parsedData)
      .attr('fill', 'url(#revenue-gradient)')
      .attr('d', area);

    // Line
    const path = g.append('path')
      .datum(parsedData)
      .attr('fill', 'none')
      .attr('stroke', chartColors.primary)
      .attr('stroke-width', 2)
      .attr('d', line);

    // Animate line drawing
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(1500)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);

    // Dots
    g.selectAll('.dot')
      .data(parsedData)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.parsedDate))
      .attr('cy', d => yScale(d.revenue))
      .attr('r', 0)
      .attr('fill', chartColors.primary)
      .transition()
      .delay((_, i) => i * 100)
      .duration(300)
      .attr('r', 3);

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

    g.selectAll('.dot')
      .on('mouseover', function(event, d: any) {
        d3.select(this).attr('r', 5);
        tooltip.transition().duration(200).style('opacity', .9);
        tooltip.html(`매출: ₩${d.revenue.toLocaleString()}<br/>주문: ${d.orders}건`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this).attr('r', 3);
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

export default D3LineChart;