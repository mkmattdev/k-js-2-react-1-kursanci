import OrderList from "./components/OrderList";
import { orders } from "./orders";
import "./list.css";

export default function Lesson() {
  return (
    <section className="panel">
      <h2 className="panel__title">Zamówień {orders.length}</h2>
      <OrderList />
    </section>
  );
}
