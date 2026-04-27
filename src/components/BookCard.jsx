import { useState, useEffect } from "react";

function BookCard({ title, author, price, image }) {
  const [count, setCount] = useState(0);

  // Завантаження з LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem(title);
    if (saved) {
      setCount(parseInt(saved));
    }
  }, [title]);

  // Збереження в LocalStorage
  useEffect(() => {
    localStorage.setItem(title, count);
  }, [count, title]);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>Автор: {author}</p>
      <p>Ціна: {price} грн</p>

      <button onClick={() => setCount(count + 1)}>
        Купити
      </button>

      <p>Кількість: {count}</p>
    </div>
  );
}

export default BookCard;