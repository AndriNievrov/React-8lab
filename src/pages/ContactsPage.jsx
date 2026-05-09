import { useState } from "react";

function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!name) {
      newErrors.name = "Введіть ім'я";
    }

    if (!email.includes("@")) {
      newErrors.email = "Email має містити @";
    }

    if (message.length < 10) {
      newErrors.message =
        "Повідомлення має містити мінімум 10 символів";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Форма успішно відправлена ✅");

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="form-container">
      <h2>📩 Контакти</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <textarea
          placeholder="Повідомлення"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {errors.message && (
          <p className="error">{errors.message}</p>
        )}

        <button type="submit">
          Відправити
        </button>
      </form>
    </div>
  );
}

export default ContactsPage;