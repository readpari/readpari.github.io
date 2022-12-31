import React from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  count: number;
  setCount: Function;
  word: string;
}

function Counter({ count, setCount, word }: CounterProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => setCount(-1)}>-</button>
      <div className="count">
        {count} {word}
      </div>
      <button onClick={() => setCount(1)}>+</button>
    </div>
  );
}

export default Counter;
