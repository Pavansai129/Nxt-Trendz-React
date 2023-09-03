import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const noOfItems = cartList.length
      let orderTotalAmount = 0
      cartList.forEach(each => {
        orderTotalAmount += each.price * each.quantity
        return null
      })
      // TODO: Update the functionality to remove all the items in the cart
      const removeAllItems = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />

          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button type="button" onClick={removeAllItems}>
                  Remove all
                </button>
                <CartListView />
                <div>
                  <h1>
                    Order Total: <span>Rs {orderTotalAmount}/-</span>
                  </h1>
                  <p>{noOfItems} items in cart</p>
                  <button type="button">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
