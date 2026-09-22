// Zmieniamy tylko ścieżkę importu. Nazwa Lesson i <Lesson /> zostają bez zmian.
// Przykład: ./01-component/Lesson. Zadanie: ./01-component-task/Task.
// Rozwiązanie: w Task.jsx zmieniamy import z .start na .solution. Pozostałe ścieżki są w README.

import Lesson from "./01-component/Lesson";

export default function App() {
  return <Lesson />;
}
