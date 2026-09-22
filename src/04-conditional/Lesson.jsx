import OrderCard from "./components/OrderCard";
import "./conditional.css";
import { orders } from "./orders";

export default function Lesson() {
  const unpaidCount = orders.filter((order) => !order.isPaid).length;

  return (
    <section className="panel">
      <OrderCard {...orders[0]} />
      <OrderCard {...orders[1]} />
      <OrderCard {...orders[2]} />
      {unpaidCount > 0 && <p className="panel__summary">Nieopłaconych: {unpaidCount}</p>}
    </section>
  );
}
