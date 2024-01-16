import React from "react";
import { useNavigate } from "react-router-dom";
import { QuantityButton } from "../../ProductPage/ProductDetailComponent/ProductDetailComponent.styled";
import {
  Container,
  Header,
  SEContainer,
  LeftContent,
  RightContent,
  OrderInfoContainer,
  OrderTitle,
  OrderSubtitle,
  OrderTotal,
  Paragraph,
  ButtonContainer,
  ContinueShoppingButton,
  ContainerCon,
  ParagraphLeft,
  ParagraphRight,
  
} from "./CartItemsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./CartItemStyle.css";
import CartItem from "./cartItem";

import styled from 'styled-components';

const StyledCheckoutButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: not-allowed;
`;

const CartItemsComponent = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state: RootState) => state.cart);


  const handleContinueShopping = () => {
    navigate("/products");
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach((cartItem) => {
      subtotal += cartItem.quantity * cartItem.product.price;
    });
    return subtotal.toFixed(2);
  };

  const calculateShippingCost = () => {
    // Set a default shipping cost
    const defaultShippingCost = 10;

    // If there are items in the cart, set the shipping cost to the default value
    if (cart.length > 0) {
      return defaultShippingCost;
    }

    // If the cart is empty, shipping cost is $0
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shippingCost = calculateShippingCost();

    return (subtotal + shippingCost).toFixed(2);
  };

  const CheckoutButton = () => {
    const total = parseFloat(calculateTotal());

    const handleCheckout = () => {
      const userConfirmation = window.confirm("Do you want to purchase?");
      if (userConfirmation) {
        alert("Thank you for Purchase!!!");
      }
    };

    return (
      <StyledCheckoutButton
        disabled={total === 0}
        onClick={handleCheckout}
      >
        Checkout
      </StyledCheckoutButton>
    );
  };

  return (
    <Container>
      <ContainerCon>
        <Header>My Shopping Cart</Header>

        <SEContainer>
          <LeftContent>
            {cart.map((cartItem) => (
              <CartItem
                key={cartItem.product.productId}
                cartItem={cartItem}
                decrement={() => {
                  /* handle decrement logic here */
                }}
                increment={() => {
                  /* handle increment logic here */
                }}
              />
            ))}
            {cart.length === 0 && <Paragraph>You have no products in the cart</Paragraph>}
          </LeftContent>

          <RightContent>
            <OrderInfoContainer>
              <OrderTitle>Order Info</OrderTitle>
              <OrderSubtitle>
                <ParagraphLeft>Subtotal: </ParagraphLeft>
                <ParagraphRight>${calculateSubtotal()}</ParagraphRight>
              </OrderSubtitle>
              <OrderSubtitle>
                <ParagraphLeft>Shipping Cost:</ParagraphLeft>
                <ParagraphRight> ${calculateShippingCost()}</ParagraphRight>
              </OrderSubtitle>
              <OrderTotal>
                Total: <p>${calculateTotal()}</p>
              </OrderTotal>
            </OrderInfoContainer>

            <ButtonContainer>
              <CheckoutButton />

              <ContinueShoppingButton onClick={handleContinueShopping}>
                Continue Shopping
              </ContinueShoppingButton>
            </ButtonContainer>
          </RightContent>
        </SEContainer>
      </ContainerCon>
    </Container>
  );
};

export default CartItemsComponent;
