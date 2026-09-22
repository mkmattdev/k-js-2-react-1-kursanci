export default function OrderCard({ id, customer, totalPln, isPaid }) {
  return (
    <article className={`card ${isPaid ? "card--ok" : "card--warn"}`}>
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <span className={`badge ${isPaid ? "badge--ok" : "badge--warn"}`}>
          {isPaid ? "Opłacone" : "Czeka na płatność"}
        </span>
      </div>
      <p className="card__row">Klient: {customer}</p>
      <p className="card__total">Razem: {totalPln.toFixed(2)} zł</p>
    </article>
  );
}
