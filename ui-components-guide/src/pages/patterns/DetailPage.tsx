import React, { useState } from 'react';
import { 
  Search, Filter, MoreVertical, Edit, Trash2, Star, 
  Mail, Phone, MapPin, Calendar, Tag, ArrowLeft
} from 'lucide-react';
import './DetailPage.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar: string;
  joinDate: string;
  lastActive: string;
  phone: string;
  location: string;
  department: string;
  tags: string[];
}

const DetailPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState('');

  const users: User[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'Product Manager',
      status: 'active',
      avatar: 'SJ',
      joinDate: '2022-03-15',
      lastActive: '2 hours ago',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      department: 'Product',
      tags: ['leadership', 'strategy', 'agile']
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      role: 'Senior Developer',
      status: 'active',
      avatar: 'MC',
      joinDate: '2021-11-08',
      lastActive: '30 minutes ago',
      phone: '+1 (555) 234-5678',
      location: 'Seattle, WA',
      department: 'Engineering',
      tags: ['react', 'nodejs', 'typescript']
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'UI/UX Designer',
      status: 'inactive',
      avatar: 'ED',
      joinDate: '2023-01-20',
      lastActive: '3 days ago',
      phone: '+1 (555) 345-6789',
      location: 'Austin, TX',
      department: 'Design',
      tags: ['figma', 'prototyping', 'user-research']
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      role: 'Marketing Lead',
      status: 'pending',
      avatar: 'JW',
      joinDate: '2023-06-01',
      lastActive: '1 week ago',
      phone: '+1 (555) 456-7890',
      location: 'New York, NY',
      department: 'Marketing',
      tags: ['social-media', 'analytics', 'campaigns']
    }
  ];

  const currentUser = users.find(u => u.id === selectedUser) || users[0];
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="detail-page">
      {/* Master List */}
      <div className="master-panel">
        <div className="master-header">
          <h2 className="master-title">Team Members</h2>
          <div className="master-actions">
            <div className="search-input">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search users..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn-icon">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="user-list">
          {filteredUsers.map(user => (
            <div 
              key={user.id}
              className={`user-item ${selectedUser === user.id ? 'selected' : ''}`}
              onClick={() => setSelectedUser(user.id)}
            >
              <div className="user-avatar">{user.avatar}</div>
              <div className="user-info">
                <h4 className="user-name">{user.name}</h4>
                <p className="user-role">{user.role}</p>
              </div>
              <span className={`status-badge ${user.status}`}>
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="detail-panel">
        <div className="detail-header">
          <button className="btn-icon mobile-back">
            <ArrowLeft size={20} />
          </button>
          <h2 className="detail-title">User Details</h2>
          <div className="detail-actions">
            <button className="btn btn-primary">
              <Edit size={16} />
              Edit
            </button>
            <button className="btn-icon">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        <div className="detail-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-avatar">{currentUser.avatar}</div>
            <div className="profile-info">
              <h1 className="profile-name">{currentUser.name}</h1>
              <p className="profile-role">{currentUser.role}</p>
              <div className="profile-tags">
                {currentUser.tags.map(tag => (
                  <span key={tag} className="tag">
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <div className="info-items">
                <div className="info-item">
                  <Mail size={16} />
                  <span>{currentUser.email}</span>
                </div>
                <div className="info-item">
                  <Phone size={16} />
                  <span>{currentUser.phone}</span>
                </div>
                <div className="info-item">
                  <MapPin size={16} />
                  <span>{currentUser.location}</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">Work Details</h3>
              <div className="info-items">
                <div className="info-item">
                  <Calendar size={16} />
                  <span>Joined {new Date(currentUser.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Department:</span>
                  <span>{currentUser.department}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Last active:</span>
                  <span>{currentUser.lastActive}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="activity-section">
            <h3 className="section-title">Recent Activity</h3>
            <div className="activity-timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-text">Updated profile information</p>
                  <span className="timeline-date">2 hours ago</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-text">Completed project milestone</p>
                  <span className="timeline-date">Yesterday</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-text">Joined team meeting</p>
                  <span className="timeline-date">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;