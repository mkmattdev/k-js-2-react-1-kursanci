import "./App.css";
import AppHeader from "./components/AppHeader";
import { orders } from "./data/orders";

// Tutaj zaczynamy. Własne komponenty wstawiamy do src/components/, dane do src/data/.
export default function App() {
  return (
    <div className="app">
      <AppHeader title="Projekt React" subtitle="Tu powstaje nasza aplikacja" />

      <main>
        <p>Zamówień w danych startowych: {orders.length}</p>
      </main>
    </div>
  );
}
