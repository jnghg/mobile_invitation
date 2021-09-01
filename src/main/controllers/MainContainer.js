import React from "react";
import { observer, inject } from "mobx-react";
import { autobind } from "core-decorators";
import MainView from "../views/MainView";

@inject("mainStore")
@observer
@autobind
class MainContaner extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <MainView />
      </>
    );
  }
}

export default MainContaner;
