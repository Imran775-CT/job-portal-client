import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import jobIcon from "../../assets/fab-icon.png";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext) || {};

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log("sign Out successfull", result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const links = (
    <>
      <li>
       <NavLink to="/">Home</NavLink>
      </li>
      <li>
       <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      <li>
       <NavLink to="/addJob">Add A Job</NavLink>
      </li>
      <li>
       <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
      </li>
      
    </>
  );
  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-12" src={jobIcon} alt="" />
          <h3 className="text-3xl">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signIn" className="btn">
              Sign In
            </Link>
            <Link to="/register" className="ml-2">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
