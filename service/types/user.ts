import { CreatePreferencesInput, Preferences } from './preferences';

export type User = {
  id: string;
  name: string;
  email?: string;
  contactNumber?: string;
  teamId?: string;
  media?: UserMedia[];
  isAvailable: boolean;
  preferences?: Preferences;
  averageRating?: number;
};

export type UpdateUserInput = {
  id: string;
  name: string;
  email?: string;
  teamId?: string;
  contactNumber?: string;
  preferences?: CreatePreferencesInput;
};

export type CreateUserInput = Omit<UpdateUserInput, 'id'>;

export type UserMedia = {
  id: string;
  url: string;
  type: MediaType;
  alt?: string;
  createdAt?: Date;
  userId: string;
};

export enum MediaType {
  Avatar = 'AVATAR',
  Cover = 'COVER',
  Gallery = 'GALLERY',
  Video = 'VIDEO',
}
