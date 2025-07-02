import React from 'react';
import './ComponentDescription.css';

interface ComponentDescriptionProps {
  componentId: string;
  componentName: string;
  position: { x: number; y: number };
}

// 컴포넌트별 사전식 설명
const componentDescriptions: Record<string, { 
  description: string; 
  usage: string; 
  example?: string;
  related?: string[];
}> = {
  'page-header': {
    description: '페이지의 최상단에 위치하여 제목과 설명을 표시하는 헤더 컴포넌트입니다.',
    usage: '모든 페이지의 상단에 일관된 제목 표시를 위해 사용됩니다.',
    example: '<PageHeader title="대시보드" description="비즈니스 성과를 한눈에" />',
    related: ['navbar', 'breadcrumb']
  },
  'metric-card': {
    description: '핵심 지표를 시각적으로 표현하는 카드 컴포넌트입니다.',
    usage: '대시보드에서 KPI나 중요 수치를 강조하여 표시할 때 사용합니다.',
    example: '<MetricCard title="매출" value="45.2M" change="+12%" />',
    related: ['card', 'badge', 'trend-badge']
  },
  'data-table': {
    description: '구조화된 데이터를 행과 열로 표시하는 테이블 컴포넌트입니다.',
    usage: '대량의 데이터를 정렬, 필터링, 페이징과 함께 표시할 때 사용합니다.',
    example: '<DataTable columns={columns} data={users} />',
    related: ['pagination', 'checkbox', 'sort-header']
  },
  'primary-button': {
    description: '주요 액션을 위한 강조된 버튼 컴포넌트입니다.',
    usage: '페이지의 핵심 동작(저장, 생성, 제출 등)을 실행할 때 사용합니다.',
    example: '<Button variant="primary">저장하기</Button>',
    related: ['button', 'icon-button', 'button-group']
  },
  'search-input-with-icon': {
    description: '아이콘이 포함된 검색 입력 필드입니다.',
    usage: '콘텐츠 검색 기능을 제공할 때 사용합니다.',
    example: '<SearchInput placeholder="검색..." onSearch={handleSearch} />',
    related: ['text-input', 'autocomplete', 'filter']
  },
  'line-chart-card': {
    description: '시계열 데이터를 선 그래프로 표현하는 차트 카드입니다.',
    usage: '시간에 따른 추세나 변화를 시각화할 때 사용합니다.',
    example: '<LineChart data={monthlyData} xAxis="date" yAxis="value" />',
    related: ['area-chart', 'bar-chart', 'chart-legend']
  },
  'switch-toggle': {
    description: 'On/Off 상태를 전환하는 토글 스위치 컴포넌트입니다.',
    usage: '설정이나 기능의 활성화/비활성화를 제어할 때 사용합니다.',
    example: '<Switch checked={enabled} onChange={setEnabled} />',
    related: ['checkbox', 'radio-button', 'toggle-button']
  },
  'form-label': {
    description: '폼 입력 필드의 레이블을 표시하는 컴포넌트입니다.',
    usage: '입력 필드의 목적을 명확히 설명하고 접근성을 향상시킬 때 사용합니다.',
    example: '<FormLabel htmlFor="email">이메일 주소</FormLabel>',
    related: ['form-input', 'helper-text', 'required-indicator']
  },
  'pagination': {
    description: '대량의 콘텐츠를 페이지로 나누어 탐색하는 컴포넌트입니다.',
    usage: '테이블이나 리스트의 데이터가 많을 때 페이지 단위로 나누어 표시합니다.',
    example: '<Pagination total={100} pageSize={10} current={1} />',
    related: ['data-table', 'list', 'page-size-selector']
  },
  'progress-bar': {
    description: '작업의 진행 상태를 막대로 표시하는 컴포넌트입니다.',
    usage: '파일 업로드, 설치, 로딩 등의 진행률을 시각적으로 표현할 때 사용합니다.',
    example: '<ProgressBar value={75} max={100} />',
    related: ['spinner', 'skeleton', 'loading-state']
  },
  'metrics-grid': {
    description: '주요 지표들을 그리드 형태로 배치하는 레이아웃 컴포넌트입니다.',
    usage: '대시보드에서 여러 KPI를 한번에 보여줄 때 사용합니다.',
    example: '<MetricsGrid metrics={[{title, value, change}]} />',
    related: ['metric-card', 'grid-layout', 'dashboard']
  },
  'trend-badge': {
    description: '수치의 변화 방향과 크기를 나타내는 배지입니다.',
    usage: '지표의 상승/하락 추세를 시각적으로 강조할 때 사용합니다.',
    example: '<TrendBadge value="+12%" trend="up" />',
    related: ['badge', 'metric-card', 'indicator']
  },
  'filter-button': {
    description: '필터 옵션을 표시하고 설정할 수 있는 버튼입니다.',
    usage: '테이블이나 리스트의 데이터를 필터링할 때 사용합니다.',
    example: '<FilterButton onClick={openFilterModal} active={hasActiveFilters} />',
    related: ['dropdown', 'search', 'sort-button']
  },
  'checkbox': {
    description: '다중 선택이 가능한 체크박스 입력 컴포넌트입니다.',
    usage: '여러 옵션을 동시에 선택할 수 있을 때 사용합니다.',
    example: '<Checkbox checked={isChecked} onChange={handleChange} />',
    related: ['radio-button', 'switch', 'form']
  },
  'role-badge': {
    description: '사용자의 역할이나 권한을 표시하는 배지입니다.',
    usage: '사용자 목록이나 프로필에서 역할을 명확히 표시할 때 사용합니다.',
    example: '<RoleBadge role="admin" />',
    related: ['status-badge', 'tag', 'user-avatar']
  },
  'status-badge': {
    description: '항목의 상태(활성, 비활성, 대기 등)를 표시하는 배지입니다.',
    usage: '사용자, 주문, 작업 등의 현재 상태를 시각화할 때 사용합니다.',
    example: '<StatusBadge status="active" />',
    related: ['role-badge', 'indicator', 'tag']
  },
  'date-range-picker': {
    description: '시작일과 종료일을 선택할 수 있는 날짜 범위 선택기입니다.',
    usage: '보고서나 필터에서 특정 기간을 선택할 때 사용합니다.',
    example: '<DateRangePicker onChange={handleDateChange} />',
    related: ['date-picker', 'calendar', 'time-picker']
  },
  'summary-cards': {
    description: '주요 요약 정보를 카드 형태로 모아 보여주는 컴포넌트입니다.',
    usage: '분석 페이지 상단에 핵심 지표를 요약할 때 사용합니다.',
    example: '<SummaryCards data={[{title, value, change}]} />',
    related: ['metric-card', 'stats-card', 'kpi-card']
  },
  'chart-legend': {
    description: '차트의 데이터 시리즈를 설명하는 범례 컴포넌트입니다.',
    usage: '여러 데이터 시리즈가 있는 차트에서 각 시리즈를 구분할 때 사용합니다.',
    example: '<ChartLegend items={[{color, label}]} />',
    related: ['chart', 'tooltip', 'data-visualization']
  },
  'textarea': {
    description: '여러 줄의 텍스트를 입력받는 대형 텍스트 필드입니다.',
    usage: '설명, 댓글, 메모 등 긴 텍스트를 입력받을 때 사용합니다.',
    example: '<Textarea rows={4} placeholder="설명을 입력하세요" />',
    related: ['text-input', 'form', 'rich-text-editor']
  },
  'radio-group': {
    description: '여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹입니다.',
    usage: '배타적 선택이 필요한 설정이나 필터에 사용합니다.',
    example: '<RadioGroup options={options} value={selected} onChange={handleChange} />',
    related: ['radio-button', 'select', 'toggle-group']
  },
  'color-picker': {
    description: '색상을 선택할 수 있는 색상 선택기 컴포넌트입니다.',
    usage: '테마 설정이나 디자인 도구에서 색상을 선택할 때 사용합니다.',
    example: '<ColorPicker value={color} onChange={setColor} />',
    related: ['theme-switcher', 'palette', 'swatch']
  },
  'navbar': {
    description: '응용 프로그램의 상단에 고정된 네비게이션 바입니다.',
    usage: '브랜드, 검색, 주요 기능 접근을 위해 모든 페이지에 사용합니다.',
    example: '<Navbar logo={logo} searchBar rightItems={[notifications, user]} />',
    related: ['sidebar', 'breadcrumb', 'menu']
  },
  'sidebar': {
    description: '측면 네비게이션 메뉴로 주요 페이지 간 이동을 제공합니다.',
    usage: '대시보드나 관리자 패널 등 복잡한 앱에서 메뉴 구조를 제공할 때 사용합니다.',
    example: '<Sidebar items={menuItems} collapsed={isCollapsed} />',
    related: ['navbar', 'drawer', 'navigation']
  },
  'icon-button': {
    description: '아이콘만 포함된 버튼으로 공간을 절약하면서 기능을 제공합니다.',
    usage: '툴바, 액션 메뉴, 닫기 버튼 등에 사용합니다.',
    example: '<IconButton icon={<EditIcon />} onClick={handleEdit} />',
    related: ['button', 'floating-action-button', 'toolbar']
  },
  'button': {
    description: '클릭 가능한 기본 버튼 컴포넌트입니다.',
    usage: '사용자 액션을 실행하거나 폼을 제출할 때 사용합니다.',
    example: '<Button onClick={handleClick}>클릭</Button>',
    related: ['primary-button', 'icon-button', 'link-button']
  },
  'card': {
    description: '관련 정보를 그룹화하는 컨테이너 컴포넌트입니다.',
    usage: '콘텐츠를 시각적으로 구분하고 관련 정보를 묶을 때 사용합니다.',
    example: '<Card title="제목" footer={actions}>{content}</Card>',
    related: ['tile', 'panel', 'container']
  },
  'badge': {
    description: '상태나 수량을 표시하는 작은 레이블입니다.',
    usage: '알림 개수, 상태 표시, 라벨링 등에 사용합니다.',
    example: '<Badge count={5} status="new" />',
    related: ['tag', 'chip', 'label']
  },
  'list': {
    description: '항목을 순서대로 나열하는 리스트 컴포넌트입니다.',
    usage: '데이터 목록, 메뉴 항목, 옵션 목록 등을 표시할 때 사용합니다.',
    example: '<List items={data} renderItem={renderFunction} />',
    related: ['table', 'grid', 'tree-view']
  },
  'table': {
    description: '데이터를 행과 열로 구조화하여 표시하는 테이블입니다.',
    usage: '정형화된 데이터를 표시하고 정렬, 필터링할 때 사용합니다.',
    example: '<Table columns={columns} data={rows} />',
    related: ['data-table', 'grid', 'list']
  },
  'tabs': {
    description: '콘텐츠를 여러 패널로 구분하여 표시하는 탭 컴포넌트입니다.',
    usage: '관련 콘텐츠를 그룹화하여 공간을 효율적으로 사용할 때 사용합니다.',
    example: '<Tabs items={[{label, content}]} defaultActive={0} />',
    related: ['accordion', 'stepper', 'navigation']
  },
  'form': {
    description: '사용자 입력을 받는 폼 컨테이너입니다.',
    usage: '데이터 입력, 설정 변경, 로그인 등에 사용합니다.',
    example: '<Form onSubmit={handleSubmit}>{fields}</Form>',
    related: ['form-field', 'validation', 'submit-button']
  },
  'modal': {
    description: '화면 위에 떠 있는 대화 상자로 사용자 입력을 받습니다.',
    usage: '확인, 폼 입력, 상세 정보 표시 등 주의가 필요한 상황에 사용합니다.',
    example: '<Modal open={isOpen} onClose={handleClose}>{content}</Modal>',
    related: ['dialog', 'popup', 'lightbox']
  },
  'tooltip': {
    description: '마우스 호버 시 추가 정보를 표시하는 도구 설명입니다.',
    usage: '버튼, 아이콘, 링크 등의 기능을 설명할 때 사용합니다.',
    example: '<Tooltip content="삭제하기"><IconButton icon={DeleteIcon} /></Tooltip>',
    related: ['popover', 'hint', 'help-text']
  },
  'aria': {
    description: 'ARIA(Accessible Rich Internet Applications)는 웹 콘텐츠와 웹 애플리케이션을 스크린 리더 등 보조 기술 사용자가 더 쉽게 이용할 수 있도록 돕는 표준입니다.',
    usage: '시각 장애인이나 키보드만 사용하는 사용자들이 웹사이트를 제대로 이용할 수 있도록 추가 정보를 제공할 때 사용합니다.',
    example: 'aria-label="닫기" aria-describedby="helper-text" role="button"',
    related: ['screen-reader', 'focus-management', 'keyboard-navigation']
  },
  'aria-examples': {
    description: 'ARIA 속성의 실제 사용 예시들입니다. aria-label은 요소의 이름을, aria-describedby는 설명을, role은 요소의 역할을 정의합니다.',
    usage: '아이콘 버튼, 동적 콘텐츠, 복잡한 위젯 등에서 스크린 리더 사용자를 위한 정보를 제공합니다.',
    example: '<button aria-label="메뉴 열기"><MenuIcon /></button>',
    related: ['aria-label', 'aria-describedby', 'role', 'aria-live']
  },
  'screen-reader': {
    description: '시각 장애인이 사용하는 화면 낭독 프로그램을 위한 지원 기능입니다.',
    usage: '화면에 보이지 않지만 스크린 리더가 읽어야 하는 정보나, 동적으로 변경되는 콘텐츠를 알릴 때 사용합니다.',
    example: '<span className="visually-hidden">새 알림 3개</span>',
    related: ['aria', 'visually-hidden', 'live-region']
  },
  'focus-indicators': {
    description: '키보드로 탐색할 때 현재 포커스가 어디에 있는지 시각적으로 표시하는 기능입니다.',
    usage: '키보드 사용자가 현재 위치를 파악하고 탐색할 수 있도록 명확한 포커스 표시를 제공합니다.',
    example: ':focus { outline: 2px solid #3b82f6; outline-offset: 2px; }',
    related: ['keyboard-navigation', 'tab-order', 'focus-trap']
  },
  'button-states': {
    description: '버튼의 다양한 상태(기본, 호버, 포커스, 활성, 비활성, 로딩)를 표시하는 스타일입니다.',
    usage: '사용자에게 버튼의 현재 상태와 상호작용 가능 여부를 명확히 전달할 때 사용합니다.',
    example: ':hover, :focus, :active, :disabled, .loading',
    related: ['interactive-states', 'visual-feedback', 'user-feedback']
  },
  'input-states': {
    description: '입력 필드의 다양한 상태(기본, 포커스, 유효, 무효, 비활성)를 표시하는 스타일입니다.',
    usage: '폼 입력 시 사용자에게 현재 상태와 검증 결과를 시각적으로 전달합니다.',
    example: '.valid { border-color: green; } .invalid { border-color: red; }',
    related: ['form-validation', 'error-states', 'success-states']
  },
  'validation-messages': {
    description: '폼 검증 결과를 사용자에게 알려주는 메시지 컴포넌트입니다.',
    usage: '입력 오류, 성공, 경고, 정보 등의 상태를 명확한 메시지와 색상으로 전달합니다.',
    example: '<div className="error-message">이메일 형식이 올바르지 않습니다.</div>',
    related: ['form-validation', 'error-handling', 'user-feedback']
  },
  'contrast-ratios': {
    description: '텍스트와 배경 간의 색상 대비를 측정하는 WCAG 기준입니다. AA 레벨은 4.5:1, AAA 레벨은 7:1 이상이어야 합니다.',
    usage: '시력이 낮은 사용자도 콘텐츠를 읽을 수 있도록 충분한 색상 대비를 제공합니다.',
    example: '배경 #ffffff에 텍스트 #1f2937 = 대비 15.3:1 (AAA 통과)',
    related: ['color-accessibility', 'wcag', 'visual-design']
  },
  'accessibility-options': {
    description: '사용자가 자신의 필요에 맞게 인터페이스를 조정할 수 있는 접근성 옵션들입니다.',
    usage: '다크 모드, 글자 크기 조절, 고대비 모드 등을 제공하여 다양한 사용자의 요구를 충족합니다.',
    example: '다크 모드 토글, 글자 크기 조절 버튼, 고대비 모드',
    related: ['theme-customization', 'user-preferences', 'personalization']
  },
  'device-support': {
    description: '다양한 입력 장치(마우스, 터치, 키보드, 음성)를 지원하는 반응형 디자인입니다.',
    usage: '모든 사용자가 선호하는 입력 방식으로 웹사이트를 이용할 수 있도록 합니다.',
    example: '터치 타겟 최소 44x44px, 키보드 단축키 지원',
    related: ['responsive-design', 'touch-friendly', 'keyboard-support']
  },
  'error-handling': {
    description: '사용자 실수를 방지하고 복구할 수 있도록 돕는 에러 처리 패턴입니다.',
    usage: '확인 대화상자, 실행 취소 기능, 입력 제약 등으로 오류를 예방하고 복구를 지원합니다.',
    example: '삭제 확인 모달, Undo 버튼, 입력 형식 자동 교정',
    related: ['error-prevention', 'user-recovery', 'confirmation-dialog']
  }
};

