import * as React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import BookCover from '../../Components/BookCover';
import styles from './style.module.css';
import { booksArray } from '../../Components/BooksArray';

function First() {
  const navigate = useNavigate();
  const [pariState, setPariState] = useState();
  const [activeBook, setActiveBook] = useState();
  const { bookHeader } = useTypedSelector((state) => state.PariState);

  return (
    <div className={styles.container}>
      <h1>choose a book</h1>
      <h4>{bookHeader}</h4>
      <ul>
        {booksArray.map((item, index) => (
          <BookCover image={item.image} header={item.header} key={index} />
        ))}
      </ul>
      <button onClick={() => navigate('/q')}>next</button>
    </div>
  );
}

export default First;
