import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import store from './store'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
  }
  *:focus {
    outline: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
