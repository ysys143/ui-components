export interface ComponentItem {
  id: string;
  name: string;
  description: string;
  example?: string;
  interactive?: boolean;
}

export interface ComponentCategory {
  id: string;
  title: string;
  description: string;
  items: ComponentItem[];
}

export const componentsData: ComponentCategory[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: '스타일 토큰 및 기초 규칙',
    items: [
      { id: 'color', name: 'Color', description: '색상 체계와 팔레트를 정의합니다. 브랜드 컬러, 시맨틱 컬러 등을 포함합니다.' },
      { id: 'typography', name: 'Typography', description: '폰트 패밀리, 크기, 굵기, 행간 등 텍스트 스타일을 정의합니다.' },
      { id: 'spacing', name: 'Spacing', description: '일관된 여백 체계를 제공하는 스페이싱 토큰입니다.' },
      { id: 'elevation', name: 'Elevation', description: '그림자와 z-index를 통한 깊이감을 표현합니다.' },
      { id: 'border-radius', name: 'Border Radius', description: '모서리 둥글기에 대한 일관된 규칙입니다.' },
      { id: 'motion', name: 'Motion', description: '애니메이션, 전환, 지속 시간, 이징 함수를 정의합니다.' },
      { id: 'iconography', name: 'Iconography', description: '아이콘 시스템과 사용 가이드라인입니다.' },
      { id: 'grid-system', name: 'Grid System', description: '레이아웃을 위한 그리드 시스템입니다.' },
      { id: 'breakpoints', name: 'Breakpoints', description: '반응형 디자인을 위한 중단점 규칙입니다.' },
      { id: 'layout-structure', name: 'Layout Structure', description: 'Container, Row, Column 등 레이아웃 구조 요소입니다.' }
    ]
  },
  {
    id: 'ui-components',
    title: 'UI Components',
    description: '기본 인터랙션 컴포넌트',
    items: [
      { id: 'button', name: 'Button', description: '클릭 가능한 기본 버튼 컴포넌트입니다.', interactive: true },
      { id: 'icon-button', name: 'Icon Button', description: '아이콘만 포함된 버튼입니다.', interactive: true },
      { id: 'checkbox', name: 'Checkbox', description: '다중 선택이 가능한 체크박스입니다.', interactive: true },
      { id: 'radio-button', name: 'Radio Button', description: '단일 선택을 위한 라디오 버튼입니다.', interactive: true },
      { id: 'switch', name: 'Switch', description: 'On/Off 상태를 전환하는 토글 스위치입니다.', interactive: true },
      { id: 'text-input', name: 'Text Input', description: '텍스트 입력을 위한 필드입니다.', interactive: true },
      { id: 'number-input', name: 'Number Input', description: '숫자 입력을 위한 전용 필드입니다.', interactive: true },
      { id: 'textarea', name: 'Textarea', description: '여러 줄의 텍스트 입력을 위한 영역입니다.', interactive: true },
      { id: 'select', name: 'Select', description: '드롭다운 선택 컴포넌트입니다.', interactive: true },
      { id: 'dropdown', name: 'Dropdown', description: '옵션 목록을 표시하는 드롭다운입니다.', interactive: true },
      { id: 'date-picker', name: 'Date Picker', description: '날짜 선택을 위한 컴포넌트입니다.', interactive: true },
      { id: 'file-uploader', name: 'File Uploader', description: '파일 업로드를 위한 컴포넌트입니다.', interactive: true },
      { id: 'slider', name: 'Slider', description: '값의 범위를 선택하는 슬라이더입니다.', interactive: true },
      { id: 'rating', name: 'Rating', description: '별점 등의 평가를 위한 컴포넌트입니다.', interactive: true },
      { id: 'stepper', name: 'Stepper', description: '숫자를 증감시키는 스테퍼입니다.', interactive: true },
      { id: 'search', name: 'Search', description: '검색 입력 필드입니다.', interactive: true },
      { id: 'autocomplete', name: 'Autocomplete', description: '자동완성 기능이 있는 입력 필드입니다.', interactive: true },
      { id: 'tags', name: 'Tags / Chips', description: '태그나 칩 형태의 작은 정보 단위입니다.', interactive: true }
    ]
  },
  {
    id: 'data-display',
    title: 'Data Display & Containers',
    description: '정보 구조화 요소',
    items: [
      { id: 'card', name: 'Card', description: '관련 정보를 그룹화하는 컨테이너입니다.' },
      { id: 'list', name: 'List', description: '항목을 나열하는 리스트 컴포넌트입니다.' },
      { id: 'table', name: 'Table', description: '데이터를 행과 열로 표시하는 테이블입니다.' },
      { id: 'accordion', name: 'Accordion', description: '접고 펼칠 수 있는 컨텐츠 영역입니다.', interactive: true },
      { id: 'tabs', name: 'Tabs', description: '탭으로 구분된 컨텐츠 영역입니다.', interactive: true },
      { id: 'tile', name: 'Tile', description: '클릭 가능한 타일 형태의 컨테이너입니다.' },
      { id: 'treeview', name: 'TreeView', description: '계층 구조를 표시하는 트리뷰입니다.', interactive: true },
      { id: 'progress-bar', name: 'Progress Bar', description: '진행 상태를 표시하는 바입니다.' },
      { id: 'badge', name: 'Badge', description: '상태나 수량을 표시하는 작은 레이블입니다.' },
      { id: 'avatar', name: 'Avatar', description: '사용자 프로필 이미지를 표시합니다.' },
      { id: 'timeline', name: 'Timeline', description: '시간 순서대로 이벤트를 표시합니다.' },
      { id: 'divider', name: 'Divider', description: '콘텐츠를 구분하는 구분선입니다.' }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: '탐색 관련 요소',
    items: [
      { id: 'navbar', name: 'Navbar', description: '상단 네비게이션 바입니다.' },
      { id: 'sidebar', name: 'Sidebar', description: '사이드 네비게이션 메뉴입니다.' },
      { id: 'breadcrumb', name: 'Breadcrumb', description: '현재 위치를 나타내는 경로 표시입니다.' },
      { id: 'pagination', name: 'Pagination', description: '페이지 나누기 컴포넌트입니다.', interactive: true },
      { id: 'menu', name: 'Menu', description: '메뉴 항목을 표시하는 컴포넌트입니다.' },
      { id: 'link', name: 'Link', description: '클릭 가능한 링크 컴포넌트입니다.' }
    ]
  },
  {
    id: 'feedback',
    title: 'Feedback & Overlays',
    description: '피드백, 상태, 오버레이',
    items: [
      { id: 'modal', name: 'Modal', description: '화면 위에 떠 있는 대화 상자입니다.', interactive: true },
      { id: 'dialog', name: 'Dialog', description: '사용자와 상호작용하는 대화 상자입니다.', interactive: true },
      { id: 'alert', name: 'Alert', description: '중요한 정보를 표시하는 알림입니다.' },
      { id: 'notification', name: 'Notification', description: '시스템 알림 메시지입니다.' },
      { id: 'toast', name: 'Toast / Snackbar', description: '일시적으로 표시되는 메시지입니다.', interactive: true },
      { id: 'tooltip', name: 'Tooltip', description: '마우스 호버 시 표시되는 도움말입니다.', interactive: true },
      { id: 'popover', name: 'Popover', description: '클릭 시 표시되는 팝오버입니다.', interactive: true },
      { id: 'skeleton', name: 'Skeleton', description: '로딩 중 표시되는 스켈레톤 UI입니다.' },
      { id: 'empty-state', name: 'Empty State', description: '데이터가 없을 때 표시되는 상태입니다.' }
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    description: '폼 그룹 및 입력 구조',
    items: [
      { id: 'form', name: 'Form', description: '폼 컨테이너와 레이아웃입니다.' },
      { id: 'form-label', name: 'Form Label', description: '입력 필드의 레이블입니다.' },
      { id: 'helper-text', name: 'Helper Text', description: '입력 필드에 대한 도움말 텍스트입니다.' },
      { id: 'error-message', name: 'Error Message', description: '유효성 검사 오류 메시지입니다.' },
      { id: 'field-group', name: 'Field Group', description: '관련 필드를 그룹화합니다.' },
      { id: 'form-validation', name: 'Form Validation', description: '폼 유효성 검사 패턴입니다.' }
    ]
  },

  {
    id: 'states',
    title: 'States',
    description: '상태 및 변형',
    items: [
      { id: 'default', name: 'Default', description: '기본 상태입니다.' },
      { id: 'hover', name: 'Hover', description: '마우스 호버 상태입니다.' },
      { id: 'focus', name: 'Focus', description: '포커스 상태입니다.' },
      { id: 'active', name: 'Active', description: '활성 상태입니다.' },
      { id: 'disabled', name: 'Disabled', description: '비활성 상태입니다.' },
      { id: 'loading', name: 'Loading', description: '로딩 상태입니다.' },
      { id: 'selected', name: 'Selected', description: '선택된 상태입니다.' },
      { id: 'error', name: 'Error', description: '오류 상태입니다.' },
      { id: 'success', name: 'Success', description: '성공 상태입니다.' },
      { id: 'warning', name: 'Warning', description: '경고 상태입니다.' }
    ]
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: '접근성 대응',
    items: [
      { id: 'aria-roles', name: 'ARIA Roles', description: '스크린 리더를 위한 ARIA 역할입니다.' },
      { id: 'focus-ring', name: 'Focus Ring', description: '키보드 탐색을 위한 포커스 링입니다.' },
      { id: 'keyboard-nav', name: 'Keyboard Navigation', description: '키보드로 탐색 가능한 인터페이스입니다.' },
      { id: 'screen-reader', name: 'Screen Reader Support', description: '스크린 리더 지원 기능입니다.' },
      { id: 'color-contrast', name: 'Color Contrast', description: '적절한 색상 대비를 제공합니다.' },
      { id: 'skip-content', name: 'Skip to Content', description: '콘텐츠로 바로 이동하는 기능입니다.' }
    ]
  }
];