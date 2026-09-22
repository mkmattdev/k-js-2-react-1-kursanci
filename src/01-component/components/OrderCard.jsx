// Nazwę komponentu zaczynamy dużą literą i tak samo nazywamy jego plik.
// Tag z małej litery React traktuje jak element HTML, więc nie wywoła naszej funkcji.
export default function OrderCard() {
  return (
    <article>
      <h3>ZAM-1042</h3>
      <p>Klient: Anna Nowak</p>
      <p>Razem: 6999.50 zł</p>
    </article>
  );
}
