import { Container, InputSearchContainer } from './styles';

import Logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="My contacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar por contatos" />
      </InputSearchContainer>
    </Container>
  );
}
