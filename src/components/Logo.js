import React from 'react';
import Logo from "./img/Logo.svg"
 class logo extends React.Component {
  render() {
    return (
      <div className="logo">
          <img src={Logo} />
      </div>
    );
  }
}
export default logo;
