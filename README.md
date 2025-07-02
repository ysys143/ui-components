# UI Components Guide

React 기반의 종합적인 UI 컴포넌트 가이드 및 디자인 시스템입니다.

## 🌟 주요 기능

- **종합 컴포넌트 라이브러리**: 30+ 개의 React UI 컴포넌트
- **인터랙티브 데모**: 실시간으로 컴포넌트를 테스트하고 체험
- **D3.js 차트**: 다양한 데이터 시각화 컴포넌트
- **디자인 시스템**: 색상, 타이포그래피, 스페이싱 가이드라인
- **접근성 최적화**: WCAG 2.1 AA 레벨 준수
- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동

## 📦 포함된 컴포넌트

### 📊 대시보드
- 실시간 메트릭 카드
- D3.js 기반 차트 (라인, 바, 도넛, 히트맵)
- 활동 타임라인

### 🎨 UI 컴포넌트
- **입력**: Button, Input, Select, DatePicker, FileUploader
- **표시**: Card, Badge, Avatar, Toast, Modal
- **네비게이션**: Navbar, Sidebar, Breadcrumb, Pagination
- **피드백**: Alert, Progress, Loading, Skeleton

### 🏗️ 디자인 파운데이션
- 색상 시스템
- 타이포그래피 스케일
- 스페이싱 토큰
- 그림자 시스템

### ♿ 접근성
- 키보드 네비게이션
- 스크린 리더 지원
- 색상 대비 검증
- ARIA 레이블

## 🚀 빠른 시작

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/jaesolshin/ui-components.git
cd ui-components/ui-components-guide

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

### 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

1. GitHub에 새 저장소 생성
2. 코드 푸시
3. Repository Settings > Pages에서 GitHub Actions 소스 선택
4. 자동 배포 완료

## 🛠️ 기술 스택

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 + CSS Variables
- **Charts**: D3.js
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + GitHub Actions

## 📂 프로젝트 구조

```
ui-components-guide/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── charts/         # D3.js 차트 컴포넌트
│   │   └── ui/             # 기본 UI 컴포넌트
│   ├── pages/              # 페이지 컴포넌트
│   ├── data/               # 샘플 데이터
│   ├── theme/              # 테마 및 디자인 토큰
│   └── contexts/           # React Context
├── public/                 # 정적 파일
└── dist/                  # 빌드 결과물
```

## 🎯 사용 방법

1. **컴포넌트 탐색**: 사이드바에서 원하는 컴포넌트 선택
2. **인터랙티브 데모**: 실시간으로 컴포넌트 상태 변경 테스트
3. **코드 참조**: 각 컴포넌트의 구현 코드 확인
4. **디자인 가이드**: Foundation 섹션에서 디자인 원칙 학습

## 📱 반응형 지원

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

## ♿ 접근성 기능

- 키보드 탐색 지원 (Tab, Enter, Space, 화살표 키)
- ARIA 레이블 및 역할 정의
- 스크린 리더 최적화
- 색상 대비 4.5:1 이상 보장
- 44px 이상 터치 타겟

## 🤝 기여하기

1. 이슈 등록 또는 기능 제안
2. Fork 후 feature 브랜치 생성
3. 변경사항 커밋
4. Pull Request 생성

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🔗 링크

- **Live Demo**: [GitHub Pages 배포 주소]
- **GitHub Repository**: https://github.com/jaesolshin/ui-components
- **이슈 신고**: https://github.com/jaesolshin/ui-components/issues

---

**Made with ❤️ by Jaesol Shin** 