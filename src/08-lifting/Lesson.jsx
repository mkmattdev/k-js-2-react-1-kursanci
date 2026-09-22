////////
//// 8. Podnoszenie stanu do rodzica
////////
//
// Więcej o tym temacie: https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

import { useState } from "react";
import "./lifting.css";
import { orders } from "./orders";
import StatusFilter from "./components/StatusFilter";
import OrderList from "./components/OrderList";

// Filtr i lista potrzebują wybranego statusu, dlatego przechowujemy go w ich wspólnym rodzicu.
// Listę pasujących zamówień obliczamy na podstawie tego stanu przy każdym renderowaniu.
export default function Lesson() {
  const [activeStatus, setActiveStatus] = useState("all");

  const visibleOrders = orders.filter(({ isPaid }) => {
    if (activeStatus === "paid") return isPaid;
    if (activeStatus === "unpaid") return !isPaid;
    return true;
  });

  return (
    <section className="panel">
      <StatusFilter activeStatus={activeStatus} onStatusChange={setActiveStatus} />
      <p className="panel__summary">Pokazanych: {visibleOrders.length}</p>
      <OrderList orders={visibleOrders} />
    </section>
  );
}

// Rodzic przekazuje dzieciom dane i funkcję, którą mogą wywołać, żeby zgłosić zmianę.
