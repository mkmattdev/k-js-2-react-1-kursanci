import OrderCard from "./components/OrderCard";
import PanelHeader from "./components/PanelHeader";
import "./jsx.css";

export default function Lesson() {
  return (
    <section className="panel">
      <PanelHeader />
      <OrderCard />
    </section>
  );
}
