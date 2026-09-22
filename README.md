# React, wprowadzenie

Wprowadzenie do Reacta na kursie **JavaScript Developer II (K-JS-2)**. Materiały z dnia
wprowadzającego: osiem lekcji i osiem krótkich zadań razem z rozwiązaniami. Po zajęciach
zaczynamy projekt, w którym poznamy kolejne możliwości Reacta.

Czysty JavaScript, bez TypeScriptu. React 19, Vite 8, oxlint.

## Uruchomienie

```bash
npm install
npm run dev
```

Vite wypisze adres, zwykle `http://localhost:5173`. To okno zostawiamy otwarte, bo po każdym
zapisie pliku strona odświeży się sama.

W `src/App.jsx` wybieramy, co chcemy zobaczyć w przeglądarce:

```jsx
import Lesson from "./01-component/Lesson";

export default function App() {
  return <Lesson />;
}
```

**Zmieniamy tylko ścieżkę w imporcie.** Nazwa `Lesson` i zapis `<Lesson />` zostają takie same.
Dla każdego tematu mamy dwa pliki do uruchamiania. Zadanie jest w osobnym katalogu:

| Co chcemy zobaczyć | Przykładowa ścieżka importu  |
| ------------------ | ---------------------------- |
| Przykład z zajęć   | `./04-conditional/Lesson`    |
| Zadanie            | `./04-conditional-task/Task` |

W `App.jsx` zostawiamy jeden aktywny import. `Task.jsx` przygotowuje cały widok zadania
i importuje komponent z pliku `.start.jsx`. Żeby zobaczyć rozwiązanie, zmieniamy w `Task.jsx`
import z `.start` na `.solution`, np. `./ShipmentCard.start` na `./ShipmentCard.solution`.
Najpierw rozwiązujemy zadanie samodzielnie, a rozwiązanie otwieramy do porównania.

Pozostałe przydatne polecenia:

```bash
npm run lint
npm run build
npm run preview
```

`lint` sprawdza kod, `build` przygotowuje aplikację do publikacji, a `preview` pozwala
obejrzeć wynik ostatniego builda.

## Struktura

Każda lekcja ma obok osobny katalog zadania z przyrostkiem `-task`. Na przykład:

```text
src/04-conditional/
  Lesson.jsx                    przykład z zajęć
  conditional.css               style lekcji
  orders.js                     dane do przykładu
  components/
    OrderCard.jsx               komponent używany w przykładzie

src/04-conditional-task/
  Task.jsx                      gotowy widok zadania
  ShipmentCard.start.jsx        plik, który uzupełniamy
  ShipmentCard.solution.jsx     rozwiązanie
  conditional.css               style zadania
```

Główny komponent każdej lekcji nazywa się `Lesson`. W katalogu zadania `Task.jsx` importuje
komponent z pliku `.start.jsx` i przygotowuje potrzebne dane i style. **Pracujemy w pliku
`.start.jsx` wskazanym w treści zadania**, np. `src/04-conditional-task/ShipmentCard.start.jsx`.

Jeden komponent zapisujemy w jednym pliku. Nie każda lekcja ma `orders.js`: w lekcjach 01,
02 i 03 dane są wpisane bezpośrednio w kodzie. Zadania 05 i 08 korzystają z danych
w plikach `shipments.js`, które leżą bezpośrednio w ich katalogach `-task`. Potrzebne komponenty
pomocnicze również znajdują się w katalogu danego zadania.

Poza katalogami lekcji i zadań w `src/` są tylko `App.jsx` i `main.jsx`. Każda lekcja i każde zadanie
mają własne pliki i nie importują niczego z pozostałych katalogów. Rozwijamy ten sam przykład
panelu zamówień, ale zachowujemy osobny kod dla każdego etapu. Dzięki temu możemy wrócić
do dowolnej lekcji bez szukania jej zależności w innych katalogach.

W plikach `.jsx` znajdziemy kod i krótkie komentarze. Wyjaśnienia tematów są w [SCIAGA.md](SCIAGA.md).

## Kolejność

