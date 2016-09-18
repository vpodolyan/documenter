import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducers from './reducers'

import Counter from './components/Counter'
import App from './components/App'

const store = createStore(reducers)

const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
      <div>
        <Counter
          value={store.getState().counter}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />, <App store={store} />
    </div>,
    rootEl
  )
}

render()
store.subscribe(render)
