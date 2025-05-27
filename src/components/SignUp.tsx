import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { register} from "@/api/accountService";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

export function UserSignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPasswordState, setShowPasswordState] =
    useState<string>("password");
  const [password, setPassword] = useState("");

  function isValidPassword(password: string): string {
    if (password.length === 0) {
      return "You must enter a password!";
    }
    if (password.length < 12) {
      return "Password must be 12 characters minimum.";
    }

    if (password.includes(firstName) || password.includes(lastName)) {
      return "Password must not contain your name.";
    }
    return "";
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  const submitForm = async () => {
    if (isValidPassword(password) !== "") {
      console.log(isValidPassword(password));
      return;
    }
    const user = register(email, username, password, firstName + " " + lastName);
    console.log(user);
  };
  //if the password length is greater than 0 and its less than 12, it should be false
  //if the password length is greater than 12 then it should be true
  const isValidLength = password.length < 12 ? true : false;
  //uses regex to check if there is at least one uppercase letter, one number, and one special character
  const isValidCharacters =
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
    password.length > 0
      ? true
      : false;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-[#0f0f10] to-[#1a1a1d] text-white">
      {/* Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:opacity-90"
        >
          Roster<span className="text-blue-500">U</span>
        </Link>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[420px] sm:max-w-md bg-[#1e1e22] px-6 py-8 rounded-xl shadow-lg border border-white/10 space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold">Create Account</h1>
          <p className="text-sm text-gray-400">
            Start managing your esports program
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full mt-1 bg-[#2a2a2e] border border-gray-600 text-white"
              onChange={handleEmailChange}
              required
            />
          </div>

          {/* First + Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <Label htmlFor="firstName" className="text-sm">
                First Name
              </Label>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="mt-1 bg-[#2a2a2e] border border-gray-600 text-white"
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <Label htmlFor="lastName" className="text-sm">
                Last Name
              </Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="mt-1 bg-[#2a2a2e] border border-gray-600 text-white"
                onChange={handleLastNameChange}
                required
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <Label htmlFor="username" className="text-sm">
              Username
            </Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full mt-1 bg-[#2a2a2e] border border-gray-600 text-white"
              onChange={handleUsernameChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPasswordState}
                id="password"
                placeholder="Enter your password"
                className={`w-full mt-1 bg-[#2a2a2e] border border-gray-600 text-white pr-10`}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowPasswordState(
                    showPasswordState === "text" ? "password" : "text"
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPasswordState === "text" ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Password Rules */}
            <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
              <li>
                Must be at least 12 characters long.{" "}
                {isValidLength ? (
                  <FaTimes className="text-red-500 inline-block pb-1 text-2xl" />
                ) : (
                  <FcCheckmark className="inline-block pb-1 text-2xl" />
                )}
              </li>
              <li>
                Must include at least one uppercase letter, contain at least one
                number, and at least one symbol.{" "}
                {isValidCharacters ? (
                  <FcCheckmark className="inline-block pb-1 text-2xl" />
                ) : (
                  <FaTimes className="text-red-500 inline-block pb-1 text-2xl" />
                )}
              </li>
            </ul>
          </div>

          {/* Create Account Button */}
          <Button
            className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-500 transition"
            type="submit"
            onClick={submitForm}
            disabled={
              !email || !username || !password || !firstName || !lastName
            }
          >
            Create Account
          </Button>

          {/* Google Sign-up */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border border-gray-500 text-white hover:bg-white hover:text-black transition"
          >
            <FcGoogle size={20} />
            Sign Up With Google
          </Button>
        </div>

        {/* Already have an account */}
        <p className="text-sm text-center text-gray-400">
          Already have an account?
          <Link to="/login" className="text-blue-400 underline ml-1">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
