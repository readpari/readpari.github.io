import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Fifth.module.css';

function Fifth() {
  const navigate = useNavigate();
  const { setSleep } = useAction();
  const { sleep } = useTypedSelector((state) => state.PariState);

  return (
    <div>
      <h3>self-deception protection</h3>
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
          the timer is reset to 1 hour.
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="2"
            checked={sleep == '2' ? true : false}
            onChange={(e) => setSleep(e.target.value)}
          />
          the timer is reset completely.
        </label>
      </div>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate('/q/4')}>next</button>
    </div>
  );
}

export default Fifth;
