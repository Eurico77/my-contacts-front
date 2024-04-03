import propTypes from 'prop-types';
import { useState } from 'react';

import { ContainerForm, ButtonContainer } from './styles';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { SelectInput } from '../Select';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleNameChange = (event) => setName(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <ContainerForm>
      <FormGroup>
        <Input
          placeholder="Nome"
          onChange={handleNameChange}
          value={name}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
      </FormGroup>

      <FormGroup>
        <SelectInput
          options={[
            { value: 'Pessoal', label: 'Pessoal' },
            { value: 'Trabalho', label: 'Trabalho' },
            { value: 'Familia', label: 'Família' },
          ]}
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          onClick={handleSubmit}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </ContainerForm>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