Nowe elementy Reacta poznajemy po kolei: propsy w lekcji 03, `useState` w lekcji 07,
a podnoszenie stanu w lekcji 08. Korzystamy przy tym z JavaScriptu poznanego wcześniej:
destrukturyzacji, zapisu z backtickami, `filter`, `map` i operatora warunkowego `? :`.

W lekcji 01 używamy tylko statycznego JSX, bez wyrażeń w klamrach i bez `className`.
Wyrażenia JavaScriptu w JSX oraz pierwszy arkusz CSS pojawiają się w lekcji 02.

## Style

Każda lekcja od 02 ma własny plik CSS. `Lesson.jsx` importuje arkusz bezpośrednio.
W katalogu `-task` znajduje się osobna kopia tego arkusza, z której korzystają zadanie i rozwiązanie.
Dzięki temu możemy zmieniać style zadania niezależnie od przykładu z zajęć. Nie ma wspólnego arkusza CSS.

## Plan dnia

Wszystkie ścieżki w tabeli odnoszą się do importu w `src/App.jsx`. Aby zobaczyć rozwiązanie,
w `Task.jsx` danego zadania zmieniamy import z `.start` na `.solution`.

| #   | Temat                                    | Przykład z zajęć          | Zadanie                      |
| --- | ---------------------------------------- | ------------------------- | ---------------------------- |
| 01  | Komponent jako funkcja zwracająca JSX    | `./01-component/Lesson`   | `./01-component-task/Task`   |
| 02  | JSX i wyrażenia JavaScriptu w klamrach   | `./02-jsx/Lesson`         | `./02-jsx-task/Task`         |
| 03  | Przekazywanie danych przez propsy        | `./03-props/Lesson`       | `./03-props-task/Task`       |
| 04  | Warunki `? :`, `&&` i wyświetlanie zera  | `./04-conditional/Lesson` | `./04-conditional-task/Task` |
| 05  | Tworzenie list przez `map` i dobór `key` | `./05-list/Lesson`        | `./05-list-task/Task`        |
| 06  | Obsługa kliknięć przez `onClick`         | `./06-events/Lesson`      | `./06-events-task/Task`      |
| 07  | Zapamiętywanie wartości przez `useState` | `./07-state/Lesson`       | `./07-state-task/Task`       |
| 08  | Wspólny stan w komponencie rodzica       | `./08-lifting/Lesson`     | `./08-lifting-task/Task`     |

**Przykłady dotyczą zamówień, a zadania przesyłek.** Korzystamy z mechanizmu poznanego na zajęciach
w podobnej sytuacji. Każde zadanie skupia się na temacie lekcji, np. przekazywaniu propsów
albo tworzeniu listy przez `map`. Gotowe fragmenty kodu pozwalają skupić się na tym jednym temacie.

## Czego tu nie ma

Na kolejny etap zostawiamy `useEffect`, pobieranie danych z sieci, formularze, stan jako migawkę,
aktualizowanie tablic w stanie, Context, własne hooki i routing. Będziemy je poznawać przy pracy
nad projektem.

Nie dodajemy też obsługi błędów renderowania. Gdy po zmianie kodu widok przestanie działać,
sprawdzamy komunikat w przeglądarce i jej konsoli.

## Nowy projekt od zera

Instrukcja przygotowania takiego projektu od zera to [SETUP-REACT.pdf](SETUP-REACT.pdf).

## Pomoc czatu

W [PROMPT.md](PROMPT.md) znajduje się prompt dla tutora. Wklejamy go na początku rozmowy z czatem,
a następnie przesyłamy całą treść zadania i własny kod.

## Konwencje

Nazwy plików, komponentów, zmiennych i propsów zapisujemy po angielsku. Nazwa pliku komponentu
zaczyna się wielką literą. Komentarze i teksty w aplikacji piszemy po polsku.

SCREAMING_SNAKE_CASE stosujemy tylko dla skalarnych stałych konfiguracyjnych z jednostką,
np. `PRIORITY_PLN`. Obiekty i tablice z danymi nazywamy w camelCase, np. `orders`, `shipment`.

Przykłady błędów są w komentarzach oznaczonych `Błąd -`. Wyjątkiem jest `BrokenToggle` w lekcji 07:
uruchamiamy go, żeby zobaczyć, dlaczego zmiana zwykłej zmiennej nie odświeża widoku.
