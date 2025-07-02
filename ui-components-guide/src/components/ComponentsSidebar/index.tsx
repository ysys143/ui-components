import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import ComponentDescription from './ComponentDescription';
import { componentsData } from '../../data/components';
import './ComponentsSidebar.css';

interface PageComponent {
  id: string;
  name: string;
  category: string;
}

interface ComponentsSidebarProps {
  onComponentClick: (componentId: string) => void;
  currentPage: string;
  onNavigateToPage?: (page: string) => void;
}

const ComponentsSidebar: React.FC<ComponentsSidebarProps> = ({ onComponentClick, currentPage, onNavigateToPage }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [visibleComponent, setVisibleComponent] = useState<string | null>(null);
  const [hoveredComponent, setHoveredComponent] = useState<{ id: string; name: string } | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 현재 페이지에서 사용되는 컴포넌트들 (실제 ComponentTooltip에서 사용하는 이름과 매핑)
  const pageComponents: Record<string, string[]> = {
    dashboard: [
      'page-header', 'metrics-grid', 'metric-card', 'trend-badge',
      'line-chart-card', 'bar-chart-card', 'pie-chart-card', 'area-chart-card',
      'recent-activity-card', 'activity-list'
    ],
    users: [
      'page-header-with-actions', 'primary-button', 'table-toolbar',
      'search-input-with-icon', 'filter-button', 'data-table', 'checkbox',
      'user-cell', 'role-badge', 'status-badge', 'action-menu', 'pagination'
    ],
    analytics: [
      'page-header-with-filters', 'date-range-picker', 'export-button',
      'summary-cards', 'multi-line-chart', 'chart-legend', 'funnel-chart',
      'funnel-step', 'stacked-bar-chart', 'progress-list', 'progress-bar'
    ],
    settings: [
      'settings-header', 'save-button', 'tab-navigation', 'profile-form',
      'form-label', 'text-input', 'helper-text', 'textarea', 'file-upload',
      'notification-settings', 'switch-toggle', 'security-settings',
      'appearance-settings', 'radio-group', 'color-picker'
    ],
    foundation: [
      'page-header', 'color-system', 'color-swatch', 'color', 'typography-scale', 'typography-sample', 'typography',
      'spacing-system', 'spacing-token', 'spacing', 'elevation-system', 'shadow-sample', 'elevation',
      'border-radius-system', 'border-radius-sample', 'border-radius', 'motion-system', 'transition-duration',
      'easing-functions', 'motion', 'grid-system', 'breakpoints', 'iconography', 'layout-structure'
    ],
    components: [
      'page-header', 'button', 'icon-button', 'text-input', 'number-input', 'textarea', 
      'select', 'search-input', 'autocomplete', 'date-picker', 'file-uploader', 'checkbox', 'radio-button', 
      'switch', 'slider', 'stepper', 'rating', 'card', 'badge', 'avatar', 'tags', 
      'progress-bar', 'skeleton', 'tile', 'treeview', 'tabs', 'breadcrumb', 'pagination', 
      'navbar', 'sidebar', 'menu', 'link', 'accordion', 
      'alert', 'toast', 'list', 'structured-list', 'data-table', 'timeline', 'divider',
      'modal', 'dropdown', 'tooltip'
    ],
    patterns: [
      'page-header', 'login-form', 'dashboard-layout', 'form-wizard', 'master-detail',
      'search-results', 'card-grid', 'settings-layout', 'empty-states'
    ],
    'states-accessibility': [
      'page-header', 'button-states', 'input-states', 'validation-messages',
      'focus-indicators', 'aria-examples', 'screen-reader', 'contrast-ratios',
      'accessibility-options', 'device-support', 'error-handling'
    ]
  };

  // 현재 페이지에서 사용되는 컴포넌트들
  const currentPageComponents = pageComponents[currentPage] || [];
  
  // 컴포넌트가 어느 페이지에 있는지 찾기
  const findComponentPage = (componentId: string): string | null => {
    // Foundation 컴포넌트들을 직접 매핑
    const foundationComponents = ['color', 'typography', 'spacing', 'elevation', 'border-radius', 'motion', 'iconography', 'grid-system', 'breakpoints', 'layout-structure'];
    if (foundationComponents.includes(componentId)) {
      return 'foundation';
    }
    
    // pageSpecificIds를 먼저 확인 (더 구체적인 매핑)
    const pageSpecificIds: Record<string, string[]> = {
        'button': ['button'],
      'icon-button': ['icon-button'],
        'card': ['card'],
        'badge': ['badge'],
        'text-input': ['text-input'],
      'search': ['search-input'],
        'textarea': ['textarea'],
        'number-input': ['number-input'],
        'select': ['select'],
        'date-picker': ['date-picker'],
        'file-uploader': ['file-uploader'],
        'checkbox': ['checkbox'],
        'radio-button': ['radio-button'],
        'switch': ['switch'],
        'slider': ['slider'],
        'stepper': ['stepper'],
        'rating': ['rating'],
        'avatar': ['avatar'],
        'tags': ['tags'],
        'skeleton': ['skeleton'],
        'tabs': ['tabs'],
        'breadcrumb': ['breadcrumb'],
        'pagination': ['pagination'],
        'accordion': ['accordion'],
        'alert': ['alert'],
        'toast': ['toast'],
        'progress-bar': ['progress-bar'],
        'form': ['profile-form', 'notification-settings', 'security-settings', 'appearance-settings', 'login-form', 'form-wizard'],
        'table': ['data-table'],
      'data-table': ['data-table'],
        'list': ['list'],
      'structured-list': ['structured-list'],
        'timeline': ['timeline'],
        'divider': ['divider'],
        'dropdown': ['action-menu'],
        'color': ['color-system'],
        'typography': ['typography-scale'],
        'spacing': ['spacing-system'],
        'elevation': ['elevation-system'],
        'border-radius': ['border-radius-system'],
        'motion': ['motion-system'],
        'grid-system': ['grid-system'],
        'breakpoints': ['breakpoints'],
        'iconography': ['iconography'],
        'layout-structure': ['layout-structure'],
        'dashboard-layout': ['dashboard-layout'],
        'master-detail': ['master-detail'],
        'search-results': ['search-results'],
        'card-grid': ['card-grid'],
        'settings-page': ['settings-layout'],
        'empty-states': ['empty-states'],
        'states': ['button-states', 'input-states'],
        'validation': ['validation-messages'],
        'focus-management': ['focus-indicators'],
        'aria': ['aria-examples'],
        'screen-reader': ['screen-reader'],
        'color-contrast': ['contrast-ratios'],
        'theme-customization': ['accessibility-options'],
        'responsive-design': ['device-support'],
        'error-recovery': ['error-handling']
      };
      
    // 각 페이지를 순회하면서 컴포넌트 찾기
    for (const [page, components] of Object.entries(pageComponents)) {
      // 직접 매칭
      if (components.includes(componentId)) {
        return page;
      }
      
      // pageSpecificIds를 통한 매칭
      const relatedIds = pageSpecificIds[componentId] || [];
      for (const relatedId of relatedIds) {
        if (components.includes(relatedId)) {
          return page;
        }
      }
    }
    return null;
  };
  
  // 컴포넌트 ID를 페이지의 실제 data-component 값으로 변환 (1:1 매핑)
  const getDataComponentIds = (componentId: string): string[] => {
    // UI Components 페이지의 첫 번째 컴포넌트만 매핑
    const pageSpecificIds: Record<string, string[]> = {
      'button': ['button'],
      'icon-button': ['icon-button'],
      'card': ['card'],
      'badge': ['badge'],
      'text-input': ['text-input'],
      'search': ['search-input'],
      'textarea': ['textarea'],
      'number-input': ['number-input'],
      'select': ['select'],
      'date-picker': ['date-picker'],
      'file-uploader': ['file-uploader'],
      'checkbox': ['checkbox'],
      'radio-button': ['radio-button'],
      'switch': ['switch'],
      'slider': ['slider'],
      'stepper': ['stepper'],
      'rating': ['rating'],
      'avatar': ['avatar'],
      'tags': ['tags'],
      'skeleton': ['skeleton'],
      'tabs': ['tabs'],
      'breadcrumb': ['breadcrumb'],
      'pagination': ['pagination'],
      'accordion': ['accordion'],
      'alert': ['alert'],
      'toast': ['toast'],
      'progress-bar': ['progress-bar'],
      'form': ['profile-form', 'notification-settings', 'security-settings', 'appearance-settings', 'login-form', 'form-wizard'],
      'table': ['data-table'],
      'data-table': ['data-table'],
      'list': ['list'],
      'structured-list': ['structured-list'],
      'timeline': ['timeline'],
      'divider': ['divider'],
      'color': ['color-system', 'color-swatch'],
      'typography': ['typography-scale', 'typography-sample'],
      'spacing': ['spacing-system', 'spacing-token'],
      'elevation': ['elevation-system', 'shadow-sample'],
      'border-radius': ['border-radius-system', 'border-radius-sample'],
      'motion': ['motion-system', 'transition-duration', 'easing-functions'],
      'grid-system': ['grid-system'],
      'breakpoints': ['breakpoints'],
      'iconography': ['iconography'],
      'layout-structure': ['layout-structure'],
      'dashboard-layout': ['dashboard-layout'],
      'master-detail': ['master-detail'],
      'search-results': ['search-results'],
      'card-grid': ['card-grid'],
      'settings-page': ['settings-layout'],
      'empty-states': ['empty-states'],
      'states': ['button-states', 'input-states'],
      'validation': ['validation-messages'],
      'focus-management': ['focus-indicators'],
      'aria': ['aria-examples'],
      'screen-reader': ['screen-reader'],
      'color-contrast': ['contrast-ratios'],
      'theme-customization': ['accessibility-options'],
      'responsive-design': ['device-support'],
      'error-recovery': ['error-handling'],
      'modal': ['modal'],
      'dropdown': ['dropdown', 'action-menu'],
      'tooltip': ['tooltip'],
      'autocomplete': ['autocomplete'],
      'tile': ['tile'],
      'treeview': ['treeview'],
      'navbar': ['navbar-example'],
      'sidebar': ['sidebar-example'],
      'menu': ['menu'],
      'link': ['link']
    };
    
    return pageSpecificIds[componentId] || [componentId];
  };

  // 컴포넌트가 현재 페이지에서 사용되는지 확인
  const isComponentActive = (componentId: string) => {
    // 실제 페이지에서 사용하는 컴포넌트 ID와 매칭
    const pageSpecificIds: Record<string, string[]> = {
      'button': ['button'],
      'icon-button': ['icon-button'],
      'card': ['card'],
      'badge': ['badge'],
      'text-input': ['text-input'],
      'search': ['search-input'],
      'textarea': ['textarea'],
      'number-input': ['number-input'],
      'select': ['select'],
      'date-picker': ['date-picker'],
      'file-uploader': ['file-uploader'],
      'checkbox': ['checkbox'],
      'radio-button': ['radio-button'],
      'switch': ['switch'],
      'slider': ['slider'],
      'stepper': ['stepper'],
      'rating': ['rating'],
      'avatar': ['avatar'],
      'tags': ['tags'],
      'skeleton': ['skeleton'],
      'tabs': ['tabs'],
      'breadcrumb': ['breadcrumb'],
      'pagination': ['pagination'],
      'accordion': ['accordion'],
      'alert': ['alert'],
      'toast': ['toast'],
      'progress-bar': ['progress-bar'],
      'form': ['profile-form', 'notification-settings', 'security-settings', 'appearance-settings', 'login-form', 'form-wizard'],
      'table': ['data-table'],
      'data-table': ['data-table'],
      'list': ['list'],
      'structured-list': ['structured-list'],
      'timeline': ['timeline'],
      'divider': ['divider'],
      'color': ['color-system', 'color-swatch'],
      'typography': ['typography-scale', 'typography-sample'],
      'spacing': ['spacing-system', 'spacing-token'],
      'elevation': ['elevation-system', 'shadow-sample'],
      'border-radius': ['border-radius-system', 'border-radius-sample'],
      'motion': ['motion-system', 'transition-duration', 'easing-functions'],
      'grid-system': ['grid-system'],
      'breakpoints': ['breakpoints'],
      'dashboard-layout': ['dashboard-layout'],
      'master-detail': ['master-detail'],
      'search-results': ['search-results'],
      'card-grid': ['card-grid'],
      'settings-page': ['settings-layout'],
      'empty-states': ['empty-states'],
      'states': ['button-states', 'input-states'],
      'validation': ['validation-messages'],
      'focus-management': ['focus-indicators'],
      'aria': ['aria-examples'],
      'screen-reader': ['screen-reader'],
      'color-contrast': ['contrast-ratios'],
      'theme-customization': ['accessibility-options'],
      'responsive-design': ['device-support'],
      'error-recovery': ['error-handling'],
      'modal': ['modal'],
      'dropdown': ['dropdown', 'action-menu'],
      'tooltip': ['tooltip'],
      'autocomplete': ['autocomplete'],
      'tile': ['tile'],
      'treeview': ['treeview'],
      'navbar': ['navbar-example'],
      'sidebar': ['sidebar-example'],
      'menu': ['menu'],
      'link': ['link']
    };
    
    // 직접 매칭
    if (currentPageComponents.includes(componentId)) return true;
    
    // 관련 ID로 매칭
    const relatedIds = pageSpecificIds[componentId] || [];
    return relatedIds.some(id => currentPageComponents.includes(id));
  };

  useEffect(() => {
    // 기본적으로 모든 카테고리를 펼침
    setExpandedCategories(componentsData.map(cat => cat.id));
  }, []);

  useEffect(() => {
    // 페이지 로드 시 타겟 컴포넌트 확인
    const targetComponent = sessionStorage.getItem('targetComponent');
    if (targetComponent && isComponentActive(targetComponent)) {
      // 약간의 지연 후 스크롤 (페이지 렌더링 완료 대기)
      setTimeout(() => {
        const dataComponentIds = getDataComponentIds(targetComponent);
        if (dataComponentIds.length > 0) {
          onComponentClick(dataComponentIds[0]);
        } else {
          onComponentClick(targetComponent);
        }
        setSelectedComponent(targetComponent);
        sessionStorage.removeItem('targetComponent');
      }, 100);
    }
  }, [currentPage]);

  useEffect(() => {
    // Intersection Observer로 현재 보이는 컴포넌트 추적
    const observer = new IntersectionObserver(
      (entries) => {
        // 가장 중앙에 가까운 요소 찾기
        let mostCenteredEntry = null;
        let minDistance = Infinity;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - elementCenter);
            
            if (distance < minDistance) {
              minDistance = distance;
              mostCenteredEntry = entry;
            }
          }
        });
        
        if (mostCenteredEntry) {
          const componentId = mostCenteredEntry.target.getAttribute('data-component');
          if (componentId) {
            // 해당 컴포넌트의 사이드바 ID 찾기
            // 모든 가능한 사이드바 ID를 확인
            const allSidebarIds = componentsData.flatMap(cat => cat.items.map(item => item.id));
            let found = false;
            
            for (const sidebarId of allSidebarIds) {
              const dataIds = getDataComponentIds(sidebarId);
              if (dataIds.includes(componentId)) {
                setVisibleComponent(sidebarId);
                found = true;
                break;
              }
            }
            
            if (!found) {
              setVisibleComponent(componentId);
            }
          }
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // 페이지의 모든 컴포넌트 관찰
    const elements = document.querySelectorAll('[data-component]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleComponentClick = (componentId: string) => {
    // 단일 선택 - 클릭한 컴포넌트만 선택
    setSelectedComponent(componentId);
    
    const isActive = isComponentActive(componentId);
    
    if (isActive) {
      // 현재 페이지에 있는 컴포넌트면 스크롤
      // data-component ID들 중 첫 번째로 스크롤
      const dataComponentIds = getDataComponentIds(componentId);
      console.log('Component clicked:', componentId, 'Data IDs:', dataComponentIds); // 디버깅용
      
      if (dataComponentIds.length > 0) {
        onComponentClick(dataComponentIds[0]);
      } else {
        onComponentClick(componentId);
      }
    } else {
      // 다른 페이지에 있는 컴포넌트면 해당 페이지로 이동
      const targetPage = findComponentPage(componentId);
      if (targetPage && onNavigateToPage) {
        // 세션 스토리지에 타겟 컴포넌트 저장
        sessionStorage.setItem('targetComponent', componentId);
        onNavigateToPage(targetPage);
      }
    }
  };

  const handleMouseEnter = (component: PageComponent, event: React.MouseEvent) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    const rect = event.currentTarget.getBoundingClientRect();
    const sidebarRect = event.currentTarget.closest('.components-sidebar')?.getBoundingClientRect();
    
    // 호버카드를 사이드바 오른쪽에 표시
    setHoverPosition({ 
      x: sidebarRect ? sidebarRect.right + 10 : rect.right + 10, 
      y: rect.top 
    });
    
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredComponent(component);
    }, 300); // 0.3초로 단축
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredComponent(null);
  };

  return (
    <aside className="components-sidebar">
      <div className="components-sidebar-header">
        <h3>UI 컴포넌트 전체 목록</h3>
        <p className="components-sidebar-subtitle">클릭하여 해당 컴포넌트로 이동</p>
      </div>
      
      <div className="components-list">
        {componentsData.map((category) => (
          <div key={category.id} className="component-category">
            <button
              className="category-header"
              onClick={() => toggleCategory(category.id)}
            >
              {expandedCategories.includes(category.id) ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <span className="category-title">{category.title}</span>
              <span className="category-count">{category.items.length}</span>
            </button>
            
            {expandedCategories.includes(category.id) && (
              <div className="category-items">
                {category.items.map((item) => {
                  const isActive = isComponentActive(item.id);
                  // 선택된 컴포넌트인지 확인
                  const isSelected = selectedComponent === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      className={`component-item ${isSelected ? 'selected' : ''} ${isActive ? 'in-page' : 'inactive'}`}
                      onClick={() => handleComponentClick(item.id)}
                      onMouseEnter={(e) => handleMouseEnter({ id: item.id, name: item.name, category: category.id }, e)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="component-name">{item.name}</span>
                      {isActive && <span className="in-page-indicator">●</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <p className="sidebar-hint">● 표시는 현재 페이지에서 사용 중</p>
      </div>
      
      {hoveredComponent && (
        <ComponentDescription
          componentId={hoveredComponent.id}
          componentName={hoveredComponent.name}
          position={hoverPosition}
        />
      )}
    </aside>
  );
};

export default ComponentsSidebar;