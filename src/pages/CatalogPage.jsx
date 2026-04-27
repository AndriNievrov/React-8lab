import { Link } from "react-router-dom";

const books = [
  { id: 1, title: "Кобзар" },
  { id: 2, title: "Лісова пісня" },
  { id: 3, title: "Захар Беркут" }
];

function CatalogPage() {
  return (
    <div>
      <h2>📚 Каталог книг</h2>

      {books.map((book) => (
        <div key={book.id}>
          <Link to={`/book/${book.id}`}>
            {book.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CatalogPage;