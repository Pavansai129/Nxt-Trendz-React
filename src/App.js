import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  componentDidMount() {
    const localSavedCartList = localStorage.getItem('cartList')
    const savedCartList = JSON.parse(localSavedCartList)

    if (savedCartList === null) {
      this.setState({cartList: []})
    } else {
      this.setState({cartList: savedCartList})
    }
  }

  componentDidUpdate() {
    const {cartList} = this.state
    localStorage.setItem('cartList', JSON.stringify(cartList))
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const filteredCartList = cartList.filter(each => each.id !== id)
    this.setState({cartList: filteredCartList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const isProductPresent = cartList.some(each => each.id === product.id)
    if (isProductPresent === false) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } else {
      const updatedCartList = cartList.map(each => {
        if (each.id === product.id) {
          return {...each, quantity: each.quantity + product.quantity}
        }
        return {...each}
      })
      this.setState({cartList: updatedCartList})
    }
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(each => {
      if (each.id === id) {
        return {...each, quantity: each.quantity + 1}
      }
      return {...each}
    })
    this.setState({cartList: updatedCartList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(each => {
      if (each.id === id) {
        return {...each, quantity: each.quantity - 1}
      }
      return {...each}
    })

    const filteredCartList = updatedCartList.filter(each => each.quantity !== 0)

    this.setState({cartList: filteredCartList})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
