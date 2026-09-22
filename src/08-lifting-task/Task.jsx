import { useState } from "react";
import "./lifting.css";
import { shipments } from "./shipments";
import CourierFilter from "./CourierFilter.start";
import ShipmentList from "./ShipmentList";

// Gotowy podgląd zadania. Edytujemy CourierFilter.start.jsx.
export default function Task() {
  const [activeCourier, setActiveCourier] = useState("all");

  const visibleShipments =
    activeCourier === "all"
      ? shipments
      : shipments.filter(({ courier }) => courier === activeCourier);

  return (
    <section className="panel">
      <CourierFilter activeCourier={activeCourier} onCourierChange={setActiveCourier} />
      <p className="panel__summary">Pokazanych: {visibleShipments.length}</p>
      <ShipmentList shipments={visibleShipments} />
    </section>
  );
}
