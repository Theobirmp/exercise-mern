import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {WorkoutsProvider} from './context/WorkoutContext'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WorkoutsProvider>
          <App />
      </WorkoutsProvider>
    </BrowserRouter>
  </React.StrictMode>
)

