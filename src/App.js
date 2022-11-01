import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { all_product, get_categories } from './redux/actions/ProductAction';
import ScrollToTop from './common/ScrollToTop';
import Alert from './common/alert/Alert';

function App() {
  const dispatch = useDispatch();
  const { callback } = useSelector((state) => state.utils);

  // useEffect
  useEffect(() => {
    dispatch(all_product());
  }, [dispatch]);

  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch, callback]);

  //
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Alert />
        <Topbar />
        <Sidebar />
        <Router />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
