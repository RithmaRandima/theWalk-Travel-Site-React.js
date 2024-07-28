import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Packages from "./Components/Packages/Packages";
import AboutUs from "./Components/AboutUs/AboutUs";
import VideoSection from "./Components/VideoSection/VideoSection";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import PopularDestinations from "./Components/PopularDestinations/PopularDestinations";
import NewsLetterTwo from "./Components/NewsLetterTwo/NewsLetterTwo";
import DestinationPicker from "./Components/DestinationPicker/DestinationPicker";
import Blog from "./Components/Blog/Blog";
import TestimonialsAndStaff from "./Components/TestimonialsAndStaff/TestimonialsAndStaff";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <PopularDestinations />
      <VideoSection />
      <NewsLetter />
      <DestinationPicker />
      <Packages />
      <NewsLetterTwo />
      <Blog />
      <TestimonialsAndStaff />
      <Footer />
    </div>
  );
}

export default App;
