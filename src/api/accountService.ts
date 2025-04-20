import { serverURL } from "@/config/config";
import { jwtDecode } from "jwt-decode";

export interface DecodedJWT {
  sub: string;
  exp: number;
  iat: number;
  [key: string]: unknown; // For custom claims like "role", "email", etc.
}

export async function login(email: string, password: string): Promise<void> {
  try {
    const response = await fetch(`${serverURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const token = await response.text(); // Make sure this returns the JWT string or an object with it
    //const decoded: DecodedJWT = jwtDecode(token);
    localStorage.setItem("token", token);
  } catch (err) {
    console.error("Login error:", err);
  }
}
