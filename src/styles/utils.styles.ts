import styled, { css } from "styled-components";

const Button = styled.button< { closeButton?: boolean, $favoriteButton?: boolean; withIcon?: boolean; } >`
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  ${props => props.closeButton && css`
      background-color: #007bff;
      font-size: 14px;
      font-weight: 500;
      padding: 10px 20px;

      &:hover {
        background-color: #0056b3;
      }
  `}

  ${props => props.$favoriteButton && css`
      background-color: #ff951d;
      padding: 10px;

      &:hover {
        background-color: #da7c11;
      }
    `}

  ${props => props.withIcon && css`
      background: none;
      font-size: 24px;
      color: #666;
      padding: 2px 8px;

      &:hover {
        background-color: #f2f2f2;
        color: #333;
      }
    `}
`;

export { Button }
