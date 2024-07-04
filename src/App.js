import { Route, Routes } from "react-router-dom";
import "./App.css";
// import RecipeReviewCard from './cars/car';
// import SignUp from './signup/signup';
// import SignIn from './signin/SignIn';
// import SellCar from './sellCar/sellCar';
// import ShowCar from './showCar/showCar';
// import Side from './accordion/side';
// import Profile from "./profile/profile";
// import Showroom from "./showrooms profile/showrooms";
import Summary from "./summary/summary";
import Nav from "./Nav/Nav";
import SignUp from "./signup/signup";

function App() {
  return (
    <>
    {/* h */}
    <Nav/>
    <Routes>
<Route element={<Summary/>} path='/arabic'/>
<Route element={<SignUp/>} path='/signup/:id'/>
    </Routes>
      {/* <appRouter />
      <Summary /> */}
      {/* <Profile /> */}
      {/* <Showroom /> */}
      {/* <Side /> */}
      {/* <SellCar /> */}
      {/* <ShowCar /> */}
    </>
  );
}

export default App;
