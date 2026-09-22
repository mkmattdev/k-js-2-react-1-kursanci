// Zadanie: karta przesyłki ze statusem
//
// Na karcie wyświetla się już status "Dostarczona" albo "W drodze".
// Teraz dopasuj do niego wygląd karty.
//
// Gdy isDelivered ma wartość true, dodaj karcie klasę card--ok,
// a elementowi <span> ze statusem klasę badge--ok. W przeciwnym razie
// użyj card--warn i badge--warn. Zachowaj też podstawowe klasy card i badge.
// Wartości className zbuduj za pomocą zapisu z backtickami (`) i operatora ? :.
// Akapit z uwagami pokaż tylko wtedy, gdy note zawiera tekst. Wykorzystaj &&.
//
// Sprawdź efekt: przesyłka PRZ-2207 powinna mieć zielone oznaczenie
// "Dostarczona" i uwagi "Odebrał sąsiad". Przesyłka PRZ-2208 powinna mieć
// oznaczenie "W drodze", bez pustego wiersza "Uwagi:".
//
// Edytuj: src/04-conditional-task/ShipmentCard.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./04-conditional-task/Task";
// W JSX pozostaw <Lesson />.

export default function ShipmentCard({ id, customer, isDelivered, note }) {
  // TODO: Dopasuj klasy do statusu przesyłki i ukryj akapit, gdy nie ma uwag.
  return (
    <article className="card card--warn">
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <span className="badge badge--warn">{isDelivered ? "Dostarczona" : "W drodze"}</span>
      </div>
      <p className="card__row">Klient: {customer}</p>
      <p className="card__row">Uwagi: {note}</p>
    </article>
  );
}
