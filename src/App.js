import "./App.css";

import image from "./us1.png";

import { useState } from "react";

function MyNavbar() {
  return (
    <>
      <div className="nav">
        {/* <img className="logo" src={image} alt="" srcset="" /> */}

        {/* <div className="rside-nav">
        <p className="nav-text">
          <a href=".main">home</a>
        </p>
        <p className="nav-text">
          <a href=".about">about us</a>
        </p>
        <p className="nav-text">
          <a href=".services">services</a>
        </p>
        
      </div> */}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <title>EcoConnect</title>
      <div className="App">
        <title>EcoConnect</title>
        <header className="navbar">
          <MyNavbar />
        </header>
        <div className="main">
          <div className="lside-main">
            <h1 className="name">EcoConnect</h1>
            <p className="name-text">
              At EcoConnect, We provide modular tech kits designed to be
              accessible to all students, including those with disabilities.
              Each kit features recyclable materials and supports hands-on
              projects like solar-powered devices and urban gardens along with
              an online platform. By partnering with educational institutions
              and leveraging eco-friendly practices, EcoConnect is committed to
              promoting a sustainable future and STEM education. Join us in
              shaping a greener, more inclusive world.
            </p>
            <div className="btn">
              <button className="learn-more">Learn more!</button>
            </div>
          </div>
          <div className="imgone">
            <img className="imgone1" src={image} alt="Logo" />
          </div>
        </div>
        <h1 className="aboutt">About Us</h1>

        <div className="about">
          <div className="texta">
            <p className="texta">
              "EcoConnect" is a modular, customizable tech kit that includes a
              range of easy-to-use tools and materials for creating sustainable
              projects. Each kit comes with components that can be assembled
              into various eco-friendly projects (individual as well as
              collaboration based projects so that kids of different backgrounds
              can come together to work), such as solar-powered devices, water
              filtration systems, or small-scale urban gardens.
            </p>
          </div>
        </div>
        <h1 className="servicess">Our Services</h1>
        <div className="services">
          <div className="texta">
            <p className="texta">
              The kit is designed to be accessible to everyone, including those
              with physical or cognitive disabilities. "EcoConnect" is more than
              just a product, it is a catalyst for change as by providing
              inclusive, hands-on learning experiences, EcoConnect helps bridge
              the educational gap for students with diverse needs by making STEM
              education available to everyone, ensuring that everyone has the
              opportunity to learn and develop skill education. The kit can be
              used in community centers to bring people together, fostering
              collaboration across different backgrounds and abilities and
              inspires the next generation of innovators to develop solutions
              for a more sustainable future.
            </p>
          </div>
        </div>
        <h1 className="vision">Our Vision</h1>
        <div className="texta">
          <p className="texta">
            "EcoConnect" integrates practical and theoretical learning with
            eco-friendly kits, addressing education gaps through hands-on
            projects. By promoting teamwork and cultural understanding, we
            enhance critical skills and encourage students to engage in
            sustainability efforts, preparing them to lead in developing
            sustainable solutions.
          </p>
        </div>
        <h1 className="vision">Our Mission</h1>
        <div className="texta">
          <p className="texta">
            "EcoConnect" empowers youth with inclusive STEM education tools,
            bridging the accessibility gap with hands-on materials for learners
            with disabilities. We foster skill development in technology,
            engineering, and environmental science, preparing students for
            future careers and inspiring them to contribute to a sustainable
            future.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
