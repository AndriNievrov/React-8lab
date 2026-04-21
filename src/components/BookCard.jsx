import { useState } from "react";

function BookCard({ title, author, price, image }) {
  const [count, setCount] = useState(0);

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