import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers'

import Counter from './components/Counter'
import Document from './components/Document'
import Form from './components/Form'

const store = createStore(reducers)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
      <div>
    <Counter
      value={store.getState().counter}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    /> <Document /> <Form />
    </div>,
    rootEl
  )
}

render()
store.subscribe(render)
