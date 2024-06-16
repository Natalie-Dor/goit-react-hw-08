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
    phone: Yup.string()
      .min(6, "Too Short")
      .max(15, "Too Long")
      .required("Required"),
  });
  // чи потрібно створювати Id????
  const nameFieldId = useId();
  const phoneFieldId = useId();

  function handleSubmit(values, action) {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
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
// import css from './ContactForm.module.css';

// import { useId } from 'react';

// export default function ContactForm() {
// const dispatch = useDispatch();

// const FeedbackSchema = Yup.object().shape({
//     name: Yup.string()
//     .min(2, "Too Short")
//     .max(50, "Too Long")
//     .required("Required"),
//   phone: Yup.string()
//     .min(6, "Too Short")
//     .max(15, "Too Long")
//     .required("Required"),
// });
// const nameFieldId = useId();
// const phoneFieldId = useId();
//   function handleSubmit(values, action) {
//     const newContact = {
//       name: values.name,
//       number: values.number,
//     };
//     dispatch(addContact(newContact));
//     action.resetForm();
// }
//   const handleSubmit = (values, actions) => {
//   const { name, phone } = values;
//   console.log("Submitting contact:", values);
//   if (name && phone) {
//     if (token) {
//       dispatch(addContact({ name, number: phone }))
//         .then(() => {
//           toast.success("Contact added successfully");
//           actions.resetForm();
//         })
//         .catch(() => {
//           toast.error("Failed to add contact");
//         });
//     } else {
//       alert("You must be logged in to add a contact.");
//     }
//   }
// };
// const handleSubmit = (values, actions) => {
//   dispatch(addContact(values));
//   actions.resetForm();
// };
// return (
//   <Formik
//     initialValues={{ username: '', number: '' }}
//     validationSchema={FeedbackSchema}
//     onSubmit={handleSubmit}
//   >
//     <Form className={css.formContainer}>
//       <label htmlFor={nameFieldId} className={css.label}>
//         Name
//       </label>
//       <Field
//         type="text"
//         name="name"
//         id={nameFieldId}
//         className={css.inputField}
//       />
//       <ErrorMessage
//         name="name"
//         component="span"
//         className={css.errorMessage}
//       />

//       <label htmlFor={phoneFieldId}>Number</label>
//       <Field
//         type="text"
//         name="number"
//         id={phoneFieldId}
//         className={css.inputField}
//       />
//       <ErrorMessage
//         name="number"
//         component="span"
//         className={css.errorMessage}
//       />

//       <button type="submit">Add contact</button>
//     </Form>
//   </Formik>
// );
// }
// const handleSubmit = e => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const newContact = {
//     name: e.target.name.value,
//     number: e.target.number.value,
//   };
//   dispatch(addContact(newContact));
// const text = form.elements.text.value;
// if (text !== "") {
//   dispatch(addContact(text));
// form.reset();
//   return;
// };
//   alert("Contact cannot be empty. Enter some text!");
// };
