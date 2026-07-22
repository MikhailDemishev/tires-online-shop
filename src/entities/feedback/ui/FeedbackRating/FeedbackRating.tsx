import { Star } from '@/assets/icons';
import s from './FeedbackRating.module.scss';
import clsx from 'clsx';

type FeedbackRatingProps = {
  rate: number;
  className?: string;
};
export const FeedbackRating = ({ rate, className }: FeedbackRatingProps) => {
  return (
    <ul className={clsx(className, s.ratingBar)}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fillPercent = Math.min(Math.max(rate - index, 0), 1) * 100;

        return (
          <li className={s.ratingBarItem} key={`Star${index}`}>
            <Star className={s.ratingBarStar} />

            <span className={s.filledStar} style={{ width: `${fillPercent}%` }}>
              <Star className={s.ratingBarStar} />
            </span>
          </li>
        );
      })}
    </ul>
  );
};
