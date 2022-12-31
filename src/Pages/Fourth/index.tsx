import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function Fourth() {
  const navigate = useNavigate();
  const { setMoney } = useAction();
  const { money, countHours, countDays } = useTypedSelector((state) => state.PariState);

  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>

      <div className="question">
        <p>
          How much are you willing to bet on an event that you read {countHours} hours in{' '}
          {countDays} days?
        </p>
        <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} />
      </div>

      <button onClick={() => Number(money) >= 0 && navigate('/q/3')}>next</button>
    </div>
  );
}

export default Fourth;
