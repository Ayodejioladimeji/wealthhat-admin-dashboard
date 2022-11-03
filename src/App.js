import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import ScrollToTop from './common/ScrollToTop';
import Alert from './common/alert/Alert';
import { all_users } from './redux/actions/usersAction';

function App() {
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(all_users());
  }, [dispatch]);

  //
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Alert />
        <Router />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
