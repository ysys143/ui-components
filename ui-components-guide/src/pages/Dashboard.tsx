import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, Users, ShoppingCart, DollarSign, TrendingUp, Package, CreditCard, UserCheck, RefreshCw } from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import StandardPageHeader from '../components/StandardPageHeader';
import D3LineChart from '../components/charts/D3LineChart';
import D3BarChart from '../components/charts/D3BarChart';
import D3DonutChart from '../components/charts/D3DonutChart';
import D3HeatMap from '../components/charts/D3HeatMap';
import ResponsiveChart from '../components/charts/ResponsiveChart';
import { revenueData, salesByRegion, productCategories, hourlyTraffic, realtimeActivities } from '../data/dashboardData';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  // 실시간 메트릭 계산
  const totalRevenue = revenueData.reduce((sum, d) => sum + d.revenue, 0);
  const totalOrders = revenueData.reduce((sum, d) => sum + d.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  const totalCustomers = salesByRegion.reduce((sum, d) => sum + d.customers, 0);
  
  const metrics = [
    { 
      title: '총 매출', 
      value: `₩${(totalRevenue / 1000000).toFixed(1)}M`, 
      change: '+15.3%', 
      trend: 'up', 
      icon: DollarSign,
      color: '#4f46e5'
    },
    { 
      title: '주문 수', 
      value: totalOrders.toLocaleString(), 
      change: '+8.7%', 
      trend: 'up', 
      icon: ShoppingCart,
      color: '#059669'
    },
    { 
      title: '활성 고객', 
      value: totalCustomers.toLocaleString(), 
      change: '+12.4%', 
      trend: 'up', 
      icon: Users,
      color: '#7c3aed'
    },
    { 
      title: '평균 주문액', 
      value: `₩${Math.round(avgOrderValue).toLocaleString()}`, 
      change: '-2.1%', 
      trend: 'down', 
      icon: CreditCard,
      color: '#d97706'
    },
  ];

  const chartData = [
    { name: '1월', value: 400, sales: 240 },
    { name: '2월', value: 300, sales: 139 },
    { name: '3월', value: 200, sales: 980 },
    { name: '4월', value: 278, sales: 390 },
    { name: '5월', value: 189, sales: 480 },
    { name: '6월', value: 239, sales: 380 },
  ];

  const pieData = [
    { name: '데스크톱', value: 45, color: '#3b82f6' },
    { name: '모바일', value: 35, color: '#10b981' },
    { name: '태블릿', value: 20, color: '#f59e0b' },
  ];

  return (
    <div className="dashboard">
      <ComponentTooltip
        component="Standardized Page Header"
        description="표준화된 페이지 헤더로 일관된 레이아웃을 제공합니다."
      >
        <StandardPageHeader
          title="대시보드"
          description="비즈니스 성과를 한눈에 확인하세요"
        />
      </ComponentTooltip>

      <ComponentTooltip
        component="Metrics Grid"
        description="주요 지표를 카드 형태로 표시하는 그리드 레이아웃입니다."
      >
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <ComponentTooltip
              key={metric.title}
              component="Metric Card"
              description="단일 지표를 표시하는 카드 컴포넌트입니다. 아이콘, 수치, 변화율을 포함합니다."
            >
              <div className="metric-card">
                <div className="metric-header">
                  <div 
                    className="metric-icon"
                  >
                    <metric.icon size={20} style={{ color: '#71717a' }} />
                  </div>
                  <ComponentTooltip
                    component="Trend Badge"
                    description="변화율과 방향을 나타내는 배지입니다."
                  >
                    <span className={`metric-change ${metric.trend}`}>
                      {metric.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                      {metric.change}
                    </span>
                  </ComponentTooltip>
                </div>
                <div className="metric-body">
                  <h3 className="metric-title">{metric.title}</h3>
                  <p className="metric-value">{metric.value}</p>
                </div>
              </div>
            </ComponentTooltip>
          ))}
        </div>
      </ComponentTooltip>

      <div className="charts-grid">
        <ComponentTooltip
          component="D3 Line Chart"
          description="D3.js로 구현한 인터랙티브 라인 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">일별 매출 추이</h3>
            <ResponsiveChart>
              {(width, height) => <D3LineChart data={revenueData} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="D3 Bar Chart"
          description="D3.js로 구현한 지역별 매출 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">지역별 매출 현황</h3>
            <ResponsiveChart>
              {(width, height) => <D3BarChart data={salesByRegion} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="D3 Donut Chart"
          description="D3.js로 구현한 도넛 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">카테고리별 매출 비중</h3>
            <ResponsiveChart>
              {(width, height) => <D3DonutChart data={productCategories} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="D3 Heat Map"
          description="시간대별 트래픽을 표시하는 히트맵입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">시간대별 트래픽 분석</h3>
            <ResponsiveChart>
              {(width, height) => <D3HeatMap data={hourlyTraffic} width={width} height={height} />}
            </ResponsiveChart>
          </div>
        </ComponentTooltip>
      </div>

      <ComponentTooltip
        component="Recent Activity Card"
        description="최근 활동을 표시하는 리스트 컴포넌트입니다."
      >
        <div className="activity-card">
          <h3 className="activity-title">최근 활동</h3>
          <ComponentTooltip
            component="Activity List"
            description="타임라인 형태의 활동 목록입니다."
          >
            <ul className="activity-list">
              {realtimeActivities.map(activity => (
                <li key={activity.id} className="activity-item">
                  <div className={`activity-dot ${activity.status}`} style={{
                    backgroundColor: activity.status === 'success' ? '#059669' : 
                                   activity.status === 'error' ? '#dc2626' : 
                                   activity.status === 'warning' ? '#d97706' : '#71717a'
                  }}></div>
                  <div className="activity-content">
                    <p className="activity-text">
                      {activity.message}
                      {activity.amount && <span style={{ fontWeight: 500 }}> {activity.amount}</span>}
                      {activity.user && <span style={{ fontWeight: 500 }}> - {activity.user}</span>}
                      {activity.order && <span style={{ color: '#71717a' }}> ({activity.order})</span>}
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
              </li>
              ))}
            </ul>
          </ComponentTooltip>
        </div>
      </ComponentTooltip>
    </div>
  );
};

export default Dashboard;