////////
//// Zadanie: karta przesyłki z danymi z obiektu, rozwiązanie
////////

import "./jsx.css";

const RATE_PLN_PER_KG = 15;

export default function ShipmentCard() {
  const shipment = { id: "PRZ-2207", customer: "Robert Kowalski", weightKg: 1.2 };
  const { id, customer, weightKg } = shipment;
  const costPln = weightKg * RATE_PLN_PER_KG;

  return (
    <article className="card">
      <h3 className="card__title">{id}</h3>
      <p className="card__row">Klient: {customer}</p>
      <p className="card__row">Waga: {weightKg.toFixed(1)} kg</p>
      <p className="card__row">Koszt: {costPln.toFixed(2)} zł</p>
    </article>
  );
}
