////////
//// Zadanie: potwierdzenie odbioru, rozwiązanie
////////

import { useState } from "react";
import "./state.css";

export default function ShipmentCard() {
  const [isDelivered, setIsDelivered] = useState(false);

  return (
    <article className={`card ${isDelivered ? "card--ok" : "card--warn"}`}>
      <div className="card__header">
        <h3 className="card__title">PRZ-2207</h3>
        <span className={`badge ${isDelivered ? "badge--ok" : "badge--warn"}`}>
          {isDelivered ? "Dostarczona" : "W drodze"}
        </span>
      </div>
      <p className="card__row">Klient: Robert Kowalski</p>
      {!isDelivered && (
        <button className="button" onClick={() => setIsDelivered(true)}>
          Potwierdź odbiór
        </button>
      )}
    </article>
  );
}
