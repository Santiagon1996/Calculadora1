import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CssBaseline} from '@mui/material' 
//import { ThemeProvider } from '@mui/material/styles';
import App from './App.jsx'
import './index.css'


// Configuración del tema
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#ff4081',
//     },
//   },
//   typography: {
//     fontFamily: 'Arial, sans-serif',
//   },
// });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
)
