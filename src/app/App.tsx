import React from "react";
import InputSearch from "../shared/ui/input-search/InputSearch";

import "./styles/root.scss";

export default class App extends React.Component {
  render() {
    return (
      <>
        <InputSearch placeholder="Search" onSearch={(value) => {}} />
      </>
    );
  }
}
