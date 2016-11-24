// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'
import Storage from './utils/storage'
import emptyDoc from './consts/emptyDocument'
import createSaveDocumentMiddleware from './middleware/saveDocument'

import '../css/main.css'


const docStorage = new Storage()

const store = createStore(reducers, { doc: docStorage.loadDoc() || emptyDoc })

store.subscribe(() => {
    docStorage.saveDoc(store.getState().doc)
})

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
