import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ComponentsSidebar from './ComponentsSidebar/index';
import './Layout.css';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname.split('/')[1] || 'dashboard';
  
  const handleNavigateToPage = (page: string) => {
    navigate(`/${page}`);
  };
  
  const handleComponentClick = (componentId: string) => {
    // 컴포넌트 ID를 data-component 속성으로 가진 요소 찾기
    const elements = document.querySelectorAll(`[data-component="${componentId}"]`);
    if (elements.length > 0) {
      // 첫 번째 요소로 스크롤
      elements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // 하이라이트 효과 추가
      elements.forEach(el => {
        el.classList.add('component-highlight');
        setTimeout(() => {
          el.classList.remove('component-highlight');
        }, 2000);
      });
    }
  };


  return (
    <div className="layout">
      <Navbar />
      <div className="layout-body">
        <ComponentsSidebar 
          onComponentClick={handleComponentClick}
          currentPage={currentPage}
          onNavigateToPage={handleNavigateToPage}
        />
        <Sidebar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;