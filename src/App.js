import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Booking from "./Components/BookingSection/Booking";
import Footer from "./Components/Footer/Footer";
// import Packages from "./Components/Packages/Packages";
import AboutDetails from "./Components/AboutDetails/AboutDetails";
// import StayingHotel from "./Components/StayingHotels/StayingHotel";
// import Events from "./Components/Events/Events";
import VideoSection from "./Components/VideoSection/VideoSection";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import PopularDestinations from "./Components/PopularDestinations/PopularDestinations";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Booking /> */}
      <AboutDetails />
      {/* <Packages /> */}
      <PopularDestinations />
      <VideoSection />
      <NewsLetter />
      {/* <StayingHotel /> */}
      {/* <Events /> */}
      <Footer />
    </div>
  );
}

export default App;
