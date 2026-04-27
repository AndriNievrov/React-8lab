import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(10);

  // Loading (2 секунди)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Таймер банера
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const books = [
    {
      title: "Кобзар",
      author: "Тарас Шевченко",
      price: 200,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Лісова пісня",
      author: "Леся Українка",
      price: 150,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Захар Беркут",
      author: "Іван Франко",
      price: 180,
      image: "https://via.placeholder.com/150"
    }
  ];

  if (isLoading) {
    return <h2 className="loading">Завантаження...</h2>;
  }

  return (
    <>
      <Header />

      {/* Банер */}
      {time > 0 && (
        <div className="banner">
          🔥 Акція! Залишилось: {time} сек
        </div>
      )}

      <Main />

      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;