// 기본 설명 (정의되지 않은 컴포넌트용)
const getDefaultDescription = (name: string) => ({
  description: `${name} 컴포넌트입니다.`,
  usage: 'UI 구성 요소로 사용됩니다.',
  related: []
});

const ComponentDescription: React.FC<ComponentDescriptionProps> = ({ 
  componentId, 
  componentName, 
  position 
}) => {
  const info = componentDescriptions[componentId] || getDefaultDescription(componentName);

  // 화면 경계 체크
  const viewportWidth = window.innerWidth;
  const cardWidth = 360;
  let left = position.x;
  
  // 카드가 화면 오른쪽 밖으로 나가는 경우 왼쪽에 표시
  if (left + cardWidth > viewportWidth - 20) {
    left = position.x - cardWidth - 300; // 사이드바 왼쪽에 표시
  }
  
  // 너무 왼쪽으로 가는 경우 조정
  if (left < 10) {
    left = 10;
  }

  return (
    <div 
      className="component-description"
      style={{ 
        top: position.y,
        left: left
      }}
    >
      <div className="description-header">
        <h4 className="description-title">{componentName}</h4>
        <span className="description-id">{componentId}</span>
      </div>
      
      <div className="description-content">
        <div className="description-section">
          <h5>설명</h5>
          <p>{info.description}</p>
        </div>
        
        <div className="description-section">
          <h5>사용 시기</h5>
          <p>{info.usage}</p>
        </div>
        
        {info.example && (
          <div className="description-section">
            <h5>예시 코드</h5>
            <code className="description-code">{info.example}</code>
          </div>
        )}
        
        {info.related && info.related.length > 0 && (
          <div className="description-section">
            <h5>관련 컴포넌트</h5>
            <div className="related-components">
              {info.related.map(rel => (
                <span key={rel} className="related-tag">{rel}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentDescription;