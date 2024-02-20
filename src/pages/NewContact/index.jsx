import { ContactForm } from '../../components/ContactsForm';
import { PageHeader } from '../../components/PageHeader';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
