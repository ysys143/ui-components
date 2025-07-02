import React from 'react';
import { ComponentItem } from '../data/components';
import ComponentCard from './ComponentCard';
import './ComponentGrid.css';

interface ComponentGridProps {
  items: ComponentItem[];
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ items }) => {
  return (
    <div className="component-grid">
      {items.map((item) => (
        <ComponentCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ComponentGrid;