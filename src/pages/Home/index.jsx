import { Link } from 'react-router-dom';
import {
  Card, Container, Header, ListContainer, InputSearchContainer,
} from './styles';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';

export function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contatos" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Eurico Magalhães</strong>
            <small>Instagram</small>
          </div>
          <span>euricosadasds@mail.com</span>
          <span>(88) 981439039</span>
        </div>
        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Add" />
          </Link>
          <button type="button">
            <img src={trash} alt="Remove" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
