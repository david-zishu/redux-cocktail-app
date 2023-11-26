import { useRef } from "react";
import { fetchSearchCocktail } from "../features/cocktail/cocktailSlice";
import { useDispatch } from "react-redux";
import "./SearchInput.css";
const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
