////////
//// 5. Listy i klucze
////////
//
// Więcej o tym temacie: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

import "./list.css";
import { orders } from "./orders";
import OrderList from "./components/OrderList";

// Metoda map tworzy element JSX dla każdego zamówienia. Jej użycie zobaczymy w OrderList.
export default function Lesson() {
  return (
    <section className="panel">
      <h2 className="panel__title">Zamówień: {orders.length}</h2>
      <OrderList />
    </section>
  );
}

// Błąd - key={index}: po usunięciu pierwszego zamówienia pozostałe zmienią klucze.
// React może wtedy powiązać stan karty z innym zamówieniem.

// Identyfikator zamówienia jest dobrym kluczem, bo nie zmienia się razem z pozycją na liście.
