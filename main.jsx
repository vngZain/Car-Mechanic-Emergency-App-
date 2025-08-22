import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Reservation from './Reservation.jsx';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import History from './History.jsx';
import AboutUs from './AboutUs.jsx';
import DrinksMenu from './DrinksMenu.jsx';
import NewMenu from './NewMenu.jsx';
import MenuPage from './MenuPage.jsx';
import FoodMenu from './FoodMenu.jsx';
import DrinksMenuList from './DrinksMenuList.jsx';
import LoginPageNext from './HomePageNext.jsx';
import ResetPassword from './ResetPassword.jsx';
import UpdateBooking from './UpdateBooking.jsx';
import DeleteBooking from './DeleteBooking.jsx';
import ReadBooking from './ReadBooking.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import Overview from './Overview.jsx';
import Ambience from './Ambience.jsx';
import ChefTroop from './ChefTroop.jsx';
import ContactUs from './ContactUs.jsx';
import Career from './Career.jsx';
import Location from './Location.jsx';
import Timeline from './TimeLine.jsx';
import Bookingtable from './Bookingtable.jsx';



const MenuPageWithNavigate = () => {
  const navigate = useNavigate();
  return <MenuPage navigate={navigate} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Bookingtable" element={<Bookingtable />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/" element={<HomePage />} />
        <Route path="ChefTroop" element={<ChefTroop />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/next" element={<LoginPageNext />} />
        <Route path="/reservation" element={<Reservation />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPageWithNavigate />} />
        <Route path="/D1" element={<DrinksMenu />} />
        <Route path="/newmenu" element={<NewMenu />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/drinksmenu" element={<DrinksMenuList />} />
        <Route path="/update-booking" element={<UpdateBooking />} />
        <Route path="/delete-booking" element={<DeleteBooking />} />
        <Route path="/read-booking" element={<ReadBooking />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/ambience" element={<Ambience />} />
      </Routes>
    </Router>
  </StrictMode>
);
