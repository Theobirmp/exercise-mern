import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {WorkoutsProvider} from './context/WorkoutContext'
import { AuthenticationProvider } from './context/AuthContext'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthenticationProvider>
      <WorkoutsProvider>
          <App />
      </WorkoutsProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
)

