import React, { useState, useRef, useEffect } from 'react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import './Foundation.css';

const Foundation: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(375); // 기본 모바일 크기
  const [isResizing, setIsResizing] = useState(false);
  const resizableRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = {
    primary: ['#0284c7', '#0369a1', '#075985', '#0c4a6e'],
    success: ['#16a34a', '#15803d', '#166534', '#14532d'],
    warning: ['#f59e0b', '#d97706', '#b45309', '#92400e'],
    error: ['#ef4444', '#dc2626', '#b91c1c', '#991b1b'],
    neutral: ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827']
  };

  const typography = [
    { name: 'Display', size: '4rem', weight: '700', lineHeight: '1' },
    { name: 'Heading 1', size: '3rem', weight: '700', lineHeight: '1.2' },
    { name: 'Heading 2', size: '2rem', weight: '600', lineHeight: '1.3' },
    { name: 'Heading 3', size: '1.5rem', weight: '600', lineHeight: '1.4' },
    { name: 'Body Large', size: '1.125rem', weight: '400', lineHeight: '1.5' },
    { name: 'Body', size: '1rem', weight: '400', lineHeight: '1.5' },
    { name: 'Caption', size: '0.875rem', weight: '400', lineHeight: '1.5' },
    { name: 'Small', size: '0.75rem', weight: '400', lineHeight: '1.5' }
  ];

  const spacing = [
    { name: 'xs', value: '0.25rem', pixels: '4px' },
    { name: 'sm', value: '0.5rem', pixels: '8px' },
    { name: 'md', value: '1rem', pixels: '16px' },
    { name: 'lg', value: '1.5rem', pixels: '24px' },
    { name: 'xl', value: '2rem', pixels: '32px' },
    { name: '2xl', value: '3rem', pixels: '48px' },
    { name: '3xl', value: '4rem', pixels: '64px' }
  ];

  const shadows = [
    { name: 'sm', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
    { name: 'md', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
    { name: 'lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' },
    { name: 'xl', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
    { name: '2xl', value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }
  ];

  const borderRadius = [
    { name: 'none', value: '0' },
    { name: 'sm', value: '0.125rem' },
    { name: 'md', value: '0.375rem' },
    { name: 'lg', value: '0.5rem' },
    { name: 'xl', value: '0.75rem' },
    { name: '2xl', value: '1rem' },
    { name: 'full', value: '9999px' }
  ];

  // 리사이즈 핸들러
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - containerRect.left - 15; // 핸들 오프셋 고려
      const minWidth = 320;
      const maxWidth = Math.min(containerRect.width - 40, 1400); // 최대 1400px 또는 컨테이너 크기
      
      setViewportWidth(Math.min(Math.max(newWidth, minWidth), maxWidth));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
    };

    if (isResizing) {
      document.body.style.cursor = 'ew-resize';
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
    };
  }, [isResizing]);

  // 현재 브레이크포인트 계산
  const getCurrentBreakpoint = () => {
    if (viewportWidth < 640) return 'Mobile';
    if (viewportWidth < 1024) return 'Tablet';
    if (viewportWidth < 1280) return 'Desktop';
    return 'Wide';
  };

  return (
    <div className="foundation-page">
      <div className="page-header">
        <h1 className="page-title">Foundation</h1>
        <p className="page-description">디자인 시스템의 기초 요소들을 확인하세요</p>
      </div>

      {/* Color Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Color System"
          description="색상 팔레트와 사용 가이드라인입니다."
        >
          <h2 className="section-title">Color</h2>
          <div className="color-groups">
            {Object.entries(colors).map(([name, shades]) => (
              <div key={name} className="color-group">
                <h3 className="color-group-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <div className="color-swatches">
                  {shades.map((color, index) => (
                    <ComponentTooltip
                      key={color}
                      component="Color Swatch"
                      description={`${name} 색상의 ${(index + 1) * 100} 단계입니다.`}
                    >
                      <div className="color-swatch">
                        <div 
                          className="color-preview" 
                          style={{ backgroundColor: color }}
                        ></div>
                        <span className="color-value">{color}</span>
                      </div>
                    </ComponentTooltip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ComponentTooltip>
      </section>

      {/* Typography Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Typography Scale"
          description="텍스트 스타일과 계층 구조입니다."
        >
          <h2 className="section-title">Typography</h2>
          <div className="typography-list">
            {typography.map((type) => (
              <ComponentTooltip
                key={type.name}
                component="Typography Sample"
                description={`${type.name} 텍스트 스타일입니다. 크기: ${type.size}, 굵기: ${type.weight}`}
              >
                <div className="typography-item">
                  <div className="typography-info">
                    <span className="typography-name">{type.name}</span>
                    <span className="typography-specs">
                      {type.size} / {type.weight} / {type.lineHeight}
                    </span>
                  </div>
                  <p 
                    className="typography-sample"
                    style={{ 
                      fontSize: type.size, 
                      fontWeight: type.weight as any,
                      lineHeight: type.lineHeight 
                    }}
                  >
                    다람쥐 헌 쳇바퀴에 타고파
                  </p>
                </div>
              </ComponentTooltip>
            ))}
          </div>
        </ComponentTooltip>
      </section>

      {/* Spacing Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Spacing System"
          description="일관된 여백을 위한 스페이싱 토큰입니다."
        >
          <h2 className="section-title">Spacing</h2>
          <div className="spacing-list">
            {spacing.map((space) => (
              <ComponentTooltip
                key={space.name}
                component="Spacing Token"
                description={`${space.name} 스페이싱: ${space.value} (${space.pixels})`}
              >
                <div className="spacing-item">
                  <span className="spacing-name">{space.name}</span>
                  <span className="spacing-value">{space.value}</span>
                  <span className="spacing-pixels">{space.pixels}</span>
                  <div className="spacing-visual">
                    <div 
                      className="spacing-box" 
                      style={{ width: space.value, height: space.value }}
                    ></div>
                  </div>
                </div>
              </ComponentTooltip>
            ))}
          </div>
        </ComponentTooltip>
      </section>

      {/* Elevation Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Elevation System"
          description="그림자를 통한 깊이감 표현입니다."
        >
          <h2 className="section-title">Elevation (Shadows)</h2>
          <div className="shadow-list">
            {shadows.map((shadow) => (
              <ComponentTooltip
                key={shadow.name}
                component="Shadow Sample"
                description={`${shadow.name} 그림자 효과입니다.`}
              >
                <div className="shadow-item">
                  <div 
                    className="shadow-box"
                    style={{ boxShadow: shadow.value }}
                  >
                    <span className="shadow-name">{shadow.name}</span>
                  </div>
                  <code className="shadow-value">{shadow.value}</code>
                </div>
              </ComponentTooltip>
            ))}
          </div>
        </ComponentTooltip>
      </section>

      {/* Border Radius Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Border Radius System"
          description="모서리 둥글기 값들입니다."
        >
          <h2 className="section-title">Border Radius</h2>
          <div className="radius-list">
            {borderRadius.map((radius) => (
              <ComponentTooltip
                key={radius.name}
                component="Border Radius Sample"
                description={`${radius.name} 둥글기: ${radius.value}`}
              >
                <div className="radius-item">
                  <div 
                    className="radius-box"
                    style={{ borderRadius: radius.value }}
                  >
                    <span className="radius-name">{radius.name}</span>
                  </div>
                  <span className="radius-value">{radius.value}</span>
                </div>
              </ComponentTooltip>
            ))}
          </div>
        </ComponentTooltip>
      </section>

      {/* Motion Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Motion System"
          description="애니메이션과 전환 효과 가이드입니다."
        >
          <h2 className="section-title">Motion</h2>
          <div className="motion-examples">
            <ComponentTooltip
              component="Transition Duration"
              description="전환 시간 예시입니다."
            >
              <div className="motion-group">
                <h3>Duration</h3>
                <div className="duration-list">
                  <div className="duration-item">
                    <button className="motion-button duration-fast">Fast (150ms)</button>
                  </div>
                  <div className="duration-item">
                    <button className="motion-button duration-normal">Normal (300ms)</button>
                  </div>
                  <div className="duration-item">
                    <button className="motion-button duration-slow">Slow (500ms)</button>
                  </div>
                </div>
              </div>
            </ComponentTooltip>

            <ComponentTooltip
              component="Easing Functions"
              description="이징 함수 예시입니다."
            >
              <div className="motion-group">
                <h3>Easing</h3>
                <div className="easing-list">
                  <div className="easing-item">
                    <div className="easing-box easing-linear">Linear</div>
                  </div>
                  <div className="easing-item">
                    <div className="easing-box easing-ease-in">Ease In</div>
                  </div>
                  <div className="easing-item">
                    <div className="easing-box easing-ease-out">Ease Out</div>
                  </div>
                  <div className="easing-item">
                    <div className="easing-box easing-ease-in-out">Ease In Out</div>
                  </div>
                </div>
              </div>
            </ComponentTooltip>
          </div>
        </ComponentTooltip>
      </section>

      {/* Iconography Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Iconography"
          description="아이콘 시스템과 사용 가이드라인입니다."
        >
          <h2 className="section-title">Iconography</h2>
          <div className="iconography-content">
            <p className="section-description">
              일관된 아이콘 스타일과 크기를 사용하여 사용자 경험을 향상시킵니다.
              아이콘은 16px, 20px, 24px 크기로 제공되며, 명확하고 간결한 형태를 유지합니다.
            </p>
            <div className="icon-sizes">
              <div className="icon-size-item">
                <div className="icon-preview" style={{ width: '16px', height: '16px', backgroundColor: '#6b7280' }}></div>
                <span>16px - Small</span>
              </div>
              <div className="icon-size-item">
                <div className="icon-preview" style={{ width: '20px', height: '20px', backgroundColor: '#6b7280' }}></div>
                <span>20px - Default</span>
              </div>
              <div className="icon-size-item">
                <div className="icon-preview" style={{ width: '24px', height: '24px', backgroundColor: '#6b7280' }}></div>
                <span>24px - Large</span>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Grid System Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Grid System"
          description="12열 그리드 시스템 예시입니다."
        >
          <h2 className="section-title">Grid System</h2>
          <div className="grid-demo">
            <div className="grid-container">
              <div className="grid-row">
                <div className="grid-col-12">12 columns</div>
              </div>
              <div className="grid-row">
                <div className="grid-col-6">6 columns</div>
                <div className="grid-col-6">6 columns</div>
              </div>
              <div className="grid-row">
                <div className="grid-col-4">4 columns</div>
                <div className="grid-col-4">4 columns</div>
                <div className="grid-col-4">4 columns</div>
              </div>
              <div className="grid-row">
                <div className="grid-col-3">3 cols</div>
                <div className="grid-col-3">3 cols</div>
                <div className="grid-col-3">3 cols</div>
                <div className="grid-col-3">3 cols</div>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Breakpoints Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Breakpoints"
          description="반응형 디자인을 위한 중단점입니다."
        >
          <h2 className="section-title">Breakpoints</h2>
          
          <div className="breakpoints-info">
            <p>오른쪽 끝의 핸들을 드래그하여 가상 화면 크기를 조절하세요.</p>
            <div className="viewport-info">
              <span>현재 크기: <strong>{viewportWidth}px</strong></span>
              <span className="current-breakpoint-label">브레이크포인트: <strong>{getCurrentBreakpoint()}</strong></span>
            </div>
            <div className="viewport-presets">
              <button 
                className="preset-btn" 
                onClick={() => setViewportWidth(375)}
              >
                Mobile (375px)
              </button>
              <button 
                className="preset-btn" 
                onClick={() => setViewportWidth(768)}
              >
                Tablet (768px)
              </button>
              <button 
                className="preset-btn" 
                onClick={() => setViewportWidth(1024)}
              >
                Desktop (1024px)
              </button>
              <button 
                className="preset-btn" 
                onClick={() => setViewportWidth(1280)}
              >
                Wide (1280px)
              </button>
            </div>
          </div>

          <div className="viewport-container" ref={containerRef}>
            <div 
              className="resizable-viewport"
              ref={resizableRef}
              style={{ width: `${viewportWidth}px` }}
            >
              <div className="viewport-header">
                <span className="viewport-size">{viewportWidth}px - {getCurrentBreakpoint()}</span>
              </div>
              
              <div className="viewport-content">
                <div className="breakpoints-demo">
                  <h3>반응형 그리드</h3>
                  <div 
                    className={`responsive-grid ${
                      viewportWidth < 640 ? 'mobile' : 
                      viewportWidth < 1024 ? 'tablet' : 
                      viewportWidth < 1280 ? 'desktop' : 'wide'
                    }`}
                  >
                    <div className="responsive-item">
                      <div className="item-content">1</div>
                    </div>
                    <div className="responsive-item">
                      <div className="item-content">2</div>
                    </div>
                    <div className="responsive-item">
                      <div className="item-content">3</div>
                    </div>
                    <div className="responsive-item">
                      <div className="item-content">4</div>
                    </div>
                  </div>
                </div>

                <div className="breakpoints-demo">
                  <h3>반응형 레이아웃</h3>
                  <div 
                    className={`responsive-layout ${
                      viewportWidth < 640 ? 'mobile' : 
                      viewportWidth < 1024 ? 'tablet' : 
                      viewportWidth < 1280 ? 'desktop' : 'wide'
                    }`}
                  >
                    <aside className="responsive-sidebar">
                      <div className="sidebar-content">Side</div>
                    </aside>
                    <main className="responsive-main">
                      <div className="main-content">Main</div>
                    </main>
                    <aside className="responsive-aside">
                      <div className="aside-content">Aside</div>
                    </aside>
                  </div>
                </div>

                <div className="breakpoints-demo">
                  <h3>반응형 네비게이션</h3>
                  <nav className={`responsive-nav ${viewportWidth < 640 ? 'mobile' : ''}`}>
                    <div className="nav-logo">Logo</div>
                    <ul className="nav-menu">
                      <li className="nav-item">Home</li>
                      <li className="nav-item">About</li>
                      <li className="nav-item">Services</li>
                      <li className="nav-item">Contact</li>
                    </ul>
                    <button className="nav-toggle">☰</button>
                  </nav>
                </div>
              </div>
              
              <div 
                className="resize-handle"
                onMouseDown={() => setIsResizing(true)}
              >
                <div className="resize-grip"></div>
              </div>
            </div>
          </div>

          <div className="breakpoints-reference">
            <h3>Breakpoint 참고</h3>
            <div className="breakpoints-list">
              <div className="breakpoint-item">
                <span className="breakpoint-name">Mobile</span>
                <span className="breakpoint-value">&lt; 640px</span>
                <span className="breakpoint-desc">1열 레이아웃</span>
              </div>
              <div className="breakpoint-item">
                <span className="breakpoint-name">Tablet</span>
                <span className="breakpoint-value">640px - 1024px</span>
                <span className="breakpoint-desc">2열 레이아웃</span>
              </div>
              <div className="breakpoint-item">
                <span className="breakpoint-name">Desktop</span>
                <span className="breakpoint-value">1024px - 1280px</span>
                <span className="breakpoint-desc">3열 레이아웃</span>
              </div>
              <div className="breakpoint-item">
                <span className="breakpoint-name">Wide</span>
                <span className="breakpoint-value">&gt; 1280px</span>
                <span className="breakpoint-desc">4열 레이아웃</span>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Layout Structure Section */}
      <section className="foundation-section">
        <ComponentTooltip
          component="Layout Structure"
          description="Container, Row, Column 등 레이아웃 구조 요소입니다."
        >
          <h2 className="section-title">Layout Structure</h2>
          <div className="layout-structure-content">
            <div className="layout-demo">
              <div className="layout-container">
                <p className="layout-label">Container (max-width: 1200px)</p>
                <div className="layout-row">
                  <div className="layout-col">Column 1</div>
                  <div className="layout-col">Column 2</div>
                  <div className="layout-col">Column 3</div>
                </div>
              </div>
            </div>
            <div className="layout-info">
              <p><strong>Container:</strong> 콘텐츠의 최대 너비를 제한하고 중앙 정렬합니다.</p>
              <p><strong>Row:</strong> 열을 포함하는 수평 컨테이너입니다.</p>
              <p><strong>Column:</strong> 콘텐츠를 포함하는 수직 섹션입니다.</p>
            </div>
          </div>
        </ComponentTooltip>
      </section>
    </div>
  );
};

export default Foundation;