import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import ProductDetails from "../pages/ProductDetails"
import Login from "../pages/Login"

function AppRoutes() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes