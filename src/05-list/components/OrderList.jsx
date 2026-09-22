import { orders } from "../orders";
import OrderCard from "./OrderCard";

export default function OrderList() {
  return (
    <ul className="list">
      {orders.map((order) => (
        // .map -> robimy zmianę danego elementu z tablicy orders.js na <OrderCard /> (JS -> JSX)
        <li key={order.id}>
          <OrderCard {...order} />
        </li>
      ))}
    </ul>
  );
}
