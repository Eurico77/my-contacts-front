import propTypes from 'prop-types';

import { Select } from './styles';

export function SelectInput({ options, onChange, value }) {
  return (
    <Select
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option onChange={onChange} key={option.value} value={option.value}>
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
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
