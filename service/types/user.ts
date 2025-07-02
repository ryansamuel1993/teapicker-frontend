export type User = {
  id: string;
  name: string;
  email?: string;
  contactNumber?: BigInt;
  teamId?: string;
  media: UserMedia[];
};

export type UserMedia = {
  id: string;
  url: string;
  type?: string;
  alt?: string;
  createdAt?: Date;
};
