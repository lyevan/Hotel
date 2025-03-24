import bg from "../assets/background.png";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

function Home() {
  return (
    <>
      <div
        className='h-screen w-sreen text-white'
        style={{ fontFamily: "Nunito" }}
      >
        <div
          className='h-screen min-h-full absolute w-full bg-cover bg-center bg-no-repeat bg-fixed z-20'
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: "0",
          }}
        >
          {/* Overlay for background image */}
          <div
            className='h-screen min-h-full w-full absolute bg-cover bg-center bg-no-repeat bg-fixed top-0 left-0'
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>

          <div
            className='h-auto w-full flex justify-start items-center flex-col absolute top-4/12'
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <Welcome />
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Home;
