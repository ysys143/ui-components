import React, { useState } from 'react';
import './ComponentDemo.css';

interface ComponentDemoProps {
  componentId: string;
}

const ComponentDemo: React.FC<ComponentDemoProps> = ({ componentId }) => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [rating, setRating] = useState(3);

  const renderDemo = () => {
    switch (componentId) {
      case 'button':
        return (
          <button className="demo-button">
            Click Me
          </button>
        );
      
      case 'icon-button':
        return (
          <button className="demo-icon-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
          </button>
        );
      
      case 'checkbox':
        return (
          <label className="demo-checkbox">
            <input 
              type="checkbox" 
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>체크박스</span>
          </label>
        );
      
      case 'radio-button':
        return (
          <div className="demo-radio-group">
            <label className="demo-radio">
              <input 
                type="radio" 
                name="demo-radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <span>옵션 1</span>
            </label>
            <label className="demo-radio">
              <input 
                type="radio" 
                name="demo-radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <span>옵션 2</span>
            </label>
          </div>
        );
      
      case 'switch':
        return (
          <label className="demo-switch">
            <input 
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="switch-slider"></span>
          </label>
        );
      
      case 'text-input':
        return (
          <input 
            type="text"
            className="demo-input"
            placeholder="텍스트 입력..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      
      case 'number-input':
        return (
          <input 
            type="number"
            className="demo-input"
            placeholder="숫자 입력..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      
      case 'textarea':
        return (
          <textarea 
            className="demo-textarea"
            placeholder="여러 줄 텍스트..."
            rows={3}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      
      case 'select':
        return (
          <select 
            className="demo-select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="option1">옵션 1</option>
            <option value="option2">옵션 2</option>
            <option value="option3">옵션 3</option>
          </select>
        );
      
      case 'slider':
        return (
          <div className="demo-slider-container">
            <input 
              type="range"
              className="demo-slider"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
            />
            <span className="slider-value">{sliderValue}</span>
          </div>
        );
      
      case 'rating':
        return (
          <div className="demo-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
        );
      
      case 'tags':
        return (
          <div className="demo-tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Vite</span>
          </div>
        );
      
      case 'accordion':
        return (
          <div className="demo-accordion">
            <button className="accordion-header">
              클릭하여 펼치기
            </button>
          </div>
        );
      
      case 'tabs':
        return (
          <div className="demo-tabs">
            <button className="tab active">탭 1</button>
            <button className="tab">탭 2</button>
            <button className="tab">탭 3</button>
          </div>
        );
      
      case 'pagination':
        return (
          <div className="demo-pagination">
            <button className="page-btn">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">›</button>
          </div>
        );
      
      case 'modal':
      case 'dialog':
        return (
          <button className="demo-button-outline">
            모달 열기
          </button>
        );
      
      case 'toast':
        return (
          <button className="demo-button-outline">
            토스트 표시
          </button>
        );
      
      case 'tooltip':
        return (
          <span className="demo-tooltip-trigger">
            마우스를 올려보세요
          </span>
        );
      
      case 'popover':
        return (
          <button className="demo-button-outline">
            팝오버 열기
          </button>
        );
      
      default:
        return (
          <div className="demo-placeholder">
            {componentId} 데모
          </div>
        );
    }
  };

  return (
    <div className="component-demo">
      {renderDemo()}
    </div>
  );
};

export default ComponentDemo;