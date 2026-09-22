const statuses = [
  { value: "all", label: "Wszystkie" },
  { value: "paid", label: "Opłacone" },
  { value: "unpaid", label: "Nieopłacone" },
];

// Rodzic przekazuje wybrany status w activeStatus oraz funkcję onStatusChange do jego zmiany.
// Po kliknięciu wywołujemy tę funkcję z wartością wybranego statusu.
// Początek nazwy "on" to konwencja stosowana dla propsów obsługujących zdarzenia.
export default function StatusFilter({ activeStatus, onStatusChange }) {
  return (
    <div className="filters">
      {statuses.map(({ value, label }) => (
        <button
          key={value}
          className={`button ${value === activeStatus ? "button--active" : ""}`}
          onClick={() => onStatusChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
