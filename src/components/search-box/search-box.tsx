import { ChangeEvent } from "react";

import "./search-box.css";

type SearchBoxProps = {
  nameClass: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  nameClass,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${nameClass}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
