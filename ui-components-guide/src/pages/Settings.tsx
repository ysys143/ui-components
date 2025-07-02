import React, { useState } from 'react';
import { Save, User, Bell, Shield, Palette } from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import StandardPageHeader from '../components/StandardPageHeader';
import './Settings.css';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState('light');

  const tabs = [
    { id: 'profile', label: '프로필', icon: User },
    { id: 'notifications', label: '알림', icon: Bell },
    { id: 'security', label: '보안', icon: Shield },
    { id: 'appearance', label: '외관', icon: Palette },
  ];

  return (
    <div className="settings">
      <ComponentTooltip
        component="Standardized Page Header"
        description="표준화된 페이지 헤더로 일관된 레이아웃을 제공합니다."
      >
        <StandardPageHeader
          title="설정"
          description="계정 설정과 환경 설정을 관리하세요"
          actions={
            <ComponentTooltip
              component="Save Button"
              description="변경사항을 저장하는 버튼입니다."
            >
              <button className="btn-primary">
                <Save size={20} />
                <span>변경사항 저장</span>
              </button>
            </ComponentTooltip>
          }
        />
      </ComponentTooltip>

      <div className="settings-container">
        <ComponentTooltip
          component="Tab Navigation"
          description="설정 카테고리를 선택하는 탭 네비게이션입니다."
        >
          <div className="settings-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </ComponentTooltip>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <ComponentTooltip
              component="Profile Form"
              description="사용자 프로필 정보를 편집하는 폼입니다."
            >
              <div className="settings-section">
                <h2 className="section-title">프로필 정보</h2>
                <div className="form-group">
                  <ComponentTooltip
                    component="Form Label"
                    description="입력 필드의 레이블입니다."
                  >
                    <label className="form-label">이름</label>
                  </ComponentTooltip>
                  <ComponentTooltip
                    component="Text Input"
                    description="텍스트를 입력받는 기본 입력 필드입니다."
                  >
                    <input type="text" className="form-input" defaultValue="김세미" />
                  </ComponentTooltip>
                </div>
                <div className="form-group">
                  <label className="form-label">이메일</label>
                  <input type="email" className="form-input" defaultValue="kim@example.com" />
                  <ComponentTooltip
                    component="Helper Text"
                    description="입력 필드에 대한 도움말 텍스트입니다."
                  >
                    <p className="helper-text">이메일 변경 시 확인 메일이 발송됩니다.</p>
                  </ComponentTooltip>
                </div>
                <div className="form-group">
                  <label className="form-label">자기소개</label>
                  <ComponentTooltip
                    component="Textarea"
                    description="여러 줄의 텍스트를 입력받는 필드입니다."
                  >
                    <textarea 
                      className="form-textarea" 
                      rows={4}
                      defaultValue="안녕하세요! 프론트엔드 개발자입니다."
                    />
                  </ComponentTooltip>
                </div>
                <div className="form-group">
                  <label className="form-label">프로필 사진</label>
                  <ComponentTooltip
                    component="File Upload"
                    description="파일을 업로드하는 컴포넌트입니다."
                  >
                    <div className="file-upload">
                      <div className="current-avatar">
                        <User size={40} />
                      </div>
                      <button className="btn-secondary">사진 변경</button>
                    </div>
                  </ComponentTooltip>
                </div>
              </div>
            </ComponentTooltip>
          )}

          {activeTab === 'notifications' && (
            <ComponentTooltip
              component="Notification Settings"
              description="알림 설정을 관리하는 섹션입니다."
            >
              <div className="settings-section">
                <h2 className="section-title">알림 설정</h2>
                <div className="switch-group">
                  <ComponentTooltip
                    component="Switch Toggle"
                    description="On/Off 상태를 전환하는 스위치 컴포넌트입니다."
                  >
                    <label className="switch-item">
                      <div className="switch-content">
                        <span className="switch-label">이메일 알림</span>
                        <span className="switch-description">중요한 업데이트를 이메일로 받습니다</span>
                      </div>
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                        />
                        <span className="switch-slider"></span>
                      </label>
                    </label>
                  </ComponentTooltip>
                  <label className="switch-item">
                    <div className="switch-content">
                      <span className="switch-label">푸시 알림</span>
                      <span className="switch-description">브라우저 푸시 알림을 받습니다</span>
                    </div>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={pushNotifications}
                        onChange={(e) => setPushNotifications(e.target.checked)}
                      />
                      <span className="switch-slider"></span>
                    </label>
                  </label>
                  <label className="switch-item">
                    <div className="switch-content">
                      <span className="switch-label">마케팅 이메일</span>
                      <span className="switch-description">제품 업데이트 및 프로모션 정보를 받습니다</span>
                    </div>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={marketingEmails}
                        onChange={(e) => setMarketingEmails(e.target.checked)}
                      />
                      <span className="switch-slider"></span>
                    </label>
                  </label>
                </div>
              </div>
            </ComponentTooltip>
          )}

          {activeTab === 'security' && (
            <ComponentTooltip
              component="Security Settings"
              description="보안 관련 설정을 관리하는 섹션입니다."
            >
              <div className="settings-section">
                <h2 className="section-title">보안 설정</h2>
                <div className="form-group">
                  <label className="form-label">현재 비밀번호</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">새 비밀번호</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">비밀번호 확인</label>
                  <input type="password" className="form-input" />
                </div>
                <hr className="divider" />
                <div className="switch-group">
                  <label className="switch-item">
                    <div className="switch-content">
                      <span className="switch-label">2단계 인증</span>
                      <span className="switch-description">추가 보안을 위해 2단계 인증을 사용합니다</span>
                    </div>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={twoFactor}
                        onChange={(e) => setTwoFactor(e.target.checked)}
                      />
                      <span className="switch-slider"></span>
                    </label>
                  </label>
                </div>
              </div>
            </ComponentTooltip>
          )}

          {activeTab === 'appearance' && (
            <ComponentTooltip
              component="Appearance Settings"
              description="외관 및 테마 설정을 관리하는 섹션입니다."
            >
              <div className="settings-section">
                <h2 className="section-title">외관 설정</h2>
                <div className="form-group">
                  <label className="form-label">테마</label>
                  <ComponentTooltip
                    component="Radio Group"
                    description="단일 선택을 위한 라디오 버튼 그룹입니다."
                  >
                    <div className="radio-group">
                      <label className="radio-item">
                        <input 
                          type="radio" 
                          name="theme" 
                          value="light"
                          checked={selectedTheme === 'light'}
                          onChange={(e) => setSelectedTheme(e.target.value)}
                        />
                        <span className="radio-label">라이트 모드</span>
                      </label>
                      <label className="radio-item">
                        <input 
                          type="radio" 
                          name="theme" 
                          value="dark"
                          checked={selectedTheme === 'dark'}
                          onChange={(e) => setSelectedTheme(e.target.value)}
                        />
                        <span className="radio-label">다크 모드</span>
                      </label>
                      <label className="radio-item">
                        <input 
                          type="radio" 
                          name="theme" 
                          value="system"
                          checked={selectedTheme === 'system'}
                          onChange={(e) => setSelectedTheme(e.target.value)}
                        />
                        <span className="radio-label">시스템 설정 따르기</span>
                      </label>
                    </div>
                  </ComponentTooltip>
                </div>
                <div className="form-group">
                  <label className="form-label">주 색상</label>
                  <ComponentTooltip
                    component="Color Picker"
                    description="색상을 선택하는 컴포넌트입니다."
                  >
                    <div className="color-picker-group">
                      <div className="color-option" style={{ backgroundColor: '#3b82f6' }}></div>
                      <div className="color-option" style={{ backgroundColor: '#10b981' }}></div>
                      <div className="color-option" style={{ backgroundColor: '#f59e0b' }}></div>
                      <div className="color-option" style={{ backgroundColor: '#ef4444' }}></div>
                      <div className="color-option" style={{ backgroundColor: '#8b5cf6' }}></div>
                    </div>
                  </ComponentTooltip>
                </div>
              </div>
            </ComponentTooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;