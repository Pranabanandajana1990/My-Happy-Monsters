import React, { ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  placeholder?: string;
  // handleChange: ChangeEventHandler<HTMLInputElement>; // we can use ChangeEventHandler as well which will bydefault return void
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
); 
