import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/vgbs.png" alt="VGBS™ 2024" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#highlights" className="page-scroll">
                Our Highlights
              </a>
            </li>
            <li>
              <a href="#events" className="page-scroll">
                Key Events
              </a>
            </li>
            <li>
              <a href="#featured" className="page-scroll">
                Featured Speakers
              </a>
            </li>
            <li>
              <a href="#partners" className="page-scroll">
                Strategic Partners
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
