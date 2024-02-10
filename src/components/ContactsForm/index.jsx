import propTypes from 'prop-types';
import { ContainerForm, ButtonContainer } from './styles';

import { InputButton } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { SelectInput } from '../Select';

export function ContactForm({ buttonLabel }) {
  return (
    <ContainerForm>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <SelectInput
          options={[
            { value: '1', label: 'Pessoal' },
            { value: '2', label: 'Trabalho' },
            { value: '3', label: 'Família' },
          ]}
        />
      </FormGroup>

      <ButtonContainer>
        <InputButton type="submit">{buttonLabel}</InputButton>
      </ButtonContainer>
    </ContainerForm>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
