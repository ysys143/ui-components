import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Foundation from './pages/Foundation';
import Components from './pages/Components';
import Patterns from './pages/Patterns';
import StatesAccessibility from './pages/StatesAccessibility';
import { LearningModeProvider } from './contexts/LearningModeContext';
import './App.css';

function App() {
  return (
    <LearningModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="foundation" element={<Foundation />} />
            <Route path="components" element={<Components />} />
            <Route path="patterns" element={<Patterns />} />
            <Route path="states-accessibility" element={<StatesAccessibility />} />
          </Route>
        </Routes>
      </Router>
    </LearningModeProvider>
  );
}

export default App;