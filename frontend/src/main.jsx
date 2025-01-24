import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import { AdminProvider } from './context/AdminContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <AdminProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AdminProvider>
    </UserContext>
  </StrictMode>,
)
