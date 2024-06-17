import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";
import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    number: Yup.string()
      .min(6, "Too Short")
      .max(15, "Too Long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const phoneFieldId = useId();

  function handleSubmit(values, action) {
    dispatch(addContact(values));
    action.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />

        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          id={phoneFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
