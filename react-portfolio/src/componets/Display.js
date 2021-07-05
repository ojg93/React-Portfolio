import React from "react";

function ShowPortfolio() {
  return (
    <nav class="navbar navbar-light bg-light">
            <div className="container-fluid nav-container flex-row">
                <div id="about-me">
                    <a className="navbar-brand" href="#about-me-info">About Me</a>
                </div>
                <div id="work">
                    <a className="navbar-brand" href="#work-info">Work</a>
                </div>
                <div id="contact-me">
                    <a className="navbar-brand" href="#contact-me-info">Contact Me</a>
                </div>
            </div>
          </nav>
  );
}

export default ShowPortfolio;
