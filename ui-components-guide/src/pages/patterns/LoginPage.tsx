import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, Github, Chrome } from 'lucide-react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="login-page">
      {/* Left Side - Branding */}
      <div className="login-branding">
        <div className="branding-content">
          <div className="brand-logo">
            <LogIn size={48} />
          </div>
          <h1 className="brand-title">Design System</h1>
          <p className="brand-subtitle">Build beautiful, consistent user interfaces with our comprehensive component library</p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>100+ Components</h3>
                <p>Pre-built UI components ready to use</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Fully Customizable</h3>
                <p>Adapt to your brand with ease</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Accessibility First</h3>
                <p>WCAG compliant components</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-form-section">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Sign in to your account</h2>
            <p>Welcome back! Please enter your details.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  className="form-input with-icon"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-input with-icon"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkbox-mark"></span>
                <span>Remember for 30 days</span>
              </label>
              <a href="#" className="link link-primary">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-full btn-lg">
              <LogIn size={20} />
              Sign in
            </button>

            <div className="social-login">
              <div className="divider-with-text">
                <span>Or continue with</span>
              </div>
              
              <div className="social-buttons">
                <button type="button" className="btn btn-outline social-btn">
                  <Chrome size={20} />
                  <span>Google</span>
                </button>
                <button type="button" className="btn btn-outline social-btn">
                  <Github size={20} />
                  <span>GitHub</span>
                </button>
              </div>
            </div>

            <p className="login-footer">
              Don't have an account? <a href="#" className="link link-primary">Sign up for free</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;