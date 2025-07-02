import React, { useState } from 'react';
import './ComponentVariants.css';

const ComponentVariants: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedVariant, setSelectedVariant] = useState('primary');
  const [isOutline, setIsOutline] = useState(false);

  return (
    <div className="component-variants-container" data-component="component-variants">
      <div className="pattern-header">
        <h2>Component Variants</h2>
        <p className="pattern-description">
          Different variations of components that can be customized through props, modifiers, or CSS classes to fit various use cases and contexts.
        </p>
      </div>

      <div className="variant-section">
        <h3>Button Variants</h3>
        
        <div className="variant-controls">
          <div className="control-item">
            <label>Size:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div className="control-item">
            <label>Variant:</label>
            <select value={selectedVariant} onChange={(e) => setSelectedVariant(e.target.value)}>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="warning">Warning</option>
            </select>
          </div>
          
          <div className="control-item">
            <label>
              <input 
                type="checkbox" 
                checked={isOutline}
                onChange={(e) => setIsOutline(e.target.checked)}
              />
              Outline Style
            </label>
          </div>
        </div>
        
        <div className="variant-preview">
          <button 
            className={`btn btn-${selectedSize} btn-${selectedVariant} ${isOutline ? 'btn-outline' : ''}`}
          >
            Button Example
          </button>
        </div>
        
        <div className="variant-showcase">
          <h4>All Button Variants</h4>
          <div className="button-grid">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-primary btn-outline">Outline</button>
            <button className="btn btn-primary" disabled>Disabled</button>
            <button className="btn btn-primary btn-small">Small</button>
            <button className="btn btn-primary btn-large">Large</button>
            <button className="btn btn-primary btn-icon">
              <span className="icon">★</span>
              With Icon
            </button>
          </div>
        </div>
      </div>

      <div className="variant-section">
        <h3>Card Variants</h3>
        
        <div className="card-grid">
          <div className="card card-default">
            <h4>Default Card</h4>
            <p>Basic card with minimal styling</p>
          </div>
          
          <div className="card card-elevated">
            <h4>Elevated Card</h4>
            <p>Card with shadow for depth</p>
          </div>
          
          <div className="card card-bordered">
            <h4>Bordered Card</h4>
            <p>Card with visible border</p>
          </div>
          
          <div className="card card-primary">
            <h4>Primary Card</h4>
            <p>Card with primary color accent</p>
          </div>
          
          <div className="card card-compact">
            <h4>Compact Card</h4>
            <p>Reduced padding</p>
          </div>
          
          <div className="card card-interactive">
            <h4>Interactive Card</h4>
            <p>Hover for effect</p>
          </div>
        </div>
      </div>

      <div className="variant-section">
        <h3>Input Variants</h3>
        
        <div className="input-showcase">
          <div className="input-group">
            <label>Default Input</label>
            <input type="text" className="input" placeholder="Enter text..." />
          </div>
          
          <div className="input-group">
            <label>Small Input</label>
            <input type="text" className="input input-small" placeholder="Small size..." />
          </div>
          
          <div className="input-group">
            <label>Large Input</label>
            <input type="text" className="input input-large" placeholder="Large size..." />
          </div>
          
          <div className="input-group">
            <label>Rounded Input</label>
            <input type="text" className="input input-rounded" placeholder="Rounded corners..." />
          </div>
          
          <div className="input-group">
            <label>Error State</label>
            <input type="text" className="input input-error" placeholder="Error state..." />
            <span className="input-message error">This field has an error</span>
          </div>
          
          <div className="input-group">
            <label>Success State</label>
            <input type="text" className="input input-success" placeholder="Success state..." />
            <span className="input-message success">Valid input</span>
          </div>
          
          <div className="input-group">
            <label>With Icon</label>
            <div className="input-wrapper">
              <span className="input-icon">🔍</span>
              <input type="text" className="input input-with-icon" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>

      <div className="variant-section">
        <h3>Badge Variants</h3>
        
        <div className="badge-showcase">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-outline">Outline</span>
          <span className="badge badge-pill">Pill</span>
          <span className="badge badge-large">Large</span>
          <span className="badge badge-small">Small</span>
        </div>
      </div>

      <div className="implementation-guide">
        <h3>Implementation Patterns</h3>
        
        <div className="pattern-examples">
          <div className="pattern-example">
            <h4>CSS Modifier Classes</h4>
            <pre><code>{`/* Base button styles */
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

/* Size variants */
.btn-small { 
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.btn-large {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

/* Color variants */
.btn-primary {
  background: #3B82F6;
  color: white;
}

.btn-secondary {
  background: #6B7280;
  color: white;
}`}</code></pre>
          </div>
          
          <div className="pattern-example">
            <h4>React Component Props</h4>
            <pre><code>{`interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  outline = false,
  disabled = false,
  children
}) => {
  const classes = [
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`,
    outline && 'btn-outline',
    disabled && 'btn-disabled'
  ].filter(Boolean).join(' ');
  
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};`}</code></pre>
          </div>
        </div>
      </div>

      <div className="variant-guidelines">
        <h3>Variant Guidelines</h3>
        <ul>
          <li>Keep variant names semantic and consistent across components</li>
          <li>Limit the number of variants to avoid complexity</li>
          <li>Ensure all variants are accessible and meet contrast requirements</li>
          <li>Document all available variants and their use cases</li>
          <li>Test variants across different contexts and screen sizes</li>
          <li>Consider using design tokens for consistent variant styling</li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentVariants;