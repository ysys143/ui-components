import React, { useState } from 'react';
import { 
  Eye, EyeOff, Info, AlertCircle, CheckCircle, XCircle,
  Volume2, VolumeX, Keyboard, Mouse, Smartphone, Monitor,
  Sun, Moon, ZoomIn, ZoomOut, Type, Palette, Move
} from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import StandardPageHeader from '../components/StandardPageHeader';
import './StatesAccessibility.css';

const StatesAccessibility: React.FC = () => {
  const [showFocusDemo, setShowFocusDemo] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className="states-page">
      <ComponentTooltip
        component="Standardized Page Header"
        description="표준화된 페이지 헤더로 일관된 레이아웃을 제공합니다."
      >
        <StandardPageHeader
          title="States & Accessibility"
          description="UI 상태와 접근성 가이드라인"
        />
      </ComponentTooltip>

      {/* Interactive States Section */}
      <section className="states-section">
        <h2 className="section-title">Interactive States</h2>
        
        <ComponentTooltip component="Button States" description="버튼의 다양한 상태를 보여줍니다.">
          <div className="states-grid">
            <div className="state-item">
              <h4>Default</h4>
              <button className="btn btn-primary">Default State</button>
              <p className="state-description">기본 상태</p>
            </div>
            
            <div className="state-item">
              <h4>Hover</h4>
              <button className="btn btn-primary state-hover">Hover State</button>
              <p className="state-description">마우스 오버 상태</p>
            </div>
            
            <div className="state-item">
              <h4>Focus</h4>
              <button className="btn btn-primary state-focus">Focus State</button>
              <p className="state-description">키보드 포커스 상태</p>
            </div>
            
            <div className="state-item">
              <h4>Active</h4>
              <button className="btn btn-primary state-active">Active State</button>
              <p className="state-description">클릭/터치 상태</p>
            </div>
            
            <div className="state-item">
              <h4>Disabled</h4>
              <button className="btn btn-primary" disabled>Disabled State</button>
              <p className="state-description">비활성화 상태</p>
            </div>
            
            <div className="state-item">
              <h4>Loading</h4>
              <button className="btn btn-primary">
                <span className="spinner"></span>
                <span>Loading State</span>
              </button>
              <p className="state-description">로딩 상태</p>
            </div>
          </div>
        </ComponentTooltip>

        <ComponentTooltip component="Input States" description="입력 필드의 다양한 상태를 보여줍니다.">
          <div className="states-grid">
            <div className="state-item">
              <h4>Default</h4>
              <input type="text" className="form-input" placeholder="Default input" />
            </div>
            
            <div className="state-item">
              <h4>Focus</h4>
              <input type="text" className="form-input state-focus" placeholder="Focused input" />
            </div>
            
            <div className="state-item">
              <h4>Valid</h4>
              <input type="text" className="form-input state-valid" defaultValue="Valid input" />
            </div>
            
            <div className="state-item">
              <h4>Invalid</h4>
              <input type="text" className="form-input state-invalid" defaultValue="Invalid input" />
            </div>
            
            <div className="state-item">
              <h4>Disabled</h4>
              <input type="text" className="form-input" disabled placeholder="Disabled input" />
            </div>
            
            <div className="state-item">
              <h4>Read-only</h4>
              <input type="text" className="form-input" readOnly defaultValue="Read-only input" />
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Validation States Section */}
      <section className="states-section">
        <h2 className="section-title">Validation States</h2>
        
        <ComponentTooltip component="Validation Messages" description="폼 검증 상태 메시지입니다.">
          <div className="validation-examples">
            <div className="validation-item">
              <div className="form-group">
                <label className="form-label">Success State</label>
                <input type="text" className="form-input state-valid" defaultValue="john@example.com" />
                <div className="validation-message success">
                  <CheckCircle size={16} />
                  <span>Email is available</span>
                </div>
              </div>
            </div>
            
            <div className="validation-item">
              <div className="form-group">
                <label className="form-label">Error State</label>
                <input type="text" className="form-input state-invalid" defaultValue="invalid-email" />
                <div className="validation-message error">
                  <XCircle size={16} />
                  <span>Please enter a valid email address</span>
                </div>
              </div>
            </div>
            
            <div className="validation-item">
              <div className="form-group">
                <label className="form-label">Warning State</label>
                <input type="password" className="form-input state-warning" defaultValue="password123" />
                <div className="validation-message warning">
                  <AlertCircle size={16} />
                  <span>Password is weak. Consider adding special characters.</span>
                </div>
              </div>
            </div>
            
            <div className="validation-item">
              <div className="form-group">
                <label className="form-label">Info State</label>
                <input type="text" className="form-input" placeholder="Enter username" />
                <div className="validation-message info">
                  <Info size={16} />
                  <span>Username must be 3-20 characters long</span>
                </div>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Focus Management Section */}
      <section className="states-section">
        <h2 className="section-title">Focus Management</h2>
        
        <ComponentTooltip component="Focus Indicators" description="포커스 표시자와 키보드 네비게이션입니다.">
          <div className="focus-demo">
            <p className="focus-instructions">
              <Keyboard size={20} />
              <span>Tab 키를 눌러 포커스 이동을 확인하세요</span>
            </p>
            
            <div className="focus-trap-demo">
              <button 
                className="btn btn-outline"
                onClick={() => setShowFocusDemo(!showFocusDemo)}
              >
                {showFocusDemo ? 'Hide' : 'Show'} Focus Demo
              </button>
              
              {showFocusDemo && (
                <div className="focus-trap-container">
                  <h4>Focus Trap Example</h4>
                  <p>포커스가 이 영역 안에서만 순환합니다.</p>
                  <div className="focus-trap-content">
                    <input type="text" className="form-input" placeholder="First input" />
                    <input type="text" className="form-input" placeholder="Second input" />
                    <button className="btn btn-primary">Action Button</button>
                    <button className="btn btn-ghost">Cancel</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="skip-links-demo">
              <h4>Skip Links</h4>
              <div className="skip-link-container">
                <a href="#main-content" className="skip-link">Skip to main content</a>
                <a href="#navigation" className="skip-link">Skip to navigation</a>
                <a href="#footer" className="skip-link">Skip to footer</a>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* ARIA Section */}
      <section className="states-section">
        <h2 className="section-title">ARIA Roles & Labels</h2>
        
        <div className="aria-intro">
          <p className="aria-description">
            <strong>ARIA (Accessible Rich Internet Applications)</strong>는 웹 콘텐츠와 웹 애플리케이션을 
            장애인이 더 쉽게 사용할 수 있도록 만드는 방법을 정의하는 표준입니다.
          </p>
          <p className="aria-description">
            스크린 리더와 같은 보조 기술이 웹 페이지의 내용과 기능을 올바르게 이해하고 
            사용자에게 전달할 수 있도록 추가 정보를 제공합니다.
          </p>
          <div className="aria-key-concepts">
            <h4>주요 ARIA 속성:</h4>
            <ul>
              <li><strong>role</strong>: 요소의 역할을 정의 (button, navigation, main 등)</li>
              <li><strong>aria-label</strong>: 요소에 접근 가능한 이름을 제공</li>
              <li><strong>aria-describedby</strong>: 요소에 대한 설명을 다른 요소와 연결</li>
              <li><strong>aria-live</strong>: 동적 콘텐츠 변경을 스크린 리더에 알림</li>
              <li><strong>aria-expanded</strong>: 확장/축소 가능한 요소의 상태 표시</li>
            </ul>
          </div>
        </div>
        
        <ComponentTooltip component="ARIA Examples" description="접근성을 위한 ARIA 속성 예시입니다.">
          <div className="aria-examples" data-component="aria-roles">
            <div className="aria-item">
              <h4>ARIA Labels</h4>
              <p className="aria-item-description">
                아이콘만 있는 버튼처럼 시각적으로만 의미가 전달되는 요소에 텍스트 설명을 추가합니다.
              </p>
              <div className="aria-demo">
                <button className="btn-icon" aria-label="Close dialog">
                  <XCircle size={20} />
                </button>
                <span className="code-snippet">aria-label="Close dialog"</span>
              </div>
            </div>
            
            <div className="aria-item">
              <h4>ARIA Live Regions</h4>
              <p className="aria-item-description">
                동적으로 변경되는 콘텐츠를 스크린 리더가 자동으로 읽어주도록 설정합니다.
              </p>
              <div className="aria-demo">
                <div className="live-region" role="status" aria-live="polite">
                  <Info size={16} />
                  <span>3 items added to cart</span>
                </div>
                <span className="code-snippet">role="status" aria-live="polite"</span>
              </div>
            </div>
            
            <div className="aria-item">
              <h4>ARIA Describedby</h4>
              <p className="aria-item-description">
                입력 필드나 버튼에 대한 추가 설명을 연결하여 스크린 리더가 함께 읽도록 합니다.
              </p>
              <div className="aria-demo">
                <input 
                  type="password" 
                  className="form-input" 
                  aria-describedby="password-help"
                  placeholder="Password"
                />
                <p id="password-help" className="help-text">
                  Password must be at least 8 characters
                </p>
                <span className="code-snippet">aria-describedby="password-help"</span>
              </div>
            </div>
            
            <div className="aria-item">
              <h4>ARIA Expanded</h4>
              <p className="aria-item-description">
                접히고 펼쳐지는 요소의 현재 상태를 스크린 리더에게 알려줍니다.
              </p>
              <div className="aria-demo">
                <button 
                  className="btn btn-outline"
                  aria-expanded="false"
                  aria-controls="dropdown-menu"
                >
                  Options
                  <svg className="dropdown-arrow" width="12" height="12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" />
                  </svg>
                </button>
                <span className="code-snippet">aria-expanded="false"</span>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Screen Reader Section */}
      <section className="states-section">
        <h2 className="section-title">Screen Reader Support</h2>
        
        <ComponentTooltip component="Screen Reader" description="스크린 리더 지원 예시입니다.">
          <div className="screen-reader-examples">
            <div className="sr-item">
              <h4>Visually Hidden Text</h4>
              <button className="btn btn-primary">
                <Eye size={20} />
                <span className="visually-hidden">View details</span>
              </button>
              <p className="sr-description">아이콘 버튼에 숨겨진 텍스트 제공</p>
            </div>
            
            <div className="sr-item">
              <h4>Announcing Changes</h4>
              <div className="announcement-demo">
                <div className="counter-demo">
                  <button className="btn btn-sm btn-ghost">-</button>
                  <span className="counter-value" role="status">5 items</span>
                  <button className="btn btn-sm btn-ghost">+</button>
                </div>
                <p className="sr-description">동적 콘텐츠 변경 알림</p>
              </div>
            </div>
            
            <div className="sr-item">
              <h4>Landmark Roles</h4>
              <div className="landmark-demo">
                <div className="landmark" role="navigation">Navigation</div>
                <div className="landmark" role="main">Main Content</div>
                <div className="landmark" role="complementary">Sidebar</div>
                <div className="landmark" role="contentinfo">Footer</div>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Color Contrast Section */}
      <section className="states-section">
        <h2 className="section-title">Color Contrast</h2>
        
        <ComponentTooltip component="Contrast Ratios" description="WCAG 색상 대비 가이드라인입니다.">
          <div className="contrast-examples">
            <div className="contrast-grid">
              <div className="contrast-item pass">
                <div className="contrast-demo" style={{ background: '#1f2937', color: '#ffffff' }}>
                  <h4>AA Pass</h4>
                  <p>Normal Text</p>
                  <span className="ratio">7:1</span>
                </div>
              </div>
              
              <div className="contrast-item pass">
                <div className="contrast-demo" style={{ background: '#3b82f6', color: '#ffffff' }}>
                  <h4>AA Pass</h4>
                  <p>Large Text</p>
                  <span className="ratio">4.5:1</span>
                </div>
              </div>
              
              <div className="contrast-item fail">
                <div className="contrast-demo" style={{ background: '#f3f4f6', color: '#d1d5db' }}>
                  <h4>Fail</h4>
                  <p>Low Contrast</p>
                  <span className="ratio">1.5:1</span>
                </div>
              </div>
              
              <div className="contrast-item warning">
                <div className="contrast-demo" style={{ background: '#fef3c7', color: '#92400e' }}>
                  <h4>AA Pass</h4>
                  <p>Edge Case</p>
                  <span className="ratio">3.1:1</span>
                </div>
              </div>
            </div>
            
            <div className="contrast-tools">
              <h4>Contrast Testing Tools</h4>
              <ul className="tool-list">
                <li>
                  <Palette size={16} />
                  <span>WebAIM Contrast Checker</span>
                </li>
                <li>
                  <Eye size={16} />
                  <span>Chrome DevTools Contrast Ratio</span>
                </li>
                <li>
                  <Monitor size={16} />
                  <span>Stark Figma Plugin</span>
                </li>
              </ul>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Theme Customization Section */}
      <section className="states-section">
        <h2 className="section-title">Theme Customization</h2>
        
        <ComponentTooltip component="Accessibility Options" description="접근성 향상을 위한 테마 옵션입니다.">
          <div className={`theme-demo ${darkMode ? 'dark' : ''} ${highContrast ? 'high-contrast' : ''}`}>
            <div className="theme-controls">
              <div className="control-group">
                <h4>Display Mode</h4>
                <div className="theme-toggle">
                  <button 
                    className={`theme-btn ${!darkMode ? 'active' : ''}`}
                    onClick={() => setDarkMode(false)}
                  >
                    <Sun size={20} />
                    <span>Light</span>
                  </button>
                  <button 
                    className={`theme-btn ${darkMode ? 'active' : ''}`}
                    onClick={() => setDarkMode(true)}
                  >
                    <Moon size={20} />
                    <span>Dark</span>
                  </button>
                </div>
              </div>
              
              <div className="control-group">
                <h4>Font Size</h4>
                <div className="font-controls">
                  <button 
                    className="btn-icon-sm"
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="font-size-value">{fontSize}px</span>
                  <button 
                    className="btn-icon-sm"
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>
              </div>
              
              <div className="control-group">
                <h4>High Contrast</h4>
                <label className="switch">
                  <input 
                    type="checkbox"
                    checked={highContrast}
                    onChange={(e) => setHighContrast(e.target.checked)}
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="theme-preview" style={{ fontSize: `${fontSize}px` }}>
              <h3>Preview Content</h3>
              <p>This is how your content will look with the selected theme options.</p>
              <input type="text" className="form-input" placeholder="Sample input" />
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Responsive Design Section */}
      <section className="states-section">
        <h2 className="section-title">Responsive & Adaptive Design</h2>
        
        <ComponentTooltip component="Device Support" description="다양한 디바이스 지원입니다.">
          <div className="responsive-examples">
            <div className="device-grid">
              <div className="device-item">
                <Smartphone size={32} />
                <h4>Mobile</h4>
                <p>Touch-friendly targets</p>
                <p className="device-spec">Min 44px × 44px</p>
              </div>
              
              <div className="device-item">
                <Monitor size={32} />
                <h4>Desktop</h4>
                <p>Hover states</p>
                <p className="device-spec">Keyboard navigation</p>
              </div>
              
              <div className="device-item">
                <Move size={32} />
                <h4>Touch</h4>
                <p>Gesture support</p>
                <p className="device-spec">Swipe, pinch, tap</p>
              </div>
              
              <div className="device-item">
                <Volume2 size={32} />
                <h4>Voice</h4>
                <p>Voice commands</p>
                <p className="device-spec">Clear labels</p>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Error Recovery Section */}
      <section className="states-section">
        <h2 className="section-title">Error Prevention & Recovery</h2>
        
        <ComponentTooltip component="Error Handling" description="오류 방지 및 복구 패턴입니다.">
          <div className="error-examples">
            <div className="error-item">
              <h4>Confirmation Dialogs</h4>
              <div className="confirmation-demo">
                <div className="dialog-mock">
                  <AlertCircle size={24} className="dialog-icon warning" />
                  <h5>Delete Item?</h5>
                  <p>This action cannot be undone.</p>
                  <div className="dialog-actions">
                    <button className="btn btn-ghost">Cancel</button>
                    <button className="btn btn-primary">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="error-item">
              <h4>Undo Actions</h4>
              <div className="undo-demo">
                <div className="toast-notification">
                  <span>Item deleted</span>
                  <button className="link">Undo</button>
                </div>
              </div>
            </div>
            
            <div className="error-item">
              <h4>Input Constraints</h4>
              <div className="constraint-demo">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Phone (123) 456-7890"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                <p className="help-text">Format: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Focus Ring Section */}
      <section className="states-section">
        <h2 className="section-title">Focus Ring</h2>
        
        <ComponentTooltip component="Focus Ring" description="키보드 탐색을 위한 포커스 링입니다.">
          <div className="focus-ring-demo" data-component="focus-ring">
            <div className="focus-ring-intro">
              <p className="focus-description">
                Focus Ring은 키보드로 탐색할 때 현재 포커스된 요소를 시각적으로 표시하는 중요한 접근성 기능입니다.
                모든 인터랙티브 요소에는 명확한 포커스 표시가 있어야 합니다.
              </p>
            </div>

            <div className="focus-examples">
              <h4>Focus Ring 스타일 예시</h4>
              
              <div className="focus-example-grid">
                <div className="focus-item">
                  <h5>Default Browser Focus</h5>
                  <button className="btn-default-focus">Default Focus</button>
                  <input type="text" className="input-default-focus" placeholder="Default focus" />
                </div>

                <div className="focus-item">
                  <h5>Custom Focus Ring</h5>
                  <button className="btn-custom-focus">Custom Focus</button>
                  <input type="text" className="input-custom-focus" placeholder="Custom focus" />
                </div>

                <div className="focus-item">
                  <h5>Focus-Visible Only</h5>
                  <button className="btn-focus-visible">Focus Visible</button>
                  <p className="focus-note">키보드 탐색 시에만 포커스 링 표시</p>
                </div>

                <div className="focus-item">
                  <h5>High Contrast Focus</h5>
                  <button className="btn-high-contrast-focus">High Contrast</button>
                  <div className="card-high-contrast-focus">
                    <p>Card with high contrast focus</p>
                  </div>
                </div>
              </div>

              <div className="focus-best-practices">
                <h4>Focus Ring 모범 사례</h4>
                <ul>
                  <li>최소 2px 너비의 포커스 링 사용</li>
                  <li>배경색과 충분한 대비 확보 (3:1 이상)</li>
                  <li>:focus-visible 의사 클래스 활용</li>
                  <li>절대 outline: none만 사용하지 말 것</li>
                  <li>복잡한 컴포넌트는 내부 포커스 관리 필요</li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Keyboard Navigation Section */}
      <section className="states-section">
        <h2 className="section-title">Keyboard Navigation</h2>
        
        <ComponentTooltip component="Keyboard Navigation" description="키보드로 탐색 가능한 인터페이스입니다.">
          <div className="keyboard-nav-demo" data-component="keyboard-nav">
            <div className="keyboard-intro">
              <p className="keyboard-description">
                모든 인터랙티브 요소는 키보드만으로도 접근하고 조작할 수 있어야 합니다.
                Tab, Arrow Keys, Enter, Space 등의 키를 활용한 탐색 패턴을 제공합니다.
              </p>
            </div>

            <div className="keyboard-examples">
              <div className="keyboard-item">
                <h4>Tab Navigation</h4>
                <div className="tab-nav-demo">
                  <button className="btn btn-primary">First Button</button>
                  <input type="text" className="form-input" placeholder="Text Input" />
                  <select className="form-select">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <button className="btn btn-secondary">Last Button</button>
                </div>
                <p className="keyboard-hint">Tab 키로 순차적 탐색, Shift+Tab으로 역방향 탐색</p>
              </div>

              <div className="keyboard-item">
                <h4>Arrow Key Navigation</h4>
                <div className="arrow-nav-demo">
                  <div className="radio-group-nav">
                    <label><input type="radio" name="nav-radio" /> Option A</label>
                    <label><input type="radio" name="nav-radio" /> Option B</label>
                    <label><input type="radio" name="nav-radio" /> Option C</label>
                  </div>
                  <p className="keyboard-hint">화살표 키로 라디오 버튼 간 이동</p>
                </div>
              </div>

              <div className="keyboard-item">
                <h4>Menu Navigation</h4>
                <div className="menu-nav-demo">
                  <nav role="navigation" aria-label="Main menu">
                    <ul className="keyboard-menu">
                      <li><a href="#" className="menu-item">Home</a></li>
                      <li><a href="#" className="menu-item">Products</a></li>
                      <li><a href="#" className="menu-item">Services</a></li>
                      <li><a href="#" className="menu-item">Contact</a></li>
                    </ul>
                  </nav>
                  <p className="keyboard-hint">Tab으로 메뉴 진입, 화살표 키로 항목 간 이동</p>
                </div>
              </div>

              <div className="keyboard-shortcuts">
                <h4>일반적인 키보드 단축키</h4>
                <table className="shortcuts-table">
                  <thead>
                    <tr>
                      <th>키</th>
                      <th>동작</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><kbd>Tab</kbd></td>
                      <td>다음 포커스 가능 요소로 이동</td>
                    </tr>
                    <tr>
                      <td><kbd>Shift + Tab</kbd></td>
                      <td>이전 포커스 가능 요소로 이동</td>
                    </tr>
                    <tr>
                      <td><kbd>Enter</kbd></td>
                      <td>버튼 클릭, 링크 이동</td>
                    </tr>
                    <tr>
                      <td><kbd>Space</kbd></td>
                      <td>체크박스 토글, 버튼 클릭</td>
                    </tr>
                    <tr>
                      <td><kbd>Esc</kbd></td>
                      <td>모달/팝업 닫기</td>
                    </tr>
                    <tr>
                      <td><kbd>Arrow Keys</kbd></td>
                      <td>목록/메뉴 내 탐색</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Skip to Content Section */}
      <section className="states-section">
        <h2 className="section-title">Skip to Content</h2>
        
        <ComponentTooltip component="Skip to Content" description="콘텐츠로 바로 이동하는 기능입니다.">
          <div className="skip-content-demo" data-component="skip-content">
            <div className="skip-intro">
              <p className="skip-description">
                Skip links는 키보드 사용자가 반복적인 탐색 요소를 건너뛰고 
                주요 콘텐츠로 빠르게 이동할 수 있게 해주는 중요한 접근성 기능입니다.
              </p>
            </div>

            <div className="skip-examples">
              <div className="skip-item">
                <h4>기본 Skip Link</h4>
                <div className="skip-demo-wrapper">
                  <div className="demo-info-box">
                    <p><strong>시작하려면:</strong> 아래 "Start Demo" 버튼을 클릭한 후 Tab 키를 누르세요</p>
                  </div>
                  
                  <div className="skip-demo-container">
                    <button className="demo-start-button" onClick={(e) => {
                      const container = e.currentTarget.parentElement;
                      const skipLink = container?.querySelector('.skip-link-single') as HTMLElement;
                      skipLink?.focus();
                    }}>Start Demo</button>
                    
                    <a href="#demo-main-content" className="skip-link-single">Skip to main content</a>
                    
                    {/* Header Section */}
                    <header className="demo-header">
                      <div className="demo-logo">My Website</div>
                      <nav className="demo-nav" aria-label="Main navigation">
                        <a href="#" onClick={(e) => e.preventDefault()}>Home</a>
                        <a href="#" onClick={(e) => e.preventDefault()}>About</a>
                        <a href="#" onClick={(e) => e.preventDefault()}>Services</a>
                        <a href="#" onClick={(e) => e.preventDefault()}>Contact</a>
                      </nav>
                    </header>
                    
                    {/* Main Content */}
                    <main id="demo-main-content" className="demo-main" tabIndex={-1}>
                      <h5>Main Content Area</h5>
                      <p>Skip link를 사용하면 헤더와 네비게이션을 건너뛰고 여기로 바로 이동합니다.</p>
                      <p>키보드 사용자는 매 페이지마다 반복되는 네비게이션을 Tab으로 하나씩 거치지 않아도 됩니다.</p>
                      <button className="demo-reset-button" onClick={(e) => {
                        const container = e.currentTarget.closest('.skip-demo-container');
                        const startButton = container?.querySelector('.demo-start-button') as HTMLElement;
                        startButton?.focus();
                      }}>다시 시작</button>
                    </main>
                  </div>
                </div>
                
                <div className="skip-instructions">
                  <h5>Skip Link 작동 방식:</h5>
                  <ol className="skip-steps">
                    <li><strong>Start Demo 클릭</strong>: 데모가 시작되고 Skip Link에 포커스가 갑니다</li>
                    <li><strong>Skip Link 표시</strong>: 화면 상단 중앙에 "Skip to main content" 링크가 나타납니다</li>
                    <li><strong>선택 옵션</strong>:
                      <ul>
                        <li>Enter 키: 메인 콘텐츠로 바로 이동</li>
                        <li>Tab 키: Skip Link를 건너뛰고 네비게이션으로 이동</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="skip-best-practices">
                <h4>Skip Link 모범 사례</h4>
                <ul>
                  <li><strong>위치</strong>: 페이지 최상단에 위치시켜 첫 번째 탭 포커스를 받도록 함</li>
                  <li><strong>가시성</strong>: 평상시 화면에서 숨기되, 포커스 시 명확하게 표시</li>
                  <li><strong>텍스트</strong>: "Skip to main content"처럼 명확하고 설명적인 텍스트 사용</li>
                  <li><strong>타겟</strong>: 이동할 요소에 적절한 ID와 tabindex="-1" 설정</li>
                  <li><strong>디자인</strong>: 충분한 대비와 크기로 시각적으로도 명확하게 표시</li>
                  <li><strong>다중 링크</strong>: 필요시 navigation, search, footer 등으로의 추가 링크 제공</li>
                </ul>
              </div>

            </div>
          </div>
        </ComponentTooltip>
      </section>
    </div>
  );
};

export default StatesAccessibility;