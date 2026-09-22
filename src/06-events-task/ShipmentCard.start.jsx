// Zadanie: przycisk nadania
//
// Przycisk "Nadaj" jest już na karcie. Dodaj reakcję na jego kliknięcie.
// Na razie informację o nadaniu przesyłki wyświetlimy w konsoli przeglądarki.
//
// Napisz funkcję handleSend, która za pomocą console.log wypisze komunikat
// z numerem przesyłki i nazwą kuriera. Wykorzystaj zmienne id oraz courier.
// Przekaż tę funkcję do onClick przycisku, bez wywoływania jej w JSX.
//
// Sprawdź efekt: otwórz konsolę przeglądarki i kliknij "Nadaj".
// Powinien pojawić się komunikat "Nadajemy PRZ-2207 przez InPost".
// Samo wyświetlenie karty nie powinno wypisywać tego komunikatu.
//
// Edytuj: src/06-events-task/ShipmentCard.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./06-events-task/Task";
// W JSX pozostaw <Lesson />.

import "./events.css";

export default function ShipmentCard() {
  const shipment = { id: "PRZ-2207", customer: "Robert Kowalski", courier: "InPost" };
  const { id, customer, courier } = shipment;

  // TODO: Dodaj funkcję handleSend i połącz ją z przyciskiem "Nadaj".
  return (
    <article className="card">
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <button className="button">Nadaj</button>
      </div>
      <p className="card__row">
        Klient: {customer}, kurier: {courier}
      </p>
    </article>
  );
}
