import propTypes from 'prop-types';
import { Button } from './styles';

export function InputButton({ children, type }) {
  return (
    <Button type={type}>
      {children}
    </Button>
  );
}

InputButton.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.oneOf(['button', 'submit', 'reset']),

};
