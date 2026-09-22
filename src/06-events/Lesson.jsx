import OrderCard from "./components/OrderCard";
import "./events.css";
import { orders } from "./orders";

export default function Lesson() {
  return (
    <section className="panel">
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </section>
  );
}
