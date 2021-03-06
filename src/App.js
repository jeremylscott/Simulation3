import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ducks/store'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import NewForm from './components/NewForm/NewForm'
import PostInfo from './components/PostInfo/PostInfo'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/newform' component={NewForm}/>
            <Route path='/postinfo/:id' component={PostInfo}/>
          </div>
        </Router>
      </Provider>
    );    
  }
}

export default App;
