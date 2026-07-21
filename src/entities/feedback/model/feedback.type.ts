export type Feedback = {
  id: number;
  user: string;
  imageUrl: string | null;
  text: string;
  textPl: string;
  textRu: string;
  rate: number;
  createdDate: string;
};
