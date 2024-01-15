import styled from "styled-components";

export const ProductDetailContainer = styled.div`
    width: 100%;
    padding: 12px;
    background-color:white;
    img{
        width:100%;
    }
    h4{
        font-weight: bold;
        margin-top:48px;
    }
    border-radius: 8px;
`

export const Action = styled.div`
    width: 100%;
    display: flex;
    margin:36px 0;
    justify-content: space-between;
    h4{
        margin:0 48px;

    }
`

export const PriceAndAdd = styled.div`
    width:50%;
    display:flex;
    justify-content:flex-end;
   

    button{
        border:none;
        border-radius:8px;
        background-color: blue;
        color:white;
        width: 180px;
        height: 36px;
    }
    i{
        margin-right:12px;
    }
`

export const QuantityButton = styled.div`
    width:100px;
    height:36px;
    background-color:gray;
    display:flex;
    justify-content: space-between;
    align-items:center;
    button{
        width:36px;
        height:36px;
        border:none;
        color: orange;
        background-color:gray;
    }
    span{
        color: white;
    }
`