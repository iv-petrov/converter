import './App.css';
import { useState } from 'react';
import MyCurrency from './Components/MyCurrency';

function App() {
  const [fromCurrency, setFrom] = useState(0); 
  const [toCurrency, setTo] = useState(0);
  const [amount, setAmount] = useState(0.0);
  const [result, setResult] = useState(0.0);

  function calcResult() {
    if (fromCurrency === "0") {
      alert("Не выбрана валюта для конвертации");
      return;
    }
    if (toCurrency === "0") {
      alert("Не выбрана валюта, в которую конвертируем");
      return;
    }
    if (Math.fround(amount) <= 0) {
      alert("Задано неверное количество конвертируемой валюты");
      return;
    }
    setResult(Math.round(Math.fround(amount) * Math.fround(fromCurrency) / Math.fround(toCurrency) * 100) / 100);
  }

  return (
    <form className="sel-form" onSubmit={(e) => e.preventDefault()}>
      <div className="App">
        <header className="App-header">
          <h1>Конвертер валют</h1>
        </header>
        <p> </p>
        <MyCurrency label='Выберите валюту, из которой конвертируем' value={fromCurrency} change={(e) => setFrom(e.target.value)} />
        <p> </p>
        <MyCurrency label='Выберите валюту, в которую конвертируем' value={toCurrency} change={(e) => setTo(e.target.value)} />
        <p> </p>
        <label>Введите количество исходной валюты:
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <p> </p>
        <label>
          <button onClick={calcResult} type="submit" >Рассчитать</button> Результат = {result}
        </label>
      </div>
    </form>
  );
}

export default App;
