// Karta przesyłki jest gotowa. Zadanie rozwiąż w pliku CourierFilter.start.jsx.
export default function ShipmentCard({ id, customer, courier, isDelivered }) {
  return (
    <article className={`card ${isDelivered ? "card--ok" : "card--warn"}`}>
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <span className={`badge ${isDelivered ? "badge--ok" : "badge--warn"}`}>
          {isDelivered ? "Dostarczona" : "W drodze"}
        </span>
      </div>
      <p className="card__row">
        Klient: {customer}, kurier: {courier}
      </p>
    </article>
  );
}
