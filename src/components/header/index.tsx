import "./styles.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav id="headerNav">
      <img id="logo" src={logo} alt="todo" />
    </nav>
  );
};

export default Header;
