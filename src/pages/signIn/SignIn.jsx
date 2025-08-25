import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loginData from "../../assets/lottie/progerss.json";
import { useState } from "react";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  console.log("in signIn page", location);
  const from = location.state?.from?.pathname || "/"; // ✅ Safe access
  // Debug করার জন্য:
  console.log("From location:", from);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    setError(true);

    signInUser(email, password)
      .then((result) => {
        console.log("signIn successfull", result.user.email);
        const user = { email: result.user.email };
        console.log("About to call /jwt endpoint with:", user); // ✅ এই log add করুন
        axios
          .post("http://localhost:3000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("JWT token created:", res.data); // ✅ এখানে res access করুন
            navigate(from, { replace: true }); // ✅ এই line add করুন
          })
          .catch((err) => {
            console.log("JWT error:", err);
          });
      })
      .catch((error) => {
        console.log("Enter valid information", error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" text-center lg:text-left w-96">
          <Lottie animationData={loginData}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="mt-4  text-5xl font-bold">Sign In Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
