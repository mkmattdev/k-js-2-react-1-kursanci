// W parametrze funkcji odczytujemy konkretne pola z obiektu propsów.
// Dla note ustawiamy wartość domyślną, używaną wtedy, gdy ten props nie został przekazany
// lub ma wartość undefined.
export default function OrderCard({ id, customer, totalPln, note = "brak uwag" }) {
  return (
    <article className="card">
      <h3 className="card__title">{id}</h3>
      <p className="card__row">Klient: {customer}</p>
      <p className="card__row">Uwagi: {note}</p>
      <p className="card__total">Razem: {totalPln.toFixed(2)} zł</p>
    </article>
  );
}
