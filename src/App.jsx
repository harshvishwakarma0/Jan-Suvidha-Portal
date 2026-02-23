import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="*" element={<Home searchQuery={searchQuery} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
