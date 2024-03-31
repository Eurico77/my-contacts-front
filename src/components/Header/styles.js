import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.625rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
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

  input::placeholder {
    color: #9e9e9e;
  }

  input:focus {
    outline: none;
    border: 1px solid #0071bc;

  }
`;
