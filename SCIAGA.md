# Ściąga

Tutaj znajdziemy krótkie wyjaśnienia tematów z zajęć. Przykłady kodu są w katalogach lekcji.

## 01. Komponent

Komponent to funkcja, która opisuje fragment widoku za pomocą JSX. Zapisujemy go w osobnym pliku
o tej samej nazwie i eksportujemy przez `export default`. Nazwę komponentu zaczynamy wielką literą.

W JSX używamy komponentu podobnie jak znacznika HTML: `<OrderCard />`. Taki zapis wystarczy,
gdy nie przekazujemy niczego między znacznikami otwierającym i zamykającym. Nazwa zaczynająca się
małą literą jest traktowana jako znacznik HTML, więc React nie wywoła naszej funkcji.

## 02. JSX

JSX przypomina HTML. W klamrach `{}` możemy umieszczać wyrażenia JavaScriptu, np. odczytać zmienną,
wywołać metodę albo zbudować tekst za pomocą backticków. Dłuższe obliczenia wykonujemy przed `return`,
a ich wyniki wykorzystujemy w JSX.

```jsx
const { customer, email, unitPricePln, itemCount } = order;
const totalPln = unitPricePln * itemCount;

return (
  <>
    <a href={`mailto:${email}`}>{customer}</a>
    <p>Razem: {totalPln.toFixed(2)} zł</p>
  </>
);
```

Pamiętamy o trzech zasadach: sąsiadujące elementy obejmujemy wspólnym elementem, piszemy `className`
zamiast `class` i zamykamy każdy znacznik, także `<br />`. Jeśli nie potrzebujemy dodatkowego
elementu HTML, możemy objąć zawartość fragmentem `<>...</>`.

Arkusz CSS dołączamy przez import, np. `import "./jsx.css";`. Lekcja 01 nie korzysta ze stylów.

## 03. Propsy

Propsy to dane przekazywane do komponentu. Funkcja komponentu otrzymuje je jako obiekt.
Potrzebne pola odczytujemy przez destrukturyzację parametru. Możemy też podać wartości domyślne:
`function OrderCard({ id, note = "brak uwag" })`.

Tekst przekazujemy w cudzysłowie, a liczbę lub zmienną w klamrach. Komponent odczytuje propsy,
ale ich nie zmienia. Nowe wartości przekazuje mu rodzic.

## 04. Warunki

Operator warunkowy `? :` wybiera jedną z dwóch wartości. Za pomocą `&&` możemy pokazać element
tylko wtedy, gdy warunek jest spełniony.

```jsx
<article className={`card ${isPaid ? "card--ok" : "card--warn"}`}>
  {note && <p>Uwagi: {note}</p>}
</article>
```

Uważamy na liczby po lewej stronie `&&`. Wyrażenie `{unpaidCount && <p>Nieopłacone zamówienia</p>}`
wyświetli `0`, gdy licznik wynosi zero. React pomija `false`, ale wyświetla liczby.
Zapis `{unpaidCount > 0 && <p>Nieopłacone zamówienia</p>}` rozwiązuje ten problem.

Zapis `<OrderCard {...order} />` przekazuje pola obiektu `order` jako osobne propsy.

## 05. Listy i klucze

Listę elementów możemy utworzyć przez `map`. Dla każdej pozycji w tablicy zwracamy JSX opisujący
to, co ma się pojawić w widoku.

`key` pozwala Reactowi rozpoznać element listy przy kolejnych renderowaniach, również po zmianie
kolejności. Wybieramy stabilną wartość z danych, np. identyfikator, i przekazujemy ją na elemencie
zwracanym bezpośrednio z `map`. Nie umieszczamy jej dopiero wewnątrz komponentu karty.

Indeks tablicy zmienia się po usunięciu lub przesunięciu elementu. Użycie go jako `key` może wtedy
spowodować, że React przypisze stan komponentu do innej pozycji. W naszych listach używamy identyfikatorów.

## 06. Zdarzenia

Do `onClick` przekazujemy funkcję obsługującą kliknięcie: `onClick={handlePack}`.
Zapis `onClick={handlePack()}` od razu wywołuje funkcję podczas renderowania i przekazuje jej wynik
zamiast samej funkcji.

Jeśli przy kliknięciu chcemy wywołać funkcję z argumentem, używamy funkcji strzałkowej:
`onClick={() => handlePack(id)}`. React wywoła ją dopiero po kliknięciu.

## 07. Stan

Sama zmiana zwykłej zmiennej nie powoduje ponownego renderowania. W konsoli możemy zobaczyć
jej nową wartość, chociaż widok pozostanie bez zmian. Do przechowywania wartości wpływających
na widok używamy stanu.

```js
const [isOpen, setIsOpen] = useState(false);
```

`useState` to jeden z hooków Reacta. Zwraca bieżącą wartość oraz funkcję, przez którą zlecamy
jej zmianę. Wywołujemy go na najwyższym poziomie funkcji komponentu, poza warunkami i pętlami.

Każda wyświetlona instancja komponentu ma własny stan. Jeśli kilka kart korzysta z tego samego
komponentu, otwarcie jednej nie otwiera pozostałych.

## 08. Podnoszenie stanu

Gdy kilka komponentów potrzebuje tej samej informacji, przechowujemy stan w ich wspólnym rodzicu.
To nazywamy podnoszeniem stanu. Rodzic przekazuje dzieciom dane oraz funkcję, którą mogą wywołać
w odpowiedzi na działanie użytkownika, np. przez propsy `activeStatus` i `onStatusChange`.

Dziecko wywołuje przekazaną funkcję, a rodzic aktualizuje stan i przekazuje nowe wartości.
Nazwy takich propsów zaczynamy od `on`.

Przefiltrowanej listy nie zapisujemy jako osobnego stanu, jeśli możemy ją obliczyć z danych
i wybranego filtra. Wyliczamy ją przy renderowaniu. Z tego układu będziemy korzystać w projekcie.
