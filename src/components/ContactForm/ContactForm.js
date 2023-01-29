import PropTypes from 'prop-types';
import * as Styled from './ContactForm.styled';
import { Formik, Form } from 'formik';

export function ContactForm  ({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form>
        <Styled.ContainerForm>
          <Styled.LabelForm>
            Name
            <Styled.Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              
              placeholder=" "
            />
          </Styled.LabelForm>
          <Styled.LabelForm>
            Number
            <Styled.Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder=" "
              
            />
          </Styled.LabelForm>
          <Styled.ButtonForm type="submit">Add contact</Styled.ButtonForm>
        </Styled.ContainerForm>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
