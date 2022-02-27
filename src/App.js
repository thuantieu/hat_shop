import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import M from  'materialize-css/dist/js/materialize.min.js';


class App extends Component {
  
  componentDidMount () {
    let sidenav = document.querySelector('#mobile');
    M.Sidenav.init(sidenav, {edge:'right'});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
            
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;