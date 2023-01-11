import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Locations from "./Components/ReserveComponents/Locations";
//  import Community from "./Components/MainPage/Community";
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



function App() {
  return (
    <div>
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations/:searchKey" element={<Locations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/myprofileftside" element={<MyProfileLeftSide />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/space" element={<Space />} />
        <Route path="/space/:id" element={<Space />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/select-date" element={<DateSelect />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/UsersLocations" element={<UsersLocations />} />
        <Route path="/Userpayment" element={<Userpayment />} /> 
        <Route path="/thank-you" element={<Thankyou />} /> 
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;
