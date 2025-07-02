import React, { useEffect, useRef } from 'react';
import { ComponentItem } from '../data/components';
import './HoverCard.css';

interface HoverCardProps {
  item: ComponentItem;
  position: { x: number; y: number };
}

const HoverCard: React.FC<HoverCardProps> = ({ item, position }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      // const viewportHeight = window.innerHeight;

      let left = position.x - rect.width / 2;
      let top = position.y - rect.height - 10;

      // 화면 밖으로 나가지 않도록 조정
      if (left < 10) left = 10;
      if (left + rect.width > viewportWidth - 10) {
        left = viewportWidth - rect.width - 10;
      }
      if (top < 10) {
        top = position.y + 40;
      }

      card.style.left = `${left}px`;
      card.style.top = `${top}px`;
    }
  }, [position]);

  return (
    <div ref={cardRef} className="hover-card">
      <h4 className="hover-card-title">{item.name}</h4>
      <p className="hover-card-description">{item.description}</p>
      {item.interactive && (
        <div className="hover-card-info">
          <span className="info-label">상태:</span>
          <span className="info-value">인터랙티브 컴포넌트</span>
        </div>
      )}
      <div className="hover-card-info">
        <span className="info-label">ID:</span>
        <span className="info-value">{item.id}</span>
      </div>
      {item.example && (
        <div className="hover-card-example">
          <span className="info-label">예제:</span>
          <code>{item.example}</code>
        </div>
      )}
    </div>
  );
};

export default HoverCard;