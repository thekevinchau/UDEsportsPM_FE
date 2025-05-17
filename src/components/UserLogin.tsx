import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { login } from "@/api/accountService";
import { Link, useNavigate } from "react-router-dom";
import {login as reduxLogin} from "../redux/authSlice"
import { useDispatch } from "react-redux";

export function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [visibleError, setVisibleError] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitForm = async (email: string, password: string) => {
    const success = await login(email, password);

    if (success === true) {
      setVisibleError(false);
      dispatch(reduxLogin({email: email}))
      localStorage.setItem('auth', JSON.stringify({user: email, role: "ROLE_ADMIN", isAuthenticated: true}))
      navigate("/");

    } else if (email === "") {
      setErrorMsg("Please enter your email.");
      setVisibleError(true);

    } else if (password === "") {
      setErrorMsg("Please enter your password.");
      setVisibleError(true);

    } else {
      setErrorMsg("Invalid username or password.");
      setVisibleError(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0f0f10] to-[#1a1a1d] px-4 sm:px-6 lg:px-8 text-white">
      {/* Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 sm:w-32">
        <div className="text-xl font-bold tracking-tight">
          <Link to="/" className="hover:opacity-90 transition">
            Roster<span className="text-blue-500">U</span>
          </Link>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm sm:max-w-md space-y-6 bg-[#1e1e22] px-6 py-8 shadow-xl rounded-lg border border-white/10">
        {/* Welcome Header */}
        <div className="space-y-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-400 text-sm">
            Sign in to manage your esports program
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm sm:text-base">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full mt-2 bg-[#2a2a2e] border border-gray-600 text-white"
              onChange={handleEmailChange}
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm sm:text-base">
                Password
              </Label>
              <Link
                to="/resetpassword"
                className="text-xs text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-2 bg-[#2a2a2e] border border-gray-600 text-white"
              onChange={handlePasswordChange}
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-gray-300">
              Remember Me
            </Label>
          </div>

          {/* Sign In Button */}
          <Button
            className="w-full mt-1 bg-blue-600 text-white hover:bg-blue-500 transition"
            onClick={() => submitForm(email, password)}
            disabled={email == "" || password == ""}
          >
            Sign In
          </Button>

          {/* Google Sign In */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-500 text-white hover:bg-white hover:text-black transition"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Button>
          {visibleError == true ? (
            <div className="text-white text-center">{errorMsg}</div>
          ) : null}
        </div>

        {/* Registration Link */}
        <p className="text-sm text-center text-gray-400">
          Don’t have an account?
          <Link to="/register" className="text-blue-400 underline ml-1">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
