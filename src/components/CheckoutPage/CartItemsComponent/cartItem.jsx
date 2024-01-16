import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../slices/cart";
import { QuantityButton } from "../../ProductPage/ProductDetailComponent/ProductDetailComponent.styled";

const CartItem = ({ cartItem, decrement, increment }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(cartItem.quantity);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      decrement(cartItem.product.id);
    } else {
      // Display confirmation dialog
      const confirmed = window.confirm("This product will be removed from your cart. Are you sure?");
      if (confirmed) {
        dispatch(removeFromCart(cartItem.product.productId));
      }
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    increment(cartItem.product.id);
  };

  const handleRemove = () => {
    dispatch(removeFromCart(cartItem.product.productId));
  };

  // Calculate total price
  const totalPrice = (count * cartItem.product.price).toFixed(2);

  return (
    <div className="cart-items">
      <img className="cart-item-img" src={cartItem.product.imageUrl} alt="qq" />
      <div>
        <div className="cart-item-header">
          <b className="cart-item-name">{cartItem.product.productName}</b>
          <p className="cart-item-delete-btn" onClick={handleRemove}>
            <i className="bi bi-trash"></i>
          </p>
        </div>
        <p className="cart-item-description">{cartItem.product.description}</p>
        <div className="cart-item-bottom">
          <QuantityButton>
            <button onClick={handleDecrement} disabled={cartItem.quantity === 1}>
              -
            </button>
            <input type="number" value={count} readOnly style={{ width: '30px' }} />
            <button onClick={handleIncrement}>+</button>
          </QuantityButton>

          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
