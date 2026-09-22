// Zadanie: lista przesyłek
//
// Na stronie widać tylko pierwszą przesyłkę z tablicy shipments.
// Zmień komponent tak, aby pokazywał wszystkie przesyłki z tej tablicy.
//
// Zamiast pojedynczej karty dodaj <ul> z klasą list. Użyj metody map,
// aby dla każdej przesyłki utworzyć <li> z komponentem ShipmentCard.
// Przekaż do karty wszystkie pola obiektu za pomocą {...shipment}.
// Każdemu <li> nadaj key z wartością id danej przesyłki.
// Dane z pliku shipments.js i komponent ShipmentCard.jsx są gotowe.
//
// Sprawdź efekt: pod nagłówkiem "Przesyłek: 4" powinny pojawić się cztery karty,
// każda z właściwymi danymi i statusem "Dostarczona" albo "W drodze".
//
// Edytuj: src/05-list-task/ShipmentList.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./05-list-task/Task";
// W JSX pozostaw <Lesson />.

import "./list.css";
import { shipments } from "./shipments";
import ShipmentCard from "./ShipmentCard";

export default function ShipmentList() {
  // TODO: Zbuduj listę kart na podstawie całej tablicy shipments.
  return (
    <section className="panel">
      <h2 className="panel__title">Przesyłek: {shipments.length}</h2>
      <ShipmentCard {...shipments[0]} />
    </section>
  );
}
