import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Головна</Link> |{" "}
      <Link to="/catalog">Каталог</Link>
    </nav>
  );
}

export default Header;