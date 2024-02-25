import propTypes from 'prop-types';
import { Button } from '../Button';
import { Container, Overlay, Footer } from './styles';

export function Modal({ danger }) {
  return (
    <Overlay>
      <Container $danger={danger}>
        <h1>Deseja realmente excluir o contato Y ?</h1>
        <p>Esta ação não poderá ser desfeita</p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
