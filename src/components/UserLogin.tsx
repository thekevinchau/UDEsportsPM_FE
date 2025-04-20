import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";

export function UserLogin() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-white">
      {/* Logo positioned top-left */}
      <div className="absolute top-6 left-6 w-32">
        <a href="/home">
        <img
          src="src/assets/rosterU-2.png"
          className="object-contain"
          alt="RosterU Logo"
        />
        </a>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm space-y-6 px-6 py-8">
        {/* Welcome Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-black text-lg">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full border-gray-200 mt-2"
            />
          </div>

          <div>
            <div className="flex justify-between">
            <Label htmlFor="password" className="text-black text-lg">
              Password
            </Label>
            <Label>
            <a href="/resetpassword" className="text-xs text-orange-500">Forgot your password?</a>
            </Label>
            </div>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 mt-2"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-gray-700">
              Remember Me
            </Label>
          </div>
    

          <Button className="w-full mt-2 bg-orange-500 text-white hover:opacity-80 transition-opacity duration-300 cursor-pointer">
            Sign In
          </Button>

          {/* Google Sign In Button */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Button>
        </div>

        <h4 className="text-sm text-muted-foreground text-center">
          Don’t have an account?
          <a href="/register" className="text-orange-500 underline ml-1">
            Register here
          </a>
        </h4>
      </div>
      
    </div>
  );
}
