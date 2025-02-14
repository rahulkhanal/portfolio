import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { Center, Image, MantineProvider, Stack, Title } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Valentine from './Bipashana.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={{
      fontFamily: "Anonymous Pro, monospace"
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/i-love-you-bipashana' element={<Valentine />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
