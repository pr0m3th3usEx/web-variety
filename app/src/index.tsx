import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@fontsource/rambla/400.css';
import '@fontsource/open-sans/700.css';

import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store/store';
import { theme } from './utils/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
