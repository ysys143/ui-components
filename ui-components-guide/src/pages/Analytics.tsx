import React from 'react';
import { Calendar, Download } from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './Analytics.css';

const Analytics: React.FC = () => {
  const trafficData = [
    { date: '01일', desktop: 4000, mobile: 2400, tablet: 1000 },
    { date: '02일', desktop: 3000, mobile: 1398, tablet: 800 },
    { date: '03일', desktop: 2000, mobile: 9800, tablet: 1200 },
    { date: '04일', desktop: 2780, mobile: 3908, tablet: 900 },
    { date: '05일', desktop: 1890, mobile: 4800, tablet: 1100 },
    { date: '06일', desktop: 2390, mobile: 3800, tablet: 1000 },
    { date: '07일', desktop: 3490, mobile: 4300, tablet: 1300 },
  ];

  const conversionData = [
    { step: '방문', value: 10000, fill: '#3b82f6' },
    { step: '상품 조회', value: 7500, fill: '#60a5fa' },
    { step: '장바구니', value: 5000, fill: '#93bbfc' },
    { step: '결제 시작', value: 3000, fill: '#c3ddfd' },
    { step: '구매 완료', value: 1500, fill: '#dbeafe' },
  ];

  return (
    <div className="analytics">
      <div className="page-header">
        <h1 className="page-title">분석</h1>
        <p className="page-description">웹사이트 트래픽과 사용자 행동을 분석하세요</p>
      </div>

      <ComponentTooltip
        component="Analytics Header Controls"
        description="분석 페이지의 날짜 필터와 내보내기 컨트롤입니다."
      >
        <div className="analytics-header">
          <div className="header-controls">
            <ComponentTooltip
              component="Date Range Picker"
              description="날짜 범위를 선택하는 컴포넌트입니다."
            >
              <button className="date-picker">
                <Calendar size={20} />
                <span>2024년 3월 1일 - 7일</span>
              </button>
            </ComponentTooltip>
            <ComponentTooltip
              component="Export Button"
              description="데이터를 내보내기 위한 버튼입니다."
            >
              <button className="btn-secondary">
                <Download size={20} />
                <span>내보내기</span>
              </button>
            </ComponentTooltip>
          </div>
        </div>
      </ComponentTooltip>

      <ComponentTooltip
        component="Summary Cards"
        description="주요 지표를 요약한 카드 그룹입니다."
      >
        <div className="summary-cards">
          <div className="summary-card">
            <h3 className="summary-title">총 방문자</h3>
            <p className="summary-value">45,678</p>
            <p className="summary-change positive">+12.5%</p>
          </div>
          <div className="summary-card">
            <h3 className="summary-title">페이지뷰</h3>
            <p className="summary-value">234,567</p>
            <p className="summary-change positive">+8.3%</p>
          </div>
          <div className="summary-card">
            <h3 className="summary-title">평균 체류 시간</h3>
            <p className="summary-value">3:45</p>
            <p className="summary-change negative">-2.1%</p>
          </div>
          <div className="summary-card">
            <h3 className="summary-title">이탈률</h3>
            <p className="summary-value">42.3%</p>
            <p className="summary-change positive">-5.2%</p>
          </div>
        </div>
      </ComponentTooltip>

      <div className="analytics-grid">
        <ComponentTooltip
          component="Multi-Line Chart"
          description="여러 데이터 시리즈를 비교하는 다중 라인 차트입니다."
        >
          <div className="chart-card large">
            <h3 className="chart-title">디바이스별 트래픽</h3>
            <ComponentTooltip
              component="Chart Legend"
              description="차트의 범례입니다. 각 시리즈를 구분합니다."
            >
              <div className="chart-legend">
                <span className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#3b82f6' }}></span>
                  데스크톱
                </span>
                <span className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#10b981' }}></span>
                  모바일
                </span>
                <span className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#f59e0b' }}></span>
                  태블릿
                </span>
              </div>
            </ComponentTooltip>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="desktop" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="mobile" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="tablet" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Funnel Chart"
          description="전환 깔때기를 시각화한 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">전환 깔때기</h3>
            <div className="funnel-chart">
              {conversionData.map((item, index) => (
                <ComponentTooltip
                  key={item.step}
                  component="Funnel Step"
                  description="깔때기의 각 단계를 나타냅니다."
                >
                  <div className="funnel-step">
                    <div 
                      className="funnel-bar"
                      style={{
                        width: `${(item.value / conversionData[0].value) * 100}%`,
                        backgroundColor: item.fill
                      }}
                    >
                      <span className="funnel-label">{item.step}</span>
                      <span className="funnel-value">{item.value.toLocaleString()}</span>
                    </div>
                    {index < conversionData.length - 1 && (
                      <span className="funnel-conversion">
                        {Math.round((conversionData[index + 1].value / item.value) * 100)}%
                      </span>
                    )}
                  </div>
                </ComponentTooltip>
              ))}
            </div>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Stacked Bar Chart"
          description="누적 막대 차트로 구성 비율을 표시합니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">페이지별 조회수</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { page: '홈', views: 12000 },
                { page: '상품', views: 8000 },
                { page: '블로그', views: 6000 },
                { page: '회사소개', views: 3000 },
                { page: '문의', views: 2000 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="page" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="views" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Progress List"
          description="진행률을 표시하는 리스트 컴포넌트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">트래픽 소스</h3>
            <div className="progress-list">
              <div className="progress-item">
                <div className="progress-header">
                  <span>직접 방문</span>
                  <span>45%</span>
                </div>
                <ComponentTooltip
                  component="Progress Bar"
                  description="진행률을 시각적으로 표현하는 바입니다."
                >
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '45%', backgroundColor: '#3b82f6' }}></div>
                  </div>
                </ComponentTooltip>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>검색 엔진</span>
                  <span>30%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '30%', backgroundColor: '#10b981' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>소셜 미디어</span>
                  <span>15%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '15%', backgroundColor: '#f59e0b' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>추천 사이트</span>
                  <span>10%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '10%', backgroundColor: '#8b5cf6' }}></div>
                </div>
              </div>
            </div>
          </div>
        </ComponentTooltip>
      </div>
    </div>
  );
};

export default Analytics;