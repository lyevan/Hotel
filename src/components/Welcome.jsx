import { useState } from "react";
import "./Welcome.css";

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <small
        className='uppercase text-white text-base'
        style={{ letterSpacing: "-1px", marginTop: "20px" }}
      >
        Enjoy your bembang holidays with a great luxury experience
      </small>
      <h1 className='text-6xl' style={{ fontFamily: "Permanent Marker" }}>
        Bembang all the way!
      </h1>

      {/* Smooth transition instead of display: none */}
      <div
        id='button-container'
        className={`gap-40 ${isVisible ? "show" : ""}`}
      >
        <span>
          <button className='btn'>
            Take a tour
            <i className='fa fa-chevron-right' aria-hidden='true'></i>
          </button>
        </span>
        <span>
          <button className='btn'>
            Learn more
            <i className='fa fa-chevron-right' aria-hidden='true'></i>
          </button>
        </span>
      </div>

      {/* Dropdown Arrow with onClick event */}
      <span id='dropdown-arrow'>
        <i
          className='fa fa-chevron-circle-down dropdown'
          aria-hidden='true'
          onClick={() => setIsVisible(!isVisible)}
          style={{
            transform: isVisible
              ? "translateY(0px) rotate(180deg)"
              : "translateY(20px)",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
        ></i>
      </span>
    </>
  );
}

export default Welcome;
