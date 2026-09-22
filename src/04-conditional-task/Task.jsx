import "./conditional.css";
import ShipmentCard from "./ShipmentCard.start";

// Gotowy podgląd zadania. Edytujemy ShipmentCard.start.jsx.
export default function Task() {
  return (
    <section className="panel">
      <ShipmentCard
        id="PRZ-2207"
        customer="Robert Kowalski"
        isDelivered={true}
        note="Odebrał sąsiad"
      />
      <ShipmentCard id="PRZ-2208" customer="Anna Nowak" isDelivered={false} />
    </section>
  );
}
