import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeProductQuantity, removeFromCart } from "../../../slices/cart";
import { QuantityButton } from "../../ProductPage/ProductDetailComponent/ProductDetailComponent.styled";
import {
  CartItemsContainer,
  CartItemImage,
  CartItemName,
  CartItemDescription,
  CartItemHeader,
  CartItemDeleteButton,
  CartItemBottom,
  TotalPrice,
  Input,
} from './CartItemStyle';

const CartItem = ({ cartItem, decrement, increment, id }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(cartItem.quantity);

  useEffect(() => {
    dispatch(changeProductQuantity({ ...cartItem, quantity: count }));
  }, [count, cartItem, dispatch]);
  
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
    <CartItemsContainer>
    <CartItemImage src={cartItem.product.imageUrl} alt="qq" />
    <div>
      <CartItemHeader>
        <CartItemName>{cartItem.product.productName}</CartItemName>
        <CartItemDeleteButton onClick={handleRemove}>
          <i className="bi bi-trash"></i>
        </CartItemDeleteButton>
      </CartItemHeader>
      <CartItemDescription>{cartItem.product.description}</CartItemDescription>
      <CartItemBottom>
        {/* Quantity buttons */}
        <QuantityButton>
          <button onClick={handleDecrement}>
              -
            </button>
            <Input type="number" value={count} readOnly />
          <button onClick={handleIncrement}>+</button>
        </QuantityButton>

        {/* Total price */}
        <TotalPrice>${totalPrice}</TotalPrice>
      </CartItemBottom>
    </div>
  </CartItemsContainer>
  );
};

export default CartItem;