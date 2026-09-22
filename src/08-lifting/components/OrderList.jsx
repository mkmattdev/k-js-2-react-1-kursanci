import OrderCard from "./OrderCard";

export default function OrderList({ orders }) {
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
