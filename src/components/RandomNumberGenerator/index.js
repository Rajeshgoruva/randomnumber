import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {Number: '0'}

  numbergenarator = () => {
    this.setState({Number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {Number} = this.state
    console.log(Number)
    return (
      <div className="bg-container">
        <div className="numberContainer">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.numbergenarator} type="button">
            Generate
          </button>
          <p className="para">{Number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
