import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import './index.css'
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// aqui estamos cambiando los estilos al tema
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: 'rgba(136,10,218,0.49)',
    },
    warning: {
      main: '#ed6c02',
    },
    success: {
      main: '#2e7d32',
    },
  },
});

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //  esto es el modo estricto esto me renderiza a pagina una veces adicional a los demas renderizados <React.StrictMode>
  <>
  <React.StrictMode>
        {/* para que a toda mi aplicacion le coloque la letra roboto con la que rabaja material ui <CssBaseline/> */}     
        <ThemeProvider theme={theme}>
           <BrowserRouter>  {/*encierro todo el proyecto dentro dentro de esta etiqueta para que me funcione el router */}
              <App />
              <CssBaseline/>  {/*esto es para que tome los estilos y reseteos de material ui si lo quiero en un solo componente lo coloco en ese componente*/}
          </BrowserRouter>
        </ThemeProvider>
  </React.StrictMode>
  </>
)
