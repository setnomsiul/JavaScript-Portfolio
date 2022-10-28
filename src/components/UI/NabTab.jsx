import React from "react";
import "./NabTab.css";

function NabTab() {
  return (
    <div className="container-fluid tab-body">
      <ul className="nav nav-tabs nav-justified" id="myTab" role="tabList">
        <li className="nav-item">
          <a
            href="#home"
            className="nav-link active"
            role="tab"
            aria-cotrols="home"
            aria-selected="true"
            id="home-tab"
            data-toggle="tab"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#profile"
            className="nav-link"
            role="tab"
            aria-cotrols="profile"
            aria-selected="true"
            id="profile-tab"
            data-toggle="tab"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#content"
            className="nav-link"
            role="tab"
            aria-cotrols="content"
            aria-selected="true"
            id="content-tab"
            data-toggle="tab"
          >
            Content
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpannel"
          aria-labelledby="home-tab"
        >
          <div className="container">
            <h1 className="bio-title">Who am I</h1>
            <p className="bio-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit et repudiandae ipsam dolorem neque ad aperiam labore
              rem aliquid molestiae quae adipisci autem dignissimos dolores
              culpa asperiores, a corporis suscipit?
            </p>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabPanel"
          aria-labellby="profile-tab"
        >
          .....
        </div>
      </div>
    </div>
  );
}

export default NabTab;
