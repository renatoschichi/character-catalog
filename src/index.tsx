import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient();

const theme = {
  colors: {
    primary: '#F7941D',
    secondary: '#0065BD',
    text: '#333',
    background: '#f5f5f5',
  },
};

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);