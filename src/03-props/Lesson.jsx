import OrderCard from "./components/OrderCard";
import "./props.css";

export default function Lesson() {
  const lastCustomer = "Mateusz Lis";

  return (
    <section className="panel">
      <OrderCard id="ZAM-1042" customer="Anna Nowak" totalPln={6999.5} note="Zostawić u sąsiada" />
      <OrderCard id="ZAM-1043" customer="Robert Kowalski" totalPln={79} />
      <OrderCard
        id="ZAM-1044"
        customer={lastCustomer}
        totalPln={1249.9}
        note="Dzwonić przed dostawą"
      />
    </section>
  );
}
