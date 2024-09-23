import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './components/store';
import App from './App';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';



const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Provider>
);
