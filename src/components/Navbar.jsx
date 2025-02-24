import icon from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import useStore from "../helpers/store";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <nav
      id="navbar"
      className="flex lg:h-screen lg:w-[103px] lg:flex-col h-[72px] sm:h-[80px] w-screen flex-row bg-3 lg:rounded-r-2xl justify-between"
    >
      <div
        id="icon-container"
        className="relative z-1 flex lg:h-[103px] lg:w-[103px] h-full w-20 bg-1 rounded-r-2xl"
      >
        <div
          id="2nd-color"
          className="h-10 lg:h-[51.5px] w-full bg-2 rounded-br-2xl rounded-tl-2xl self-end"
        ></div>

        <img
          id="icon"
          src={icon}
          alt="logo"
          className="absolute z-10 top-6 left-6 lg:top-8 lg:left-7 lg:h-10 lg:w-[37.7px] h-[31px] w-[29px]"
        />
      </div>

      <div
        id="mode-profile"
        className="flex flex-row lg:flex-col space-between h-full w-32 mr-7 lg:h-[117px] lg:w-[103px] justify-between lg:mb-4 items-center"
      >
        <button
          id="mode"
          onClick={toggleDarkMode}
          className="transition-all duration-300"
        >
          {darkMode ? (
            <img src={sun} alt="change mode icon" className="h-5 w-5" />
          ) : (
            <img src={moon} alt="change mode icon" className="h-5 w-5" />
          )}
        </button>

        <div
          id="divisor"
          className="h-full w-[1px] lg:w-full lg:h-[1px] bg-divisor"
        ></div>

        <button>
          <img
            id="profile"
            src={avatar}
            alt=""
            className="rounded-full h-8 w-8 lg:h-10 lg:w-10"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
