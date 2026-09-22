////////
//// 1. Komponent, czyli funkcja, która zwraca ekran
////////
//
// Więcej o tym temacie: https://react.dev/learn/your-first-component

import PanelHeader from "./components/PanelHeader";
import OrderCard from "./components/OrderCard";

// Komponent umieszczamy w JSX jako znacznik z dużej litery.
// Jeśli nie przekazujemy nic między znacznikami, możemy użyć krótkiego zapisu <OrderCard />.
export default function Lesson() {
  return (
    <section>
      <PanelHeader />
      <OrderCard />
      <OrderCard />
    </section>
  );
}

// Ten sam komponent możemy umieścić na stronie kilka razy.
