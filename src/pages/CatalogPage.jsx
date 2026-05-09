import { useEffect, useState } from "react";
import axios from "axios";

function CatalogPage() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  // Завантаження книг
  const fetchBooks = async (category = "") => {
    let url = "http://127.0.0.1:8000/api/books";

    if (category) {
      url += `?category=${category}`;
    }

    const response = await axios.get(url);
    setBooks(response.data);
  };

  // Завантаження категорій
  const fetchCategories = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/categories"
    );

    setCategories(response.data);
  };

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  return (
    <div className="page">
      <h2>📚 Каталог книг</h2>

      {/* Кнопки категорій */}
      <div>
        <button onClick={() => fetchBooks()}>
          Всі
        </button>

        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => fetchBooks(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Книги */}
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p>{book.category}</p>
        </div>
      ))}
    </div>
  );
}

export default CatalogPage;