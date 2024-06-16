import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import ContactList from "../../components/ContactList/ContactList";
import ContactEditor from "../../components/ContactEditor/ContactEditor";

import { selectLoading } from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </>
  );
}
