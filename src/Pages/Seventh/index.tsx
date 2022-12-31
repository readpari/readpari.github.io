import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Seventh.module.css';

function Seventh() {
  const navigate = useNavigate();
  const { setTest } = useAction();
  const { test } = useTypedSelector((state) => state.PariState);

  return (
    <div>
      <h3>self-deception protection</h3>
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
          Complete the pari, and get your money back
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="1"
            checked={test == '1' ? true : false}
            onChange={(e) => setTest(e.target.value)}
          />
          Take the test again
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="2"
            checked={test == '2' ? true : false}
            onChange={(e) => setTest(e.target.value)}
          />
          the timer is reset completely.
        </label>
      </div>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate('/q/6')}>next</button>
    </div>
  );
}

export default Seventh;
