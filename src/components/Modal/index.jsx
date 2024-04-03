import propTypes from 'prop-types';
import ReactDom from 'react-dom';

import { Button } from '../Button';
import { Container, Overlay, Footer } from './styles';

export function Modal({ danger }) {
  return ReactDom.createPortal(
    <Overlay>
      <Container $danger={danger}>
        <h1>Deseja realmente excluir o contato Eurico Neto ?</h1>
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
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
