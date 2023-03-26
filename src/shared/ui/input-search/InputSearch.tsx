import React from "react";
import { InputText } from "../input-text/InputText";
import { SearchIcon } from "../icons/SearchIcon";
import { Button } from "../button/Button";

import styles from "./input-search.module.scss";

type IInputSearchProps = {
  placeholder: string;
  defaultValue: string;
  onSearch: (value: string) => void;
};

export const InputSearch: React.FC<IInputSearchProps> = (props) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(e.target.value);
  };

  const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setInputValue(inputValue);
      props.onSearch(inputValue);
    }
  };

  return (
    <div className={styles.inputSearchLayout}>
      <InputText
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={handleInput}
        onKeyDown={handleInputEnter}
      >
        <SearchIcon className={styles.inputSearchIcon} />
      </InputText>

      <Button onClick={() => props.onSearch(inputValue)}>Search</Button>
    </div>
  );
};
