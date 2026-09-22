////////
//// 6. Zdarzenia
////////
//
// Więcej o tym temacie: https://react.dev/learn/responding-to-events

import "./events.css";
import { orders } from "./orders";
import OrderCard from "./components/OrderCard";

// Klikamy "Spakuj" na obu kartach. W konsoli zobaczymy dane wybranego zamówienia.
export default function Lesson() {
  return (
    <section className="panel">
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </section>
  );
}

// Błąd - onClick={handlePack()}: funkcja wykona się podczas renderowania, zamiast po kliknięciu.

// Do onClick przekazujemy funkcję. React wywoła ją po kliknięciu przycisku.
