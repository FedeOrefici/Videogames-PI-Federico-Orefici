import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Welcome from "./components/Welcome";

function App() {

  const location = useLocation();

  return (
    <Fragment>
      {(location.pathname === '/') ? <Welcome /> : <Navbar /> }
        <Routes>
          <Route  path='/dogs' element={<Index />} />
          <Route path='/dogs/create' element={<Create />} />
          <Route path='/dogs/:id' element={<Detail />} />
        </Routes>
    </Fragment>
  );
}

export default App;
