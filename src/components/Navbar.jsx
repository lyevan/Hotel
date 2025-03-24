import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between w-full p-5 text-white sticky top-0 left-0 pl-10 pr-10 z-20'>
        <a href='../../index.html'>
          <span
            className='block text-6xl font-extrabold'
            style={{
              fontFamily: "Bilbo Swash Caps",
              transform: "translateY(1rem)",
            }}
          >
            Arandia's
          </span>
          <small className='block text-sm font-semibold uppercase text-right'>
            Bembang Place
          </small>
        </a>

        <ul
          id='nav-links'
          className='flex gap-10 font-semibold uppercase text-sm'
        >
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Rooms</a>
          </li>
          <li>
            <a href=''>Resto & Bar</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
