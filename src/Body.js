import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import HomeL from "./Autentication/HomeL";
import App from "./App";
import Recipe from "./pages/Recipe";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Home from "./pages/Home";
import { auth } from "./Autentication/firebase";
import { Protected } from "./Autentication/Protected";
import ShimmerUI from "./components/ShimmerUI";

const Body = () => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <ShimmerUI />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomeL user={user}></HomeL>}></Route>
        <Route
          path="/app"
          element={
            <Protected user={user}>
              <App></App>
            </Protected>
          }
        ></Route>

        <Route
          path="/recipe/:name"
          element={
            <Protected user={user}>
              <Recipe></Recipe>
            </Protected>
          }
        ></Route>

        <Route
          path="/recipe-app-api"
          element={
            <Protected user={user}>
              <Home></Home>
            </Protected>
          }
        ></Route>
        <Route
          path="/cuisine/:type"
          element={
            <Protected user={user}>
              <Cuisine></Cuisine>
            </Protected>
          }
        ></Route>
        <Route
          path="/searched/:search"
          element={
            <Protected user={user}>
              <Searched></Searched>
            </Protected>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
