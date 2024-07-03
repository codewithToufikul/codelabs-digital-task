import { NavLink } from 'react-router-dom';
import navLogo from '../../../../assets/logo dark.png'
import { GoArrowUpRight } from 'react-icons/go';

const Navbar = () => {

    const navLink = (
        <>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-500 font-bold text-lg"
                  : isPending
                  ? "pending"
                  : "text-blg mr-2  font-semibold "
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-blue-500 font-bold text-lg"
                  : isPending
                  ? "pending"
                  : " text-lg mr-2  font-semibold"
              }
              to="/allspot"
            >
              {" "}
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-blue-500 font-bold text-lg"
                  : isPending
                  ? "pending"
                  : " text-lg mr-2  font-semibold"
              }
              to="/addspot"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-blue-500 font-bold text-lg"
                  : isPending
                  ? "pending"
                  : " text-lg mr-2  font-semibold"
              }
              to="/mylist"
            >
              About Us
            </NavLink>
          </li>
        </>
      );
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLink}
      </ul>
    </div>
    <img src={navLogo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
   <button className=' bg-transparent hover:bg-yellow-400 hover:border-none p-3 md:px-5 font-semibold border-[1px] border-black rounded-2xl text-lg flex items-center justify-center gap-1'><p className=' font-semibold'>Appointment</p> <span className=' font-semibold'><GoArrowUpRight size={25} /></span></button>
  </div>
</div>
    );
};

export default Navbar;