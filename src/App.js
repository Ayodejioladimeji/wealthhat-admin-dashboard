import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Components
import Router from "./routes/Router";
import ScrollToTop from "./common/ScrollToTop";
import Alert from "./common/alert/Alert";
import { loggedAgent } from "./redux/actions/usersAction";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // useEffect

  // get logged in agents
  useEffect(() => {
    if (token) {
      dispatch(loggedAgent(token));
    }
  }, [token, dispatch]);

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
