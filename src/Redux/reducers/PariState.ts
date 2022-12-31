import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { booksArray } from '../../Components/BooksArray';

interface PariStateType {
  bookHeader: string;
  bookCover: string;
  countHours: number;
  countDays: number;
  money: string;
  sleep: string;
  question: string;
  test: string;
}

const initialState = {
  bookHeader: booksArray[0]['header'],
  bookCover: booksArray[0]['image'],
  countHours: 0,
  countDays: 0,
  money: '0',
  sleep: '0',
  question: '0',
  test: '0',
};
const PariState = createSlice({
  name: 'PariState',
  initialState,
  reducers: {
    //first

    setBookHeader(state, action: PayloadAction<string>) {
      state.bookHeader = action.payload;
    },
    setBookCover(state, action: PayloadAction<string>) {
      state.bookCover = action.payload;
    },

    //Second

    setCountHours(state, action: PayloadAction<number>) {
      state.countHours += action.payload;
      if (state.countHours < 0) state.countHours = 0;
    },

    //Third
    setCountDays(state, action: PayloadAction<number>) {
      state.countDays += action.payload;
      if (state.countDays < 0) state.countDays = 0;
    },
    setMoney(state, action: PayloadAction<string>) {
      state.money = action.payload;
    },
    setSleep(state, action: PayloadAction<string>) {
      state.sleep = action.payload;
    },
    setQuestion(state, action: PayloadAction<string>) {
      state.question = action.payload;
    },
    setTest(state, action: PayloadAction<string>) {
      state.test = action.payload;
    },
  },
});

export default PariState.reducer;
export const {
  setBookHeader,
  setBookCover,
  setCountHours,
  setCountDays,
  setMoney,
  setSleep,
  setQuestion,
  setTest,
} = PariState.actions;
