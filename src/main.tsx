import { action, makeAutoObservable, observable } from 'mobx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CountStore } from './CountStore';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App message="Yow de mannen" />
  </React.StrictMode>
)
