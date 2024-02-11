import propTypes from 'prop-types';
import { FormGroupContainer } from './styles';

export function FormGroup({ children }) {
  return (
    <FormGroupContainer>
      {children}
    </FormGroupContainer>
  );
}

FormGroup.propTypes = {
  children: propTypes.node.isRequired,
};
