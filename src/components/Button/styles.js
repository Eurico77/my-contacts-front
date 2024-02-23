import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  height: 3.25rem;
  border: none;
  padding: 0 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background 0.3s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }


  ${({ theme, $danger }) => $danger
    && css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
