import { styled } from "styled-components";

export const MainBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e6e7eb;
`;

export const MainContent = styled.div`
  margin-top: 15px;
  width: 85%;
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductDetail = styled.div`
  width: 59%;
  @media (max-width: 768px) {
    width:100%;
  }
`;
