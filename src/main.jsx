import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import scrollToTop from '../src/components/scrolltotop/scrollToTop.jsx'
import 'animate.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <scrollToTop />
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
