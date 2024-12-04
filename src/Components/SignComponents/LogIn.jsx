import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../data/data";
import Swal from "sweetalert2";

const LogIn = () => {
  const { email, setEmail, password, setPassword, Login } =
    useContext(DataContext);

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      // Call the Login function and await its result
      const isLoggedIn = await Login();

      // If the login is successful, clear the form and show the notification
      if (isLoggedIn) {
        setEmail("");
        setPassword("");
        showNotification();
      } else {
        console.error("Login failed."); // Handle unsuccessful login
      }
    } catch (error) {
      console.error("An error occurred during login:", error); // Handle any errors during login
    }
  };

  const showNotification = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Welcome back again 😉💪",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  return (
    <div className="flex justify-center items-center bg-[#080c14] pt-44">
      <div className="bg-[#06042e] p-8 w-[550px] shadow-lg border-2 border-white">
        <form className="signin-form" onSubmit={handleLogIn}>
          <h2 className="text-2xl font-bold mb-4 text-white">Welcome back!</h2>
          <p className="text-sm mb-1 text-white">
            Hey there! Ready to log in? Just enter your username and password
            below
          </p>
          <p className="text-sm mb-5 text-white">
            and you’ll be back in action in no time. Let's go!
          </p>

          <button
            type="button"
            className="flex items-center justify-center bg-white text-black border-none py-2 w-full text-sm rounded-lg mb-5 cursor-pointer"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google Logo"
              className="mr-2"
            />
            Continue with Google
          </button>

          <div className="text-center my-5 relative">
            <span className="relative z-10 text-[#0d1117] bg-white px-2">
              or
            </span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#ddd]"></div>
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="email" className="block mb-2 text-white">
              Email
            </label>
            <input
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] bg-white text-sm placeholder-slate-500"
            />
          </div>

          <div className="mb-5 input-group">
            <label htmlFor="password" className="block mb-2 text-white">
              Password
            </label>
            <input
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="mt-2 w-full px-3 py-3 border border-[#ccc] rounded-[10px] text-black text-sm placeholder-slate-500"
            />
          </div>

          <div className="flex justify-between items-center mb-5 remember-forgot">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-white">
                Remember me
              </label>
            </div>
            <Link
              to="/ForgetPassword"
              className="text-[#58a6ff] hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            // onClick={showNotification}
            className="w-full bg-[#f39c12] text-black py-3 border-none rounded-full text-lg cursor-pointer flex justify-center items-center hover:translate-x-3 transition-all font-semibold"
          >
            Login <span className="ml-2">→</span>
          </button>

          <p className="text-center text-sm mt-5 text-white">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-[#58a6ff] hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
