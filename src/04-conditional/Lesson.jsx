////////
//// 4. Warunki w JSX
////////
//
// Więcej o tym temacie: https://react.dev/learn/conditional-rendering#logical-and-operator-

import "./conditional.css";
import { orders } from "./orders";
import OrderCard from "./components/OrderCard";

// Zapis {...order} przekazuje pola obiektu jako propsy, bez wypisywania każdego z osobna.
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

// Błąd - {unpaidCount && <p>}: gdy licznik wynosi 0, całe wyrażenie zwraca 0, które React wyświetla.

// Operator ? : wybiera jedną z dwóch wartości. Warunek logiczny przed && pozwala ukryć element.
