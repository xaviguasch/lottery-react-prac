import React, { Component } from 'react'
import LotteryBall from './LotteryBall'

class Lottery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [0, 1, 2]
    }

    this.renegenerateNums = this.renegenerateNums.bind(this)
  }

  static defaultProps = {
    title: 'Big Lotto',
    numBalls: 6,
    maxNum: 40
  }

  renegenerateNums() {
    let rand = Math.floor(Math.random() * this.props.maxNum + 1)

    // let newState = { ...this.state.nums, rand }

    // this.setState({ nums: newState })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <LotteryBall num={5} />

        <button onClick={this.renegenerateNums}>Generate</button>
      </div>
    )
  }
}

export default Lottery
