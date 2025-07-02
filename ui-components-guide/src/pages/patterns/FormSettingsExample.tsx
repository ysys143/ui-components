import React, { useState } from 'react';
import { User, Mail, Lock, Bell, Globe, Shield, Eye, EyeOff, Save } from 'lucide-react';
import ComponentTooltip from '../../components/ui/ComponentTooltip';
import StandardPageHeader from '../../components/StandardPageHeader';
import './FormSettingsExample.css';

const FormSettingsExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '김세미',
    email: 'kim@example.com',
    bio: '안녕하세요! 프론트엔드 개발자입니다.',
    notifications: true,
    darkMode: false,
    language: 'ko',
    publicProfile: true
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('설정이 저장되었습니다!');
  };

  return (
    <div className="form-settings-example">
      <ComponentTooltip
        component="Standardized Page Header"
        description="표준화된 페이지 헤더로 일관된 레이아웃을 제공합니다."
      >
        <StandardPageHeader
          title="설정"
          description="Form, Form Label, Helper Text의 실제 사용 예제를 확인할 수 있습니다."
          actions={
            <ComponentTooltip
              component="Save Button"
              description="변경사항을 저장하는 버튼입니다."
            >
              <button className="btn-primary" onClick={handleSubmit}>
                <Save size={20} />
                <span>변경사항 저장</span>
              </button>
            </ComponentTooltip>
          }
        />
      </ComponentTooltip>

      <div className="settings-container">
        {/* Tab Navigation */}
        <div className="settings-tabs">
          <button 
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} />
            프로필
          </button>
          <button 
            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} />
            보안
          </button>
          <button 
            className={`tab-button ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <Bell size={18} />
            환경설정
          </button>
        </div>

        {/* Form Content */}
        <div className="settings-content">
          {activeTab === 'profile' && (
            <ComponentTooltip
              component="Form"
              description="사용자 입력을 받는 폼 컨테이너입니다. 필드들을 그룹화하고 제출 처리를 담당합니다."
            >
              <form className="settings-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h2 className="section-title">기본 정보</h2>
                  
                  <div className="form-group">
                    <ComponentTooltip
                      component="Form Label"
                      description="입력 필드의 레이블입니다. 필수 필드에는 * 표시를 포함합니다."
                    >
                      <label className="form-label required">이름</label>
                    </ComponentTooltip>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    <ComponentTooltip
                      component="Helper Text"
                      description="입력 필드에 대한 도움말 텍스트입니다. 사용자에게 추가 정보를 제공합니다."
                    >
                      <p className="helper-text">실명을 입력해주세요.</p>
                    </ComponentTooltip>
                  </div>

                  <div className="form-group">
                    <label className="form-label required">이메일 주소</label>
                    <div className="input-with-icon">
                      <Mail size={20} className="input-icon" />
                      <input 
                        type="email" 
                        className="form-input with-icon" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <p className="helper-text">이메일 변경 시 확인 메일이 발송됩니다.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">자기소개</label>
                    <textarea 
                      className="form-textarea" 
                      rows={4}
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder="자신을 간단히 소개해주세요..."
                    />
                    <p className="helper-text">최대 500자까지 입력할 수 있습니다.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">프로필 사진</label>
                    <div className="file-upload-area">
                      <div className="current-avatar">
                        <User size={40} />
                      </div>
                      <div className="upload-controls">
                        <button type="button" className="btn-secondary">사진 변경</button>
                        <button type="button" className="btn-outline">제거</button>
                      </div>
                    </div>
                    <p className="helper-text">JPG, PNG 파일만 업로드 가능합니다. (최대 5MB)</p>
                  </div>
                </div>

              </form>
            </ComponentTooltip>
          )}

          {activeTab === 'security' && (
            <form className="settings-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h2 className="section-title">비밀번호 변경</h2>
                
                <div className="form-group">
                  <label className="form-label required">현재 비밀번호</label>
                  <div className="input-with-icon">
                    <Lock size={20} className="input-icon" />
                    <input type="password" className="form-input with-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label required">새 비밀번호</label>
                  <div className="input-with-icon">
                    <Lock size={20} className="input-icon" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="form-input with-icon with-action" 
                    />
                    <button 
                      type="button" 
                      className="input-action"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="helper-text">최소 8자 이상, 영문/숫자/특수문자를 포함해야 합니다.</p>
                </div>

                <div className="form-group">
                  <label className="form-label required">새 비밀번호 확인</label>
                  <div className="input-with-icon">
                    <Lock size={20} className="input-icon" />
                    <input type="password" className="form-input with-icon" />
                  </div>
                  <p className="helper-text">새 비밀번호를 다시 한번 입력해주세요.</p>
                </div>
              </div>

              <div className="form-section">
                <h2 className="section-title">2단계 인증</h2>
                
                <div className="switch-group">
                  <label className="switch-item">
                    <div className="switch-content">
                      <span className="switch-label">2단계 인증 사용</span>
                      <span className="switch-description">로그인 시 추가 보안 확인을 진행합니다</span>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="switch-slider"></span>
                    </label>
                  </label>
                </div>
              </div>

            </form>
          )}

          {activeTab === 'preferences' && (
            <form className="settings-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h2 className="section-title">알림 설정</h2>
                
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={formData.notifications}
                      onChange={(e) => handleInputChange('notifications', e.target.checked)}
                    />
                    <span className="checkbox-mark"></span>
                    <div className="checkbox-content">
                      <span className="checkbox-label">이메일 알림</span>
                      <span className="checkbox-description">새 메시지나 업데이트를 이메일로 받습니다</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h2 className="section-title">언어 설정</h2>
                
                <div className="form-group">
                  <label className="form-label">언어</label>
                  <div className="input-with-icon">
                    <Globe size={20} className="input-icon" />
                    <select 
                      className="form-select with-icon"
                      value={formData.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                    >
                      <option value="ko">한국어</option>
                      <option value="en">English</option>
                      <option value="ja">日本語</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>
                  <p className="helper-text">인터페이스 언어를 선택해주세요.</p>
                </div>
              </div>

              <div className="form-section">
                <h2 className="section-title">개인정보 설정</h2>
                
                <div className="radio-group">
                  <label className="form-label">프로필 공개 범위</label>
                  <div className="radio-options">
                    <label className="radio-item">
                      <input 
                        type="radio" 
                        name="profileVisibility" 
                        value="public"
                        checked={formData.publicProfile}
                        onChange={() => handleInputChange('publicProfile', true)}
                      />
                      <span className="radio-mark"></span>
                      <div className="radio-content">
                        <span className="radio-label">전체 공개</span>
                        <span className="radio-description">모든 사용자가 내 프로필을 볼 수 있습니다</span>
                      </div>
                    </label>
                    <label className="radio-item">
                      <input 
                        type="radio" 
                        name="profileVisibility" 
                        value="private"
                        checked={!formData.publicProfile}
                        onChange={() => handleInputChange('publicProfile', false)}
                      />
                      <span className="radio-mark"></span>
                      <div className="radio-content">
                        <span className="radio-label">비공개</span>
                        <span className="radio-description">나만 내 프로필을 볼 수 있습니다</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSettingsExample; 