// Do onClick przekazujemy funkcję handlePack. React wywoła ją po kliknięciu przycisku.
// Zapis handlePack() wywołałby ją od razu podczas renderowania.
// Funkcja korzysta z id i customer przekazanych w propsach.
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
      <p className="card__total">Razem: {totalPln.toFixed(2)} zł</p>
    </article>
  );
}
