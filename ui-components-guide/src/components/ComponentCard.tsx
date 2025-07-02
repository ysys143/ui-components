import React, { useState } from 'react';
import { ComponentItem } from '../data/components';
import HoverCard from './HoverCard';
import ComponentDemo from './ComponentDemo';
import './ComponentCard.css';

interface ComponentCardProps {
  item: ComponentItem;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ item }) => {
  const [showHover, setShowHover] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
    setShowHover(true);
  };

  const handleMouseLeave = () => {
    setShowHover(false);
  };

  return (
    <>
      <div 
        className="component-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className="component-name">{item.name}</h3>
        <p className="component-description">{item.description}</p>
        {item.interactive && (
          <div className="component-demo-container">
            <ComponentDemo componentId={item.id} />
          </div>
        )}
        {item.interactive && (
          <span className="interactive-badge">인터랙티브</span>
        )}
      </div>
      {showHover && (
        <HoverCard item={item} position={hoverPosition} />
      )}
    </>
  );
};

export default ComponentCard;