import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { login } from "@/api/accountService";
import { Link } from "react-router-dom";

export function UserSignUp() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const submitForm = async (email: string, password: string) => {
    await login(email, password);
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-white px-4 sm:px-6 lg:px-8">
      {/* Logo positioned top-left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 sm:w-32">
        <a href="/home">
          <img
            src="src/assets/rosterU-2.png"
            className="object-contain cursor-pointer"
            alt="RosterU Logo"
          />
        </a>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm sm:max-w-md space-y-6 bg-white px-6 py-8 shadow-md rounded-lg">
        {/* Welcome Header */}
        <div className="space-y-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            New Here?
          </h1>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-black text-sm sm:text-lg">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full border-gray-200 mt-2"
              onChange={handleEmailChange}
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <Label
                htmlFor="password"
                className="text-black text-sm sm:text-lg"
              >
                Password
              </Label>
            </div>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 mt-2"
              onChange={handlePasswordChange}
            />
          </div>
          {/* Input Fields */}
          <div className="space-y-4">
            {/* Username */}
            <div>
              <Label
                htmlFor="username"
                className="text-black text-sm sm:text-lg"
              >
                Username
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full border-gray-200 mt-2"
                onChange={handleUsernameChange}
              />
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="flex gap-6">
              {/* First Name */}
              <div className="flex flex-col w-1/2">
                <Label
                  htmlFor="firstName"
                  className="text-black text-sm sm:text-lg"
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="border-gray-200 mt-2"
                  onChange={handleFirstNameChange}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col w-1/2">
                <Label
                  htmlFor="lastName"
                  className="text-black text-sm sm:text-lg"
                >
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="border-gray-200 mt-2"
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
          </div>

          {/* Sign In */}
          <Button
            className="w-full mt-2 bg-orange-500 text-white hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            onClick={() => submitForm(email, password)}
          >
            Create Account
          </Button>

          {/* Google Sign In */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FcGoogle size={20} />
            Sign Up With Google
          </Button>
        </div>

        {/* Register Prompt */}
        <h4 className="text-sm text-muted-foreground text-center">
          Already a user?
          <Link to="/login" className="text-orange-500 underline ml-1">
            Sign in
          </Link>
        </h4>
      </div>
    </div>
  );
}
