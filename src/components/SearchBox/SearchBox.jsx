// import css from './SearchBox.module.css';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/slice";
import { selectNameFilter } from "../../redux/contacts/selectors";
export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(changeFilter(e.target.value.trim()));

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
      />
    </div>
  );
}
