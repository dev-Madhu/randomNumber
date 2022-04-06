// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(prevState => ({
      count: Math.ceil(Math.random(prevState.count) * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
