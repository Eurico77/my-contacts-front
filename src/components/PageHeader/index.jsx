import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import arrow from '../../assets/icons/arrow.svg';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: propTypes.string.isRequired,
};
