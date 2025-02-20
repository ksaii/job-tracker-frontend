import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline  } from '@mui/material'
import './index.css'
import App from './App.jsx'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>     {/* This applies Themes from theme.js */}
  <StrictMode>    {/* This Helps with development */}
    <CssBaseline /> {/* This Resets default styles */}
    <App />
  </StrictMode>
  </ThemeProvider>
)
