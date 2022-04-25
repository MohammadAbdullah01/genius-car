import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/LogIn/Login/Login";
import Register from "./Pages/LogIn/Register/Register";
import RequireAuth from "./Pages/LogIn/RequireAuth/RequireAuth";
import Manage from "./Pages/Manage/Manage";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>}></Route>
        <Route path='/addservice' element={<RequireAuth><AddService /></RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth><Manage /></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
