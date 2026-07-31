export type Feedback = {
  id: number;
  user: string;
  imageUrl: string;
  text: string;
  textPl: string;
  textRu: string;
  rate: number;
  createdDate: string;
};

export type FeedbackFullResponse = {
  content: Feedback[];
  pageNumber: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  averageRate: number;
};

export type FeefbackDetails = Feedback;
