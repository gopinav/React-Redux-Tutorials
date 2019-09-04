import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer)

export default store
