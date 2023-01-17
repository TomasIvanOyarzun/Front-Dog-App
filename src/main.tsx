import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './toolkit/store'

import { BrowserRouter as ProviderRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      
        <ProviderRouter>
        <App />
        </ProviderRouter>
      
    </Provider>
  </React.StrictMode>,
)
