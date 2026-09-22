// Zadanie: karta przesyłki z danymi z obiektu
//
// Dane przesyłki i wyliczenie kosztu są już przygotowane w funkcji ShipmentCard.
// Wykorzystaj je do wyświetlenia karty.
//
// Zwróć <article> z klasą card. W nagłówku <h3> pokaż numer przesyłki,
// a w trzech akapitach <p> klienta, wagę i koszt. Każdą z tych wartości
// wstaw do JSX w klamrach, korzystając z przygotowanych zmiennych.
// Za pomocą toFixed wyświetl wagę z jednym miejscem po przecinku,
// a koszt z dwoma. Dodaj jednostki kg i zł.
// Nadaj nagłówkowi klasę card__title, a akapitom klasę card__row.
//
// Sprawdź efekt: karta powinna wyświetlać kolejno:
//   PRZ-2207
//   Klient: Robert Kowalski
//   Waga: 1.2 kg
//   Koszt: 18.00 zł
//
// Edytuj: src/02-jsx-task/ShipmentCard.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./02-jsx-task/Task";
// W JSX pozostaw <Lesson />.

import "./jsx.css";

const RATE_PLN_PER_KG = 15;

export default function ShipmentCard() {
  const shipment = { id: "PRZ-2207", customer: "Robert Kowalski", weightKg: 1.2 };
  const { id, customer, weightKg } = shipment;
  const costPln = weightKg * RATE_PLN_PER_KG;

  // TODO: Wyświetl przygotowane dane w karcie i sformatuj wagę oraz koszt.
  return (
    <p>
      Tutaj powstanie ShipmentCard: {id}, {customer}, {weightKg}, {costPln}
    </p>
  );
}
