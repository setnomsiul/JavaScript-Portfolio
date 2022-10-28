import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isWith, setIsWitdth] = useState("600px");
  const [isHeight, setIsHeight] = useState("600px");

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsWitdth("300px");
      setIsHeight("300px");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="container-fluid" style={{ backgroundColor: "#0A2E46" }}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_edoysgy6.json"
            background="#0A2E46"
            speed="1"
            style={{ width: { isWith }, height: { isHeight } }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h1 className="main-title">
            <span style={{ color: "red" }}>&lt;</span>Development
            <span style={{ color: "red" }}>&gt;</span>
            <br />
            Out of this World!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
