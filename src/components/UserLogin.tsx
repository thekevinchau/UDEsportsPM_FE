import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { login } from "@/api/accountService";
import { Link, useNavigate } from "react-router-dom";

export function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const submitForm = async (email: string, password: string) => {
    await login(email, password);
    navigate('/home')
  }


  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-white px-4 sm:px-6 lg:px-8">
      {/* Logo positioned top-left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 sm:w-32">
        <a href="/">
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
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Welcome Back</h1>
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
              <Label htmlFor="password" className="text-black text-sm sm:text-lg">
                Password
              </Label>
              <a
                href="/resetpassword"
                className="text-xs text-orange-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 mt-2"
              onChange={handlePasswordChange}
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-gray-700">
              Remember Me
            </Label>
          </div>

          {/* Sign In */}
          <Button className="w-full mt-2 bg-orange-500 text-white hover:opacity-80 transition-opacity duration-300 cursor-pointer" onClick={() => submitForm(email, password)}>
            Sign In
          </Button>

          {/* Google Sign In */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Button>
        </div>

        {/* Register Prompt */}
        <h4 className="text-sm text-muted-foreground text-center">
          Don’t have an account?
          <Link to="/register" className="text-orange-500 underline ml-1">
            Register here
          </Link>
        </h4>
      </div>
    </div>
  );
}
