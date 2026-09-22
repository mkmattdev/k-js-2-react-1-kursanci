////////
//// Zadanie: filtr kuriera, rozwiązanie
////////

const couriers = [
  { value: "all", label: "Wszyscy" },
  { value: "DPD", label: "DPD" },
  { value: "InPost", label: "InPost" },
  { value: "DHL", label: "DHL" },
];

export default function CourierFilter({ activeCourier, onCourierChange }) {
  return (
    <div className="filters">
      {couriers.map(({ value, label }) => (
        <button
          key={value}
          className={`button ${value === activeCourier ? "button--active" : ""}`}
          onClick={() => onCourierChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
