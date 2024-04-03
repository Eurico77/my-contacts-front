import propTypes from 'prop-types';
import { InputText } from './styles';

export function Input({ placeholder, error, ...props }) {
  return (
    <InputText
      placeholder={placeholder}
      $error={error}
      {...props}
    />
  );
}

Input.propTypes = {
  placeholder: propTypes.string.isRequired,
  error: propTypes.bool,
  onChange: propTypes.func,
  value: propTypes.string,
};

Input.defaultProps = {
  error: false,
};
