import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface BookCoverProps {
  image: string;
  header: string;
}

function BookCover({ image, header }: BookCoverProps) {
  const { setBookHeader, setBookCover } = useAction();
  const { bookHeader } = useTypedSelector((state) => state.PariState);

  return (
    <li
      onClick={() => (setBookHeader(header), setBookCover(image))}
      className={bookHeader == header ? styles.bookActive : styles.bookNoActive}>
      <img className={styles.bookCover} src={image} />
    </li>
  );
}

export default BookCover;
