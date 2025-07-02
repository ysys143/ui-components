import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Edit, Trash2, UserPlus } from 'lucide-react';
import ComponentTooltip from '../components/ui/ComponentTooltip';
import './UserManagement.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const users: User[] = [
    { id: 1, name: '김세미', email: 'kim@example.com', role: '관리자', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: '이영희', email: 'lee@example.com', role: '사용자', status: 'active', joinDate: '2024-02-20' },
    { id: 3, name: '박민수', email: 'park@example.com', role: '사용자', status: 'inactive', joinDate: '2024-01-10' },
    { id: 4, name: '정다은', email: 'jung@example.com', role: '편집자', status: 'active', joinDate: '2024-03-05' },
    { id: 5, name: '최현우', email: 'choi@example.com', role: '사용자', status: 'active', joinDate: '2024-02-28' },
  ];

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedUsers(users.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="user-management">
      <ComponentTooltip
        component="Page Header with Actions"
        description="페이지 제목과 액션 버튼을 포함한 헤더입니다."
      >
        <div className="page-header-with-actions">
          <div>
            <h1 className="page-title">사용자 관리</h1>
            <p className="page-description">시스템 사용자를 관리하고 권한을 설정하세요</p>
          </div>
          <ComponentTooltip
            component="Primary Button"
            description="주요 액션을 위한 기본 버튼입니다."
          >
            <button className="btn-primary">
              <UserPlus size={20} />
              <span>사용자 추가</span>
            </button>
          </ComponentTooltip>
        </div>
      </ComponentTooltip>

      <ComponentTooltip
        component="Table Toolbar"
        description="테이블 위의 검색 및 필터 도구 모음입니다."
      >
        <div className="table-toolbar">
          <ComponentTooltip
            component="Search Input with Icon"
            description="아이콘이 포함된 검색 입력 필드입니다."
          >
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="이름, 이메일로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </ComponentTooltip>
          
          <div className="toolbar-actions">
            <ComponentTooltip
              component="Filter Button"
              description="필터 옵션을 표시하는 버튼입니다."
            >
              <button className="btn-secondary">
                <Filter size={20} />
                <span>필터</span>
              </button>
            </ComponentTooltip>
          </div>
        </div>
      </ComponentTooltip>

      <ComponentTooltip
        component="Data Table"
        description="데이터를 행과 열로 구성한 테이블 컴포넌트입니다."
      >
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <ComponentTooltip
                    component="Checkbox"
                    description="전체 선택을 위한 체크박스입니다."
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedUsers.length === users.length}
                    />
                  </ComponentTooltip>
                </th>
                <th>이름</th>
                <th>이메일</th>
                <th>역할</th>
                <th>상태</th>
                <th>가입일</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className={selectedUsers.includes(user.id) ? 'selected' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </td>
                  <td>
                    <ComponentTooltip
                      component="User Cell"
                      description="사용자 정보를 표시하는 테이블 셀입니다."
                    >
                      <div className="user-cell">
                        <div className="user-avatar">
                          {user.name.charAt(0)}
                        </div>
                        <span>{user.name}</span>
                      </div>
                    </ComponentTooltip>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <ComponentTooltip
                      component="Role Badge"
                      description="사용자 역할을 나타내는 배지입니다."
                    >
                      <span className={`role-badge role-${user.role}`}>
                        {user.role}
                      </span>
                    </ComponentTooltip>
                  </td>
                  <td>
                    <ComponentTooltip
                      component="Status Badge"
                      description="활성/비활성 상태를 나타내는 배지입니다."
                    >
                      <span className={`status-badge status-${user.status}`}>
                        {user.status === 'active' ? '활성' : '비활성'}
                      </span>
                    </ComponentTooltip>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>
                    <ComponentTooltip
                      component="Action Menu"
                      description="행별 작업을 위한 드롭다운 메뉴 트리거입니다."
                    >
                      <button className="action-menu-trigger">
                        <MoreVertical size={16} />
                      </button>
                    </ComponentTooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentTooltip>

      <ComponentTooltip
        component="Pagination"
        description="페이지 나누기 컴포넌트입니다."
      >
        <div className="pagination">
          <button className="pagination-btn" disabled>이전</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">다음</button>
        </div>
      </ComponentTooltip>
    </div>
  );
};

export default UserManagement;