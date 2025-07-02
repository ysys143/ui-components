import React, { useState } from 'react';
import './GlobalOverride.css';

const GlobalOverride: React.FC = () => {
  const [fontFamily, setFontFamily] = useState('system');
  const [colorScheme, setColorScheme] = useState('default');
  const [density, setDensity] = useState('comfortable');

  const applyGlobalOverrides = () => {
    const root = document.documentElement;
    
    // Font family override
    if (fontFamily === 'serif') {
      root.style.setProperty('--global-font-family', 'Georgia, serif');
    } else if (fontFamily === 'mono') {
      root.style.setProperty('--global-font-family', 'Monaco, monospace');
    } else {
      root.style.setProperty('--global-font-family', '-apple-system, system-ui, sans-serif');
    }
    
    // Color scheme override
    root.setAttribute('data-color-scheme', colorScheme);
    
    // Density override
    root.setAttribute('data-density', density);
  };

  React.useEffect(() => {
    applyGlobalOverrides();
  }, [fontFamily, colorScheme, density]);

  return (
    <div className="global-override-container" data-component="global-override">
      <div className="pattern-header">
        <h2>Global Override</h2>
        <p className="pattern-description">
          Techniques for overriding and customizing component styles globally across your entire application, enabling consistent theming and branding.
        </p>
      </div>

      <div className="override-section">
        <h3>Live Global Overrides Demo</h3>
        
        <div className="override-controls">
          <div className="override-control">
            <label>Font Family</label>
            <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
              <option value="system">System Default</option>
              <option value="serif">Serif (Georgia)</option>
              <option value="mono">Monospace (Monaco)</option>
            </select>
          </div>
          
          <div className="override-control">
            <label>Color Scheme</label>
            <select value={colorScheme} onChange={(e) => setColorScheme(e.target.value)}>
              <option value="default">Default Blue</option>
              <option value="purple">Purple Theme</option>
              <option value="green">Green Theme</option>
              <option value="orange">Orange Theme</option>
            </select>
          </div>
          
          <div className="override-control">
            <label>Spacing Density</label>
            <select value={density} onChange={(e) => setDensity(e.target.value)}>
              <option value="compact">Compact</option>
              <option value="comfortable">Comfortable</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>
        </div>
        
        <div className="override-demo">
          <div className="demo-card">
            <h4>Sample Component</h4>
            <p>This card demonstrates how global overrides affect component appearance.</p>
            <div className="demo-actions">
              <button className="demo-button primary">Primary Action</button>
              <button className="demo-button secondary">Secondary</button>
            </div>
          </div>
          
          <div className="demo-form">
            <h4>Form Example</h4>
            <div className="form-field">
              <label>Name</label>
              <input type="text" className="demo-input" placeholder="Enter your name" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" className="demo-input" placeholder="email@example.com" />
            </div>
            <div className="form-field">
              <label>
                <input type="checkbox" />
                <span>Subscribe to newsletter</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="override-methods">
        <h3>Override Methods</h3>
        
        <div className="method-grid">
          <div className="method-card">
            <h4>1. CSS Custom Properties</h4>
            <p>Use CSS variables for dynamic theming</p>
            <pre><code>{`:root {
  --primary-color: #3B82F6;
  --font-family: system-ui;
  --spacing-unit: 8px;
}

/* Override in specific contexts */
.custom-theme {
  --primary-color: #8B5CF6;
  --spacing-unit: 10px;
}`}</code></pre>
          </div>
          
          <div className="method-card">
            <h4>2. Global CSS Reset</h4>
            <p>Normalize styles across browsers</p>
            <pre><code>{`/* Reset and normalize */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global defaults */
body {
  font-family: var(--font-family);
  color: var(--text-color);
  line-height: 1.5;
}`}</code></pre>
          </div>
          
          <div className="method-card">
            <h4>3. Utility Classes</h4>
            <p>Override with utility-first approach</p>
            <pre><code>{`/* Utility classes */
.text-primary { color: var(--primary) !important; }
.bg-secondary { background: var(--secondary) !important; }
.p-0 { padding: 0 !important; }
.m-auto { margin: auto !important; }

/* Usage */
<div class="card text-primary bg-secondary p-0">
  Custom styled card
</div>`}</code></pre>
          </div>
          
          <div className="method-card">
            <h4>4. Theme Provider Pattern</h4>
            <p>React context for theme management</p>
            <pre><code>{`const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={\`theme-\${theme.name}\`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Usage
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>`}</code></pre>
          </div>
        </div>
      </div>

      <div className="override-examples">
        <h3>Practical Examples</h3>
        
        <div className="example-section">
          <h4>Brand Customization</h4>
          <div className="brand-example">
            <pre><code>{`/* Brand-specific overrides */
.brand-acme {
  --primary: #FF6B6B;
  --secondary: #4ECDC4;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;
}

.brand-techco {
  --primary: #00D4FF;
  --secondary: #0066CC;
  --font-heading: 'Roboto', sans-serif;
  --font-body: 'Inter', sans-serif;
}`}</code></pre>
            
            <div className="brand-demos">
              <div className="brand-demo brand-acme">
                <h5>ACME Corp</h5>
                <p>Warm, friendly brand colors</p>
                <button>Get Started</button>
              </div>
              <div className="brand-demo brand-techco">
                <h5>TechCo</h5>
                <p>Modern, tech-focused design</p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="example-section">
          <h4>Responsive Overrides</h4>
          <pre><code>{`/* Mobile-first responsive overrides */
:root {
  --spacing: 0.5rem;
  --font-size: 14px;
}

@media (min-width: 768px) {
  :root {
    --spacing: 1rem;
    --font-size: 16px;
  }
}

@media (min-width: 1024px) {
  :root {
    --spacing: 1.5rem;
    --font-size: 18px;
  }
}`}</code></pre>
        </div>
      </div>

      <div className="override-strategies">
        <h3>Override Strategies</h3>
        
        <div className="strategy-list">
          <div className="strategy-item">
            <h4>Specificity Management</h4>
            <ul>
              <li>Use CSS custom properties for easy overrides</li>
              <li>Avoid !important unless absolutely necessary</li>
              <li>Layer styles with increasing specificity</li>
              <li>Use data attributes for state-based styling</li>
            </ul>
          </div>
          
          <div className="strategy-item">
            <h4>Performance Considerations</h4>
            <ul>
              <li>Minimize runtime style calculations</li>
              <li>Use CSS transforms for animations</li>
              <li>Leverage CSS containment for large apps</li>
              <li>Implement critical CSS for faster loads</li>
            </ul>
          </div>
          
          <div className="strategy-item">
            <h4>Maintainability</h4>
            <ul>
              <li>Document all global overrides</li>
              <li>Create a style guide for consistency</li>
              <li>Use semantic naming conventions</li>
              <li>Regular audit of unused styles</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="override-warning">
        <h4>⚠️ Best Practices</h4>
        <ul>
          <li>Always scope global overrides appropriately to avoid conflicts</li>
          <li>Test overrides across different browsers and devices</li>
          <li>Consider accessibility when changing colors and fonts</li>
          <li>Provide fallbacks for custom properties in older browsers</li>
          <li>Keep override logic simple and predictable</li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalOverride;