import React, { Component } from 'react'

class Lottery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [1, 3, 5]
    }
  }

  static defaultProps = {
    title: 'Big Lotto',
    numBalls: 4,
    maxNum: 9
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Lottery
