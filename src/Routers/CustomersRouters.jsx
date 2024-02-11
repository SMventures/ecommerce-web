import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Cart from '../components/Cart/Cart';
import Wishlist from '../components/Wishlist/Wishlist'
import Checkout from '../components/Checkout/Checkout';
import Order from '../components/Orders/Order';
import OrderDetail from '../components/Orders/OrderDetail';
import Header from '../components/Header/header';
import Home from '../components/Home/home';
import { Box } from "@mui/material";

const CustomerRouters = () => {
  return (
    <div className="">        
    <Header/>
       
       {/* <Box style={{marginTop:54}}>
         <Home/>
       </Box> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
      </Routes>
       <Footer /> 
    </div>
  );
};

export default CustomerRouters;
