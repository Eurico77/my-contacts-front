import styled from 'styled-components';

export const Container = styled.header`
  // colocar padding
  margin-bottom: 1.5rem;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
