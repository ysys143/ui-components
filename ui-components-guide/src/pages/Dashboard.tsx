import React from 'react';
import { ArrowUp, ArrowDown, Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import StandardPageHeader from '../components/StandardPageHeader';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const metrics = [
    { 
      title: '총 사용자', 
      value: '12,345', 
      change: '+12%', 
      trend: 'up', 
      icon: Users,
      color: '#3b82f6'
    },
    { 
      title: '매출', 
      value: '₩45.2M', 
      change: '+8%', 
      trend: 'up', 
      icon: DollarSign,
      color: '#10b981'
    },
    { 
      title: '주문 수', 
      value: '1,234', 
      change: '-5%', 
      trend: 'down', 
      icon: ShoppingCart,
      color: '#f59e0b'
    },
    { 
      title: '전환율', 
      value: '3.45%', 
      change: '+2%', 
      trend: 'up', 
      icon: TrendingUp,
      color: '#8b5cf6'
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
                    style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
                  >
                    <metric.icon size={24} />
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
          component="Line Chart Card"
          description="시계열 데이터를 표시하는 라인 차트 카드입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">월별 트렌드</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Bar Chart Card"
          description="카테고리별 데이터를 비교하는 막대 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">카테고리별 판매</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="sales" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Pie Chart Card"
          description="전체 대비 비율을 표시하는 파이 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">디바이스별 사용률</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ComponentTooltip>

        <ComponentTooltip
          component="Area Chart Card"
          description="누적 데이터를 표시하는 영역 차트입니다."
        >
          <div className="chart-card">
            <h3 className="chart-title">누적 성장률</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#f59e0b" fill="#fef3c7" />
              </AreaChart>
            </ResponsiveContainer>
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
              <li className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <p className="activity-text">새로운 사용자 가입: user@example.com</p>
                  <span className="activity-time">5분 전</span>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <p className="activity-text">주문 #1234 완료</p>
                  <span className="activity-time">15분 전</span>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <p className="activity-text">시스템 업데이트 완료</p>
                  <span className="activity-time">1시간 전</span>
                </div>
              </li>
            </ul>
          </ComponentTooltip>
        </div>
      </ComponentTooltip>
    </div>
  );
};

export default Dashboard;