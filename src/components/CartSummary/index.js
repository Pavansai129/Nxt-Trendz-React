import CartContext from '../../context/CartContext'

<<<<<<< HEAD
import './index.css'

=======
// Write your code here
>>>>>>> 261b097d39c63b16189b67f6a039a865eb85a7d8
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
<<<<<<< HEAD
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
=======
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
>>>>>>> 261b097d39c63b16189b67f6a039a865eb85a7d8
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
