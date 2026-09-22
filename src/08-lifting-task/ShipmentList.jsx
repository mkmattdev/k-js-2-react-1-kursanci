import ShipmentCard from "./ShipmentCard";

// Lista przesyłek jest gotowa. Zadanie rozwiąż w pliku CourierFilter.start.jsx.
export default function ShipmentList({ shipments }) {
  return (
    <ul className="list">
      {shipments.map((shipment) => (
        <li key={shipment.id}>
          <ShipmentCard {...shipment} />
        </li>
      ))}
    </ul>
  );
}
