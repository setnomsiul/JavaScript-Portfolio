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
            <h1 className="bio-title">AD Enterprice</h1>
            <p className="bio-description">
              Futuristic Commpany that will revolutionise the website development in 2030's.
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
