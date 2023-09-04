import CartContext from '../../context/CartContext'

// Write your code here
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const noOfItems = cartList.length
      let orderTotalAmount = 0
      cartList.forEach(each => {
        orderTotalAmount += each.price * each.quantity
      })
      return (
        <div>
          <h1>
            Order Total: <span>Rs {orderTotalAmount}/-</span>
          </h1>
          <p>{noOfItems} items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
