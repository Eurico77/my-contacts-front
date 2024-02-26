import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;

  h1 {
    font-size: 1.375rem;
    color: ${({ theme, $danger }) => ($danger ? theme.colors.danger.main : theme.colors.secondary.light)};
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  .cancel-button {
    background: #fff;
    border: none;
    font-size: 1rem;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.secondary.light};
  }
`;
