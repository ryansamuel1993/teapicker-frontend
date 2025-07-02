export enum Score {
  Bad = 'Bad',
  Excellent = 'Excellent',
  Good = 'Good',
  Okay = 'Okay',
}

export type CreateRatingInput = {
  orderId: string;
  userId: string;
  comment?: string;
  quality: Score;
  service: Score;
  overall: Score;
};

export type Rating = {
  id: string;
  quality: Score;
  service: Score;
  overall: Score;
  comment?: string;
  createdAt: Date;
  userId: string;
};
