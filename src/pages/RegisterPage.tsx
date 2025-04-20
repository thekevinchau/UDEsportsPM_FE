import { UserSignUp } from "@/components/SignUp";
import { JSX } from "react";



export default function LoginPage(): JSX.Element {
    return <div className="flex h-screen w-screen bg-white text-black">
        <div className="flex flex-col justify-center items-center h-1-6 w-2/5">
        <UserSignUp/>
        </div>
        <div className="w-3/5">
        <img src="src/assets/esports2.jpg" className="h-full w-full object-cover"/>
        </div>
    </div>

}