import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
import App from './App';
import Sidebar from './Sidebar'
import Curousel from './components/Curousel'
import Welcome from './components/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider>
    <Sidebar/>
    <App />
    <Welcome/>
    <Curousel/>
    </AppProvider>
  </React.StrictMode>
);