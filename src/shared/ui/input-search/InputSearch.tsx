import React from "react";
import InputText from "../input-text/InputText";
import SearchIcon from "../icons/SearchIcon";
import Button from "../button/Button";

import styles from "./input-search.module.scss";

interface InputSearchProps {
  placeholder: string;
  defaultValue: string;
  onSearch: (value: string) => void;
}

export default class InputSearch extends React.Component<InputSearchProps> {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <div className={styles.inputSearchLayout}>
        <InputText
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
          onChange={(e) => this.props.onSearch(e.target.value)}
          onKeyDown={this.handleInputEnter}
        >
          <SearchIcon className={styles.inputSearchIcon} />
        </InputText>

        <Button onClick={() => this.props.onSearch(this.state.inputValue)}>
          Search
        </Button>
      </div>
    );
  }

  // handleInputChange = (value: string) => {
  //   this.setState((state) => ({ ...state, inputValue: value }));
  // };

  handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.onSearch(this.state.inputValue);
    }
  };
}
