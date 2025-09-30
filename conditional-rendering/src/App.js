import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
