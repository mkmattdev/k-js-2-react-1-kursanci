export default function OrderCard({ id, customer, totalPln }) {
  const handlePack = () => {
    console.log(`Pakujemy ${id} dla: ${customer}`);
  };

  return (
    <article className="card">
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <button className="button" onClick={handlePack}>
          Spakuj
        </button>
      </div>
      <p className="card__total">Razem: {totalPln.toFixed(2)}</p>
    </article>
  );
}
