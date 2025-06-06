import { OrgProfile } from "@/types/orgTypes";
import { createSlice } from "@reduxjs/toolkit";

interface OrgProfileState {
  orgProfiles: OrgProfile[];
  primaryOrgProfile: OrgProfile;
}

const initialState: OrgProfileState = {
  orgProfiles: [],
  primaryOrgProfile: {
    userId: "",
    organization: {
      orgId: "",
      name: "",
      urlPath: "",
      avatarPath: "",
    },
    fullName: "",
    role: "",
    pronouns: "",
    studentClass: "",
    expectedGrad: 0,
    aboutMe: "",
    invitedDate: "", // e.g., "" or new Date().toISOString()
    invitedBy: {
      username: "",
      email: "",
    },
  },
};

const orgProfileSlice = createSlice({
  name: "orgProfile",
  initialState,
  reducers: {
    setPrimaryOrgProfile: (state, action) => {
      const primaryOrgProfile: OrgProfile = action.payload;
      state.primaryOrgProfile = primaryOrgProfile;
    },
    setOrgProfiles: (state, action) => {
      const orgProfiles: OrgProfile[] = action.payload;
      state.orgProfiles = orgProfiles;
    },
  },
});

export const { setPrimaryOrgProfile, setOrgProfiles} = orgProfileSlice.actions;
export default orgProfileSlice.reducer;
