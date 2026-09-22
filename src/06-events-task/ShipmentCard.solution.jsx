////////
//// Zadanie: przycisk nadania, rozwiązanie
////////

import "./events.css";

export default function ShipmentCard() {
  const shipment = { id: "PRZ-2207", customer: "Robert Kowalski", courier: "InPost" };
  const { id, customer, courier } = shipment;

  const handleSend = () => console.log(`Nadajemy ${id} przez ${courier}`);

  return (
    <article className="card">
      <div className="card__header">
        <h3 className="card__title">{id}</h3>
        <button className="button" onClick={handleSend}>
          Nadaj
        </button>
      </div>
      <p className="card__row">
        Klient: {customer}, kurier: {courier}
      </p>
    </article>
  );
}
