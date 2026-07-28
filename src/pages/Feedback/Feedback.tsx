import s from './Feedback.module.scss';
import { type FeedbackParams } from '@/entities/feedback/model';
import { FeedbackRating } from '@/entities/feedback/ui/FeedbackRating';
import { FeedbackItem } from '@/entities/feedback/ui/FeedbackItem';
import { Sort } from '@/features/sort/ui';
import { REVIEW_SORT_OPTIONS } from '@/features/sort/config';
import { InfoPageLayout } from '@/layouts/InfoPageLayout';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import { useGetFeedbackQuery } from '@/entities/feedback/api/feedbacksApi';

export const Feedback = () => {
  const params = usePaginationParams<FeedbackParams>({
    defaultPageSize: 2,
  });

  const { data, isLoading, isError } = useGetFeedbackQuery(params);

  const feedBackItems = data?.content ?? [];

  const totalRating = feedBackItems?.length
    ? feedBackItems.reduce((sum, { rate }) => sum + rate, 0) /
      feedBackItems.length
    : 0;
  const totalRounded = Math.round(totalRating * 10) / 10;
  return (
    <InfoPageLayout
      title="Отзывы"
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      isLoading={isLoading}
      isError={isError}
      isEmpty={!feedBackItems.length}
      headerNode={
        <div className={s.feedbackHeader}>
          <div className={s.feedbackRating}>
            <span className={s.ratingTotal}>{totalRounded}</span>
            <div className={s.ratingStats}>
              <FeedbackRating rate={totalRating} />
              <span className={s.ratingCount}>
                {`${feedBackItems.length} отзывов`}
              </span>
            </div>
          </div>
          <Sort sortOptions={REVIEW_SORT_OPTIONS} className={s.feedBackSort} />
        </div>
      }
    >
      <ul className={s.feedBackItems}>
        {feedBackItems.map((item) => (
          <li key={String(item.id)}>
            <FeedbackItem
              review={item}
              className={s.item}
              headerClassName={s.itemHeader}
            />
          </li>
        ))}
      </ul>
    </InfoPageLayout>
  );
};
