////////
//// Zadanie: karta przesyłki ze statusem, rozwiązanie
////////

export default function ShipmentCard({ id, customer, isDelivered, note }) {
  return (
    <article className={`card ${isDelivered ? "card--ok" : "card--warn"}`}>
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <span className={`badge ${isDelivered ? "badge--ok" : "badge--warn"}`}>
          {isDelivered ? "Dostarczona" : "W drodze"}
        </span>
      </div>
      <p className="card__row">Klient: {customer}</p>
      {note && <p className="card__row">Uwagi: {note}</p>}
    </article>
  );
}
