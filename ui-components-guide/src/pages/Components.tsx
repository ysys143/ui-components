import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { 
  Search, Upload, Calendar, Star, Plus, Minus, ChevronDown, 
  X, Check, AlertCircle, Info, ChevronRight, Download,
  Settings, Home,
  User, Mail,
  HelpCircle, Folder, FolderOpen, File, Grid3X3,
  ExternalLink, ArrowRight, Bell, FileX, XCircle
} from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import StandardPageHeader from '../components/StandardPageHeader';
import './Components.css';

const Components: React.FC = () => {
  // const navigate = useNavigate();
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
  const [showDialog, setShowDialog] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({ node1: true });
  
  // Form validation states
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    bio: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formTouched, setFormTouched] = useState<Record<string, boolean>>({});
  
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

  // Form validation functions
  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = {};
    
    switch (name) {
      case 'username':
        if (!value) {
          errors.username = 'Username is required';
        } else if (value.length < 3 || value.length > 20) {
          errors.username = 'Username must be 3-20 characters';
        }
        break;
      case 'password':
        if (!value) {
          errors.password = 'Password is required';
        } else if (value.length < 8) {
          errors.password = 'Password must be at least 8 characters';
        }
        break;
      case 'bio':
        if (value.length > 500) {
          errors.bio = 'Bio must not exceed 500 characters';
        }
        break;
    }
    
    return errors[name] || '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field was touched
    if (formTouched[name]) {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const errors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) errors[key] = error;
    });
    
    setFormErrors(errors);
    setFormTouched({ username: true, password: true, bio: true });
    
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      // Reset form
      setFormData({ username: '', password: '', bio: '' });
      setFormErrors({});
      setFormTouched({});
    }
  };

  return (
    <div className="components-page">
      <ComponentTooltip
        component="Standardized Page Header"
        description="표준화된 페이지 헤더로 일관된 레이아웃을 제공합니다."
      >
        <StandardPageHeader
          title="UI Components"
          description="모든 UI 컴포넌트의 인터랙티브 데모"
        />
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
                  <span>Option 2</span>
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
                  <label key={option} className="radio">
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
              <div className="switch-group">
                <label className="switch" data-switch="switch1">
              <input 
                type="checkbox"
                    id="switch1"
                checked={toggleStates.switch1}
                onChange={() => handleToggle('switch1')}
              />
              <span className="switch-slider"></span>
                  <span className="switch-label">Enable notifications</span>
            </label>
                <label className="switch" data-switch="switch2">
                  <input 
                    type="checkbox"
                    id="switch2"
                    checked={toggleStates.switch2}
                    onChange={() => handleToggle('switch2')}
                  />
                  <span className="switch-slider"></span>
                  <span className="switch-label">Dark mode</span>
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

          <ComponentTooltip component="Tags / Chips" description="태그나 칩 형태의 작은 정보 단위입니다.">
            <div className="form-group" data-component="tags">
              <label className="form-label">Tags / Chips</label>
              <div className="tags-container">
                <span className="tag">Default Tag</span>
                <span className="tag tag-primary">Primary Tag</span>
                <span className="tag tag-success">Success Tag</span>
                <span className="tag tag-warning">Warning Tag</span>
                <span className="tag tag-error">Error Tag</span>
                <span className="tag tag-removable">
                  Removable
                  <button className="tag-remove" onClick={(e) => e.preventDefault()}>
                    <X size={14} />
                  </button>
                </span>
                <span className="tag tag-interactive" onClick={(e) => e.preventDefault()}>
                  <Plus size={14} />
                  Add Tag
                </span>
              </div>
            </div>
          </ComponentTooltip>
        </div>
      </section>

      {/* Form Components Section */}
      <section className="component-section">
        <h2 className="section-title">Form Components</h2>
        <div className="component-grid-vertical">
          <ComponentTooltip component="Form" description="폼 컨테이너와 레이아웃입니다.">
            <div className="form-container" data-component="form">
              <h3 className="form-title">Contact Form</h3>
              <form className="form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" rows={3} placeholder="Enter your message"></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-ghost">Cancel</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Form Label" description="입력 필드의 레이블입니다.">
            <div className="form-label-examples" data-component="form-label">
              <div className="form-group">
                <label className="form-label">Basic Label</label>
                <input type="text" className="form-input" placeholder="Basic input" />
              </div>
              <div className="form-group">
                <label className="form-label required">Required Label</label>
                <input type="text" className="form-input" placeholder="This field is required" />
              </div>
              <div className="form-group">
                <label className="form-label optional">Optional Label</label>
                <input type="text" className="form-input" placeholder="This field is optional" />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Label with Description
                  <span className="form-label-description">Additional information about this field</span>
                </label>
                <input type="text" className="form-input" placeholder="Input with description" />
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Helper Text" description="입력 필드에 대한 도움말 텍스트입니다.">
            <div className="helper-text-examples" data-component="helper-text">
              <div className="form-group">
                <label className="form-label">Username</label>
                <input type="text" className="form-input" placeholder="Choose a username" />
                <span className="form-helper-text">Choose a unique username between 3-20 characters</span>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" placeholder="Create a password" />
                <span className="form-helper-text info">
                  <Info size={14} />
                  Password must be at least 8 characters long
                </span>
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+1 (555) 000-0000" />
                <span className="form-helper-text muted">We'll only use this for account recovery</span>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Error Message" description="유효성 검사 오류 메시지입니다.">
            <div className="form-group" data-component="error-message">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input state-error" value="invalid@email" readOnly />
              <span className="form-error-message">Please enter a valid email address</span>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Field Group" description="관련 필드를 그룹화합니다.">
            <div className="field-group" data-component="field-group">
              <h3 className="field-group-title">Personal Information</h3>
              <div className="field-group-content">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" placeholder="John" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" placeholder="Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="john.doe@example.com" />
                </div>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Form Validation" description="폼 유효성 검사 패턴입니다.">
            <form className="form-validation-example" data-component="form-validation" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label required">Username</label>
                <input 
                  type="text" 
                  name="username"
                  className={`form-input ${formErrors.username && formTouched.username ? 'state-error' : ''}`}
                  placeholder="Enter username" 
                  value={formData.username}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                {formErrors.username && formTouched.username ? (
                  <span className="form-error-message">{formErrors.username}</span>
                ) : (
                  <span className="form-helper-text">Username must be 3-20 characters</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label required">Password</label>
                <input 
                  type="password" 
                  name="password"
                  className={`form-input ${formErrors.password && formTouched.password ? 'state-error' : ''}`}
                  placeholder="Enter password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                {formErrors.password && formTouched.password ? (
                  <span className="form-error-message">{formErrors.password}</span>
                ) : (
                  <span className="form-helper-text">Password must be at least 8 characters</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea 
                  name="bio"
                  className={`form-textarea ${formErrors.bio && formTouched.bio ? 'state-error' : ''}`}
                  placeholder="Tell us about yourself..." 
                  value={formData.bio}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  rows={4}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {formErrors.bio && formTouched.bio ? (
                    <span className="form-error-message">{formErrors.bio}</span>
                  ) : (
                    <span className="form-helper-text">Optional - Max 500 characters</span>
                  )}
                  <span className="form-helper-text" style={{ fontSize: '0.75rem' }}>
                    {formData.bio.length}/500
                  </span>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-ghost" onClick={() => {
                  setFormData({ username: '', password: '', bio: '' });
                  setFormErrors({});
                  setFormTouched({});
                }}>Reset</button>
              </div>
            </form>
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

            <ComponentTooltip component="Empty State" description="비어있는 상태 표시입니다.">
              <div className="empty-state" data-component="empty-state">
                <FileX size={48} className="empty-state-icon" />
                <h3 className="empty-state-title">No data found</h3>
                <p className="empty-state-description">There are no items to display. Try adjusting your filters or adding new data.</p>
                <button className="btn btn-primary">Add New Item</button>
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
        
        {/* Alert Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="alert">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Alert</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Alert</strong>는 사용자에게 중요한 정보나 상태 변화를 즉시 알리는 컴포넌트입니다. 
            정보, 성공, 경고, 오류 등 다양한 유형으로 구분되며, 각각 고유한 색상과 아이콘을 사용합니다.
          </p>
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
        </div>

        {/* Toast/Snackbar Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="toast">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Toast / Snackbar</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Toast</strong>는 시스템 알림을 표시하는 UI 패턴으로, 주로 화면 상단이나 하단에 나타납니다. 
            <strong> Snackbar</strong>는 Material Design에서 사용하는 용어로 Toast와 유사하지만 주로 화면 하단에 나타나며 더 간단한 형태입니다.
          </p>
          <div className="toast-examples">
            {/* Success Toast */}
            <ComponentTooltip component="Success Toast" description="작업이 성공적으로 완료되었을 때 표시하는 토스트입니다.">
              <div className="toast-container" data-component="success-toast">
                <div className="toast toast-success">
                  <Check size={20} className="toast-icon" />
                  <div className="toast-content">
                    <strong className="toast-title">Success!</strong>
                    <span className="toast-message">Your changes have been saved.</span>
                  </div>
                  <button className="toast-close">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </ComponentTooltip>

            {/* Error Toast */}
            <ComponentTooltip component="Error Toast" description="오류가 발생했을 때 표시하는 토스트입니다.">
              <div className="toast-container">
                <div className="toast toast-error">
                  <XCircle size={20} className="toast-icon" />
                  <div className="toast-content">
                    <strong className="toast-title">Error</strong>
                    <span className="toast-message">Something went wrong. Please try again.</span>
                  </div>
                  <button className="toast-close">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </ComponentTooltip>

            {/* Warning Toast */}
            <ComponentTooltip component="Warning Toast" description="주의가 필요한 상황을 알리는 토스트입니다.">
              <div className="toast-container">
                <div className="toast toast-warning">
                  <AlertCircle size={20} className="toast-icon" />
                  <div className="toast-content">
                    <strong className="toast-title">Warning</strong>
                    <span className="toast-message">Your session will expire in 5 minutes.</span>
                  </div>
                  <button className="toast-close">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </ComponentTooltip>

            {/* Info Toast */}
            <ComponentTooltip component="Info Toast" description="일반적인 정보를 전달하는 토스트입니다.">
              <div className="toast-container">
                <div className="toast toast-info">
                  <Info size={20} className="toast-icon" />
                  <div className="toast-content">
                    <strong className="toast-title">New Update</strong>
                    <span className="toast-message">A new version is available.</span>
                  </div>
                  <button className="toast-close">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </ComponentTooltip>

            {/* Toast with Action */}
            <ComponentTooltip component="Toast with Action Button" description="Toast 메시지에 액션 버튼을 포함한 형태입니다. 사용자가 알림을 받고 즉시 관련 작업을 수행할 수 있도록 합니다. 예: '새 메시지 도착' 알림에 '보기' 버튼 추가">
              <div className="toast-container">
                <div className="toast toast-action">
                  <Bell size={20} className="toast-icon" />
                  <div className="toast-content">
                    <span className="toast-message">You have a new message</span>
                  </div>
                  <button className="btn btn-sm btn-primary">View</button>
                  <button className="toast-close">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </ComponentTooltip>

            {/* Minimal Toast (Snackbar style) */}
            <ComponentTooltip component="Snackbar (Material Design Style)" description="Material Design의 Snackbar는 최소한의 정보와 선택적 액션을 제공합니다. Toast보다 더 간결하고, 주로 화면 하단에 표시됩니다. 실행 취소(Undo) 같은 단일 액션을 포함할 수 있습니다.">
              <div className="toast-container">
                <div className="toast toast-minimal">
                  <span>Item deleted</span>
                  <button className="btn btn-ghost btn-sm">Undo</button>
                </div>
              </div>
            </ComponentTooltip>

            {/* Toast with Progress */}
            <ComponentTooltip component="Progress Toast" description="진행 상황을 표시하는 프로그레스 바가 있는 토스트입니다.">
              <div className="toast-container">
                <div className="toast toast-progress">
                  <div className="toast-header">
                    <Download size={20} className="toast-icon" />
                    <span className="toast-message">Downloading file...</span>
                    <button className="toast-close">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="toast-progress-bar">
                    <div className="toast-progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </ComponentTooltip>

            {/* Positioned Toasts Demo */}
            <ComponentTooltip component="Toast Positions" description="화면의 다양한 위치에 토스트를 표시할 수 있습니다.">
              <div className="toast-position-demo">
                <p className="demo-label">Toast Positions:</p>
                <div className="toast-positions">
                  <div className="position-box top-left">Top Left</div>
                  <div className="position-box top-center">Top Center</div>
                  <div className="position-box top-right">Top Right</div>
                  <div className="position-box bottom-left">Bottom Left</div>
                  <div className="position-box bottom-center">Bottom Center</div>
                  <div className="position-box bottom-right">Bottom Right</div>
                </div>
              </div>
            </ComponentTooltip>
          </div>


        </div>

        {/* Modal Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="modal">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Modal</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Modal</strong>은 사용자의 주의를 끌기 위해 다른 모든 콘텐츠 위에 표시되는 대화상자입니다. 
            중요한 작업을 수행하거나 확인이 필요할 때 사용하며, 배경을 클릭하거나 닫기 버튼으로 닫을 수 있습니다.
          </p>
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
        </div>
        
        {/* Dropdown Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="dropdown">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Dropdown</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Dropdown</strong>은 여러 옵션 중 하나를 선택할 수 있는 메뉴를 제공하는 컴포넌트입니다. 
            공간을 절약하면서 다양한 선택지를 제공할 때 사용하며, 클릭 시 메뉴가 펼쳐집니다.
          </p>
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
        </div>

        {/* Tooltip Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="tooltip">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Tooltip</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Tooltip</strong>은 요소에 마우스를 올렸을 때 나타나는 간단한 정보 표시 컴포넌트입니다. 
            버튼이나 아이콘의 기능을 설명하거나 추가 정보를 제공할 때 사용합니다.
          </p>
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

        {/* Dialog Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="dialog">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Dialog</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Dialog</strong>는 사용자의 확인이나 결정이 필요한 상황에서 사용하는 대화상자입니다. 
            주로 삭제 확인이나 중요한 작업 전 확인 메시지를 표시할 때 사용합니다.
          </p>
          <ComponentTooltip component="Dialog" description="대화상자 컴포넌트입니다.">
            <div>
              <button className="btn btn-primary" onClick={() => setShowDialog(true)}>Open Dialog</button>
              {showDialog && (
                <div className="modal-overlay" onClick={() => setShowDialog(false)}>
                  <div className="dialog" data-component="dialog" onClick={(e) => e.stopPropagation()}>
                    <div className="dialog-header">
                      <h3>Confirm Action</h3>
                    </div>
                    <div className="dialog-body">
                      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                    </div>
                    <div className="dialog-footer">
                      <button className="btn btn-ghost" onClick={() => setShowDialog(false)}>Cancel</button>
                      <button className="btn btn-error" onClick={() => setShowDialog(false)}>Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ComponentTooltip>
        </div>

        {/* Notification Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="notification">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Notification</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Notification</strong>은 시스템이나 다른 사용자로부터의 알림을 표시하는 컴포넌트입니다. 
            새 메시지, 업데이트, 이벤트 등을 사용자에게 알릴 때 사용합니다.
          </p>
          <ComponentTooltip component="Notification" description="알림 컴포넌트입니다.">
            <div>
              <button className="btn btn-primary" onClick={() => setShowNotification(true)}>Show Notification</button>
              {showNotification && (
                <div className="notification" data-component="notification">
                  <Bell size={20} className="notification-icon" />
                  <div className="notification-content">
                    <h4 className="notification-title">New message received</h4>
                    <p className="notification-description">You have a new message from John Doe</p>
                  </div>
                  <button className="notification-close" onClick={() => setShowNotification(false)}>
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
          </ComponentTooltip>
        </div>

        {/* Popover Section - 별도 섹션으로 분리 */}
        <div style={{ marginTop: '2rem' }} data-component="popover">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>Popover</h3>
          <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>Popover</strong>는 툴팁보다 더 많은 내용을 담을 수 있는 팝업 컴포넌트입니다. 
            제목, 본문, 버튼 등을 포함할 수 있으며, 클릭하여 열고 닫을 수 있습니다.
          </p>
          <ComponentTooltip component="Popover" description="팝오버 컴포넌트입니다.">
            <div className="popover-container">
              <button 
                className="btn btn-outline"
                onClick={() => setShowPopover(!showPopover)}
              >
                Click for popover
              </button>
              {showPopover && (
                <div className="popover" data-component="popover">
                  <div className="popover-arrow"></div>
                  <div className="popover-header">
                    <h4>Popover Title</h4>
                  </div>
                  <div className="popover-body">
                    <p>This is a popover with more detailed content than a tooltip.</p>
                  </div>
                </div>
              )}
            </div>
          </ComponentTooltip>
        </div>
      </section>

      {/* States Section */}
      <section className="component-section">
        <h2 className="section-title">States</h2>
        
        <div className="component-grid">
          <ComponentTooltip component="Default" description="기본 상태 예시입니다.">
            <div className="states-demo" data-component="default">
              <button className="btn btn-primary">Default Button</button>
              <input type="text" className="form-input" placeholder="Default Input" />
              <div className="state-label">Default State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Hover" description="호버 상태 예시입니다.">
            <div className="states-demo" data-component="hover">
              <button className="btn btn-primary state-hover">Hover Button</button>
              <input type="text" className="form-input state-hover" placeholder="Hover Input" />
              <div className="state-label">Hover State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Focus" description="포커스 상태 예시입니다.">
            <div className="states-demo" data-component="focus">
              <button className="btn btn-primary state-focus">Focus Button</button>
              <input type="text" className="form-input state-focus" placeholder="Focus Input" />
              <div className="state-label">Focus State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Active" description="활성 상태 예시입니다.">
            <div className="states-demo" data-component="active">
              <button className="btn btn-primary state-active">Active Button</button>
              <input type="text" className="form-input state-active" placeholder="Active Input" />
              <div className="state-label">Active State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Disabled" description="비활성화 상태 예시입니다.">
            <div className="states-demo" data-component="disabled">
              <button className="btn btn-primary" disabled>Disabled Button</button>
              <input type="text" className="form-input" disabled placeholder="Disabled Input" />
              <div className="state-label">Disabled State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Loading" description="로딩 상태 예시입니다.">
            <div className="states-demo" data-component="loading">
              <button className="btn btn-primary">
                <span className="spinner"></span>
                <span>Loading...</span>
              </button>
              <div className="skeleton skeleton-text"></div>
              <div className="state-label">Loading State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Selected" description="선택된 상태 예시입니다.">
            <div className="states-demo" data-component="selected">
              <button className="btn btn-primary state-selected">Selected Button</button>
              <div className="card state-selected">
                <p>Selected Card</p>
              </div>
              <div className="state-label">Selected State</div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Error" description="에러 상태 예시입니다.">
            <div className="states-demo" data-component="error">
              <button className="btn btn-error">Error Button</button>
              <input type="text" className="form-input state-error" value="Error Input" readOnly />
              <div className="alert alert-error">
                <XCircle size={20} />
                <span>Error State</span>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Success" description="성공 상태 예시입니다.">
            <div className="states-demo" data-component="success">
              <button className="btn btn-success">Success Button</button>
              <input type="text" className="form-input state-success" value="Success Input" readOnly />
              <div className="alert alert-success">
                <Check size={20} />
                <span>Success State</span>
              </div>
            </div>
          </ComponentTooltip>

          <ComponentTooltip component="Warning" description="경고 상태 예시입니다.">
            <div className="states-demo" data-component="warning">
              <button className="btn btn-warning">Warning Button</button>
              <input type="text" className="form-input state-warning" value="Warning Input" readOnly />
              <div className="alert alert-warning">
                <AlertCircle size={20} />
                <span>Warning State</span>
              </div>
            </div>
          </ComponentTooltip>
        </div>
      </section>
    </div>
  );
};

export default Components;