import { orders } from "../orders";
import OrderCard from "./OrderCard";

// key pozwala Reactowi rozpoznać ten sam element, gdy lista się zmienia.
// Używamy stałego id zamówienia i przekazujemy key do <li>, bo ten element zwraca map.
export default function OrderList() {
  return (
    <ul className="list">
      {orders.map((order) => (
        <li key={order.id}>
          <OrderCard {...order} />
        </li>
      ))}
    </ul>
  );
}
