import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// clear console every HMR reload
if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
