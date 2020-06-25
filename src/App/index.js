import React, { Component } from "react";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Sally Student</h1>
          <h2>Contact</h2>
          <address>
            <p>email: <a href="mailto:sally@gmail.com">sally@gamil.com</a></p>
            <p>phone: 575-643-5000</p>
            <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="sally photo">
          </address>
        </header>
        <main>
          <section>
            <h2>Education</h2>
            <p>BA Economics - San Francisco State University </p>
          </section>
          <section>
            <h2>Employment</h2>
            <h3>Portal</h3>
            <h5>Server - Jan 2017-Present</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
            <h3>Longitude</h3>
            <h5>Server - May 2015-Jan 2017</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
