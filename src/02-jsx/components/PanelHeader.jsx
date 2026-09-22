// Fragment <> </> pozwala zwrócić kilka elementów razem.
// Sam fragment nie dodaje żadnego elementu do HTML, w przeciwieństwie do <div>.
export default function PanelHeader() {
  return (
    <>
      <h1 className="panel__title">Panel zamówień</h1>
      <p className="panel__subtitle">Zamówienia z ostatnich siedmiu dni</p>
    </>
  );
}
