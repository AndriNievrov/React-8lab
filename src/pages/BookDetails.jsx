import { useParams } from "react-router-dom";

const books = [
  { id: 1, title: "Кобзар" },
  { id: 2, title: "Лісова пісня" },
  { id: 3, title: "Захар Беркут" }
];

function BookDetails() {
  const { id } = useParams();

  const book = books.find(b => b.id === parseInt(id));

  return (
    <div>
      <h2>📖 Деталі книги</h2>
      <h3>{book ? book.title : "Книга не знайдена"}</h3>
    </div>
  );
}

export default BookDetails;