import { combineReducers } from 'redux'
import counter from './counter'
import doc from './document'

export default combineReducers({ counter, doc})
