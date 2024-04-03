import propTypes from 'prop-types';
import { useState } from 'react';

import { ContainerForm, ButtonContainer } from './styles';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { SelectInput } from '../Select';

import { useErrors } from '../../hooks/useErrors';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
      return;
    }
    removeError({ fieldName: 'name' });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (event.target.value && !emailRegex.test(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
      return;
    }
    removeError({ fieldName: 'email' });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <ContainerForm>
      <FormGroup error={getErrorMessageByFieldName({ fieldName: 'name' })}>
        <Input
          placeholder="Nome"
          onChange={handleNameChange}
          value={name}
          error={!!getErrorMessageByFieldName({ fieldName: 'name' })}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName({ fieldName: 'email' })}>
        <Input
          placeholder="E-mail"
          onChange={handleEmailChange}
          value={email}
          error={!!getErrorMessageByFieldName({ fieldName: 'email' })}
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
        <Button type="submit" onClick={handleSubmit}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </ContainerForm>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
