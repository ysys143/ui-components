import React, { useState } from 'react';
import { Calendar, Download, TrendingUp, TrendingDown, Users, UserCheck, Eye, Activity, Clock } from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import StandardPageHeader from '../components/StandardPageHeader';
import D3LineChart from '../components/charts/D3LineChart';
import D3BarChart from '../components/charts/D3BarChart';
import D3DonutChart from '../components/charts/D3DonutChart';
import D3FunnelChart from '../components/charts/D3FunnelChart';
import ResponsiveChart from '../components/charts/ResponsiveChart';
import { conversionFunnelData, monthlyMetrics, userSegments, trafficSources, pagePerformance } from '../data/analyticsData';
import './Analytics.css';

const Analytics: React.FC = () => {
  // 월별 메트릭의 최신 데이터 계산
  const latestMetrics = monthlyMetrics[monthlyMetrics.length - 1];
  const previousMetrics = monthlyMetrics[monthlyMetrics.length - 2];
  
  const sessionsChange = ((latestMetrics.sessions - previousMetrics.sessions) / previousMetrics.sessions * 100).toFixed(1);
  const usersChange = ((latestMetrics.users - previousMetrics.users) / previousMetrics.users * 100).toFixed(1);
  const pageViewsChange = ((latestMetrics.pageViews - previousMetrics.pageViews) / previousMetrics.pageViews * 100).toFixed(1);
  const bounceRateChange = (latestMetrics.bounceRate - previousMetrics.bounceRate).toFixed(1);
  
  // 세션 데이터를 D3 차트용으로 변환
  const sessionData = monthlyMetrics.map(m => ({
    date: `2024-${String(monthlyMetrics.indexOf(m) + 1).padStart(2, '0')}-01`,
    revenue: m.sessions,
    orders: Math.round(m.sessions * 0.03) // 3% 전환율 가정
  }));

  return (
    <div className="analytics">
      <ComponentTooltip
        component="Standardized Page Header"
        description="표준화된 페이지 헤더로 일관된 레이아웃을 제공합니다."
      >
        <StandardPageHeader
          title="분석"
          description="웹사이트 트래픽과 사용자 행동을 분석하세요"
          controls={
            <ComponentTooltip
              component="Date Range Picker"
              description="날짜 범위를 선택하는 컴포넌트입니다."
            >
              <button className="date-picker">
                <Calendar size={20} />
                <span>2024년 1월 - 6월</span>
              </button>
            </ComponentTooltip>
          }
          actions={
            <ComponentTooltip
              component="Export Button"
              description="데이터를 내보내기 위한 버튼입니다."
            >
              <button className="btn-secondary">
                <Download size={20} />
                <span>내보내기</span>
              </button>
            </ComponentTooltip>
          }
        />
      </ComponentTooltip>

      <ComponentTooltip
        component="Summary Cards"
        description="주요 지표를 요약한 카드 그룹입니다."
      >
        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-header">
              <div className="summary-icon">
                <Users size={16} />
              </div>
              <div className={`summary-change-indicator ${Number(sessionsChange) >= 0 ? 'positive' : 'negative'}`}>
                {Number(sessionsChange) >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Number(sessionsChange) >= 0 ? '+' : ''}{sessionsChange}%
              </div>
            </div>
            <div>
              <h3 className="summary-title">세션 수</h3>
              <p className="summary-value">{latestMetrics.sessions.toLocaleString()}</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-header">
              <div className="summary-icon">
                <UserCheck size={16} />
              </div>
              <div className={`summary-change-indicator ${Number(usersChange) >= 0 ? 'positive' : 'negative'}`}>
                {Number(usersChange) >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Number(usersChange) >= 0 ? '+' : ''}{usersChange}%
              </div>
            </div>
            <div>
              <h3 className="summary-title">고유 사용자</h3>
              <p className="summary-value">{latestMetrics.users.toLocaleString()}</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-header">
              <div className="summary-icon">
                <Eye size={16} />
              </div>
              <div className={`summary-change-indicator ${Number(pageViewsChange) >= 0 ? 'positive' : 'negative'}`}>
                {Number(pageViewsChange) >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Number(pageViewsChange) >= 0 ? '+' : ''}{pageViewsChange}%
              </div>
            </div>
            <div>
              <h3 className="summary-title">페이지뷰</h3>
              <p className="summary-value">{latestMetrics.pageViews.toLocaleString()}</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-header">
              <div className="summary-icon">
                <Activity size={16} />
              </div>
              <div className={`summary-change-indicator ${Number(bounceRateChange) <= 0 ? 'positive' : 'negative'}`}>
                {Number(bounceRateChange) <= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Number(bounceRateChange) > 0 ? '+' : ''}{bounceRateChange}%p
              </div>
            </div>
            <div>
              <h3 className="summary-title">이탈률</h3>
              <p className="summary-value">{latestMetrics.bounceRate}%</p>
            </div>
          </div>
        </div>
      </ComponentTooltip>

      <div className="analytics-grid">
        <ComponentTooltip
          component="D3 Session Trend Chart"
          description="D3.js로 구현한 세션 트렌드 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">월별 세션 추이</h3>
            <ResponsiveChart>
              {(width, height) => <D3LineChart data={sessionData} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="D3 Funnel Chart"
          description="D3.js로 구현한 전환 퍼널 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">전환 퍼널 분석</h3>
            <ResponsiveChart>
              {(width, height) => <D3FunnelChart data={conversionFunnelData} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="D3 User Segments"
          description="D3.js로 구현한 사용자 세그먼트 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">사용자 세그먼트 분석</h3>
            <ResponsiveChart>
              {(width, height) => <D3DonutChart data={userSegments as any} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Traffic Sources Analysis"
          description="트래픽 소스별 성과를 분석합니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">트래픽 소스</h3>
            <div className="progress-list">
              {trafficSources.map((source, index) => (
                <div key={source.source} className="progress-item">
                  <div className="progress-header">
                    <span>{source.source}</span>
                    <span>{source.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${source.value}%`, 
                        backgroundColor: ['#4f46e5', '#059669', '#7c3aed', '#d97706', '#dc2626'][index]
                      }}
                    ></div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '0.25rem' }}>
                    {source.sessions.toLocaleString()} 세션 | {source.conversions.toLocaleString()} 전환
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ComponentTooltip>
        
        <ComponentTooltip
          component="Page Performance Table"
          description="페이지별 성과 지표를 표시합니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">페이지별 성과</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e4e4e7' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#71717a' }}>페이지</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', color: '#71717a' }}>조회수</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', color: '#71717a' }}>평균 체류시간</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', color: '#71717a' }}>이탈률</th>
                  </tr>
                </thead>
                <tbody>
                  {pagePerformance.map(page => (
                    <tr key={page.page} style={{ borderBottom: '1px solid #e4e4e7' }}>
                      <td style={{ padding: '0.75rem', color: '#18181b' }}>{page.page}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right', color: '#18181b' }}>
                        {page.views.toLocaleString()}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'right', color: '#18181b' }}>
                        {Math.floor(page.avgTime / 60)}:{String(page.avgTime % 60).padStart(2, '0')}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                        <span style={{ 
                          color: page.exitRate > 40 ? '#dc2626' : page.exitRate > 25 ? '#d97706' : '#059669'
                        }}>
                          {page.exitRate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ComponentTooltip>
      </div>
    </div>
  );
};

export default Analytics;