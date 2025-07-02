import React from 'react';
import './StandardPageHeader.css';

interface StandardPageHeaderProps {
  title: string;
  description: string;
  controls?: React.ReactNode;
  actions?: React.ReactNode;
}

const StandardPageHeader: React.FC<StandardPageHeaderProps> = ({
  title,
  description,
  controls,
  actions
}) => {
  return (
    <div className="standard-page-header">
      <div className="page-info">
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      
      {(controls || actions) && (
        <div className="page-header-right">
          {controls && (
            <div className="page-controls">
              {controls}
            </div>
          )}
          {actions && (
            <div className="page-actions">
              {actions}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StandardPageHeader; 