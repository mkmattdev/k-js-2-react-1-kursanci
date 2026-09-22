// Ten przykład celowo używa zwykłej zmiennej zamiast stanu, więc wyłączamy dla niego regułę lintera.
// oxlint-disable react/immutability

export default function BrokenToggle() {
  // Zmiana zwykłej zmiennej nie powoduje ponownego renderowania komponentu.
  let isOpen = false;

  const handleToggle = () => {
    isOpen = !isOpen;
    console.log("isOpen =", isOpen);
  };

  return (
    <article className="card card--warn">
      <div className="card__header">
        <h3 className="card__title">ZAM-1041 (zwykła zmienna)</h3>
        <button className="button" onClick={handleToggle}>
          Szczegóły
        </button>
      </div>
      {isOpen && <p className="card__row">Tego nigdy nie zobaczymy.</p>}
    </article>
  );
}
