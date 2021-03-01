import React from 'react'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetails'
import {Provider} from 'react-redux'
import { store } from './Redux/store'

const App = () => {
  return (
    <Provider store={store}>

    <Router>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/ProductDetails/:categories/:id" component={ProductDetails} />
      </Switch>

    </Router>

    </Provider>
  )
}

export default App
