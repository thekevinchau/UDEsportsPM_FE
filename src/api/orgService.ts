import { serverURL } from "@/config/config";
import { OrgProfile } from "@/types/orgTypes";
import axios from "axios";

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


export async function getPrimaryOrgProfile(): Promise<OrgProfile | null>{
  try{
    const response = await serverApi.get(`/org/profiles/primary`)
    return response.data;
  }catch(e){
    console.error("Error retrieving profiles", e);
    return null;
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

export async function setPrimaryProfile(id: string): Promise<string>{
  try{
    const response = await serverApi.patch('/users/primary-profile', {
      newId: id
    })
    return response.data;
  }catch(e){
    console.error("Error: ", e)
    return 'An error occurred setting primary org profile';
  }
}