import React from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <React.Fragment>
      <div className="super_container">
        <Navbar />
        <Home />
        <Footer />
      </div>

    </React.Fragment>

  );
}

export default App;
