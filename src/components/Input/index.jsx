import propTypes from 'prop-types';
import { InputText } from './styles';

export function Input({ placeholder }) {
  return <InputText placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: propTypes.string.isRequired,
};
