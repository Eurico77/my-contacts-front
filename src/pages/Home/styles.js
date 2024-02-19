import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  padding: 10px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  input {
    width: 100%;
    height: 3.125rem;
    background: #ffffff;
    padding: 1rem;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
  }

  &::placeholder {
    color: #bcbcbc;
    text-align: center;
  }

  input:focus {
    outline: none;
    border: 1px solid #0071bc;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Header = styled.header`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;

  strong {
    color: ${({ theme }) => theme.colors.secondary.gray};
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 0.25rem;
    padding: 0.475rem 0.75rem;
    font-weight: 800;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s, color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 1.5rem;
  padding: 0 0.625rem;

  header {
    margin-bottom: 0.5rem;
    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        margin-right: 0.5rem;
        font-weight: bold;
      }
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 490px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.25rem;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
      }
    }

    span {
      display: block;
      margin-top: 0.2rem;
      color: ${({ theme }) => theme.colors.secondary.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    a {
      margin-right: 0.5rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    button {
      background-color: transparent;
      border: none;
    }
  }
`;
