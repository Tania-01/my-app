import React from 'react';
import Burger from "./Burger"
import Button from "./Button"
import Logo from "./logo"
import Wraper from "./Wraper"
import Selector from "./selector"




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