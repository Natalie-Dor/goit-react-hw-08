import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ id, contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contact}>
      <p className={css.contactName}>Name: {contact.name}</p>
      <p className={css.contactNumber}>Number: {contact.number}</p>
      <button className={css.deleteButton} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
