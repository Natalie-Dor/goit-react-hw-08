// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import ContactList from "../../components/ContactList/ContactList";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
// import { fetchTasks } from "../../redux/tasks/operations";
// import { selectLoading } from "../../redux/tasks/selectors";

export default function ContactsPage() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactEditor />
      {/* <div>{isLoading && "Request in progress..."}</div> */}
      <ContactList />
    </>
  );
}
