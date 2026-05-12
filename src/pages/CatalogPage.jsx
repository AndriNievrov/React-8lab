import { useEffect, useState } from "react";

function CatalogPage() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });

  }, []);

  return (
    <div className="catalog">

      <h1>Каталог книг</h1>

      <div className="books-list">

        {books.map((book) => (

          <div className="book-card" key={book.id}>

            <h2>{book.title}</h2>

            <p>Автор: {book.author}</p>

            <p>Ціна: {book.price} грн</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CatalogPage;