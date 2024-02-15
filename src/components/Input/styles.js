import styled from 'styled-components';

export const InputText = styled.input`
  width: 100%;
  height: 3.25rem;
  border-radius: 0.25rem;
  border: 2px solid #fff;
  outline: none;
  background: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding: 0 1rem;
  font-size: 1rem;
  transition: border-color 0.2s ease-in;

  &::placeholder {
    color: #A8A8A8;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
