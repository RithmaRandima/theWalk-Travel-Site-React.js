import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import NavbarBottom from "./Components/NavbarBottom/NavbarBottom";
import Hero from "./Components/Hero/Hero";
import Activites from "./Components/Activities/Activites";
import Booking from "./Components/BookingSection/Booking";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Packages from "./Components/Packages/Packages";
import AboutDetails from "./Components/AboutDetails/AboutDetails";
import StayingHotel from "./Components/StayingHotels/StayingHotel";
import Events from "./Components/Events/Events";
import Offer from "./Components/Offer/Offer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarBottom />
      <Hero />
      <Activites />
      <AboutDetails />
      <Offer />
      <Booking />
      <Packages />
      <Gallery />
      <StayingHotel />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
