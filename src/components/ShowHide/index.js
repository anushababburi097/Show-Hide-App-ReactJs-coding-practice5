// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    // const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    // const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <button
            type="button"
            className="firstName"
            onClick={this.onFirstName}
          >
            Show/Hide Firstname
          </button>
          {firstName ? <p className="card-name">Joe</p> : null}
        </div>
        <div className="btn-container">
          <button type="button" className="lastName" onClick={this.onLastName}>
            Show/Hide Lastname
          </button>
          {lastName ? <p className="card-name">Jonas</p> : null}
        </div>
      </div>
    )
  }
}

export default ShowHide
