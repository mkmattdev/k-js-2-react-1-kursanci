# Projekt React

Surowy szkielet do projektu na kursie **JavaScript Developer II (K-JS-2)**.
Czysty JavaScript, bez TypeScriptu. React 19, Vite 8, oxlint.

Nie ma tu materiału do nauki. Jest tylko działający start, żeby nie tracić pierwszej godziny
na stawianie projektu. Układ plików i nazwy są takie same jak w blokach z dnia wprowadzającego.

## Uruchomienie

```bash
npm install
npm run dev
```

Vite wypisze adres, zwykle `http://localhost:5173`. To okno zostawiamy otwarte, bo po każdym
zapisie pliku strona odświeży się sama.

## Co jest w środku

```
src/
  App.jsx              korzeń aplikacji, tu składamy swoje komponenty
  App.css              podstawa strony, resztę dopisujemy sami
  main.jsx             podpięcie Reacta do strony, tego nie ruszamy
  components/
    AppHeader.jsx      przykładowy komponent, do przerobienia albo skasowania
    AppHeader.css      style tego komponentu, leżą obok niego
  data/
    orders.js          dane startowe, do podmiany na własne
```

Jeden komponent to jeden plik, nazwa pliku taka sama jak nazwa komponentu, z dużej litery,
i jeden `export default`. Nowe komponenty wrzucamy do `src/components/`. Komponent wywołujemy
tak jak tag HTML i robimy tzw. self closing tag, czyli `<AppHeader />`, a nie `<AppHeader></AppHeader>`.

Style komponentu trzymamy w pliku obok niego i importujemy w pierwszej linii, jak `AppHeader.css`.
Dzięki temu zawsze wiadomo, skąd bierze się wygląd.

Dane trzymamy poza komponentem, w `src/data/`, bo komponent ma wyświetlać, a nie przechowywać.
Obiekty i tablice z danymi nazywamy w camelCase, jak `orders`. Wielkie litery zostawiamy
skalarnym stałym z jednostką, jak `PRIORITY_PLN`.

## Zanim oddamy kod

```bash
npm run lint
npm run build
```

`lint` znajduje typowe błędy, `build` sprawdza, czy projekt w ogóle się złoży.
Gdy obie komendy przechodzą bez czerwonego, kod nadaje się do oddania.

## Ściąga z Reacta

Zdania do zapamiętania z dnia wprowadzającego stoją w materiałach kursowych, w pliku `SCIAGA.md`.
Wracamy tam, gdy coś się zatnie na propsach, listach albo stanie.
