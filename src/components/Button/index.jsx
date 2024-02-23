import propTypes from 'prop-types';
import { ButtonWrapper } from './styles';

export function Button({ children, type, danger }) {
  return (
    <ButtonWrapper type={type} $danger={danger}>
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.oneOf(['button', 'submit', 'reset']),
  danger: propTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  danger: false,
};
