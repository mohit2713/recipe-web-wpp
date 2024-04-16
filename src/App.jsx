import React from "react";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logos from "./my-recipes.svg";
import Home from "./pages/Home";
import { signOut } from "firebase/auth";
import { auth } from "./Autentication/firebase";

const App = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Logout"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App ">
      {/* <Blur></Blur> */}
      <div className="flex justify-between mt-8">
        <Logo to={"/app"}>
          <img
            alt="img"
            className="cursor-pointer z-[200px]"
            src={Logos}
            width="100px"
          />
        </Logo>
        <div className="mr-0 text-end">
          <button
            className=" cursor-pointer bg-[#3c009d] text-white p-2 rounded-md"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      </div>
      <hr style={{ opacity: 0.4 }} />

      <Search />
      <Category />
      <Home />
    </div>
  );
};
// const Blur = styled.div`
//   top: 0;
//   right: 0;
//   z-index: 0;
//   position: absolute;
//   width: 528px;
//   height: 505px;

//   background: linear-gradient(97.37deg, #f15b2b -15.03%, #ff0006 174.67%);
//   filter: blur(727px);
//   border-radius: 814px;
// `;
const Logo = styled(Link)`
  z-index: 200;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
// const Nav = styled.div`
//   cursor: pointer;
//   display: flex;
// `;
export default App;
