export type Organization = {
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

export type OrgProfile = {
  orgProfileId: string;
  userId: string;
  organization: {
    orgId: string;
    name: string;
    urlPath: string;
    avatarPath: string;
  };
  fullName: string,
  role: string;
  pronouns: string;
  studentClass: string;
  expectedGrad: number;
  aboutMe: string;
  invitedDate: string; // ISO 8601 date string
  invitedBy: {
    username: string;
    email: string;
  };
};
