import React, { useState } from 'react';
import './ThemeVariables.css';

const ThemeVariables: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [borderRadius, setBorderRadius] = useState('8');

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-variables-container" data-component="theme-variables">
      <div className="pattern-header">
        <h2>Theme Variables</h2>
        <p className="pattern-description">
          CSS custom properties (variables) that can be dynamically changed to create different themes and customize the look of your application.
        </p>
      </div>

      <div className="theme-demo-section">
        <h3>Interactive Theme Demo</h3>
        
        <div className="theme-controls">
          <div className="control-group">
            <label>Theme Mode</label>
            <button 
              className="theme-toggle-btn"
              onClick={handleThemeToggle}
            >
              {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
          
          <div className="control-group">
            <label>Primary Color</label>
            <div className="color-input-wrapper">
              <input 
                type="color" 
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
              <span>{primaryColor}</span>
            </div>
          </div>
          
          <div className="control-group">
            <label>Border Radius</label>
            <div className="slider-wrapper">
              <input 
                type="range" 
                min="0" 
                max="20"
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
              />
              <span>{borderRadius}px</span>
            </div>
          </div>
        </div>

        <div 
          className={`theme-preview ${theme}`}
          style={{
            '--demo-primary': primaryColor,
            '--demo-radius': `${borderRadius}px`
          } as React.CSSProperties}
        >
          <div className="preview-card">
            <h4>Preview Card</h4>
            <p>This card demonstrates how theme variables affect the appearance of components.</p>
            <button className="preview-button">Action Button</button>
          </div>
          
          <div className="preview-stats">
            <div className="stat-item">
              <span className="stat-value">24</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">142</span>
              <span className="stat-label">Total Tasks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">89%</span>
              <span className="stat-label">Completion</span>
            </div>
          </div>
        </div>
      </div>

      <div className="variables-section">
        <h3>Common Theme Variables</h3>
        
        <div className="variables-grid">
          <div className="variable-category">
            <h4>Colors</h4>
            <pre><code>{`--theme-primary: #3B82F6;
--theme-secondary: #8B5CF6;
--theme-background: #FFFFFF;
--theme-surface: #F8F9FA;
--theme-text: #1A1A1A;
--theme-text-secondary: #666666;`}</code></pre>
          </div>
          
          <div className="variable-category">
            <h4>Typography</h4>
            <pre><code>{`--theme-font-family: -apple-system, system-ui;
--theme-font-size-base: 16px;
--theme-line-height: 1.5;
--theme-font-weight-normal: 400;
--theme-font-weight-bold: 600;`}</code></pre>
          </div>
          
          <div className="variable-category">
            <h4>Spacing</h4>
            <pre><code>{`--theme-spacing-unit: 8px;
--theme-spacing-xs: calc(var(--theme-spacing-unit) * 0.5);
--theme-spacing-sm: var(--theme-spacing-unit);
--theme-spacing-md: calc(var(--theme-spacing-unit) * 2);
--theme-spacing-lg: calc(var(--theme-spacing-unit) * 3);`}</code></pre>
          </div>
          
          <div className="variable-category">
            <h4>Effects</h4>
            <pre><code>{`--theme-border-radius: 8px;
--theme-shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--theme-shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--theme-transition: all 0.2s ease;`}</code></pre>
          </div>
        </div>
      </div>

      <div className="implementation-section">
        <h3>Implementation Example</h3>
        
        <div className="code-tabs">
          <div className="code-block">
            <h5>CSS Setup</h5>
            <pre><code>{`:root {
  /* Light theme (default) */
  --theme-primary: #3B82F6;
  --theme-background: #FFFFFF;
  --theme-text: #1A1A1A;
  --theme-surface: #F8F9FA;
}

[data-theme="dark"] {
  /* Dark theme overrides */
  --theme-primary: #60A5FA;
  --theme-background: #1A1A1A;
  --theme-text: #FFFFFF;
  --theme-surface: #2D2D2D;
}`}</code></pre>
          </div>
          
          <div className="code-block">
            <h5>JavaScript Theme Switcher</h5>
            <pre><code>{`function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);`}</code></pre>
          </div>
        </div>
      </div>

      <div className="best-practices">
        <h3>Best Practices</h3>
        <ul>
          <li>Use semantic naming for variables (e.g., <code>--theme-primary</code> not <code>--blue</code>)</li>
          <li>Provide fallback values for better browser support</li>
          <li>Group related variables together</li>
          <li>Use CSS calc() for derived values</li>
          <li>Store theme preference in localStorage for persistence</li>
          <li>Consider system preferences with <code>prefers-color-scheme</code></li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeVariables;