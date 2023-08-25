import { useState } from "react";
import { searchUser } from "../../store/users";
import { useDispatch } from "react-redux";


const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({hello: ''});

  return (
    <form>
      <input
        type="text"
        value={search.hello}
        onChange={(e) => setSearch({hello: e.target.value})}
        />
      <div
        onClick={(e) => {e.preventDefault(); dispatch(searchUser(search))}}
        >submit</div>
    </form>
  )
};

export default SearchBar;