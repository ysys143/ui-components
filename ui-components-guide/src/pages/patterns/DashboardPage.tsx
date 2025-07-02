import React from 'react';
import { 
  Home, Users, BarChart3, Settings, Bell, Search, 
  TrendingUp, TrendingDown, DollarSign, ShoppingCart,
  Activity, Package, Menu, X
} from 'lucide-react';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const stats = [
    { title: 'Total Revenue', value: '$54,239', change: '+12%', trend: 'up', icon: DollarSign },
    { title: 'Active Users', value: '2,543', change: '+18%', trend: 'up', icon: Users },
    { title: 'Total Orders', value: '1,893', change: '-5%', trend: 'down', icon: ShoppingCart },
    { title: 'Conversion Rate', value: '3.4%', change: '+2%', trend: 'up', icon: Activity }
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Placed an order', amount: '$128.00', time: '2 min ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', amount: null, time: '5 min ago' },
    { id: 3, user: 'Mike Johnson', action: 'Completed payment', amount: '$256.00', time: '12 min ago' },
    { id: 4, user: 'Sarah Williams', action: 'Left a review', amount: null, time: '18 min ago' },
    { id: 5, user: 'Tom Brown', action: 'Cancelled order', amount: '-$89.00', time: '25 min ago' }
  ];

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Dashboard</h2>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <Home size={20} />
            <span>Overview</span>
          </a>
          <a href="#" className="nav-item">
            <Users size={20} />
            <span>Customers</span>
          </a>
          <a href="#" className="nav-item">
            <Package size={20} />
            <span>Products</span>
          </a>
          <a href="#" className="nav-item">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="page-title">Dashboard Overview</h1>
            <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="header-right">
            <div className="search-box">
              <Search size={20} />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="icon-button">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-avatar">
              <img src="https://via.placeholder.com/40" alt="User" />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-value">{stat.value}</p>
                <div className={`stat-change ${stat.trend}`}>
                  {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Chart Section */}
          <div className="chart-section">
            <div className="section-header">
              <h2 className="section-title">Revenue Overview</h2>
              <select className="period-select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="chart-placeholder">
              <p>Chart visualization would go here</p>
            </div>
          </div>

          {/* Activity Section */}
          <div className="activity-section">
            <div className="section-header">
              <h2 className="section-title">Recent Activity</h2>
              <a href="#" className="link">View all</a>
            </div>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-avatar">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                  {activity.amount && (
                    <span className={`activity-amount ${activity.amount.startsWith('-') ? 'negative' : 'positive'}`}>
                      {activity.amount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;