import {Component} from 'react'

import './index.css'

const Counter = props => {
  const {foodId, quantity, increaseQuantity, decreaseQuantity} = props

  const onDecrement = () => {
    decreaseQuantity(foodId)
  }

  const onIncrement = () => {
    increaseQuantity(foodId)
  }
  return (
    <div className="cart-arrow-buttons-container">
      <button type="button" className="cart-button" onClick={onDecrement}>
        -
      </button>
      <p className="cart-quantity-number">{quantity}</p>
      <button type="button" className="cart-button" onClick={onIncrement}>
        +
      </button>
    </div>
  )
}

class Counter extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
