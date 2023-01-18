import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Locations from "./Components/ReserveComponents/Locations";
import Signin from "./Components/MainPage/Signin";
import SignUp from "./Components/MainPage/SignUp/SignUp";
import Home from "./Components/MainPage/Home/Home";
import MyProfileLeftSide from "./Components/MyProfileLeftSide/MyProfileLeftSide";
import MyProfile from "./Components/MyProfile/MyProfile";
import Space from "./Components/MyProfile/Space/Space";
import Profile from "./Components/ProfilePage/Profile";
import DateSelect from "./Components/CalendarPage/DateSelect";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import UsersLocations from "./Components/ReserveComponents/UsersLocations";
import Community from "./Components/ReserveComponents/Community";
import Userpayment from "./Components/ReserveComponents/Userpayment";
import Thankyou from "./Components/Thankyou/Thankyou";
import List from "./Components/ReserveComponents/List"
import BookTour from "./Components/BookTour/BookTour";
import { Component, useEffect } from "react";
import AddSpace from "./Components/AddSpaceTab/AddSpace";
import PreviousBooking from "./Components/ProfilePage/PreviousBooking";
import { useSpaceContext } from './context/SpaceContext';
import axios from 'axios'


function App() {

  const { setAllSpaces,allSpaces } = useSpaceContext();

  const getAllSpaces = async () => {
    try {
      // const { data } = await axios.get(`${REACT_APP_API_BACKEND}/spaces`);
      // 'http://localhost:3100/spaces');      
      const { data } = await axios.get(`https://real-red-gosling-hose.cyclic.app/spaces`);
      setAllSpaces(data);
      console.data("data   ", data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getAllSpaces();
  },[]);


  return (
    <div>
<BrowserRouter>
      <Navbar />
      { 
   allSpaces ?
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<List />} />
        <Route path="/locations/:searchKey" element={<Locations />} />
        {/* <Route path="/community" element={<Community />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myprofileftside" element={<MyProfileLeftSide />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/space" element={<Space />} />
        <Route path="/space/:id" element={<Space />} />
        <Route path="/space/:id/select-date" element={<DateSelect />} />
        <Route path="/enter-details" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/space/:id/book-tour" element={<BookTour />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/UsersLocations" element={<UsersLocations />} />
        <Route path="/Userpayment" element={<Userpayment />} /> 
        <Route path="/thank-you" element={<Thankyou />} /> 
        <Route path="/add-space" element={<AddSpace />} />
        <Route path="/prev-bookings" element={<PreviousBooking />} />

      </Routes>
      : <h3>"Loading ...."</h3>
      }
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;
