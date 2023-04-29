import styled from 'styled-components'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div `
  position: absolute;
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem; /* increase padding */
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (min-width: 768px) {
    width: 320px; /* increase width */
    padding: 1.5rem; /* increase padding */
    top: 100px; /* adjust position */
    right: 30px; /* adjust position */
  }

  @media screen and (min-width: 992px) {
    width: 360px; /* increase width */
    padding: 2rem; /* increase padding */
    top: 110px; /* adjust position */
    right: 20px; /* adjust position */
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
