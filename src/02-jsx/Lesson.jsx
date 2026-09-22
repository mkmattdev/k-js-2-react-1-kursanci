////////
//// 2. JSX, czyli JavaScript w środku znaczników
////////
//
// Więcej o tym temacie: https://react.dev/learn/javascript-in-jsx-with-curly-braces

import "./jsx.css";
import PanelHeader from "./components/PanelHeader";
import OrderCard from "./components/OrderCard";

export default function Lesson() {
  return (
    <section className="panel">
      <PanelHeader />
      <OrderCard />
    </section>
  );
}

// Błąd - class zamiast className: React oczekuje nazwy className i wyświetli ostrzeżenie.
// Błąd - Razem: totalPln bez klamer: na ekranie pojawi się napis "totalPln", a nie wartość zmiennej.

// W klamrach JSX możemy używać wyrażeń JavaScriptu, np. zmiennych i wywołań funkcji.
