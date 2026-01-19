import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import LoadingScreen from './components/LoadingScreen';
import OfflineIndicator from './components/OfflineIndicator';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load to show the heartbeat animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen isLoading={loading} />
      <OfflineIndicator />
      {!loading && <AppRouter />}
    </BrowserRouter>
  );
}

export default App;
