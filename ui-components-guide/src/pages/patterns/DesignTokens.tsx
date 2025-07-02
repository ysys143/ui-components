import React from 'react';
import './DesignTokens.css';

const DesignTokens: React.FC = () => {
  return (
    <div className="design-tokens-container" data-component="design-tokens">
      <div className="pattern-header">
        <h2>Design Tokens</h2>
        <p className="pattern-description">
          Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.
        </p>
      </div>

      <div className="token-section">
        <h3>Color Tokens</h3>
        <div className="token-grid">
          <div className="token-item">
            <div className="token-swatch" style={{ backgroundColor: 'var(--color-primary)' }}></div>
            <div className="token-info">
              <code>--color-primary</code>
              <span>#3B82F6</span>
            </div>
          </div>
          <div className="token-item">
            <div className="token-swatch" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
            <div className="token-info">
              <code>--color-secondary</code>
              <span>#8B5CF6</span>
            </div>
          </div>
          <div className="token-item">
            <div className="token-swatch" style={{ backgroundColor: 'var(--color-success)' }}></div>
            <div className="token-info">
              <code>--color-success</code>
              <span>#10B981</span>
            </div>
          </div>
          <div className="token-item">
            <div className="token-swatch" style={{ backgroundColor: 'var(--color-warning)' }}></div>
            <div className="token-info">
              <code>--color-warning</code>
              <span>#F59E0B</span>
            </div>
          </div>
          <div className="token-item">
            <div className="token-swatch" style={{ backgroundColor: 'var(--color-error)' }}></div>
            <div className="token-info">
              <code>--color-error</code>
              <span>#EF4444</span>
            </div>
          </div>
        </div>
      </div>

      <div className="token-section">
        <h3>Typography Tokens</h3>
        <div className="typography-tokens">
          <div className="typography-item">
            <h1 className="token-heading-1">Heading 1</h1>
            <code>--font-size-heading-1: 2.5rem</code>
          </div>
          <div className="typography-item">
            <h2 className="token-heading-2">Heading 2</h2>
            <code>--font-size-heading-2: 2rem</code>
          </div>
          <div className="typography-item">
            <h3 className="token-heading-3">Heading 3</h3>
            <code>--font-size-heading-3: 1.5rem</code>
          </div>
          <div className="typography-item">
            <p className="token-body">Body Text</p>
            <code>--font-size-body: 1rem</code>
          </div>
          <div className="typography-item">
            <p className="token-small">Small Text</p>
            <code>--font-size-small: 0.875rem</code>
          </div>
        </div>
      </div>

      <div className="token-section">
        <h3>Spacing Tokens</h3>
        <div className="spacing-tokens">
          <div className="spacing-item">
            <div className="spacing-visual" style={{ width: 'var(--spacing-xs)' }}></div>
            <code>--spacing-xs: 0.25rem</code>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ width: 'var(--spacing-sm)' }}></div>
            <code>--spacing-sm: 0.5rem</code>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ width: 'var(--spacing-md)' }}></div>
            <code>--spacing-md: 1rem</code>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ width: 'var(--spacing-lg)' }}></div>
            <code>--spacing-lg: 1.5rem</code>
          </div>
          <div className="spacing-item">
            <div className="spacing-visual" style={{ width: 'var(--spacing-xl)' }}></div>
            <code>--spacing-xl: 2rem</code>
          </div>
        </div>
      </div>

      <div className="token-section">
        <h3>Border Radius Tokens</h3>
        <div className="radius-tokens">
          <div className="radius-item">
            <div className="radius-visual" style={{ borderRadius: 'var(--radius-sm)' }}></div>
            <code>--radius-sm: 0.125rem</code>
          </div>
          <div className="radius-item">
            <div className="radius-visual" style={{ borderRadius: 'var(--radius-md)' }}></div>
            <code>--radius-md: 0.375rem</code>
          </div>
          <div className="radius-item">
            <div className="radius-visual" style={{ borderRadius: 'var(--radius-lg)' }}></div>
            <code>--radius-lg: 0.5rem</code>
          </div>
          <div className="radius-item">
            <div className="radius-visual" style={{ borderRadius: 'var(--radius-full)' }}></div>
            <code>--radius-full: 9999px</code>
          </div>
        </div>
      </div>

      <div className="code-example">
        <h3>Usage Example</h3>
        <pre>
          <code>{`/* Define tokens in your CSS */
:root {
  --color-primary: #3B82F6;
  --color-secondary: #8B5CF6;
  --spacing-md: 1rem;
  --radius-md: 0.375rem;
  --font-size-body: 1rem;
}

/* Use tokens in your components */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-body);
}`}</code>
        </pre>
      </div>
    </div>
  );
};

export default DesignTokens;