export default function OrderCard({ id, customer, note, totalPln }) {
  return (
    <article className="card">
      <h3 className="card__title">{id}</h3>
      <p className="card__row">Klient: {customer}</p>
      <p className="card__row">Uwagi: {note}</p>
      <p className="card__total">Razem: {totalPln.toFixed(2)} zł</p>
    </article>
  );
}
