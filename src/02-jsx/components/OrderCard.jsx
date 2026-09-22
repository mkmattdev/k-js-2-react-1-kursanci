export default function OrderCard() {
  const order = {
    id: "ZAM-1042",
    customer: "Anna Nowak",
    email: "anna.nowak@sklep.pl",
    unitPricePln: 3499.75,
    itemCount: 2,
  };

  const { id, customer, email, unitPricePln, itemCount } = order;
  const totalPln = unitPricePln * itemCount;

  return (
    <article className="card">
      <h3 className="card__title">{id}</h3>
      <p className="card__row">
        Klient: <a href={`mailto:${email}`}>{customer}</a>
      </p>
      <p className="card__row">
        Sztuk: {itemCount}, cena: {unitPricePln.toFixed(2)} zł <br />
        Razem: {totalPln.toFixed(2)}
      </p>
    </article>
  );
}
