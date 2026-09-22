const PRIORITY_PLN = 1000;

// Operator ? : wybiera klasę i tekst zależnie od isPaid. Nazwy klas łączymy w zapisie z backtickami.
// Warunki z && pozwalają pokazać uwagi oraz informację o zamówieniu o wartości co najmniej PRIORITY_PLN.
export default function OrderCard({ id, customer, totalPln, isPaid, note }) {
  return (
    <article className={`card ${isPaid ? "card--ok" : "card--warn"}`}>
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <span className={`badge ${isPaid ? "badge--ok" : "badge--warn"}`}>
          {isPaid ? "Opłacone" : "Czeka na płatność"}
        </span>
      </div>
      <p className="card__row">Klient: {customer}</p>
      {note && <p className="card__row">Uwagi: {note}</p>}
      {totalPln >= PRIORITY_PLN && <p className="card__row">Priorytet: duże zamówienie</p>}
      <p className="card__total">Razem: {totalPln.toFixed(2)} zł</p>
    </article>
  );
}
