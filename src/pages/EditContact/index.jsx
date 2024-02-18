import { ContactForm } from '../../components/ContactsForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}
