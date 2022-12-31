import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Book.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';

function Book() {
  const { bookHeader, bookCover, countHours, countDays, money, sleep, question, test } =
    useTypedSelector((state) => state.PariState);

  const loc = useLocation();

  const force = ['low', 'middle', 'strong'];

  return (
    <div className={styles.container}>
      <img src={bookCover} />
      <div className={styles.aboutBook}>
        {/* <p>{bookHeader}</p> */}
        {countHours ? <p> Read: {countHours} hours</p> : ''}
        {countDays ? <p>Need: {countDays} days</p> : ''}
        {Number(money) > 0 && !['/book', '/book/1'].includes(loc.pathname) ? (
          <p>bet: {money}</p>
        ) : (
          ' '
        )}
        {!['/book', '/book/1', '/book/2'].includes(loc.pathname) ? (
          <>
            <p>
              <b> protection </b>
            </p>{' '}
            <p> sleep: {force[Number(sleep)]}</p>
          </>
        ) : (
          ''
        )}
        {!['/book', '/book/1', '/book/2', '/book/3'].includes(loc.pathname) ? (
          <p>questions: {force[Number(question)]}</p>
        ) : (
          ''
        )}
        {!['/book', '/book/1', '/book/2', '/book/3', '/book/4'].includes(loc.pathname) ? (
          <p>test: {force[Number(test)]}</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Book;
