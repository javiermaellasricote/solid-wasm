import { createSignal } from 'solid-js';

export const App = () => {
  const [count, setCount] = createSignal(0);
  const [sumAmount, setSumAmount] = createSignal(1);

  return (
    <div>
      <h1>{count()} + {sumAmount()} = { getSum(count(), sumAmount()) }</h1>
      <h1>{count()} + {sumAmount()} = { getSum(count(), sumAmount()) }</h1>
      <h1>{count()} + {sumAmount()} = { getSum(count(), sumAmount()) }</h1>
      <h1>{count()} + {sumAmount()} = { getSum(count(), sumAmount()) }</h1>
      <button onClick={() => setCount(count() + 1)}>First</button>
      <button onClick={() => setSumAmount(sumAmount() + 1)}>Second</button>
    </div>
  );
}
