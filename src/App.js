import Header from "./components/Header";
import About from "./components/About";
import Instructor from "./components/Instructor";
// import Testimonials from './compoents/Testimonials'
import Review from "./components/Review";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import jsonData from './data/data.json'

function App() {

  return (
    <div className="App">
      <Header course = {jsonData.course} instructor = {jsonData.instructor}  />
      <div>
      <About course = {jsonData.course}/>
      <Instructor aboutInstructor = {jsonData.about_instructor}  />
      </div>
      <Review testimonials = {jsonData.testimonial}/>
    </div>
  );
}

export default App;
