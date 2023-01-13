import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (evemt) => setKeyword(evemt.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log({ counter });
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
