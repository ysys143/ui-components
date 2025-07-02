import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart3, Settings, Layers, Grid, Layout, Accessibility } from 'lucide-react';
import ComponentTooltip from './ui/ComponentTooltip';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: '대시보드', description: '핵심 지표와 데이터를 한눈에 볼 수 있는 대시보드입니다.' },
    { path: '/users', icon: Users, label: '사용자 관리', description: '사용자 목록을 테이블 형태로 관리하는 페이지입니다.' },
    { path: '/analytics', icon: BarChart3, label: '분석', description: '차트와 그래프로 데이터를 시각화하는 페이지입니다.' },
    { path: '/settings', icon: Settings, label: '설정', description: '다양한 폼 컴포넌트를 활용한 설정 페이지입니다.' },
    { path: '/foundation', icon: Layers, label: 'Foundation', description: '디자인 시스템의 기초 요소들입니다.' },
    { path: '/components', icon: Grid, label: 'Components', description: '모든 UI 컴포넌트의 인터랙티브 데모입니다.' },
    { path: '/patterns', icon: Layout, label: 'Patterns', description: '일반적인 UI 패턴과 컴포넌트 조합입니다.' },
    { path: '/states-accessibility', icon: Accessibility, label: 'States & A11y', description: 'UI 상태와 접근성 가이드라인입니다.' },
  ];

  return (
    <ComponentTooltip
      component="Sidebar"
      description="사이드바 네비게이션입니다. 주요 메뉴와 페이지 간 이동을 담당합니다."
    >
      <aside className="sidebar">
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <ComponentTooltip
              key={item.path}
              component="Nav Link"
              description={item.description}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <item.icon size={20} className="sidebar-icon" />
                <span className="sidebar-label">{item.label}</span>
              </NavLink>
            </ComponentTooltip>
          ))}
        </nav>
      </aside>
    </ComponentTooltip>
  );
};

export default Sidebar;