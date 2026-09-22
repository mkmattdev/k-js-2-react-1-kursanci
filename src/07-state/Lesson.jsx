////////
//// 7. Stan, czyli pamięć komponentu
////////
//
// Więcej o tym temacie: https://react.dev/learn/state-a-components-memory#meet-your-first-hook

import "./state.css";
import { orders } from "./orders";
import BrokenToggle from "./components/BrokenToggle";
import OrderCard from "./components/OrderCard";

// Pierwsza karta używa zwykłej zmiennej, więc kliknięcie nie odświeża jej widoku.
// Pozostałe karty korzystają z useState. Każda ma własny stan rozwinięcia.
export default function Lesson() {
  return (
    <section className="panel">
      <BrokenToggle />
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </section>
  );
}

// Błąd - useState wewnątrz if: zmiana warunku może zmienić kolejność lub liczbę wywołań hooków.

// Zmiana stanu przez funkcję z useState powoduje ponowne renderowanie komponentu.
