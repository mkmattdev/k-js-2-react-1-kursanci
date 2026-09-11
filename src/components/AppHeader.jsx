import "./AppHeader.css";

export default function AppHeader({ title, subtitle }) {
  return (
    <header className="app-header">
      <h1 className="app-header__title">{title}</h1>
      <p className="app-header__subtitle">{subtitle}</p>
    </header>
  );
}
