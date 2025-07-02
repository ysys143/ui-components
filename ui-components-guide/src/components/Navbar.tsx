import React, { useState, useEffect } from 'react';
import { Search, Bell, User, GraduationCap } from 'lucide-react';
import { useLearningMode } from '../contexts/LearningModeContext';
import ComponentTooltip from './ui/ComponentTooltip';
import './Navbar.css';

interface NavbarProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, searchQuery = '' }) => {
  const { isLearningMode, toggleLearningMode } = useLearningMode();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setLocalSearchQuery('');
      if (onSearch) {
        onSearch('');
      }
    }
  };

  return (
    <ComponentTooltip
      component="Navbar"
      description="상단 네비게이션 바입니다. 브랜드 로고, 검색, 알림, 사용자 정보 등을 포함합니다."
    >
      <nav className="navbar">
        <div className="navbar-brand">
          <ComponentTooltip
            component="Logo"
            description="브랜드 로고와 애플리케이션 이름을 표시합니다."
          >
            <h1>UI Learn</h1>
          </ComponentTooltip>
        </div>
        
        <ComponentTooltip
          component="Search"
          description="전역 검색 기능을 제공합니다. 사용자가 콘텐츠를 빠르게 찾을 수 있습니다."
        >
          <div className="navbar-search">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="컴포넌트 검색 (예: button, card, modal)..." 
              className="search-input"
              value={localSearchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
        </ComponentTooltip>

        <div className="navbar-actions">
          <ComponentTooltip
            component="Learning Mode Toggle"
            description="학습 모드를 켜고 끌 수 있습니다. 학습 모드에서는 컴포넌트 설명이 표시됩니다."
          >
            <button 
              className={`learning-toggle ${isLearningMode ? 'active' : ''}`}
              onClick={toggleLearningMode}
              title="학습 모드"
            >
              <GraduationCap size={20} />
              <span>{isLearningMode ? '학습 모드 ON' : '학습 모드 OFF'}</span>
            </button>
          </ComponentTooltip>

          <ComponentTooltip
            component="Notification Bell"
            description="알림을 표시합니다. Badge 컴포넌트로 읽지 않은 알림 개수를 표시합니다."
          >
            <button className="navbar-icon-button">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
          </ComponentTooltip>
          
          <ComponentTooltip
            component="User Avatar"
            description="사용자 프로필 아바타입니다. 클릭하면 드롭다운 메뉴가 표시됩니다."
          >
            <button className="navbar-user">
              <div className="user-avatar">
                <User size={16} />
              </div>
              <span className="user-name">김세미</span>
            </button>
          </ComponentTooltip>
        </div>
      </nav>
    </ComponentTooltip>
  );
};

export default Navbar;