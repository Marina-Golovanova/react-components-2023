import React from "react";
import { InputText } from "../input-text/InputText";
import { SearchIcon } from "../icons/SearchIcon";
import { Button } from "../button/Button";

import styles from "./input-search.module.scss";

type IInputSearchProps = {
  placeholder: string;
  defaultValue: string;
  onSearch: () => void;
  onChangeValue: (value: string) => void;
};

export const InputSearch: React.FC<IInputSearchProps> = (props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeValue(e.target.value);
  };

  const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.onSearch();
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

      <Button onClick={props.onSearch}>Search</Button>
    </div>
  );
};
