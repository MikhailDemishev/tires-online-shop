import type { Feedback } from '@/entities/feedback/model';
import s from './FeedbackItem.module.scss';
import { FeedbackRating } from '@/entities/feedback/ui/FeedbackRating';
import clsx from 'clsx';

type FeedbackItemProps = {
  review: Feedback;
  className?: string;
  textClassName?: string;
  headerClassName?: string;
  hasDate?: boolean;
};

export const FeedbackItem = ({
  review,
  className,
  hasDate = true,
  textClassName,
  headerClassName,
}: FeedbackItemProps) => {
  const formattedDate = new Date(review.createdDate).toLocaleDateString();
  return (
    <article className={clsx(className, s.feedbackItem)}>
      <div className={clsx(headerClassName, s.feedbackItemHeader)}>
        <h3 className={s.feedbackItemTitle}>{review.user}</h3>
        <div className={s.feedbackItemHeaderRight}>
          <FeedbackRating rate={review.rate} />
          {hasDate && (
            <span className={s.feedbackItemDate}>{formattedDate}</span>
          )}
        </div>
      </div>
      <p className={clsx(textClassName, s.feedbackItemText)}>{review.text}</p>
    </article>
  );
};
