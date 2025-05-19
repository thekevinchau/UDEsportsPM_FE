import { serverURL } from "@/config/config";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

export interface DecodedJWT {
  sub: string;
  exp: number;
  iat: number;
  [key: string]: unknown; // For custom claims like "role", "email", etc.
}

interface UserDTO {
  email: string,
  username: string
}

const userApi = axios.create({
  baseURL: serverURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(`${serverURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return false;  
    }

    const token = await response.text(); // Make sure this returns the JWT string or an object with it
    const decoded: DecodedJWT = jwtDecode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("loggedIn", "true");
    console.log(decoded)
    return true;
  } catch (err) {
    console.error("Login error:", err);
    return false;
  }
}

export async function register(email: string, username: string, password: string, fullName: string): Promise<UserDTO | string> {
  try{
    const response = await userApi.post('/users/register',{
      username: username,
      password: password,
      fullName: fullName,
      email: email
    })
    return response.data;
  }catch(err){
    console.error("Login error", err);
  }
  return "Failed to create user";
}
