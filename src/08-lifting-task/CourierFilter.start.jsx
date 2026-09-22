// Zadanie: filtr kuriera
//
// Przyciski wyboru kuriera są już widoczne. Połącz je z listą przesyłek,
// aby po wybraniu kuriera zostały na niej tylko jego przesyłki.
//
// Stan filtra jest już przygotowany w komponencie nadrzędnym.
// Przyjmij w CourierFilter dwa propsy: activeCourier i onCourierChange.
// Po kliknięciu przycisku wywołaj onCourierChange, przekazując jego value.
// Przycisk, którego value odpowiada activeCourier, powinien mieć dodatkową
// klasę button--active. Użyj operatora ? : i zachowaj podstawową klasę button.
//
// Sprawdź efekt: kliknięcie "DPD" powinno zaznaczyć ten przycisk i pozostawić
// na liście tylko przesyłki DPD. Sprawdź też pozostałych kurierów.
// Przycisk "Wszyscy" powinien ponownie pokazać całą listę.
//
// Edytuj: src/08-lifting-task/CourierFilter.start.jsx
// W src/App.jsx ustaw import: import Lesson from "./08-lifting-task/Task";
// W JSX pozostaw <Lesson />.

const couriers = [
  { value: "all", label: "Wszyscy" },
  { value: "DPD", label: "DPD" },
  { value: "InPost", label: "InPost" },
  { value: "DHL", label: "DHL" },
];

export default function CourierFilter() {
  // TODO: Odbierz propsy, obsłuż kliknięcia i wyróżnij wybranego kuriera.
  return (
    <div className="filters">
      {couriers.map(({ value, label }) => (
        <button key={value} className="button">
          {label}
        </button>
      ))}
    </div>
  );
}
