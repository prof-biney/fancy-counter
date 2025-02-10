export default function Count({ number }) {
  return (
    <div>
      <CountTitle />
      <p>{number}</p>
    </div>
  );
}

function CountTitle() {
  return <h2>Current count is:</h2>;
}
