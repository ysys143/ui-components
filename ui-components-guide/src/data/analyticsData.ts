// Analytics 페이지용 전문적인 데이터
export const conversionFunnelData = [
  { stage: '웹사이트 방문', value: 100000, rate: 100 },
  { stage: '제품 조회', value: 65000, rate: 65 },
  { stage: '장바구니 추가', value: 32000, rate: 49.2 },
  { stage: '결제 시작', value: 18000, rate: 56.3 },
  { stage: '구매 완료', value: 12000, rate: 66.7 },
];

export const monthlyMetrics = [
  { month: 'Jan', sessions: 145234, users: 98234, pageViews: 523421, bounceRate: 42.3 },
  { month: 'Feb', sessions: 156234, users: 102345, pageViews: 545632, bounceRate: 41.2 },
  { month: 'Mar', sessions: 178923, users: 118234, pageViews: 612345, bounceRate: 39.8 },
  { month: 'Apr', sessions: 172345, users: 114523, pageViews: 598234, bounceRate: 40.5 },
  { month: 'May', sessions: 189234, users: 125634, pageViews: 645231, bounceRate: 38.9 },
  { month: 'Jun', sessions: 195234, users: 132345, pageViews: 678234, bounceRate: 37.8 },
];

export const userSegments = [
  { segment: '신규 방문자', value: 35, users: 42342, revenue: 2345000 },
  { segment: '재방문자', value: 45, users: 54523, revenue: 4523000 },
  { segment: '충성 고객', value: 20, users: 24234, revenue: 3892000 },
];

export const deviceMetrics = [
  { device: 'Desktop', sessions: 145000, conversionRate: 4.2, avgDuration: 234 },
  { device: 'Mobile', sessions: 189000, conversionRate: 2.8, avgDuration: 156 },
  { device: 'Tablet', sessions: 45000, conversionRate: 3.5, avgDuration: 198 },
];

export const pagePerformance = [
  { page: '/home', views: 234523, avgTime: 45, exitRate: 23.4, bounceRate: 35.2 },
  { page: '/products', views: 189234, avgTime: 123, exitRate: 18.2, bounceRate: 22.1 },
  { page: '/cart', views: 89234, avgTime: 234, exitRate: 45.2, bounceRate: 0 },
  { page: '/checkout', views: 45234, avgTime: 345, exitRate: 12.3, bounceRate: 0 },
  { page: '/contact', views: 34523, avgTime: 89, exitRate: 65.4, bounceRate: 58.2 },
];

export const trafficSources = [
  { source: '자연 검색', value: 40, sessions: 89234, conversions: 3234 },
  { source: '유료 광고', value: 25, sessions: 55823, conversions: 2892 },
  { source: '직접 유입', value: 20, sessions: 44623, conversions: 1823 },
  { source: '소셜 미디어', value: 10, sessions: 22312, conversions: 623 },
  { source: '이메일', value: 5, sessions: 11156, conversions: 423 },
];

export const goalCompletions = [
  { goal: '회원가입', target: 5000, actual: 4523, completion: 90.5 },
  { goal: '뉴스레터 구독', target: 3000, actual: 3234, completion: 107.8 },
  { goal: '첫 구매', target: 2000, actual: 1823, completion: 91.2 },
  { goal: '앱 다운로드', target: 8000, actual: 6234, completion: 77.9 },
];

// 실시간 사용자 데이터
export const realtimeUsers = {
  current: 1234,
  peak: 2345,
  average: 1567,
  byPage: [
    { page: '홈', users: 423 },
    { page: '제품 목록', users: 356 },
    { page: '제품 상세', users: 234 },
    { page: '장바구니', users: 123 },
    { page: '기타', users: 98 },
  ],
};