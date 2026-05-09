import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>📚 Book Store</h1>

      <nav>
        <Link to="/">Головна</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/contacts">Контакти</Link>
      </nav>
    </header>
  );
}

export default Header;