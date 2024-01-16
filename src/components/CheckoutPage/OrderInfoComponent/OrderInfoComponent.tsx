// OrderInfoComponent.tsx
import React from "react";
import {
  RightContent,
  OrderInfoContainer,
  ButtonContainer,
  OrderTitle,
  OrderSubtitle,
  OrderTotal,
  CheckoutButton,
  ContinueShoppingButton,
  ParagraphLeft,
  ParagraphRight,
} from "../CartItemsComponent/CartItemsStyles";

interface OrderInfoComponentProps {
  calculateSubtotal: () => string;
  handleContinueShopping: () => void;
}

const OrderInfoComponent: React.FC<OrderInfoComponentProps> = ({
  calculateSubtotal,
  handleContinueShopping,
}) => {
  return (
    <RightContent>
      <OrderInfoContainer>
        <OrderTitle>Order Info</OrderTitle>
        <OrderSubtitle>
          <ParagraphLeft>Subtotal: </ParagraphLeft>
          <ParagraphRight>${calculateSubtotal()}</ParagraphRight>
        </OrderSubtitle>
        <OrderSubtitle>
          <ParagraphLeft>Shipping Cost:</ParagraphLeft>
          <ParagraphRight> $0</ParagraphRight>
        </OrderSubtitle>
        <OrderTotal>
          Total: <p>$0.00</p>
        </OrderTotal>
      </OrderInfoContainer>

      <ButtonContainer>
        <CheckoutButton>Checkout</CheckoutButton>
        <ContinueShoppingButton onClick={handleContinueShopping}>
          Continue Shopping
        </ContinueShoppingButton>
      </ButtonContainer>
    </RightContent>
  );
};

export default OrderInfoComponent;
