import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Sixth.module.css';

function Sixth() {
  const navigate = useNavigate();
  const { setQuestion } = useAction();
  const { question } = useTypedSelector((state) => state.PariState);

  return (
    <div>
      <h3>self-deception protection</h3>
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
          the timer is reset to 1 hour.
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="2"
            checked={question == '2' ? true : false}
            onChange={(e) => setQuestion(e.target.value)}
          />
          the timer is reset completely.
        </label>
      </div>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate('/q/5')}>next</button>
    </div>
  );
}

export default Sixth;
