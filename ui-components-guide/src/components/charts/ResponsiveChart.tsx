import React, { useRef, useEffect, useState, useCallback } from 'react';

interface ResponsiveChartProps {
  children: (width: number, height: number) => React.ReactNode;
}

const ResponsiveChart: React.FC<ResponsiveChartProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    // Account for any padding in the container
    const computedStyle = window.getComputedStyle(containerRef.current);
    const paddingX = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    const paddingY = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    
    const actualWidth = Math.floor(width - paddingX);
    const actualHeight = Math.floor(height - paddingY);
    
    if (actualWidth > 0 && actualHeight > 0) {
      setDimensions({ width: actualWidth, height: actualHeight });
    }
  }, []);

  useEffect(() => {
    // Initial measurement after DOM is ready
    const measurementTimer = setTimeout(updateDimensions, 0);
    
    // ResizeObserver for dynamic resizing
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateDimensions);
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Window resize as fallback
    window.addEventListener('resize', updateDimensions);
    
    // Force update after a short delay to handle any layout shifts
    const delayedTimer = setTimeout(updateDimensions, 100);
    
    return () => {
      clearTimeout(measurementTimer);
      clearTimeout(delayedTimer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'relative',
        flex: 1,
        minHeight: 0
      }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div style={{ width: dimensions.width, height: dimensions.height }}>
          {children(dimensions.width, dimensions.height)}
        </div>
      )}
    </div>
  );
};

export default ResponsiveChart;