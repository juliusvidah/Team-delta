import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Home from "./components/home/Home";
import Nav from "./components/Nav/Nav";
import Categories from "./components/categories/Categories";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Contact from "./components/contact/Contact";
import EmailVerification from "./components/Emailverification/EmailVerification";
import PasswordResetForm from "./components/Passwordresetform/PasswordResetForm";
import StarRating from "./components/star-rating/StarRating";
import FAQ from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Description from "./components/description/Descrription";
import Recently from "./components/recently/Recently";
import Cart from "./components/cart/Cart";
import Account from "./components/Account/Account";


function App() {
  return (
    <>
       <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/how-it-works" element={<HowItWorks />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/star-rating" element={<StarRating />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/Account" element={<Account />}/>
          <Route path="/recently" element={<Recently />}/>
          <Route path="/description" element={<Description />}/>
          <Route path="/Passwordresetform" element={<PasswordResetForm />}/>
          <Route path="/Emailverification" element={<EmailVerification />}/>
        </Routes>
        <Footer/>

    </>
  );
}

export default App;