import CartContext from '../../context/CartContext'

import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
<<<<<<< HEAD
import CartListView from '../CartListView'
=======
>>>>>>> 261b097d39c63b16189b67f6a039a865eb85a7d8
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
<<<<<<< HEAD
      const onClickRemoveAllBtn = () => {
=======
      // TODO: Update the functionality to remove all the items in the cart
      const removeAllItems = () => {
>>>>>>> 261b097d39c63b16189b67f6a039a865eb85a7d8
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
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
