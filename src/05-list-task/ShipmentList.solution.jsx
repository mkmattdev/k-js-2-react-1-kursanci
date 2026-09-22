////////
//// Zadanie: lista przesyłek, rozwiązanie
////////

import "./list.css";
import { shipments } from "./shipments";
import ShipmentCard from "./ShipmentCard";

export default function ShipmentList() {
  return (
    <section className="panel">
      <h2 className="panel__title">Przesyłek: {shipments.length}</h2>
      <ul className="list">
        {shipments.map((shipment) => (
          <li key={shipment.id}>
            <ShipmentCard {...shipment} />
          </li>
        ))}
      </ul>
    </section>
  );
}
