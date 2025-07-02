// 더 현실적인 대시보드 데이터
export const revenueData = [
  { date: '2024-01-01', revenue: 45234, orders: 123, avgOrderValue: 368 },
  { date: '2024-01-02', revenue: 52341, orders: 142, avgOrderValue: 369 },
  { date: '2024-01-03', revenue: 48923, orders: 131, avgOrderValue: 374 },
  { date: '2024-01-04', revenue: 51234, orders: 138, avgOrderValue: 371 },
  { date: '2024-01-05', revenue: 53421, orders: 145, avgOrderValue: 368 },
  { date: '2024-01-06', revenue: 49823, orders: 134, avgOrderValue: 372 },
  { date: '2024-01-07', revenue: 55234, orders: 149, avgOrderValue: 371 },
  { date: '2024-01-08', revenue: 58234, orders: 156, avgOrderValue: 373 },
  { date: '2024-01-09', revenue: 54321, orders: 147, avgOrderValue: 370 },
  { date: '2024-01-10', revenue: 56432, orders: 152, avgOrderValue: 371 },
  { date: '2024-01-11', revenue: 59234, orders: 158, avgOrderValue: 375 },
  { date: '2024-01-12', revenue: 57234, orders: 154, avgOrderValue: 372 },
  { date: '2024-01-13', revenue: 52134, orders: 141, avgOrderValue: 370 },
  { date: '2024-01-14', revenue: 58765, orders: 157, avgOrderValue: 374 },
  { date: '2024-01-15', revenue: 61234, orders: 164, avgOrderValue: 373 },
];

// 지역별 매출 데이터
export const salesByRegion = [
  { region: '서울', sales: 3245000, growth: 12.5, customers: 8234 },
  { region: '경기', sales: 2834000, growth: 15.2, customers: 7123 },
  { region: '부산', sales: 1523000, growth: 8.3, customers: 3892 },
  { region: '대구', sales: 1234000, growth: -2.1, customers: 3124 },
  { region: '인천', sales: 1123000, growth: 5.7, customers: 2834 },
  { region: '광주', sales: 892000, growth: 10.2, customers: 2234 },
  { region: '대전', sales: 823000, growth: 7.8, customers: 2012 },
  { region: '울산', sales: 734000, growth: 4.2, customers: 1823 },
];

// 제품 카테고리별 판매 데이터
export const productCategories = [
  { category: '전자제품', value: 35, items: 2834, revenue: 4523000 },
  { category: '의류', value: 25, items: 5234, revenue: 3234000 },
  { category: '식품', value: 20, items: 8923, revenue: 2592000 },
  { category: '가구', value: 12, items: 923, revenue: 1555000 },
  { category: '기타', value: 8, items: 1234, revenue: 1036000 },
];

// 시간대별 트래픽 데이터
export const hourlyTraffic = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  visitors: Math.floor(100 + Math.random() * 400 + (i >= 9 && i <= 21 ? 200 : 0)),
  pageViews: Math.floor(300 + Math.random() * 800 + (i >= 9 && i <= 21 ? 400 : 0)),
  bounceRate: 30 + Math.random() * 25,
}));

// 고객 만족도 데이터
export const satisfactionData = [
  { rating: 5, count: 234, percentage: 45 },
  { rating: 4, count: 182, percentage: 35 },
  { rating: 3, count: 67, percentage: 13 },
  { rating: 2, count: 26, percentage: 5 },
  { rating: 1, count: 10, percentage: 2 },
];

// 월별 성장 데이터
export const monthlyGrowth = [
  { month: 'Jan', revenue: 145000, profit: 43500, customers: 1234 },
  { month: 'Feb', revenue: 156000, profit: 46800, customers: 1345 },
  { month: 'Mar', revenue: 172000, profit: 51600, customers: 1523 },
  { month: 'Apr', revenue: 168000, profit: 50400, customers: 1489 },
  { month: 'May', revenue: 185000, profit: 55500, customers: 1678 },
  { month: 'Jun', revenue: 192000, profit: 57600, customers: 1789 },
  { month: 'Jul', revenue: 205000, profit: 61500, customers: 1892 },
  { month: 'Aug', revenue: 198000, profit: 59400, customers: 1823 },
  { month: 'Sep', revenue: 212000, profit: 63600, customers: 1945 },
  { month: 'Oct', revenue: 225000, profit: 67500, customers: 2034 },
  { month: 'Nov', revenue: 238000, profit: 71400, customers: 2156 },
  { month: 'Dec', revenue: 252000, profit: 75600, customers: 2234 },
];

// 실시간 활동 데이터
export const realtimeActivities = [
  { id: 1, type: 'order', message: '새 주문 #12834', amount: '₩125,000', time: '2분 전', status: 'new' },
  { id: 2, type: 'user', message: '신규 회원 가입', user: '김민수', time: '5분 전', status: 'success' },
  { id: 3, type: 'payment', message: '결제 완료', amount: '₩89,000', time: '12분 전', status: 'success' },
  { id: 4, type: 'return', message: '반품 요청', order: '#12821', time: '15분 전', status: 'warning' },
  { id: 5, type: 'review', message: '새 리뷰 작성', rating: 5, time: '23분 전', status: 'info' },
  { id: 6, type: 'inventory', message: '재고 부족 알림', product: 'SKU-1234', time: '28분 전', status: 'error' },
  { id: 7, type: 'shipping', message: '배송 완료', order: '#12810', time: '35분 전', status: 'success' },
  { id: 8, type: 'support', message: '고객 문의 접수', priority: 'high', time: '42분 전', status: 'warning' },
];