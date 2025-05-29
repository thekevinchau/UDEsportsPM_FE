import { serverURL } from "@/config/config";
import axios from "axios";

export interface Organization {
  id: string;
  name: string;
  description: string;
  type: 'University' | 'High School' | 'Club' | 'Professional' | string; // extendable
  avatarPath: string;
  bannerPath: string;
  urlPath: string;
  region: string;
  tier: 'Free' | 'Starter' | 'Pro' | 'Elite' | string; // extendable
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}

const serverApi = axios.create({
    baseURL: serverURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function getOrg(orgId: string): Promise<Organization | string> {
  try {
    const response = await serverApi.get(`/organization/${orgId}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("Login error", e);
    return `Error occurred when trying to fetch organization ${orgId} `;
  }
}
