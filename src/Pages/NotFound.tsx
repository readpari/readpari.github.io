import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>to behin</button>
    </div>
  );
}

export default NotFound;
