import React from "react"
import {connect } from "react-redux"
import { createStructuredSelector} from "reselect"

import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"

import "./checkout.styles.scss"


const Checkoutpage = ({cartItems, total}) => (
  <div className="checkout-page">
  <div className="checkout-header-container">

    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Discription </span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Quanity</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Price</span>
      </div>
    </div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
  </div>
    {
      cartItems.map(cartItem =>(
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
     ))}
    <div className="total">
      <span>TOTAL : ${total}</span>
    </div>
  </div>
  )


  const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems, 
    total : selectCartTotal
  })
export default connect(mapStateToProps)(Checkoutpage)