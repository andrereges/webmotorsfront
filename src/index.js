import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './App';

Sentry.init({
  dsn: 'https://1234da4d055e491da25c5e138166eff9@o483879.ingest.sentry.io/5540831',
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// const transaction = Sentry.startTransaction({
//   op: 'test',
//   name: 'My First Test Transaction',
// });

// setTimeout(() => {
//   try {
//     console.log('test Exception');
//   } catch (e) {
//     Sentry.captureException(e);
//   } finally {
//     transaction.finish();
//   }
// }, 99);

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body, html, #root{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
  body, html, #root, button, input, textarea, select{
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    font-smooth: antialiased;
    border: 0;
    outline: 0;
    background: none;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0px;
    padding: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
