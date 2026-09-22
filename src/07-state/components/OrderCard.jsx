import { useState } from "react";

// useState to hook Reacta. Zwraca bieżącą wartość stanu i funkcję do jej zmiany.
// Wywołujemy go na początku komponentu, poza warunkami i pętlami.
// Funkcja strzałkowa w onClick wywoła setIsOpen(!isOpen) dopiero po kliknięciu.
export default function OrderCard({ id, customer, totalPln, note }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="card">
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <button className="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Zwiń" : "Szczegóły"}
        </button>
      </div>
      <p className="card__total">Razem: {totalPln.toFixed(2)} zł</p>
      {isOpen && (
        <p className="card__row">
          Klient: {customer}. Uwagi: {note ?? "brak"}.
        </p>
      )}
    </article>
  );
}
