import React, { useState, useRef, useEffect } from 'react';
import { useLearningMode } from '../../contexts/LearningModeContext';
import './ComponentTooltip.css';

interface ComponentTooltipProps {
  component: string;
  description: string;
  children: React.ReactNode;
  interactive?: boolean;
}

const ComponentTooltip: React.FC<ComponentTooltipProps> = ({ 
  component, 
  description, 
  children,
  interactive = false 
}) => {
  const { isLearningMode } = useLearningMode();
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showTooltip && containerRef.current && tooltipRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = containerRect.bottom + 8;
      let left = containerRect.left + (containerRect.width - tooltipRect.width) / 2;

      // 화면 밖으로 나가지 않도록 조정
      if (left < 8) left = 8;
      if (left + tooltipRect.width > viewportWidth - 8) {
        left = viewportWidth - tooltipRect.width - 8;
      }
      if (top + tooltipRect.height > viewportHeight - 8) {
        top = containerRect.top - tooltipRect.height - 8;
      }

      setPosition({ top, left });
    }
  }, [showTooltip]);

  const handleMouseEnter = () => {
    if (isLearningMode) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  // 컴포넌트 ID 생성 (공백과 특수문자 제거)
  const componentId = component.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div 
      ref={containerRef}
      className={`component-tooltip-container ${isLearningMode ? 'learning-mode' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-component={componentId}
    >
      {children}
      {showTooltip && (
        <div 
          ref={tooltipRef}
          className="component-tooltip"
          style={{ top: position.top, left: position.left }}
        >
          <div className="tooltip-header">
            <span className="tooltip-component-name">{component}</span>
            {interactive && <span className="tooltip-badge">인터랙티브</span>}
          </div>
          <p className="tooltip-description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ComponentTooltip;