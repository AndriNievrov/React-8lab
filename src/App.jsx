import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import BookDetails from "./pages/BookDetails";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;