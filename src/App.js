import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const passwordDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passwordDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {passwordsList} = this.state
    console.log(passwordsList)

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app logo"
        />
        <div className="password-input-section">
          <div className="password-input-container">
            <h1 className="input-head">Add new Password</h1>
            <form className="pswd-form" onSubmit={this.onAddPassword}>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="icon"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="icon"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="icon"
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="submit-button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="password-manager-img"
            alt="password manager"
          />
        </div>
        <div className="password-manager-section">
          <div className="your-passwords">
            <h1 className="head">
              Your Passwords <span className="password-count">0</span>
            </h1>
            <div className="search-input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-icon"
                  alt="search"
                />
              </div>
              <input
                type="search"
                className="search-element"
                placeholder="Search"
              />
            </div>
          </div>
          <br />
          <hr className="line" />
          <br />
          <div className="show-passwords">
            <input type="checkbox" id="showPasswords" className="checkbox" />
            <label htmlFor="showPasswords" className="label">
              Show Passwords
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default App
