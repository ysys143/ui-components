import React, { useState } from 'react';
import { 
  Search, Upload, Calendar, Star, Plus, Minus, ChevronDown, 
  X, Check, AlertCircle, Info, ChevronRight, Download, Play,
  Pause, SkipForward, SkipBack, Volume2, Settings, Home,
  User, Mail, Phone, MapPin, Globe, Heart, Share2, Bookmark,
  MoreVertical, HelpCircle, Folder, FolderOpen, File, Grid3X3,
  Menu as MenuIcon, ExternalLink, ArrowRight
} from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import './Components.css';

const Components: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    switch1: false,
    switch2: true,
    check1: false,
    check2: true,
    check3: false
  });

  const [radioValue, setRadioValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [stepperValue, setStepperValue] = useState(1);
  const [rating, setRating] = useState(3);
  const [accordionOpen, setAccordionOpen] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState(0);
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({ node1: true });
  
  const suggestions = ['Apple', 'Application', 'Apricot', 'Banana', 'Berry', 'Blueberry', 'Cherry', 'Chocolate', 'Citrus', 'Date', 'Dragon Fruit'];

  const handleToggle = (key: string) => {
    setToggleStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAccordion = (key: string) => {
    setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const toggleTreeNode = (nodeId: string) => {
    setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  return (
    <div className="components-page">
      <ComponentTooltip
        component="Page Header"
        description="Components 페이지의 헤더입니다."
      >
        <div className="page-header">
          <h1 className="page-title">UI Components</h1>
          <p className="page-description">모든 UI 컴포넌트의 인터랙티브 데모</p>
        </div>
      </ComponentTooltip>

      {/* Buttons Section */}
      <section className="component-section">
        <h2 className="section-title">Buttons</h2>
        <div className="component-grid">
          <ComponentTooltip component="Button" description="기본 버튼 컴포넌트입니다.">
            <button className="btn btn-primary">Primary Button</button>
          </ComponentTooltip>
          <ComponentTooltip component="Secondary Button" description="보조 버튼입니다.">
            <button className="btn btn-secondary">Secondary Button</button>
          </ComponentTooltip>
          <ComponentTooltip component="Outline Button" description="테두리만 있는 버튼입니다.">
            <button className="btn btn-outline">Outline Button</button>
          </ComponentTooltip>
          <ComponentTooltip component="Ghost Button" description="배경이 없는 버튼입니다.">
            <button className="btn btn-ghost">Ghost Button</button>
          </ComponentTooltip>
          <ComponentTooltip component="Icon Button" description="아이콘만 있는 버튼입니다.">
            <button className="btn-icon">
              <Settings size={20} />
            </button>
          </ComponentTooltip>
          <ComponentTooltip component="Button with Icon" description="아이콘과 텍스트가 함께 있는 버튼입니다.">
            <button className="btn btn-primary">
              <Download size={16} />
              <span>Download</span>
            </button>
          </ComponentTooltip>
          <ComponentTooltip component="Disabled Button" description="비활성화된 버튼입니다.">
            <button className="btn btn-primary" disabled>Disabled</button>
          </ComponentTooltip>
          <ComponentTooltip component="Loading Button" description="로딩 중인 버튼입니다.">
            <button className="btn btn-primary">
              <span className="spinner"></span>
              <span>Loading...</span>
            </button>
          </ComponentTooltip>
        </div>
      </section>

      {/* Form Inputs Section */}
      <section className="component-section">
        <h2 className="section-title">Form Inputs</h2>
        <div className="component-grid-vertical">
          <ComponentTooltip component="Text Input" description="텍스트 입력 필드입니다.">
            <div className="form-group">
              <label className="form-label">Text Input</label>
              <input type="text" className="form-input" placeholder="Enter text..." />
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Number Input" description="숫자 입력 필드입니다.">
            <div className="form-group">
              <label className="form-label">Number Input</label>
              <input type="number" className="form-input" placeholder="0" min="0" max="100" />
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Textarea" description="여러 줄 텍스트 입력 필드입니다.">
            <div className="form-group">
              <label className="form-label">Textarea</label>
              <textarea className="form-textarea" rows={4} placeholder="Enter description..."></textarea>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Select" description="드롭다운 선택 필드입니다.">
            <div className="form-group">
              <label className="form-label">Select</label>
              <select className="form-select" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Search Input" description="검색 입력 필드입니다.">
            <div className="form-group">
              <label className="form-label">Search</label>
              <div className="search-input">
                <Search size={20} className="search-icon" />
                <input type="text" className="form-input with-icon" placeholder="Search..." />
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Autocomplete" description="자동완성 기능이 있는 입력 필드입니다.">
            <div className="form-group">
              <label className="form-label">Autocomplete</label>
              <div className="autocomplete-container">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Type to search..."
                  value={autocompleteValue}
                  onChange={(e) => {
                    setAutocompleteValue(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowSuggestions(autocompleteValue.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                {showSuggestions && (
                  <div className="autocomplete-suggestions">
                    {suggestions
                      .filter(item => item.toLowerCase().includes(autocompleteValue.toLowerCase()))
                      .slice(0, 5)
                      .map((item, index) => (
                        <div 
                          key={index} 
                          className="suggestion-item"
                          onClick={() => {
                            setAutocompleteValue(item);
                            setShowSuggestions(false);
                          }}
                        >
                          {item}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Date Picker" description="날짜 선택 필드입니다.">
            <div className="form-group">
              <label className="form-label">Date Picker</label>
              <div className="date-input">
                <Calendar size={20} className="date-icon" />
                <input 
                  type="date" 
                  className="form-input with-icon" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="File Uploader" description="파일 업로드 필드입니다.">
            <div className="form-group">
              <label className="form-label">File Upload</label>
              <div className="file-uploader">
                <Upload size={20} />
                <span>Click to upload or drag and drop</span>
                <input type="file" className="file-input" />
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Checkbox" description="체크박스 입력입니다.">
            <div className="form-group">
              <label className="form-label">Checkboxes</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="checkbox">
                  <input 
                    type="checkbox" 
                    checked={toggleStates.check1}
                    onChange={() => handleToggle('check1')}
                  />
                  <span className="checkbox-mark"></span>
                  <span>Option 1</span>
                </label>
                <label className="checkbox">
                  <input 
                    type="checkbox" 
                    checked={toggleStates.check2}
                    onChange={() => handleToggle('check2')}
                  />
                  <span className="checkbox-mark"></span>
                  <span>Option 2 (checked)</span>
                </label>
                <label className="checkbox">
                  <input 
                    type="checkbox" 
                    checked={toggleStates.check3}
                    onChange={() => handleToggle('check3')}
                  />
                  <span className="checkbox-mark"></span>
                  <span>Option 3</span>
                </label>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Radio Button" description="라디오 버튼 그룹입니다.">
            <div className="form-group">
              <label className="form-label">Radio Buttons</label>
              <div className="radio-group">
                {['option1', 'option2', 'option3'].map((option) => (
                  <label key={option} className="checkbox">
                    <input 
                      type="radio" 
                      name="radio-group"
                      value={option}
                      checked={radioValue === option}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <span className="radio-mark"></span>
                    <span>Option {option.slice(-1)}</span>
                  </label>
                ))}
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Switch" description="토글 스위치입니다.">
            <div className="form-group">
              <label className="form-label">Switches</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="switch">
                  <input 
                    type="checkbox"
                    checked={toggleStates.switch1}
                    onChange={() => handleToggle('switch1')}
                  />
                  <span className="switch-slider"></span>
                  <span className="switch-label">Enable notifications</span>
                </label>
                <label className="switch">
                  <input 
                    type="checkbox"
                    checked={toggleStates.switch2}
                    onChange={() => handleToggle('switch2')}
                  />
                  <span className="switch-slider"></span>
                  <span className="switch-label">Dark mode (enabled)</span>
                </label>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Slider" description="범위 슬라이더입니다.">
            <div className="form-group">
              <label className="form-label">Slider: {sliderValue}%</label>
              <input 
                type="range" 
                className="slider"
                min="0" 
                max="100" 
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
              />
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Rating" description="별점 평가입니다.">
            <div className="form-group">
              <label className="form-label">Rating</label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className={`rating-star ${star <= rating ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Stepper" description="숫자 증감 컨트롤입니다.">
            <div className="form-group">
              <label className="form-label">Stepper</label>
              <div className="stepper">
                <button 
                  className="stepper-button"
                  onClick={() => setStepperValue(Math.max(0, stepperValue - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="stepper-value">{stepperValue}</span>
                <button 
                  className="stepper-button"
                  onClick={() => setStepperValue(stepperValue + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </ComponentTooltip>
        </div>
      </section>

      {/* Data Display & Containers Section */}
      <section className="component-section">
        <h2 className="section-title">Data Display & Containers</h2>
        
        {/* Cards */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Cards</h3>
          <div className="component-grid">
            <ComponentTooltip component="Card" description="기본 카드 컴포넌트입니다.">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Card Title</h3>
                  <button className="btn-icon-sm">
                    <X size={16} />
                  </button>
                </div>
                <div className="card-body">
                  <p>This is a card component with header, body, and footer sections.</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Action</button>
                  <button className="btn btn-ghost">Cancel</button>
                </div>
              </div>
            </ComponentTooltip>
          </div>
        </div>

        {/* Badges & Avatars */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Badges & Avatars</h3>
          <div className="component-grid">
            <ComponentTooltip component="Badge" description="상태를 표시하는 배지입니다.">
              <div className="badge-group">
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-warning">Warning</span>
                <span className="badge badge-error">Error</span>
                <span className="badge badge-info">Info</span>
              </div>
            </ComponentTooltip>

            <ComponentTooltip component="Avatar" description="사용자 아바타 이미지입니다.">
              <div className="avatar-group">
                <div className="avatar avatar-sm">
                  <User size={16} />
                </div>
                <div className="avatar avatar-md">
                  <User size={20} />
                </div>
                <div className="avatar avatar-lg">
                  <User size={24} />
                </div>
                <div className="avatar avatar-xl">
                  <User size={32} />
                </div>
              </div>
            </ComponentTooltip>
          </div>
        </div>

        {/* Progress & Loading */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Progress & Loading</h3>
          <div className="component-grid">
            <ComponentTooltip component="Progress Bar" description="진행률 표시 바입니다.">
              <div className="progress-group">
                <div className="progress">
                  <div className="progress-bar" style={{ width: '25%' }}></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-success" style={{ width: '50%' }}></div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-warning" style={{ width: '75%' }}></div>
                </div>
              </div>
            </ComponentTooltip>

            <ComponentTooltip component="Skeleton" description="로딩 스켈레톤입니다.">
              <div className="skeleton-group">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
              </div>
            </ComponentTooltip>
          </div>
        </div>

        {/* Navigation Components */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Navigation & Tabs</h3>
          <div className="component-grid-vertical">
            <ComponentTooltip component="Tabs" description="탭 네비게이션입니다.">
              <div className="tabs">
                <div className="tabs-list">
                  {['Tab 1', 'Tab 2', 'Tab 3'].map((tab, index) => (
                    <button
                      key={tab}
                      className={`tab ${activeTab === index ? 'active' : ''}`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="tab-panel">
                  <p>Content for Tab {activeTab + 1}</p>
                </div>
              </div>
            </ComponentTooltip>

            <ComponentTooltip component="Accordion" description="접이식 콘텐츠 패널입니다.">
              <div className="accordion">
                {['Section 1', 'Section 2', 'Section 3'].map((section) => (
                  <div key={section} className="accordion-item">
                    <button
                      className="accordion-header"
                      onClick={() => toggleAccordion(section)}
                    >
                      <span>{section}</span>
                      <ChevronDown 
                        size={20} 
                        className={`accordion-icon ${accordionOpen[section] ? 'open' : ''}`}
                      />
                    </button>
                    {accordionOpen[section] && (
                      <div className="accordion-content">
                        <p>Content for {section}. This is an expandable section that can contain any content.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ComponentTooltip>
          </div>
        </div>

        {/* Lists & Tables */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Lists & Tables</h3>
          <div className="component-grid">
            <ComponentTooltip component="List" description="기본 리스트 컴포넌트입니다.">
              <ul className="list">
                <li className="list-item">
                  <Home size={20} className="list-icon" />
                  <span>List item 1</span>
                </li>
                <li className="list-item">
                  <User size={20} className="list-icon" />
                  <span>List item 2</span>
                </li>
                <li className="list-item">
                  <Settings size={20} className="list-icon" />
                  <span>List item 3</span>
                </li>
              </ul>
            </ComponentTooltip>

            <ComponentTooltip component="Structured List" description="구조화된 리스트입니다.">
              <div className="structured-list">
                <div className="structured-list-item">
                  <div className="structured-list-label">Name</div>
                  <div className="structured-list-value">John Doe</div>
                </div>
                <div className="structured-list-item">
                  <div className="structured-list-label">Email</div>
                  <div className="structured-list-value">john@example.com</div>
                </div>
                <div className="structured-list-item">
                  <div className="structured-list-label">Role</div>
                  <div className="structured-list-value">Administrator</div>
                </div>
              </div>
            </ComponentTooltip>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <ComponentTooltip component="Data Table" description="데이터 테이블 컴포넌트입니다.">
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" className="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                    <td>
                      <button className="btn-icon-sm">
                        <Settings size={16} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                    <td>
                      <button className="btn-icon-sm">
                        <Settings size={16} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ComponentTooltip>
        </div>

        {/* Timeline & Dividers */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Timeline & Dividers</h3>
          <div className="component-grid">
            <ComponentTooltip component="Timeline" description="타임라인 컴포넌트입니다.">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Event 1</h4>
                    <p className="timeline-description">Description of the first event</p>
                    <span className="timeline-date">2024-01-01</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Event 2</h4>
                    <p className="timeline-description">Description of the second event</p>
                    <span className="timeline-date">2024-01-15</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">Event 3</h4>
                    <p className="timeline-description">Description of the third event</p>
                    <span className="timeline-date">2024-02-01</span>
                  </div>
                </div>
              </div>
            </ComponentTooltip>

            <ComponentTooltip component="Divider" description="구분선 컴포넌트입니다.">
              <div className="divider-examples">
                <p>Content above divider</p>
                <hr className="divider" />
                <p>Content below divider</p>
                
                <div className="divider-with-text">
                  <span>OR</span>
                </div>
                
                <hr className="divider divider-dashed" />
                
                <hr className="divider divider-dotted" />
              </div>
            </ComponentTooltip>
          </div>
        </div>

        {/* Tiles & TreeView */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Interactive Containers</h3>
          <div className="component-grid-vertical">
            <ComponentTooltip component="Tile" description="클릭 가능한 타일 형태의 컨테이너입니다.">
              <div className="tile-grid">
                <div className="tile">
                  <Grid3X3 size={24} className="tile-icon" />
                  <h4 className="tile-title">Dashboard</h4>
                  <p className="tile-description">View analytics and metrics</p>
                </div>
                <div className="tile tile-selected">
                  <Settings size={24} className="tile-icon" />
                  <h4 className="tile-title">Settings</h4>
                  <p className="tile-description">Configure your preferences</p>
                </div>
                <div className="tile">
                  <User size={24} className="tile-icon" />
                  <h4 className="tile-title">Profile</h4>
                  <p className="tile-description">Manage your account</p>
                </div>
              </div>
            </ComponentTooltip>

            <ComponentTooltip component="TreeView" description="계층 구조를 표시하는 트리뷰입니다.">
              <div className="tree-view" data-component="treeview">
                <div className="tree-item">
                  <button 
                    className="tree-node"
                    onClick={() => toggleTreeNode('node1')}
                  >
                    {expandedNodes.node1 ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <FolderOpen size={16} className="tree-icon" />
                    <span>Documents</span>
                  </button>
                  {expandedNodes.node1 && (
                    <div className="tree-children">
                      <div className="tree-item">
                        <button 
                          className="tree-node"
                          onClick={() => toggleTreeNode('node2')}
                        >
                          {expandedNodes.node2 ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          <Folder size={16} className="tree-icon" />
                          <span>Projects</span>
                        </button>
                        {expandedNodes.node2 && (
                          <div className="tree-children">
                            <div className="tree-item">
                              <div className="tree-node tree-leaf">
                                <File size={16} className="tree-icon" />
                                <span>project-1.doc</span>
                              </div>
                            </div>
                            <div className="tree-item">
                              <div className="tree-node tree-leaf">
                                <File size={16} className="tree-icon" />
                                <span>project-2.doc</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="tree-item">
                        <div className="tree-node tree-leaf">
                          <File size={16} className="tree-icon" />
                          <span>readme.txt</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ComponentTooltip>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="component-section">
        <h2 className="section-title">Navigation</h2>
        <div className="component-grid-vertical">
          <ComponentTooltip component="Breadcrumb" description="경로 표시 네비게이션입니다.">
            <nav className="breadcrumb">
              <a href="#" onClick={(e) => e.preventDefault()} className="breadcrumb-item">Home</a>
              <ChevronRight size={16} className="breadcrumb-separator" />
              <a href="#" onClick={(e) => e.preventDefault()} className="breadcrumb-item">Products</a>
              <ChevronRight size={16} className="breadcrumb-separator" />
              <span className="breadcrumb-item active">Details</span>
            </nav>
          </ComponentTooltip>

          <ComponentTooltip component="Pagination" description="페이지네이션 컴포넌트입니다.">
            <div className="pagination">
              <button className="pagination-btn" disabled>이전</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">4</button>
              <button className="pagination-btn">5</button>
              <button className="pagination-btn">다음</button>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Navbar Example" description="상단 네비게이션 바입니다.">
            <div className="navbar-demo" data-component="navbar-example">
              <div className="navbar-brand">
                <Grid3X3 size={24} />
                <span>Brand</span>
              </div>
              <nav className="navbar-nav">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link active">Home</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Products</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Services</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">About</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">Contact</a>
              </nav>
              <div className="navbar-actions">
                <button className="btn btn-ghost btn-sm">Sign In</button>
                <button className="btn btn-primary btn-sm">Sign Up</button>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Sidebar Example" description="사이드 네비게이션 메뉴입니다.">
            <div className="sidebar-demo" data-component="sidebar-example">
              <div className="sidebar-header">
                <h3>Navigation</h3>
              </div>
              <nav className="sidebar-nav">
                <a href="#" onClick={(e) => e.preventDefault()} className="sidebar-link active">
                  <Home size={20} />
                  <span>Dashboard</span>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="sidebar-link">
                  <User size={20} />
                  <span>Users</span>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="sidebar-link">
                  <Settings size={20} />
                  <span>Settings</span>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="sidebar-link">
                  <Mail size={20} />
                  <span>Messages</span>
                </a>
              </nav>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Menu" description="메뉴 컴포넌트입니다.">
            <div className="menu-demo" data-component="menu">
              <div className="menu">
                <button className="menu-item">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="menu-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <button className="menu-item">
                  <Download size={16} />
                  <span>Downloads</span>
                </button>
                <hr className="menu-divider" />
                <button className="menu-item">
                  <ExternalLink size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Link" description="링크 컴포넌트입니다.">
            <div className="link-group" data-component="link">
              <a href="#" onClick={(e) => e.preventDefault()} className="link">Basic Link</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="link link-primary">Primary Link</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="link link-underline">Underlined Link</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="link link-with-icon">
                External Link
                <ExternalLink size={16} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="link link-with-arrow">
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          </ComponentTooltip>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="component-section">
        <h2 className="section-title">Feedback & Overlays</h2>
        
        <ComponentTooltip component="Alert" description="알림 메시지 컴포넌트입니다.">
          <div className="alert-group">
            <div className="alert alert-info">
              <Info size={20} />
              <span>This is an informational alert</span>
            </div>
            <div className="alert alert-success">
              <Check size={20} />
              <span>This is a success alert</span>
            </div>
            <div className="alert alert-warning">
              <AlertCircle size={20} />
              <span>This is a warning alert</span>
            </div>
            <div className="alert alert-error">
              <X size={20} />
              <span>This is an error alert</span>
            </div>
          </div>
        </ComponentTooltip>

        <ComponentTooltip component="Toast" description="토스트 알림입니다.">
          <div className="toast-container">
            <div className="toast">
              <Check size={20} className="toast-icon" />
              <span>Changes saved successfully!</span>
              <button className="toast-close">
                <X size={16} />
              </button>
            </div>
          </div>
        </ComponentTooltip>

        <div className="component-grid">
          <ComponentTooltip component="Modal" description="모달 대화상자 컴포넌트입니다.">
            <div>
              <button className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>
              {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                  <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                      <h3>Modal Title</h3>
                      <button className="btn-icon" onClick={() => setShowModal(false)}>
                        <X size={20} />
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>This is a modal dialog. Click outside or the X button to close.</p>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                      <button className="btn btn-primary" onClick={() => setShowModal(false)}>Confirm</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Dropdown" description="드롭다운 메뉴 컴포넌트입니다.">
            <div className="dropdown-container">
              <button className="btn btn-secondary" onClick={() => setShowDropdown(!showDropdown)}>
                Options
                <ChevronDown size={16} />
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item">Option 1</button>
                  <button className="dropdown-item">Option 2</button>
                  <button className="dropdown-item">Option 3</button>
                  <hr className="dropdown-divider" />
                  <button className="dropdown-item">Delete</button>
                </div>
              )}
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Tooltip" description="툴팁 컴포넌트입니다.">
            <div className="tooltip-container">
              <button 
                className="btn btn-outline"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <HelpCircle size={16} />
                Hover me
              </button>
              {showTooltip && (
                <div className="tooltip tooltip-top">
                  This is a helpful tooltip
                </div>
              )}
            </div>
          </ComponentTooltip>
        </div>
      </section>
    </div>
  );
};

export default Components;