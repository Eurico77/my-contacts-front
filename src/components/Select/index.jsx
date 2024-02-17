import propTypes from 'prop-types';

import { Select } from './styles';

export function SelectInput({ options }) {
  return (
    <Select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

SelectInput.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string,
    }),
  ).isRequired,
};
