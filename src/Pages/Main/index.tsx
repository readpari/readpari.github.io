import * as React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import BookCover from '../../Components/BookCover';
import styles from './styles.module.css';
import { booksArray } from '../../Components/BooksArray';
import { useAction } from '../../hooks/useAction';
import Counter from '../../Components/Counter';

export function ChoiceBook() {
  const navigate = useNavigate();
  const [pariState, setPariState] = useState();
  const [activeBook, setActiveBook] = useState();
  const { bookHeader } = useTypedSelector((state) => state.PariState);
  const { setBookHeader, setBookCover } = useAction();

  return (
    <div className={styles.container}>
      <h1>choose a book</h1>
      <ul>
        {booksArray.map((item, index) => (
          <li key={index} onClick={() => (setBookHeader(item.header), setBookCover(item.image))}>
            <img
              className={[
                styles.bookCover,
                bookHeader == item.header ? styles.bookActive : styles.bookNoActive,
              ].join(' ')}
              src={item.image}
            />
          </li>
        ))}
      </ul>
      <h4>{bookHeader}</h4>
      <button onClick={() => navigate('/book')}>next</button>
    </div>
  );
}

//  2222222222222222222222222222222222222222

export function HoursCount() {
  const navigate = useNavigate();

  const { bookHeader, bookCover, countHours } = useTypedSelector((state) => state.PariState);
  const { setBookHeader, setBookCover, setCountHours } = useAction();
  console.log(countHours);

  return (
    <div className={styles.container}>
      <div className="question">
        <p>How long will you read this book?</p>
        <Counter count={countHours} setCount={setCountHours} word={'hours'} />
      </div>
      <div className={styles.butttonContainer}>
        <button onClick={() => navigate(-1)}>backd</button>
        <button onClick={() => navigate('/book/1')} disabled={countHours == 0}>
          next
        </button>
      </div>
    </div>
  );
}

//33333333333333333333333333333333333333333333333333333333

export function DaysCount() {
  const navigate = useNavigate();

  const { countDays, countHours } = useTypedSelector((state) => state.PariState);
  const { setCountDays, setCountHours } = useAction();

  return (
    <div className={styles.container}>
      <div className="question">
        <p>How many days will it take you ?</p>
        <Counter count={countDays} setCount={setCountDays} word={'days'} />
      </div>

      <div className={styles.butttonContainer}>
        <button onClick={() => navigate(-1)}>backd</button>
        <button onClick={() => navigate('/book/2')} disabled={countDays == 0}>
          next
        </button>
      </div>
    </div>
  );
}

//444444444444444444444444444444444444444444444444444444444444444

export function MoneyCount() {
  const navigate = useNavigate();

  const { money, countDays, countHours } = useTypedSelector((state) => state.PariState);
  const { setMoney } = useAction();

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <p>
          How much are you willing to bet on an event that you read {countHours} hours in{' '}
          {countDays} days?
        </p>
        <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} />
      </div>

      <div className={styles.butttonContainer}>
        <button onClick={() => navigate(-1)}>backd</button>
        <button onClick={() => navigate('/book/3')} disabled={Number(money) <= 0}>
          next
        </button>
      </div>
    </div>
  );
}

//5555555555555555555555555555555555555555555555555555555555555555555555555

export function SleepProtection() {
  const navigate = useNavigate();
  const { setSleep } = useAction();
  const { sleep } = useTypedSelector((state) => state.PariState);
  useEffect(() => {
    console.log(2222, sleep);
  }, [sleep]);
  return (
    <div className={styles.container}>
      <p>If you fell asleep and stopped turning pages</p>
      <div className={styles.containerRadio}>
        <label>
          <input
            type="radio"
            name="radio"
            value="0"
            checked={sleep == '0' ? true : false}
            onChange={(e) => setSleep(e.target.value)}
          />
          the timer pauses
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="1"
            checked={sleep == '1' ? true : false}
            onChange={(e) => setSleep(e.target.value)}
          />
          the timer is reset
        </label>
      </div>
      <div className={styles.butttonContainer}>
        <button onClick={() => navigate(-1)}>backd</button>
        <button onClick={() => navigate('/book/4')}>next</button>
      </div>
    </div>
  );
}

//6666666666666666666666666666666666666666666666666666666666666666666666

export function Question() {
  const navigate = useNavigate();
  const { setQuestion } = useAction();
  const { question } = useTypedSelector((state) => state.PariState);

  return (
    <div className={styles.container}>
      <p>The question comes up from time to time with answer options. If you answer incorrectly</p>
      <div className={styles.containerRadio}>
        <label>
          <input
            type="radio"
            name="radio"
            value="0"
            checked={question == '0' ? true : false}
            onChange={(e) => setQuestion(e.target.value)}
          />
          Nothing happens
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="1"
            checked={question == '1' ? true : false}
            onChange={(e) => setQuestion(e.target.value)}
          />
          the timer is reset.
        </label>
      </div>
      <div className={styles.butttonContainer}>
        <button onClick={() => navigate(-1)}>backd</button>
        <button onClick={() => navigate('/book/5')}>next</button>
      </div>
    </div>
  );
}

//777777777777777777777777777777777777777777777777777

export function Test() {
  const navigate = useNavigate();
  const { setTest } = useAction();
  const { test } = useTypedSelector((state) => state.PariState);

  return (
    <div className={styles.container}>
      <p>Test at the end. More than 3 wrong answers:</p>
      <div className={styles.containerRadio}>
        <label>
          <input
            type="radio"
            name="radio"
            value="0"
            checked={test == '0' ? true : false}
            onChange={(e) => setTest(e.target.value)}
          />
          Nothing happens. Complete the pari, and get your money back
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="2"
            checked={test == '2' ? true : false}
            onChange={(e) => setTest(e.target.value)}
          />
          The timer is reset.
        </label>
      </div>
      <div className={styles.butttonContainer}>
        <button onClick={() => navigate(-1)}>backd</button>
        <button onClick={() => navigate('/book/6')}>next</button>
      </div>
    </div>
  );
}

export function Final() {
  const navigate = useNavigate();

  return (
    <div>
      <p>If you lose, you will lose money.</p>
      <p>If you win you will get your money back</p>
      <div className={styles.butttonContainer}>
        <button onClick={() => navigate('/')}>next</button>
      </div>
    </div>
  );
}

