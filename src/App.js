import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/Authentication/Authentication";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element=<Navigation />>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
