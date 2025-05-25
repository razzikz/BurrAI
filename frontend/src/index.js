import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/css/main.css"
import "../src/css/profile.css"
import "../src/css/fonts.css"
import "../src/css/home.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)