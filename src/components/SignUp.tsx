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

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);

  const submitForm = async (email: string, password: string) => {
    await login(email, password);
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
        {/* Header */}
        <div className="space-y-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Create Account</h1>
          <p className="text-gray-400 text-sm">Start managing your esports program</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
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
            <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-2 bg-[#2a2a2e] border border-gray-600 text-white"
              onChange={handlePasswordChange}
            />
          </div>

          {/* Username */}
          <div>
            <Label htmlFor="username" className="text-sm sm:text-base">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full mt-2 bg-[#2a2a2e] border border-gray-600 text-white"
              onChange={handleUsernameChange}
            />
          </div>

          {/* First + Last Name */}
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="mt-2 bg-[#2a2a2e] border border-gray-600 text-white"
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="mt-2 bg-[#2a2a2e] border border-gray-600 text-white"
                onChange={handleLastNameChange}
              />
            </div>
          </div>

          {/* Create Account */}
          <Button
            className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-500 transition"
            onClick={() => submitForm(email, password)}
          >
            Create Account
          </Button>

          {/* Google Signup */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-500 text-white hover:bg-white hover:text-black transition"
          >
            <FcGoogle size={20} />
            Sign Up With Google
          </Button>
        </div>

        {/* Already a user */}
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
