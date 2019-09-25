import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  )
}

export default App
