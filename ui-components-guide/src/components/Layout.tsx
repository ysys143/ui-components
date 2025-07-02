import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ComponentsSidebar from './ComponentsSidebar/index';
import './Layout.css';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // 중첩된 경로도 처리 (예: /patterns/detail -> patterns)
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[0] || 'dashboard';
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightedComponent, setHighlightedComponent] = useState<string | null>(null);
  
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

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Components 페이지로 자동 이동
      if (currentPage !== 'components') {
        navigate('/components');
      }
    }
  };

  return (
    <div className="layout">
      <Navbar onSearch={handleSearch} searchQuery={searchQuery} />
      <div className="layout-body">
        <ComponentsSidebar 
          onComponentClick={handleComponentClick}
          currentPage={currentPage}
          onNavigateToPage={handleNavigateToPage}
          showToast={showToast}
          searchQuery={searchQuery}
          highlightedComponent={highlightedComponent}
          onHighlightComponent={setHighlightedComponent}
        />
        <Sidebar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
      {toastMessage && (
        <div className="toast-container">
          <div className="toast-message">
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;