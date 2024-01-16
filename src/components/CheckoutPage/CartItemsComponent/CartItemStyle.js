import styled from 'styled-components';

export const CartItemsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 70px;
    background-color: white;
    padding: 30px;
`;

export const CartItemImage = styled.img`
    width: 20%;
    height: auto;
`;

export const CartItemName = styled.b`
    
`;

export const CartItemDescription = styled.p`
    
`;

export const CartItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CartItemDeleteButton = styled.p`
    color: red;
    cursor: pointer;
`;

export const CartItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const QuantityButton = styled.div`
    display: flex;
    align-items: center;

    button {
        padding: 5px;
        cursor: pointer;
        background-color: gray; 
        border: 1px solid #ccc;
        color: white; 
    }
`;

export const Input = styled.input`
    text-align: center;
    width: 40px;
    pointer-events: none; 
    background-color:gray;
    border: none;
    color: white;
`