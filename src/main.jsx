import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { Center, Image, MantineProvider, Stack, Title } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={{
      fontFamily: "Anonymous Pro, monospace"
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/message-for-Sushhhbaby"
            element={
              <Stack h={'100vh'} align='center' justify='center'>
                <Title align='center'>
                  Sushhhbaby lai mero kiss hai 😘
                </Title>
                <Image w="300px" src="https://media.tenor.com/iFhAw2oC0XIAAAAj/slanted-kiss.gif" />
              </Stack>
            }
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
