////////
//// Zadanie: karta przesyłki na propsach, rozwiązanie
////////

export default function ShipmentCard({ id, customer, courier, weightKg, note = "brak uwag" }) {
  return (
    <article className="card">
      <h3 className="card__title">{id}</h3>
      <p className="card__row">Klient: {customer}</p>
      <p className="card__row">Kurier: {courier}</p>
      <p className="card__row">Waga: {weightKg.toFixed(1)} kg</p>
      <p className="card__row">Uwagi: {note}</p>
    </article>
  );
}
