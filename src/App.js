import { useEffect, useState } from "react";

function App() {
  const [load, setLoad] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((Response) => Response.json())
      .then((json) => {
        setCoin(json);
        setLoad(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins</h1>
      {load ? <strong>Loading...</strong> : null}
      <ul>
        {coin.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
