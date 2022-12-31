import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './Redux';

import NotFound from './Pages/NotFound';

import Layout from './Components/Layout';
import {
  ChoiceBook,
  DaysCount,
  HoursCount,
  MoneyCount,
  Question,
  SleepProtection,
  Test,
  Final,
} from './Pages/Main';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<ChoiceBook />} />

            <Route path="/book" element={<Layout />}>
              <Route index element={<HoursCount />} />
              <Route path="1" element={<DaysCount />} />
              <Route path="2" element={<MoneyCount />} />
              <Route path="3" element={<SleepProtection />} />
              <Route path="4" element={<Question />} />
              <Route path="5" element={<Test />} />
              <Route path="6" element={<Final />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
