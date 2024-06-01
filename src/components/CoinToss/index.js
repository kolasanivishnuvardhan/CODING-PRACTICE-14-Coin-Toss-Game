import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {result: 'heads', total: 0, heads: 0, tails: 0}
  onClickTossCoin = () => {
    let result
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      result = 'heads'
    } else {
      result = 'tails'
    }
    this.setState(prevState => ({
      result: result,
      total: prevState.total + 1,
      heads: result === 'heads' ? prevState.heads + 1 : prevState.heads,
      tails: result === 'tails' ? prevState.tails + 1 : prevState.tails,
    }))
  }
  render() {
    const {result, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={
              result === 'heads'
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            className="img"
            alt="toss result"
          />
          <button className="btn" type="button" onClick={this.onClickTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{total}</p>
            <p className="count"> Heads:{heads} </p>
            <p className="count"> Tails:{tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
