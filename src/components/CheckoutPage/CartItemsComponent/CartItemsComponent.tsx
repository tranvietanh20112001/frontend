import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import styled from "styled-components";

const StyledCheckoutButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: not-allowed;
`;

const CartItemsComponent: React.FC = () => {
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart.cart);

  const [st, setSt] = useState(0);
  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach((cartItem) => {
      subtotal += cartItem.quantity * cartItem.product.price;
    });
    console.log(subtotal);
    setSt(Number(subtotal.toFixed(2)));
  };
  useEffect(() => {
    calculateSubtotal();
  }, [cart]);

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const calculateShippingCost = () => {
    const defaultShippingCost = 10;
    if (cart.length > 0) {
      return defaultShippingCost;
    }
    return 0;
  };

  const calculateTotal = (st: number) => {
    const shippingCost = calculateShippingCost();

    return (st + shippingCost).toFixed(2);
  };

  const CheckoutButton = () => {
    const total = parseFloat(calculateTotal(st));

    const handleCheckout = () => {
      const userConfirmation = window.confirm("Do you want to purchase?");
      if (userConfirmation) {
        alert("Thank you for Purchase!!!");
      }
    };

    return (
      <StyledCheckoutButton disabled={total === 0} onClick={handleCheckout}>
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
                }}
                increment={() => {
            
                }}
                id={cartItem.product.productId}
              />
            ))}
            {cart.length === 0 && (
              <Paragraph>You have no products in the cart</Paragraph>
            )}
          </LeftContent>

          <RightContent>
            <OrderInfoContainer>
              <OrderTitle>Order Info</OrderTitle>
              <OrderSubtitle>
                <ParagraphLeft>Subtotal: </ParagraphLeft>
                <ParagraphRight>${st}</ParagraphRight>
              </OrderSubtitle>
<OrderSubtitle>
                <ParagraphLeft>Shipping Cost:</ParagraphLeft>
                <ParagraphRight> ${calculateShippingCost()}</ParagraphRight>
              </OrderSubtitle>
              <OrderTotal>
                Total: <p>${calculateTotal(st)}</p>
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