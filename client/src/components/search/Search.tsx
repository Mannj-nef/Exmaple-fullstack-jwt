import Button from "../button/Button";
import "./search.scss";

const Search = () => {
  return (
    <div className="Search">
      <input
        className="input-search"
        type="text"
        placeholder="Enter your delivery location"
      />
      <Button handleClick={() => {}} className="discover">
        Discover
        <span className="icon-right">{">"}</span>
      </Button>
    </div>
  );
};

export default Search;
