// Unified color theme for all charts
export const chartColors = {
  // Primary palette for data visualization
  primary: '#3b82f6',      // Blue
  secondary: '#10b981',    // Emerald
  tertiary: '#f59e0b',     // Amber
  quaternary: '#8b5cf6',   // Purple
  quinary: '#ec4899',      // Pink
  
  // Sequential color array for categorical data
  categorical: [
    '#3b82f6',  // Blue
    '#10b981',  // Emerald
    '#f59e0b',  // Amber
    '#8b5cf6',  // Purple
    '#ec4899',  // Pink
    '#06b6d4',  // Cyan
    '#f97316',  // Orange
    '#6366f1',  // Indigo
  ],
  
  // Status colors
  positive: '#10b981',     // Emerald (for positive values, growth)
  negative: '#ef4444',     // Red (for negative values, decline)
  neutral: '#6b7280',      // Gray (for neutral/zero values)
  
  // Text and UI elements
  text: {
    primary: '#1f2937',    // Dark gray (main text)
    secondary: '#6b7280',  // Medium gray (labels, secondary text)
    muted: '#9ca3af',      // Light gray (muted text)
    inverse: '#ffffff',    // White (on dark backgrounds)
  },
  
  // Chart-specific elements
  grid: '#e5e7eb',         // Light gray (grid lines)
  axis: '#d1d5db',         // Medium gray (axis lines)
  background: '#ffffff',    // White (chart background)
  
  // Gradients
  gradient: {
    primary: {
      start: '#3b82f6',
      startOpacity: 0.2,
      end: '#3b82f6',
      endOpacity: 0.02,
    },
    heatmap: {
      visitor: {
        low: '#dbeafe',
        high: '#1e40af',
      },
      bounce: {
        low: '#fee2e2',
        high: '#b91c1c',
      },
    },
  },
  
  // Tooltip
  tooltip: {
    background: 'rgba(17, 24, 39, 0.95)', // Very dark gray
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.1)',
  },
};

// Helper function to get color by index
export const getColorByIndex = (index: number): string => {
  return chartColors.categorical[index % chartColors.categorical.length];
};

// Helper function for status colors
export const getStatusColor = (value: number): string => {
  if (value > 0) return chartColors.positive;
  if (value < 0) return chartColors.negative;
  return chartColors.neutral;
};