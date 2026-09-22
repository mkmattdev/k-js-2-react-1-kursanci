// Zadanie: potwierdzenie odbioru
//
// Po kliknięciu "Potwierdź odbiór" karta powinna od razu pokazać,
// że przesyłka została dostarczona, bez odświeżania strony.
//
// Zaimportuj useState z pakietu react. Zastąp zwykłą zmienną isDelivered
// stanem o początkowej wartości false. Po kliknięciu przycisku ustaw true.
// Tekst statusu, wygląd karty i widoczność przycisku zależą już od isDelivered.
//
// Sprawdź efekt: na początku widać status "W drodze" i przycisk
// "Potwierdź odbiór". Po kliknięciu status zmienia się na "Dostarczona",
// karta ma zielone oznaczenie, a przycisk znika.
//
// Edytuj: src/07-state-task/ShipmentCard.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./07-state-task/Task";
// W JSX pozostaw <Lesson />.

import "./state.css";

export default function ShipmentCard() {
  // TODO: Przechowuj isDelivered w stanie i zmieniaj go po kliknięciu przycisku.
  const isDelivered = false;

  return (
    <article className={`card ${isDelivered ? "card--ok" : "card--warn"}`}>
      <div className="card__header">
        <h3 className="card__title">PRZ-2207</h3>
        <span className={`badge ${isDelivered ? "badge--ok" : "badge--warn"}`}>
          {isDelivered ? "Dostarczona" : "W drodze"}
        </span>
      </div>
      <p className="card__row">Klient: Robert Kowalski</p>
      {!isDelivered && <button className="button">Potwierdź odbiór</button>}
    </article>
  );
}
