import React from "react";
import Logo from "./logo";
import Wraper from "./Wraper";
import Button from "./Button";
import Selector from "./selector";
import Burger from "./Burger";

class NAV extends React.Component {
  render() {
    return (
      <div className="wraper">
        <Logo />
        <Wraper />
        <Selector />
        <Button />
        <Burger />
      </div>
    );
  }
}

export default NAV;
