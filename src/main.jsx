// Import necessary dependencies
import React from 'react'; // Import the React library
import { createRoot } from 'react-dom/client'; // Import the createRoot function from the react-dom/client library
import { Provider } from 'react-redux'; // Import the Provider component from the react-redux library
import { store } from './components/store'; // Import the store from the store file
import App from './App'; // Import the App component
import './index.css'; // Import the index.css file
import { NextUIProvider } from '@nextui-org/react'; // Import the NextUIProvider component from the @nextui-org/react library

// Define the root element
const root = createRoot(document.getElementById('root')); // Create the root element using the createRoot function and the 'root' element

// Render the root element with the Provider and NextUIProvider components
root.render(
  // JSX element with the Provider and NextUIProvider components
  <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Provider>
);