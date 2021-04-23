import React, { useState } from "react";

import classes from "./Input.module.scss";

interface IPropsInput {
  setSeachQuery: (value: string) => void;
  searchMovie: () => void;
}

const Input: React.FC<IPropsInput> = ({ setSeachQuery, searchMovie }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const movie = e.target.value;
    setInputValue(movie);
    setSeachQuery(movie);
  };

  return (
    <div className={classes.InputWrapper}>
      <input
        className={classes.Input}
        type="text"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button onClick={searchMovie}> search</button>
    </div>
  );
};

export default Input;
