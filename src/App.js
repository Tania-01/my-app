import Header from "./components/Header"
import './App.css';
import Logo from "./components/logo"
import Selector from "./components/selector"
import Button from "./components/Button"

function App() {
  return (
    <div className="header">
      <Logo />
        <Header />
        <Selector />
        <Button />
    </div>
   );

}

export default App;
