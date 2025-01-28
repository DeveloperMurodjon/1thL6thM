import "./App.css";
import Logo from "./components/Logo/logo.jsx";
import NavMenu from "./components/Navbar/navbar.jsx";
import Sign from "./components/Sign/sign.jsx";
import LeftSide from "./components/Header/leftSide.jsx";
import Registration from "./components/Header/registration.jsx";
function App() {
  return (
    <div className="total">
      <div className="lending">
        <div className="container">
          <div className="navigation">
            <Logo />
            <NavMenu />
            <Sign />
          </div>
          <div className="header">
            <LeftSide />
            <div className="rightSideDiv">
              <h3 className="titleRightHeader">Get Start for Free</h3>
              <Registration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
