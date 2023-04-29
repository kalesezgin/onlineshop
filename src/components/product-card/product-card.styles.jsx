import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img { 
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  button {
    opacity: 0.7;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    background-color: #333;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 14px;

    &:hover {
      opacity: 0.85;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  &:hover {
    img {
      opacity: 0.8;
      
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  display: flex; 
  width: 100%;
  justify-content: space-between;
  padding: 8px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
