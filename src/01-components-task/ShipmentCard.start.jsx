// Zadanie: karta przesyłki
//
// Przygotuj prostą kartę z informacjami o przesyłce.
//
// W funkcji ShipmentCard zwróć element <article>. W środku dodaj nagłówek <h3>
// z numerem przesyłki i trzy akapity <p>: z klientem, kurierem i wagą.
// Na razie wpisz dane bezpośrednio w JSX.
//
// Sprawdź efekt: karta powinna wyświetlać kolejno:
//   PRZ-2207
//   Klient: Robert Kowalski
//   Kurier: InPost
//   Waga: 1.2 kg
//
// Edytuj: src/01-component-task/ShipmentCard.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./01-component-task/Task";
// W JSX pozostaw <Lesson />.

export default function ShipmentCard() {
  return (
    <article>
      <h3>PRZ-2207</h3>
      <p>Klient: Robert Kowalski</p>
      <p>Kurier: InPost</p>
      <p>Waga: 1.2 kg</p>
    </article>
  );
}
