import propTypes from 'prop-types';
import { FormGroupContainer } from './styles';

export function FormGroup({ children, error }) {
  return (
    <FormGroupContainer>
      {children}
      {error && <small>{error}</small>}
    </FormGroupContainer>
  );
}

FormGroup.propTypes = {
  children: propTypes.node.isRequired,
  error: propTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
