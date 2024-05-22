import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from "react"
import App from './App.jsx'
import './App.css'
import { PropagateLoader } from 'react-spinners'
import { Loader } from '@react-three/drei'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Loader />
    <App />

  </React.StrictMode>,
)
