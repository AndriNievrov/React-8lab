import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";

function App() {
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

  return (
    <>
      <Header />
      <Main />

      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;