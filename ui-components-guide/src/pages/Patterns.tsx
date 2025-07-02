import React, { useState } from 'react';
import { 
  User, Lock, Mail, Eye, EyeOff, LogIn, UserPlus, AlertCircle,
  Search, Filter, Download, Plus, Edit, Trash2, ChevronRight,
  Check, X, ArrowRight, ArrowLeft, Upload, Image, FileText,
  Calendar, Clock, MapPin, Phone, CreditCard, Shield, Bell, Heart
} from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import './Patterns.css';

const Patterns: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const wizardSteps = ['Account Info', 'Personal Details', 'Preferences', 'Review'];

  return (
    <div className="patterns-page">
      <ComponentTooltip
        component="Page Header"
        description="Patterns 페이지의 헤더입니다."
      >
        <div className="page-header">
          <h1 className="page-title">Component Patterns</h1>
          <p className="page-description">일반적인 UI 패턴과 컴포넌트 조합</p>
        </div>
      </ComponentTooltip>

      {/* Login Page Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Login Page</h2>
        <ComponentTooltip component="Login Form" description="사용자 인증을 위한 로그인 폼 패턴입니다.">
          <div className="login-container">
            <div className="login-card">
              <div className="login-header">
                <h3 className="login-title">Sign In</h3>
                <p className="login-subtitle">Welcome back! Please login to your account.</p>
              </div>
              
              <form className="login-form">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <div className="input-with-icon">
                    <Mail size={20} className="input-icon" />
                    <input type="email" className="form-input with-icon" placeholder="Enter your email" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-with-icon">
                    <Lock size={20} className="input-icon" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="form-input with-icon with-action" 
                      placeholder="Enter your password" 
                    />
                    <button 
                      type="button" 
                      className="input-action"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                
                <div className="form-row">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox-mark"></span>
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="link">Forgot password?</a>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  <LogIn size={20} />
                  <span>Sign In</span>
                </button>
                
                <div className="divider-with-text">
                  <span>OR</span>
                </div>
                
                <button type="button" className="btn btn-outline btn-full">
                  Sign in with Google
                </button>
                
                <p className="login-footer">
                  Don't have an account? <a href="#" className="link">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Dashboard Layout Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Dashboard Layout</h2>
        <ComponentTooltip component="Dashboard Layout" description="대시보드 레이아웃 패턴입니다.">
          <div className="dashboard-demo">
            <div className="dashboard-header">
              <div className="dashboard-title-section">
                <h3>Dashboard Overview</h3>
                <p className="text-muted">Last updated: 2 hours ago</p>
              </div>
              <div className="dashboard-actions">
                <button className="btn btn-ghost">
                  <Download size={20} />
                  <span>Export</span>
                </button>
                <button className="btn btn-primary">
                  <Plus size={20} />
                  <span>Add Widget</span>
                </button>
              </div>
            </div>
            
            <div className="dashboard-grid">
              <div className="dashboard-card stats-card">
                <h4>Total Revenue</h4>
                <p className="stats-value">$45,231</p>
                <span className="trend trend-up">+12% from last month</span>
              </div>
              <div className="dashboard-card stats-card">
                <h4>Active Users</h4>
                <p className="stats-value">3,456</p>
                <span className="trend trend-down">-2% from last month</span>
              </div>
              <div className="dashboard-card stats-card">
                <h4>Conversion Rate</h4>
                <p className="stats-value">3.4%</p>
                <span className="trend trend-up">+0.5% from last month</span>
              </div>
              <div className="dashboard-card chart-card">
                <h4>Revenue Chart</h4>
                <div className="chart-placeholder">Chart goes here</div>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Form Wizard Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Form Wizard</h2>
        <ComponentTooltip component="Form Wizard" description="다단계 폼 위자드 패턴입니다.">
          <div className="wizard-container">
            <div className="wizard-steps">
              {wizardSteps.map((step, index) => (
                <div key={step} className={`wizard-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}>
                  <div className="step-indicator">
                    {index < currentStep ? <Check size={16} /> : index + 1}
                  </div>
                  <span className="step-label">{step}</span>
                </div>
              ))}
            </div>
            
            <div className="wizard-content">
              {currentStep === 0 && (
                <div className="wizard-panel">
                  <h3>Create Your Account</h3>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder="Create a password" />
                  </div>
                </div>
              )}
              
              {currentStep === 1 && (
                <div className="wizard-panel">
                  <h3>Personal Information</h3>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-input" placeholder="John" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-input" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-input" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="wizard-panel">
                  <h3>Preferences</h3>
                  <div className="preference-list">
                    <label className="checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkbox-mark"></span>
                      <span>Email notifications</span>
                    </label>
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="checkbox-mark"></span>
                      <span>SMS notifications</span>
                    </label>
                    <label className="checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkbox-mark"></span>
                      <span>Marketing emails</span>
                    </label>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="wizard-panel">
                  <h3>Review & Submit</h3>
                  <div className="review-content">
                    <div className="review-item">
                      <span className="review-label">Email:</span>
                      <span className="review-value">john.doe@example.com</span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Name:</span>
                      <span className="review-value">John Doe</span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Phone:</span>
                      <span className="review-value">+1 (555) 123-4567</span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Notifications:</span>
                      <span className="review-value">Email, Marketing</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="wizard-actions">
              <button 
                className="btn btn-ghost" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ArrowLeft size={20} />
                <span>Previous</span>
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => setCurrentStep(Math.min(wizardSteps.length - 1, currentStep + 1))}
              >
                <span>{currentStep === wizardSteps.length - 1 ? 'Submit' : 'Next'}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Master-Detail Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Master-Detail Layout</h2>
        <ComponentTooltip component="Master-Detail" description="목록과 상세 정보를 함께 표시하는 패턴입니다.">
          <div className="master-detail-container">
            <div className="master-list">
              <div className="list-header">
                <h4>Messages</h4>
                <button className="btn-icon-sm">
                  <Plus size={16} />
                </button>
              </div>
              <div className="list-items">
                {[1, 2, 3, 4].map(item => (
                  <div 
                    key={item} 
                    className={`list-item-card ${selectedCard === item ? 'selected' : ''}`}
                    onClick={() => setSelectedCard(item)}
                  >
                    <div className="item-avatar">
                      <User size={20} />
                    </div>
                    <div className="item-content">
                      <h5>User {item}</h5>
                      <p className="item-preview">This is a preview of message {item}...</p>
                      <span className="item-time">2 hours ago</span>
                    </div>
                    <ChevronRight size={20} className="item-arrow" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="detail-view">
              {selectedCard ? (
                <>
                  <div className="detail-header">
                    <h4>Message from User {selectedCard}</h4>
                    <div className="detail-actions">
                      <button className="btn-icon-sm">
                        <Edit size={16} />
                      </button>
                      <button className="btn-icon-sm">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="detail-content">
                    <p>This is the full content of message {selectedCard}. In a real application, this would contain the complete message details, attachments, and other relevant information.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </>
              ) : (
                <div className="empty-state">
                  <Mail size={48} className="empty-icon" />
                  <p>Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Search Results Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Search Results</h2>
        <ComponentTooltip component="Search Results" description="검색 결과 표시 패턴입니다.">
          <div className="search-results-container">
            <div className="search-header">
              <div className="search-input-container">
                <Search size={20} className="search-icon" />
                <input 
                  type="text" 
                  className="form-input with-icon" 
                  placeholder="Search..." 
                  defaultValue="design system"
                />
              </div>
              <div className="search-filters">
                <button className="btn btn-ghost">
                  <Filter size={16} />
                  <span>Filters</span>
                </button>
                <select className="form-select">
                  <option>Relevance</option>
                  <option>Date</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
            
            <div className="search-info">
              <p>Found <strong>24 results</strong> for "design system"</p>
            </div>
            
            <div className="search-results">
              {[1, 2, 3].map(result => (
                <div key={result} className="search-result-item">
                  <h4 className="result-title">
                    <a href="#">Design System Result {result}</a>
                  </h4>
                  <p className="result-url">https://example.com/design-system-{result}</p>
                  <p className="result-description">
                    This is a sample search result for <mark>design system</mark>. 
                    It shows how search terms are highlighted and results are formatted.
                  </p>
                  <div className="result-meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      <span>Jan {result}, 2024</span>
                    </span>
                    <span className="meta-item">
                      <FileText size={14} />
                      <span>Article</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="search-pagination">
              <button className="pagination-btn" disabled>Previous</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">Next</button>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Card Grid Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Card Grid</h2>
        <ComponentTooltip component="Card Grid" description="카드 그리드 레이아웃 패턴입니다.">
          <div className="card-grid-container">
            <div className="grid-header">
              <h4>Products</h4>
              <div className="grid-controls">
                <div className="view-toggle">
                  <button className="view-btn active">Grid</button>
                  <button className="view-btn">List</button>
                </div>
              </div>
            </div>
            
            <div className="card-grid">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <div key={item} className="product-card">
                  <div className="product-image">
                    <Image size={48} />
                  </div>
                  <div className="product-content">
                    <h5 className="product-title">Product {item}</h5>
                    <p className="product-description">This is a sample product description for item {item}.</p>
                    <div className="product-price">$99.00</div>
                    <div className="product-actions">
                      <button className="btn btn-primary btn-sm">Add to Cart</button>
                      <button className="btn-icon-sm">
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Settings Page Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Settings Page</h2>
        <ComponentTooltip component="Settings Layout" description="설정 페이지 레이아웃 패턴입니다.">
          <div className="settings-container">
            <div className="settings-sidebar">
              <nav className="settings-nav">
                <a href="#" className="settings-nav-item active">
                  <User size={20} />
                  <span>Profile</span>
                </a>
                <a href="#" className="settings-nav-item">
                  <Shield size={20} />
                  <span>Security</span>
                </a>
                <a href="#" className="settings-nav-item">
                  <Bell size={20} />
                  <span>Notifications</span>
                </a>
                <a href="#" className="settings-nav-item">
                  <CreditCard size={20} />
                  <span>Billing</span>
                </a>
              </nav>
            </div>
            
            <div className="settings-content">
              <div className="settings-section">
                <h3>Profile Settings</h3>
                <p className="settings-description">Manage your public profile information</p>
                
                <div className="settings-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-input" defaultValue="John" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-input" defaultValue="Doe" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-textarea" rows={3} placeholder="Tell us about yourself"></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Profile Picture</label>
                    <div className="avatar-upload">
                      <div className="avatar avatar-xl">
                        <User size={32} />
                      </div>
                      <button className="btn btn-outline btn-sm">
                        <Upload size={16} />
                        <span>Upload Photo</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="settings-actions">
                    <button className="btn btn-primary">Save Changes</button>
                    <button className="btn btn-ghost">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>

      {/* Empty States Pattern */}
      <section className="pattern-section">
        <h2 className="section-title">Empty States</h2>
        <ComponentTooltip component="Empty States" description="데이터가 없을 때 표시하는 빈 상태 패턴입니다.">
          <div className="empty-states-grid">
            <div className="empty-state-card">
              <div className="empty-state">
                <Search size={48} className="empty-icon" />
                <h4>No results found</h4>
                <p>Try adjusting your search criteria</p>
                <button className="btn btn-primary">Clear filters</button>
              </div>
            </div>
            
            <div className="empty-state-card">
              <div className="empty-state">
                <FileText size={48} className="empty-icon" />
                <h4>No documents yet</h4>
                <p>Create your first document to get started</p>
                <button className="btn btn-primary">
                  <Plus size={20} />
                  <span>New Document</span>
                </button>
              </div>
            </div>
            
            <div className="empty-state-card">
              <div className="empty-state error">
                <AlertCircle size={48} className="empty-icon" />
                <h4>Something went wrong</h4>
                <p>We couldn't load your data. Please try again.</p>
                <button className="btn btn-outline">Retry</button>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </section>
    </div>
  );
};

export default Patterns;