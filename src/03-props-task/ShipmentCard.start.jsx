// Zadanie: dane karty przekazywane przez propsy
//
// Ten sam komponent wyświetla dwie przesyłki. Dane otrzymuje przez propsy,
// a w JSX odczytuje je jako props.id, props.customer itd. Uprość ten zapis.
//
// W parametrach funkcji ShipmentCard użyj destrukturyzacji, aby odczytać
// id, customer, courier, weightKg i note. Dla note ustaw wartość domyślną
// "brak uwag". W JSX odwołuj się do tych nazw bez przedrostka props.
//
// Sprawdź efekt: na stronie powinny być dwie karty:
//   PRZ-2207: Robert Kowalski, InPost, 1.2 kg, Uwagi: brak uwag
//   PRZ-2208: Anna Nowak, DPD, 4.0 kg, Uwagi: Kruche
// Pozostałe informacje i wygląd kart powinny pozostać bez zmian.
//
// Edytuj: src/03-props-task/ShipmentCard.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./03-props-task/Task";
// W JSX pozostaw <Lesson />.

// TODO: Odczytaj propsy w parametrach funkcji, ustaw domyślne uwagi i uprość JSX.
export default function ShipmentCard(props) {
  return (
    <article className="card">
      <h3 className="card__title">{props.id}</h3>
      <p className="card__row">Klient: {props.customer}</p>
      <p className="card__row">Kurier: {props.courier}</p>
      <p className="card__row">Waga: {props.weightKg.toFixed(1)} kg</p>
      <p className="card__row">Uwagi: {props.note}</p>
    </article>
  );
}
