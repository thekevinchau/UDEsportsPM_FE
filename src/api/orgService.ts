import { serverURL } from "@/config/config";
import { OrgProfile } from "@/types/orgTypes";
import axios from "axios";

export interface Organization {
  id: string;
  name: string;
  description: string;
  type: "University" | "High School" | "Club" | "Professional" | string; // extendable
  avatarPath: string;
  bannerPath: string;
  urlPath: string;
  region: string;
  tier: "Free" | "Starter" | "Pro" | "Elite" | string; // extendable
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}

const serverApi = axios.create({
  baseURL: serverURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": 'Bearer ' + localStorage.getItem('token')
  },
});

serverApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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

export async function getAllUserOrgProfiles(): Promise<OrgProfile[]> {
  try {
    const response = await serverApi.get(`/org/profiles/me`);
    return response.data;
  } catch (e) {
    console.error("Error retrieving profiles", e);
    return [];
  }
}
