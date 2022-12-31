import * as setBookHeader from './PariState';
import * as setBookCover from './PariState';
import * as setCountHours from './PariState';
import * as setCountDays from './PariState';
import * as setMoney from './PariState';
import * as setSleep from './PariState';
import * as setQuestion from './PariState';
import * as setTest from './PariState';

import * as signIn from './LoginReducer';
import * as signOut from './LoginReducer';

export default {
  //PariState
  ...setBookHeader,
  ...setBookCover,
  ...setCountHours,
  ...setCountDays,
  ...setMoney,
  ...setSleep,
  ...setQuestion,
  ...setTest,

  //LoginReducer
  ...signIn,
  ...signOut,
};
