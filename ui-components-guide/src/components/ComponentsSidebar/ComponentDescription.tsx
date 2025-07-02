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
  'toast': {
    description: '화면 구석(주로 우측 하단)에 잠시 나타났다가 자동으로 사라지는 임시 알림입니다. 사용자의 작업을 방해하지 않으며, 스택 형태로 여러 개가 쌓일 수 있습니다. Alert나 Notification과 달리 짧은 시간(3-5초) 후 자동으로 사라집니다.',
    usage: '저장 성공, 복사 완료, 전송 완료 등 사용자 액션에 대한 즉각적인 피드백을 제공할 때 사용합니다. 중요하지 않은 정보나 확인 메시지에 적합하며, 사용자가 놓쳐도 문제없는 내용이어야 합니다.',
    example: '<Toast message="클립보드에 복사되었습니다" type="success" duration={3000} position="bottom-right" />',
    related: ['notification', 'alert', 'snackbar', 'flash-message']
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
    description: '화면 전체를 덮는 오버레이와 함께 중앙에 표시되는 대화 상자입니다. 배경은 어둡게 처리되며 사용자의 주의를 집중시킵니다. Dialog와 달리 더 복잡한 콘텐츠와 상호작용을 포함할 수 있습니다.',
    usage: '중요한 정보 표시, 복잡한 폼 입력, 미디어 갤러리, 약관 동의 등 사용자의 완전한 주의가 필요하고 다른 작업을 차단해야 할 때 사용합니다. ESC 키나 배경 클릭으로 닫을 수 있게 구현하는 것이 일반적입니다.',
    example: '<Modal open={isOpen} onClose={handleClose} size="large" closeOnOverlayClick>{content}</Modal>',
    related: ['dialog', 'lightbox', 'overlay', 'popup']
  },
  'tooltip': {
    description: '마우스 호버 시 나타나는 작은 텍스트 상자로 추가 정보를 표시합니다. 일반적으로 어두운 배경에 밝은 텍스트로 표시되며, 화살표가 대상 요소를 가리킵니다. 자동으로 사라지며 상호작용할 수 없습니다.',
    usage: '아이콘의 의미 설명, 버튼 기능 안내, 축약된 텍스트의 전체 내용 표시 등 짧은 도움말이 필요할 때 사용합니다. 마우스 호버 시 약 0.5-1초 후 나타나며, 마우스를 떼면 즉시 사라집니다.',
    example: '<Tooltip content="삭제하기" placement="top" delay={500}><IconButton icon={DeleteIcon} /></Tooltip>',
    related: ['popover', 'hint-text', 'help-bubble']
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
  },
  'text-input': {
    description: '한 줄의 텍스트를 입력받는 기본 입력 필드 컴포넌트입니다. 다양한 타입(text, email, password 등)을 지원합니다.',
    usage: '사용자로부터 짧은 텍스트 정보(이름, 이메일, 제목 등)를 입력받을 때 사용합니다.',
    example: '<TextInput type="email" placeholder="이메일 주소" required />',
    related: ['textarea', 'number-input', 'search-input']
  },
  'number-input': {
    description: '숫자만 입력 가능한 전용 입력 필드입니다. 최솟값, 최댓값, 증감 단위를 설정할 수 있습니다.',
    usage: '수량, 가격, 나이 등 숫자 데이터를 정확하게 입력받을 때 사용합니다.',
    example: '<NumberInput min={0} max={100} step={5} value={quantity} />',
    related: ['stepper', 'text-input', 'slider']
  },
  'select': {
    description: '미리 정의된 옵션 중에서 하나를 선택할 수 있는 드롭다운 컴포넌트입니다.',
    usage: '한정된 선택지 중에서 하나를 고를 때(국가, 카테고리, 상태 등) 사용합니다.',
    example: '<Select options={countries} value={selectedCountry} onChange={handleChange} />',
    related: ['dropdown', 'autocomplete', 'radio-group']
  },
  'search-input': {
    description: '검색에 특화된 입력 필드로, 검색 아이콘과 지우기 버튼이 내장되어 있습니다.',
    usage: '테이블, 리스트, 페이지 내 콘텐츠를 검색하는 기능을 제공할 때 사용합니다.',
    example: '<SearchInput onSearch={handleSearch} debounceTime={300} />',
    related: ['text-input', 'autocomplete', 'filter-button']
  },
  'autocomplete': {
    description: '사용자가 입력하는 동안 관련 제안을 표시하는 자동완성 입력 필드입니다.',
    usage: '긴 목록에서 빠르게 항목을 찾거나, 검색어 제안을 제공할 때 사용합니다.',
    example: '<Autocomplete suggestions={cities} onSelect={handleSelect} />',
    related: ['search-input', 'select', 'combobox']
  },
  'date-picker': {
    description: '달력 UI를 통해 날짜를 선택할 수 있는 컴포넌트입니다. 날짜 형식과 범위를 제한할 수 있습니다.',
    usage: '생년월일, 예약 날짜, 마감일 등 날짜 정보를 입력받을 때 사용합니다.',
    example: '<DatePicker minDate={today} maxDate={nextYear} format="YYYY-MM-DD" />',
    related: ['date-range-picker', 'time-picker', 'calendar']
  },
  'file-uploader': {
    description: '파일을 선택하고 업로드할 수 있는 컴포넌트입니다. 드래그 앤 드롭, 다중 파일, 파일 타입 제한을 지원합니다.',
    usage: '이미지, 문서, 데이터 파일 등을 서버에 업로드할 때 사용합니다.',
    example: '<FileUploader accept="image/*" multiple maxSize={5242880} />',
    related: ['dropzone', 'image-upload', 'progress-bar']
  },
  'slider': {
    description: '드래그하여 범위 내의 값을 선택하는 슬라이더 컴포넌트입니다. 단일값 또는 범위 선택이 가능합니다.',
    usage: '볼륨, 밝기, 가격 범위 등 연속적인 값을 직관적으로 조절할 때 사용합니다.',
    example: '<Slider min={0} max={100} value={volume} onChange={setVolume} />',
    related: ['range-slider', 'number-input', 'stepper']
  },
  'rating': {
    description: '별점이나 점수를 매길 수 있는 평가 컴포넌트입니다. 읽기 전용 모드도 지원합니다.',
    usage: '상품 리뷰, 서비스 평가, 콘텐츠 평점 등을 표시하거나 입력받을 때 사용합니다.',
    example: '<Rating value={4.5} max={5} onChange={handleRating} />',
    related: ['star-rating', 'feedback', 'review']
  },
  'stepper': {
    description: '숫자를 정해진 단위로 증가/감소시킬 수 있는 스테퍼 컴포넌트입니다.',
    usage: '수량 선택, 페이지 이동, 단계별 조정 등 정확한 숫자 입력이 필요할 때 사용합니다.',
    example: '<Stepper value={quantity} min={1} max={99} step={1} />',
    related: ['number-input', 'counter', 'quantity-selector']
  },
  'tile': {
    description: '클릭 가능한 타일 형태의 컨테이너로, 카드보다 단순하고 격자 배치에 최적화되어 있습니다.',
    usage: '옵션 선택, 카테고리 표시, 갤러리 아이템 등을 격자로 배치할 때 사용합니다.',
    example: '<Tile onClick={handleSelect} selected={isSelected}>{content}</Tile>',
    related: ['card', 'grid-item', 'selectable-card']
  },
  'treeview': {
    description: '계층적 데이터를 트리 구조로 표시하고 펼치기/접기가 가능한 컴포넌트입니다.',
    usage: '파일 탐색기, 조직도, 카테고리 구조 등 계층적 정보를 표시할 때 사용합니다.',
    example: '<TreeView data={folders} onSelect={handleSelect} expandAll={false} />',
    related: ['accordion', 'nested-list', 'hierarchy']
  },
  'menu': {
    description: '클릭하면 나타나는 메뉴 항목 리스트입니다. 서브메뉴와 구분선을 지원합니다.',
    usage: '컨텍스트 메뉴, 드롭다운 메뉴, 액션 메뉴 등을 구현할 때 사용합니다.',
    example: '<Menu items={menuItems} onSelect={handleMenuClick} />',
    related: ['dropdown', 'context-menu', 'action-menu']
  },
  'link': {
    description: '클릭 가능한 텍스트 링크 컴포넌트입니다. 내부/외부 링크와 다양한 스타일을 지원합니다.',
    usage: '페이지 간 이동, 외부 사이트 연결, 앵커 링크 등에 사용합니다.',
    example: '<Link href="/about" target="_blank">더 알아보기</Link>',
    related: ['anchor', 'nav-link', 'text-button']
  },
  'dialog': {
    description: '사용자의 확인이나 간단한 입력을 받는 작은 대화 상자입니다. Modal보다 단순하고 가벼우며, 주로 예/아니오 선택이나 짧은 텍스트 입력에 사용됩니다. 일반적으로 제목, 메시지, 1-2개의 액션 버튼으로 구성됩니다.',
    usage: '삭제 확인, 저장 확인, 간단한 설정 변경 등 빠른 의사결정이 필요할 때 사용합니다. 사용자가 반드시 응답해야 하며, ESC 키로 닫을 수 없게 하는 것이 일반적입니다.',
    example: '<Dialog title="삭제 확인" onConfirm={handleDelete} onCancel={handleCancel} confirmText="삭제" cancelText="취소">이 항목을 정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</Dialog>',
    related: ['modal', 'confirm-dialog', 'alert-box', 'prompt']
  },
  'notification': {
    description: '시스템 레벨의 메시지를 표시하는 지속적인 알림 컴포넌트입니다. 보통 화면 상단이나 우측 상단에 고정되어 표시되며, 사용자가 직접 닫거나 일정 시간 후 자동으로 사라집니다. Alert와 달리 페이지 콘텐츠 위에 떠 있습니다.',
    usage: '시스템 업데이트, 새 메시지 도착, 동기화 상태, 네트워크 연결 상태 등 앱 전체에 영향을 미치는 정보를 전달할 때 사용합니다. 여러 개가 쌓일 수 있으며 우선순위에 따라 정렬됩니다.',
    example: '<Notification type="info" title="시스템 업데이트" message="새로운 기능이 추가되었습니다" duration={5000} onClose={handleClose} />',
    related: ['alert', 'toast', 'snackbar', 'banner']
  },
  'popover': {
    description: '특정 요소를 클릭하면 나타나는 떠있는 콘텐츠 패널입니다. Tooltip과 달리 클릭으로 열리고, 상호작용 가능한 콘텐츠(버튼, 링크, 폼 등)를 포함할 수 있습니다. 화살표가 트리거 요소를 가리킵니다.',
    usage: '추가 옵션 메뉴, 사용자 프로필 카드, 간단한 설정 패널, 도움말 콘텐츠 등을 표시할 때 사용합니다. 클릭으로 열고, 외부 클릭이나 ESC 키로 닫습니다. 포커스 트랩을 구현하여 키보드 접근성을 보장합니다.',
    example: '<Popover trigger={<Button>더보기</Button>} placement="bottom-start" offset={8}><PopoverContent>{menuItems}</PopoverContent></Popover>',
    related: ['tooltip', 'dropdown', 'menu', 'floating-ui']
  },
  'empty-state': {
    description: '콘텐츠가 없는 상태를 긍정적이고 도움이 되는 방식으로 표시하는 플레이스홀더 컴포넌트입니다. 일반적으로 일러스트레이션, 제목, 설명, 그리고 행동 유도 버튼을 포함합니다.',
    usage: '첫 사용 시 온보딩, 검색 결과 없음, 필터링 결과 없음, 오류 상태, 권한 없음 등의 상황에서 사용합니다. 단순히 "데이터 없음"이 아닌, 사용자가 다음에 할 수 있는 행동을 안내합니다.',
    example: '<EmptyState illustration={<NoDataIllustration />} title="아직 프로젝트가 없습니다" description="첫 프로젝트를 만들어보세요" action={<Button variant="primary">새 프로젝트 만들기</Button>} />',
    related: ['no-data', 'zero-state', 'blank-slate', 'onboarding']
  },
  'skeleton': {
    description: '콘텐츠가 로딩 중일 때 표시하는 임시 플레이스홀더입니다. 실제 콘텐츠와 유사한 모양과 크기의 회색 박스들로 구성되며, 맥동하는 애니메이션으로 로딩 중임을 표시합니다. 레이아웃 시프트를 방지합니다.',
    usage: '이미지, 텍스트 블록, 카드, 리스트 아이템 등이 비동기로 로드될 때 사용합니다. 로딩 시간이 0.5초 이상 걸릴 때 표시하며, 실제 콘텐츠와 동일한 크기와 위치를 유지합니다.',
    example: '<Skeleton variant="text" width="80%" height={20} /> <Skeleton variant="rectangular" width={200} height={118} animation="wave" />',
    related: ['loading-state', 'shimmer', 'placeholder', 'progress-indicator']
  },
  'structured-list': {
    description: '키-값 쌍이나 레이블-데이터 형태로 정보를 구조화하여 표시하는 리스트입니다.',
    usage: '상세 정보, 사양, 메타데이터 등을 읽기 쉽게 정리하여 표시할 때 사용합니다.',
    example: '<StructuredList items={[{label: "이름", value: "홍길동"}]} />',
    related: ['definition-list', 'key-value-list', 'detail-list']
  },
  'timeline': {
    description: '시간 순서대로 이벤트나 활동을 표시하는 타임라인 컴포넌트입니다.',
    usage: '프로젝트 진행 상황, 주문 추적, 활동 기록 등을 시각적으로 표현할 때 사용합니다.',
    example: '<Timeline events={[{date, title, description}]} orientation="vertical" />',
    related: ['activity-feed', 'history', 'progress-tracker']
  },
  'divider': {
    description: '콘텐츠 섹션을 시각적으로 구분하는 구분선입니다. 수평/수직 방향을 지원합니다.',
    usage: '관련 없는 콘텐츠를 분리하거나 시각적 계층을 만들 때 사용합니다.',
    example: '<Divider orientation="horizontal" variant="dashed" />',
    related: ['separator', 'hr', 'section-break']
  },
  'navbar-example': {
    description: '상단에 고정되는 네비게이션 바의 구현 예시입니다. 로고, 메뉴, 검색, 사용자 정보를 포함합니다.',
    usage: '웹 애플리케이션의 모든 페이지에서 일관된 네비게이션을 제공할 때 사용합니다.',
    example: '<Navbar brand={logo} menu={mainMenu} rightSection={userMenu} />',
    related: ['header', 'top-nav', 'app-bar']
  },
  'sidebar-example': {
    description: '좌측 또는 우측에 위치하는 사이드바 네비게이션의 구현 예시입니다.',
    usage: '복잡한 메뉴 구조나 다양한 기능을 계층적으로 제공할 때 사용합니다.',
    example: '<Sidebar items={navItems} collapsible activeItem={currentPath} />',
    related: ['side-nav', 'drawer', 'vertical-nav']
  },
  'helper-text': {
    description: '입력 필드 아래에 표시되는 도움말 텍스트로, 입력 형식이나 제약사항을 설명합니다.',
    usage: '사용자가 올바른 형식으로 데이터를 입력하도록 안내할 때 사용합니다.',
    example: '<HelperText>비밀번호는 8자 이상이어야 합니다</HelperText>',
    related: ['hint-text', 'description', 'form-help']
  },
  'design-tokens': {
    description: '디자인 시스템의 가장 작은 단위인 디자인 토큰입니다. 색상, 간격, 크기 등의 값을 정의합니다.',
    usage: '일관된 디자인을 유지하고 테마 변경을 쉽게 하기 위해 사용합니다.',
    example: '--color-primary: #3b82f6; --spacing-md: 16px;',
    related: ['css-variables', 'theme-tokens', 'style-tokens']
  },
  'theme-variables': {
    description: '라이트/다크 모드 등 테마별로 달라지는 변수들입니다. CSS 변수로 구현됩니다.',
    usage: '다크 모드, 고대비 모드 등 다양한 테마를 지원할 때 사용합니다.',
    example: '[data-theme="dark"] { --bg-color: #1a1a1a; }',
    related: ['theme-switcher', 'color-scheme', 'theme-provider']
  },
  'component-variants': {
    description: '컴포넌트의 다양한 시각적 변형(크기, 색상, 스타일)을 정의합니다.',
    usage: '같은 기능의 컴포넌트를 다양한 문맥에서 사용할 때 적절한 변형을 선택합니다.',
    example: '<Button variant="primary" size="large" fullWidth />',
    related: ['component-props', 'style-variants', 'modifiers']
  },
  'global-override': {
    description: '전역적으로 컴포넌트 스타일을 덮어쓸 수 있는 CSS 규칙입니다.',
    usage: '특정 프로젝트나 브랜드에 맞게 디자인 시스템을 커스터마이즈할 때 사용합니다.',
    example: '.custom-theme .btn { border-radius: 0; }',
    related: ['css-override', 'theme-customization', 'style-injection']
  },
  'form-wizard': {
    description: '여러 단계로 나누어진 폼을 순차적으로 진행하는 위저드 패턴입니다.',
    usage: '복잡한 가입 절차, 설문조사, 구매 프로세스 등을 단계별로 안내할 때 사용합니다.',
    example: '<FormWizard steps={[{title, component}]} onComplete={handleSubmit} />',
    related: ['multi-step-form', 'stepper-form', 'progressive-form']
  },
  'search-results': {
    description: '검색 결과를 표시하는 레이아웃 패턴입니다. 필터, 정렬, 결과 목록을 포함합니다.',
    usage: '검색 엔진, 상품 검색, 콘텐츠 검색 등의 결과를 체계적으로 표시할 때 사용합니다.',
    example: '<SearchResults query={searchTerm} results={data} filters={filterOptions} />',
    related: ['search-page', 'results-list', 'filtered-results']
  },
  'card-grid': {
    description: '카드를 격자 형태로 배치하는 레이아웃 패턴입니다. 반응형 그리드를 지원합니다.',
    usage: '상품 목록, 갤러리, 대시보드 위젯 등을 격자로 표시할 때 사용합니다.',
    example: '<CardGrid cards={items} columns={{ xs: 1, md: 2, lg: 3 }} />',
    related: ['grid-layout', 'card-layout', 'masonry']
  },
  'settings-layout': {
    description: '설정 페이지를 위한 레이아웃 패턴입니다. 사이드 메뉴와 콘텐츠 영역으로 구성됩니다.',
    usage: '사용자 설정, 앱 설정, 관리자 설정 등 복잡한 설정 화면을 구성할 때 사용합니다.',
    example: '<SettingsLayout menu={settingsMenu} content={<SettingsForm />} />',
    related: ['preferences-page', 'config-layout', 'admin-settings']
  },
  'empty-states': {
    description: '다양한 빈 상태 상황을 위한 디자인 패턴 모음입니다.',
    usage: '첫 사용, 검색 결과 없음, 에러 상태 등 다양한 빈 화면을 표시할 때 사용합니다.',
    example: '<EmptyState type="no-results" action={resetFilters} />',
    related: ['zero-state', 'blank-state', 'null-state']
  },
  'states': {
    description: 'UI 컴포넌트의 다양한 상호작용 상태를 정의합니다.',
    usage: '사용자 인터랙션에 따른 시각적 피드백을 제공할 때 사용합니다.',
    example: '.button:hover, .button:active, .button:disabled',
    related: ['interactive-states', 'component-states', 'ui-states']
  },
  'validation': {
    description: '폼 입력값의 유효성을 검사하고 피드백을 제공하는 패턴입니다.',
    usage: '사용자 입력이 요구사항을 충족하는지 실시간으로 검증하고 안내할 때 사용합니다.',
    example: 'validate={[required(), email(), minLength(8)]}',
    related: ['form-validation', 'input-validation', 'error-handling']
  },
  'focus-management': {
    description: '키보드 포커스를 올바르게 관리하는 접근성 패턴입니다.',
    usage: '모달, 드롭다운, 탭 등에서 키보드 사용자를 위한 포커스 트랩과 복원을 구현합니다.',
    example: 'useFocusTrap(modalRef); restoreFocus(previousElement);',
    related: ['focus-trap', 'focus-restore', 'keyboard-accessibility']
  },
  'theme-customization': {
    description: '사용자가 인터페이스의 모양을 개인화할 수 있는 테마 설정 기능입니다.',
    usage: '색상 테마, 글꼴 크기, 대비 등을 사용자가 직접 조정할 수 있게 합니다.',
    example: '<ThemeCustomizer options={["color", "fontSize", "contrast"]} />',
    related: ['personalization', 'user-preferences', 'theme-settings']
  },
  'responsive-design': {
    description: '다양한 화면 크기와 기기에 적응하는 반응형 디자인 패턴입니다.',
    usage: '모바일, 태블릿, 데스크톱 등 모든 기기에서 최적의 사용 경험을 제공합니다.',
    example: '@media (max-width: 768px) { .container { padding: 1rem; } }',
    related: ['mobile-first', 'breakpoints', 'fluid-layout']
  },
  'error-recovery': {
    description: '오류 발생 시 사용자가 작업을 복구할 수 있도록 돕는 패턴입니다.',
    usage: '데이터 손실을 방지하고 사용자가 오류 상황에서 벗어날 수 있도록 안내합니다.',
    example: '<ErrorBoundary fallback={<ErrorRecovery onRetry={retry} />} />',
    related: ['error-boundary', 'fallback-ui', 'retry-mechanism']
  },
  'breadcrumb': {
    description: '사용자의 현재 위치를 페이지 계층 구조 내에서 보여주는 경로 표시 컴포넌트입니다. 각 단계는 클릭 가능한 링크로 구성됩니다.',
    usage: '깊은 계층 구조를 가진 사이트에서 사용자가 현재 위치를 파악하고 상위 페이지로 쉽게 이동할 수 있도록 할 때 사용합니다.',
    example: '<Breadcrumb items={[{label: "홈", href: "/"}, {label: "제품", href: "/products"}, {label: "노트북"}]} />',
    related: ['navigation', 'page-header', 'navbar']
  },
  'alert': {
    description: '페이지 콘텐츠 내에 포함되는 정적 알림 컴포넌트입니다. 중요한 정보를 강조 표시하며, 아이콘과 색상으로 중요도를 구분합니다. Notification과 달리 페이지 레이아웃의 일부로 포함되며, Toast와 달리 자동으로 사라지지 않습니다.',
    usage: '폼 상단의 전체 오류 메시지, 페이지별 공지사항, 시스템 점검 안내, 권한 제한 안내 등에 사용합니다. 사용자가 명시적으로 닫기 전까지 계속 표시되며, 닫기 버튼은 선택사항입니다.',
    example: '<Alert type="warning" icon={<WarningIcon />} title="주의사항" closable onClose={handleClose}>2023년 12월 25일 오전 2-4시 시스템 점검이 예정되어 있습니다.</Alert>',
    related: ['notification', 'toast', 'banner', 'callout']
  },
  'error-message': {
    description: '폼 필드나 작업에서 발생한 오류를 명확하게 전달하는 메시지 컴포넌트입니다. 빨간색 텍스트와 아이콘으로 강조됩니다.',
    usage: '입력 검증 실패, API 오류, 권한 부족 등의 오류 상황을 사용자에게 구체적으로 설명할 때 사용합니다.',
    example: '<ErrorMessage fieldId="email">올바른 이메일 형식이 아닙니다.</ErrorMessage>',
    related: ['validation-messages', 'helper-text', 'form-feedback']
  },
  'field-group': {
    description: '관련된 폼 필드들을 시각적으로 그룹화하는 컨테이너 컴포넌트입니다. 레이블, 설명, 여러 입력 필드를 포함할 수 있습니다.',
    usage: '주소 입력(도로명, 상세주소, 우편번호), 날짜 범위, 연락처 정보 등 관련 필드를 묶어서 표시할 때 사용합니다.',
    example: '<FieldGroup label="배송 주소" required>{addressFields}</FieldGroup>',
    related: ['form', 'fieldset', 'form-section']
  },
  'form-validation': {
    description: '폼 입력값의 유효성을 실시간으로 검사하고 피드백을 제공하는 검증 시스템입니다. 클라이언트/서버 검증을 모두 지원합니다.',
    usage: '사용자가 잘못된 데이터를 제출하기 전에 오류를 발견하고 수정할 수 있도록 즉각적인 피드백을 제공합니다.',
    example: '<Form validation={schema} onSubmit={handleSubmit}>{formFields}</Form>',
    related: ['error-message', 'validation-rules', 'form-feedback']
  },
  // Foundation Components
  'color': {
    description: '디자인 시스템의 색상 팔레트를 정의합니다. 브랜드 색상, 시맨틱 색상, 중립 색상 등을 포함하며 일관된 색상 사용을 보장합니다.',
    usage: '모든 UI 컴포넌트에서 일관된 색상을 사용하고, 브랜드 아이덴티티를 유지하며, 접근성 기준을 충족할 때 사용합니다.',
    example: '--color-primary: #3b82f6; --color-success: #10b981; --color-gray-500: #6b7280;',
    related: ['theme-variables', 'design-tokens', 'color-picker']
  },
  'typography': {
    description: '텍스트 스타일 시스템으로 폰트 패밀리, 크기, 굵기, 행간 등을 체계적으로 정의합니다. 가독성과 위계를 고려한 타입 스케일을 제공합니다.',
    usage: '제목, 본문, 캡션 등 모든 텍스트 요소에 일관된 타이포그래피를 적용하여 가독성과 시각적 위계를 확립할 때 사용합니다.',
    example: '--font-size-h1: 2.5rem; --font-weight-bold: 700; --line-height-base: 1.5;',
    related: ['font-size', 'font-weight', 'text-styles']
  },
  'spacing': {
    description: '요소 간 여백을 일관되게 관리하는 간격 시스템입니다. 4px 또는 8px 단위의 배수로 구성되어 리듬감 있는 레이아웃을 만듭니다.',
    usage: '패딩, 마진, 갭 등 모든 여백에 적용하여 일관된 공간감을 만들고 시각적 균형을 유지할 때 사용합니다.',
    example: '--spacing-xs: 4px; --spacing-md: 16px; --spacing-xl: 32px;',
    related: ['margin', 'padding', 'gap']
  },
  'elevation': {
    description: '그림자 효과를 통해 UI 요소의 깊이감과 계층을 표현하는 시스템입니다. 여러 단계의 그림자 레벨을 제공합니다.',
    usage: '카드, 모달, 드롭다운 등의 요소를 배경에서 띄워 시각적 계층을 만들고 상호작용 가능한 요소를 강조할 때 사용합니다.',
    example: '--shadow-sm: 0 1px 2px rgba(0,0,0,0.05); --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);',
    related: ['box-shadow', 'z-index', 'depth']
  },
  'border-radius': {
    description: '모서리 둥글기를 정의하는 시스템입니다. 날카로운 모서리부터 완전히 둥근 형태까지 다양한 옵션을 제공합니다.',
    usage: '버튼, 카드, 입력 필드 등의 모서리를 둥글게 처리하여 친근하고 현대적인 느낌을 줄 때 사용합니다.',
    example: '--radius-sm: 4px; --radius-md: 8px; --radius-full: 9999px;',
    related: ['border', 'shape', 'corner-style']
  },
  'motion': {
    description: '애니메이션과 전환 효과를 위한 모션 시스템입니다. 타이밍, 이징, 지속 시간 등을 정의하여 일관된 움직임을 제공합니다.',
    usage: '상태 변화, 페이지 전환, 마이크로 인터랙션 등에 자연스러운 움직임을 추가하여 사용성을 향상시킬 때 사용합니다.',
    example: '--duration-fast: 150ms; --easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);',
    related: ['animation', 'transition', 'timing-function']
  },
  'iconography': {
    description: '일관된 스타일의 아이콘 시스템입니다. 선 굵기, 크기, 스타일이 통일된 아이콘 세트를 제공합니다.',
    usage: '기능을 시각적으로 표현하고, 텍스트를 보완하며, 공간을 효율적으로 사용할 때 아이콘을 활용합니다.',
    example: '<Icon name="search" size="24" strokeWidth="2" />',
    related: ['icon-button', 'svg-icons', 'icon-font']
  },
  'grid-system': {
    description: '레이아웃을 구성하는 그리드 시스템입니다. 12칼럼 또는 CSS Grid를 기반으로 반응형 레이아웃을 만듭니다.',
    usage: '페이지 레이아웃을 체계적으로 구성하고, 다양한 화면 크기에서 일관된 배치를 유지할 때 사용합니다.',
    example: '<Grid cols={12} gap="md"><GridItem span={6}>콘텐츠</GridItem></Grid>',
    related: ['layout', 'flexbox', 'css-grid']
  },
  'breakpoints': {
    description: '반응형 디자인을 위한 화면 크기 분기점입니다. 모바일, 태블릿, 데스크톱 등의 기기별 레이아웃 변경 지점을 정의합니다.',
    usage: '미디어 쿼리와 함께 사용하여 화면 크기에 따라 레이아웃, 텍스트 크기, 여백 등을 조정할 때 사용합니다.',
    example: '--breakpoint-sm: 640px; --breakpoint-md: 768px; --breakpoint-lg: 1024px;',
    related: ['responsive-design', 'media-queries', 'viewport']
  },
  'layout-structure': {
    description: '페이지의 전체적인 레이아웃 구조를 정의하는 시스템입니다. 헤더, 사이드바, 콘텐츠 영역, 푸터 등의 배치를 관리합니다.',
    usage: '애플리케이션의 주요 구조를 일관되게 유지하고, 콘텐츠 영역을 효과적으로 구성할 때 사용합니다.',
    example: '<Layout header={<Header />} sidebar={<Sidebar />} content={<Main />} />',
    related: ['page-layout', 'app-shell', 'container']
  },
  // Patterns Components
  'login-page': {
    description: '사용자 인증을 위한 로그인 페이지 패턴입니다. 이메일/비밀번호 입력, 소셜 로그인, 비밀번호 찾기 등의 기능을 포함합니다.',
    usage: '사용자가 서비스에 접근하기 위해 인증이 필요할 때, 보안과 사용성을 고려한 로그인 화면을 제공합니다.',
    example: '<LoginPage logo={brand} socialProviders={["google", "github"]} onSubmit={handleLogin} />',
    related: ['auth-form', 'signup-page', 'password-reset']
  },
  'dashboard': {
    description: '핵심 지표와 정보를 한눈에 보여주는 대시보드 레이아웃 패턴입니다. 차트, 통계, 알림 등 다양한 위젯을 포함합니다.',
    usage: '비즈니스 지표, 시스템 상태, 사용자 활동 등을 종합적으로 모니터링하고 분석할 때 사용합니다.',
    example: '<Dashboard widgets={[metricsCard, chartWidget, activityFeed]} layout="grid" />',
    related: ['analytics-page', 'monitoring', 'data-visualization']
  },
  'detail-page': {
    description: '단일 항목의 상세 정보를 표시하는 페이지 패턴입니다. 제목, 메타데이터, 상세 내용, 관련 액션을 체계적으로 배치합니다.',
    usage: '제품 상세, 사용자 프로필, 문서 내용 등 특정 항목의 모든 정보를 깊이 있게 보여줄 때 사용합니다.',
    example: '<DetailPage title={product.name} metadata={specs} content={description} actions={[edit, delete]} />',
    related: ['product-page', 'profile-page', 'article-page']
  },
  'settings-page': {
    description: '사용자나 시스템 설정을 관리하는 페이지 패턴입니다. 카테고리별 탭이나 섹션으로 구성되며 즉시 저장 또는 일괄 저장을 지원합니다.',
    usage: '계정 설정, 알림 설정, 프라이버시 설정 등 다양한 옵션을 체계적으로 관리할 수 있는 인터페이스를 제공할 때 사용합니다.',
    example: '<SettingsPage categories={[account, notifications, privacy]} onSave={handleSave} />',
    related: ['preferences', 'configuration', 'account-settings']
  },
  'master-detail': {
    description: '목록과 상세 보기를 한 화면에서 함께 제공하는 레이아웃 패턴입니다. 좌측에 목록, 우측에 선택된 항목의 상세 정보를 표시합니다.',
    usage: '이메일, 파일 탐색기, 제품 카탈로그 등 많은 항목 중 하나를 선택하여 상세 정보를 빠르게 확인할 때 사용합니다.',
    example: '<MasterDetail items={emails} selectedId={currentId} renderDetail={EmailDetail} />',
    related: ['split-view', 'list-detail', 'two-panel-layout']
  },
  // States Components
  'default': {
    description: '컴포넌트의 기본 상태입니다. 사용자 상호작용이 없고 특별한 조건이 없을 때의 일반적인 모습입니다. 모든 다른 상태가 해제되면 이 상태로 돌아갑니다.',
    usage: '컴포넌트가 처음 렌더링될 때, 마우스가 벗어났을 때, 포커스를 잃었을 때, 로딩이 완료됐을 때 등 평상시 상태를 표현합니다. 트리거: 페이지 로드, 다른 모든 상태 해제',
    example: '.button { background: var(--color-primary); color: white; transition: all 0.2s ease; }',
    related: ['initial-state', 'rest-state', 'normal-state']
  },
  'hover': {
    description: '마우스 커서가 요소 위에 올라갔을 때의 상태입니다. 데스크톱 환경에서만 작동하며, 터치 기기에서는 발생하지 않습니다. 일반적으로 색상 변화, 그림자, 살짝 올라오는 효과 등으로 표현합니다.',
    usage: '클릭 가능한 요소임을 알려주고 상호작용을 유도합니다. 트리거: 마우스 포인터가 요소 경계 안으로 진입. 해제: 마우스 포인터가 요소 경계 밖으로 이동. 전환 시간: 200-300ms',
    example: '.button:hover { background: var(--color-primary-dark); transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); cursor: pointer; }',
    related: ['mouse-over', 'interactive-state', 'cursor-state']
  },
  'focus': {
    description: '키보드 탭이나 프로그래밍적으로 포커스를 받았을 때의 상태입니다. 접근성을 위해 반드시 필요하며, 명확한 윤곽선(outline)으로 표시합니다. :focus-visible을 사용하면 키보드 포커스만 표시할 수 있습니다.',
    usage: '키보드 사용자가 현재 위치를 파악할 수 있도록 합니다. 트리거: Tab/Shift+Tab 키, 요소 클릭, JavaScript focus() 메서드. 해제: 다른 요소로 포커스 이동, Esc 키(특정 경우). 최소 대비: 3:1',
    example: '.button:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 2px; z-index: 1; }',
    related: ['keyboard-focus', 'focus-visible', 'tab-navigation']
  },
  'active': {
    description: '사용자가 요소를 클릭하거나 터치하는 순간의 상태입니다. 마우스 버튼을 누르고 있거나 터치하고 있는 동안만 유지됩니다. 즉각적인 시각적 피드백으로 클릭이 인식됐음을 알립니다.',
    usage: '버튼이 눌렸음을 표시합니다. 트리거: 마우스 다운, 터치 시작, Space/Enter 키(버튼의 경우). 해제: 마우스 업, 터치 종료, 키 해제. 지속 시간: 클릭/터치하는 동안만(보통 100-200ms)',
    example: '.button:active { background: var(--color-primary-darker); transform: scale(0.95); transition: transform 0.1s ease; }',
    related: ['pressed', 'clicking', 'touch-state']
  },
  'disabled': {
    description: '요소가 비활성화되어 상호작용할 수 없는 상태입니다. 투명도를 낮추고 커서를 not-allowed로 변경합니다. 포커스를 받을 수 없고, 클릭 이벤트도 발생하지 않습니다.',
    usage: '권한 부족, 필수 조건 미충족, 로딩 중 등의 이유로 사용 불가할 때 표시합니다. 트리거: disabled 속성 추가, aria-disabled="true", 프로그래밍적 비활성화. 시각적 표현: opacity 0.5-0.6, 회색조 처리',
    example: '.button:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; filter: grayscale(30%); }',
    related: ['inactive', 'unavailable', 'locked-state']
  },
  'loading': {
    description: '비동기 작업이 진행 중인 상태입니다. 스피너, 프로그레스 바, 스켈레톤 UI, 또는 펄스 애니메이션으로 표현합니다. 사용자 입력을 차단하거나 제한할 수 있습니다.',
    usage: 'API 호출, 파일 업로드, 데이터 처리 등을 기다릴 때 표시합니다. 트리거: 비동기 작업 시작, 폼 제출, 데이터 요청. 해제: 작업 완료/실패. 최소 표시 시간: 300ms(깜빡임 방지)',
    example: '.button.loading::after { content: ""; border: 2px solid transparent; border-top-color: white; border-radius: 50%; animation: spin 1s linear infinite; }',
    related: ['pending', 'processing', 'busy-state']
  },
  'selected': {
    description: '여러 옵션 중 현재 선택된 항목의 상태입니다. 배경색 변경, 체크마크, 강조 테두리 등으로 표시합니다. 다중 선택이 가능한 경우 여러 항목이 동시에 selected 상태가 될 수 있습니다.',
    usage: '탭, 리스트 아이템, 카드, 칩 등에서 선택 상태를 표시합니다. 트리거: 클릭, 탭, 키보드 선택(Enter/Space). 해제: 다른 항목 선택(단일 선택), 재클릭(토글), 선택 해제 버튼',
    example: '.tab.selected { background: white; border-bottom: 3px solid var(--color-primary); font-weight: 600; }',
    related: ['checked', 'active-tab', 'current-item']
  },
  'error': {
    description: '오류나 실패 상태입니다. 빨간색 계열의 색상, 경고 아이콘, 오류 메시지로 문제를 명확히 전달합니다. 입력 필드의 경우 테두리를 빨간색으로 표시합니다.',
    usage: '유효성 검증 실패, API 오류, 시스템 에러 등을 표시합니다. 트리거: 폼 검증 실패, 서버 에러 응답, 타임아웃. 지속: 문제가 해결될 때까지. 필수 요소: 오류 메시지, 해결 방법 안내',
    example: '.input.error { border: 2px solid var(--color-error); background: var(--color-error-light); } .error-icon { color: var(--color-error); }',
    related: ['invalid', 'failure', 'validation-error']
  },
  'success': {
    description: '작업이 성공적으로 완료된 상태입니다. 녹색 계열의 색상과 체크 아이콘으로 긍정적인 결과를 표시합니다. 일시적으로 표시되거나 지속적으로 유지될 수 있습니다.',
    usage: '저장 완료, 전송 성공, 검증 통과 등을 피드백합니다. 트리거: 작업 성공, 유효성 검증 통과, 프로세스 완료. 지속 시간: 일시적(3-5초) 또는 영구적. 애니메이션: 체크마크 그리기, 페이드 인',
    example: '.alert.success { background: var(--color-success-light); border-left: 4px solid var(--color-success); animation: slideIn 0.3s ease; }',
    related: ['completed', 'valid', 'done-state']
  },
  'warning': {
    description: '주의가 필요한 상태입니다. 주황색이나 노란색 계열로 표시하며, 삼각형 경고 아이콘을 함께 사용합니다. 오류는 아니지만 사용자의 주의를 요구하는 정보를 전달합니다.',
    usage: '용량 제한 임박, 만료 예정, 권장사항 미준수 등을 알립니다. 트리거: 임계값 도달, 조건부 경고 발생, 시스템 권고사항. 중요도: 오류보다 낮지만 정보보다 높음',
    example: '.badge.warning { background: var(--color-warning); color: var(--color-warning-contrast); display: flex; align-items: center; gap: 4px; }',
    related: ['caution', 'alert', 'attention-required']
  },
  // Accessibility Components
  'keyboard-navigation': {
    description: '키보드만으로 모든 기능을 사용할 수 있도록 하는 접근성 패턴입니다. Tab, Enter, Space, 화살표 키 등을 활용합니다.',
    usage: '마우스를 사용할 수 없는 사용자를 위해 키보드로 모든 인터랙티브 요소에 접근하고 조작할 수 있도록 합니다.',
    example: 'tabIndex="0" onKeyDown={handleKeyPress} role="button" aria-label="메뉴 열기"',
    related: ['tab-order', 'keyboard-shortcuts', 'focus-management']
  },
  'color-accessibility': {
    description: '색각 이상자를 포함한 모든 사용자가 구분할 수 있는 색상 사용 지침입니다. 색상만으로 정보를 전달하지 않습니다.',
    usage: '상태 표시, 데이터 시각화, 경고 메시지 등에서 색상과 함께 아이콘, 패턴, 텍스트를 병행하여 정보를 전달합니다.',
    example: '성공: 녹색 + 체크 아이콘, 오류: 빨간색 + X 아이콘, 차트: 색상 + 패턴',
    related: ['color-blind-friendly', 'contrast-ratios', 'visual-indicators']
  },
  'live-regions': {
    description: '동적으로 변경되는 콘텐츠를 스크린 리더가 실시간으로 읽어주도록 하는 ARIA 라이브 영역입니다.',
    usage: '알림, 검색 결과 업데이트, 폼 검증 메시지 등 페이지 새로고침 없이 변경되는 내용을 시각 장애인에게 전달합니다.',
    example: '<div aria-live="polite" aria-atomic="true">검색 결과 {count}개를 찾았습니다</div>',
    related: ['aria-live', 'screen-reader-announcements', 'dynamic-content']
  },
  'semantic-html': {
    description: '의미 있는 HTML 태그를 사용하여 문서 구조와 콘텐츠의 의미를 명확히 하는 마크업 방식입니다.',
    usage: '<div> 대신 <nav>, <main>, <article> 등 적절한 시맨틱 태그를 사용하여 보조 기술이 페이지 구조를 이해하도록 합니다.',
    example: '<nav aria-label="주 메뉴"><ul>...</ul></nav> <main><article>...</article></main>',
    related: ['html5-elements', 'document-structure', 'landmarks']
  },
  'touch-targets': {
    description: '터치 기기에서 쉽게 탭할 수 있도록 충분한 크기의 터치 영역을 제공하는 디자인 가이드라인입니다.',
    usage: '버튼, 링크, 폼 컨트롤 등 모든 인터랙티브 요소에 최소 44x44px 이상의 터치 영역을 확보합니다.',
    example: '.touch-button { min-height: 44px; min-width: 44px; padding: 12px 24px; }',
    related: ['mobile-accessibility', 'finger-friendly', 'tap-targets']
  },
  'alt-text': {
    description: '이미지에 대한 대체 텍스트로, 이미지를 볼 수 없는 사용자에게 내용을 설명합니다.',
    usage: '모든 의미 있는 이미지에 설명적인 alt 텍스트를 제공하고, 장식용 이미지는 빈 alt=""를 사용합니다.',
    example: '<img src="chart.png" alt="2023년 월별 매출 추이 그래프, 3월에 최고점 달성" />',
    related: ['image-description', 'text-alternatives', 'non-text-content']
  },
  'skip-navigation': {
    description: '키보드 사용자가 반복되는 네비게이션을 건너뛰고 주요 콘텐츠로 바로 이동할 수 있는 링크입니다.',
    usage: '페이지 최상단에 숨겨진 링크를 배치하여 Tab 키를 누르면 나타나고 주요 콘텐츠로 바로 이동할 수 있게 합니다.',
    example: '<a href="#main-content" class="skip-link">주요 콘텐츠로 건너뛰기</a>',
    related: ['bypass-blocks', 'navigation-skip', 'content-jump']
  },
  'form-labels': {
    description: '모든 폼 입력 요소에 명확한 레이블을 연결하여 목적을 설명하는 접근성 패턴입니다.',
    usage: '<label> 태그를 사용하여 입력 필드와 연결하거나, aria-label/aria-labelledby로 레이블을 제공합니다.',
    example: '<label for="email">이메일 주소 (필수)</label><input id="email" type="email" required />',
    related: ['input-labels', 'form-accessibility', 'label-association']
  },
  'error-identification': {
    description: '폼 오류를 명확하게 식별하고 수정 방법을 안내하는 접근성 패턴입니다.',
    usage: '오류 발생 시 어떤 필드에 문제가 있는지 명시하고, 구체적인 수정 방법을 텍스트로 제공합니다.',
    example: '<input aria-invalid="true" aria-describedby="email-error" /><span id="email-error">올바른 이메일 형식을 입력해주세요 (예: user@example.com)</span>',
    related: ['error-messaging', 'validation-feedback', 'form-errors']
  },
  'consistent-navigation': {
    description: '웹사이트 전체에서 일관된 네비게이션 구조와 위치를 유지하는 접근성 원칙입니다.',
    usage: '모든 페이지에서 메뉴, 검색, 로고 등의 위치를 동일하게 유지하여 예측 가능한 사용 경험을 제공합니다.',
    example: '헤더: 로고(좌) - 메인메뉴(중앙) - 사용자메뉴(우), 모든 페이지 동일 적용',
    related: ['predictable-ui', 'navigation-consistency', 'layout-patterns']
  },
  'aria-roles': {
    description: 'ARIA role 속성은 HTML 요소의 역할을 명시적으로 정의하여 보조 기술이 해당 요소의 목적을 이해할 수 있도록 합니다.',
    usage: '시맨틱 HTML만으로 충분하지 않을 때, 커스텀 위젯이나 동적 콘텐츠의 역할을 명확히 정의하여 스크린 리더 사용자에게 올바른 정보를 제공합니다.',
    example: '<div role="navigation" aria-label="주 메뉴">, <button role="tab" aria-selected="true">',
    related: ['aria', 'semantic-html', 'widget-roles']
  },
  'focus-ring': {
    description: '포커스를 받은 요소 주변에 표시되는 시각적 윤곽선으로, 키보드 탐색 시 현재 위치를 명확히 보여줍니다.',
    usage: '키보드 사용자가 현재 포커스된 요소를 쉽게 식별할 수 있도록 명확하고 대비가 높은 포커스 링을 제공합니다.',
    example: ':focus-visible { outline: 3px solid #3b82f6; outline-offset: 2px; border-radius: 4px; }',
    related: ['focus-indicators', 'keyboard-navigation', 'focus-management']
  },
  'keyboard-nav': {
    description: '키보드만으로 웹사이트의 모든 기능을 사용할 수 있도록 하는 접근성 기능입니다. Tab, Shift+Tab, 화살표 키, Enter, Space 등을 활용합니다.',
    usage: '마우스를 사용할 수 없거나 선호하지 않는 사용자를 위해 모든 인터랙티브 요소에 키보드로 접근하고 조작할 수 있도록 구현합니다.',
    example: 'tabindex="0" role="button" onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleClick(); }}',
    related: ['keyboard-navigation', 'tab-order', 'keyboard-shortcuts']
  },
  'screen-reader': {
    description: '시각 장애인이 사용하는 화면 낭독 프로그램을 위한 최적화 기능입니다. 텍스트와 의미 있는 정보를 음성으로 변환하여 전달합니다.',
    usage: '적절한 ARIA 레이블, 의미 있는 대체 텍스트, 숨겨진 설명 텍스트 등을 제공하여 시각 정보 없이도 콘텐츠를 이해할 수 있도록 합니다.',
    example: '<span className="sr-only">새 알림 3개가 있습니다</span>, aria-label="닫기 버튼"',
    related: ['aria', 'visually-hidden', 'screen-reader-text']
  },
  'color-contrast': {
    description: 'WCAG 기준에 따른 텍스트와 배경 간의 충분한 색상 대비를 확보하는 접근성 가이드라인입니다. 일반 텍스트는 4.5:1, 큰 텍스트는 3:1 이상이어야 합니다.',
    usage: '시력이 낮거나 색각 이상이 있는 사용자도 텍스트를 명확히 읽을 수 있도록 충분한 대비를 제공합니다.',
    example: '배경 #ffffff에 텍스트 #374151 = 대비 8.6:1 (AA 통과), 배경 #3b82f6에 텍스트 #ffffff = 대비 8.59:1',
    related: ['contrast-ratios', 'color-accessibility', 'wcag-compliance']
  },
  'skip-content': {
    description: '키보드 사용자가 반복되는 헤더나 네비게이션을 건너뛰고 주요 콘텐츠로 바로 이동할 수 있는 숨겨진 링크입니다.',
    usage: '페이지 최상단에 시각적으로는 숨겨지지만 Tab 키를 누르면 나타나는 링크를 제공하여 불필요한 탐색을 줄입니다.',
    example: '<a href="#main" className="skip-link">본문 바로가기</a> /* .skip-link:focus { position: fixed; top: 0; } */',
    related: ['skip-navigation', 'bypass-blocks', 'jump-links']
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
  const viewportHeight = window.innerHeight;
  const cardWidth = 360;
  const estimatedCardHeight = 400; // 예상 카드 높이
  
  let left = position.x;
  let top = position.y;
  
  // 카드가 화면 오른쪽 밖으로 나가는 경우 왼쪽에 표시
  if (left + cardWidth > viewportWidth - 20) {
    left = position.x - cardWidth - 300; // 사이드바 왼쪽에 표시
  }
  
  // 너무 왼쪽으로 가는 경우 조정
  if (left < 10) {
    left = 10;
  }
  
  // 카드가 화면 아래쪽 밖으로 나가는 경우 위쪽에 표시
  if (top + estimatedCardHeight > viewportHeight - 20) {
    // 호버된 아이템 위쪽에 표시 (아이템 높이를 고려하여 약간의 여백 추가)
    top = position.y - estimatedCardHeight - 40;
    
    // 너무 위로 가는 경우 조정
    if (top < 10) {
      top = 10;
    }
  }

  return (
    <div 
      className="component-description"
      style={{ 
        top: top,
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
        
        {(info as any).example && (
          <div className="description-section">
            <h5>예시 코드</h5>
            <code className="description-code">{(info as any).example}</code>
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