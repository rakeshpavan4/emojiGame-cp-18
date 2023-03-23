// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="logo-name">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="Emoji-heading">Emoji Game</h1>
        </div>
        <div className="scores">
          <p className="scores-para">Score: 0</p>
          <p>Top Score: 0</p>
        </div>
      </div>
    )
  }
}
export default NavBar
