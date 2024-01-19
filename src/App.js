import './App.css'
import Home  from "./components/Home";
import Contact from './components/Contact'
import { ProductsListing } from './components/Productlist';
import { ProductDetails } from './components/Productdetails';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navigation  from './nav/Navbar';

import { ProductEditPage } from './components/Producteditpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products" element={<ProductsListing />} />
  
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/:productId&edit" element={<ProductEditPage />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Outlet />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
