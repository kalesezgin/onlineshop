import styled from 'styled-components';

export const BaseButton = styled.button`
  width: auto;
  padding: 0.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;