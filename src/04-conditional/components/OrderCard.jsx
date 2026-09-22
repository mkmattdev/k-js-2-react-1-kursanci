const PRIORITY_PLN = 1000;

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
      <p className="card__total">Razem: {totalPln.toFixed(2)}</p>
    </article>
  );
}

// BEM - metodyka nazywania klas CSSowych - "B - block, E - element, M - modifier"
// block__element--modifier

// Np. card, badge - to są bloki
// card__header, card__title - to są elementy
// card--ok, card--warn - to są modyfikatory

// ANTY-PATTERNY
// 1. block__element1__element2 <- NIE MOZNA
// 2. <article className="card--ok"></article>
