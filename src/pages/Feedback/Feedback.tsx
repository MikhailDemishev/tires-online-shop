import s from './Feedback.module.scss';
import { type FeedbackParams } from '@/entities/feedback/model';
import { FeedbackRating } from '@/entities/feedback/ui/FeedbackRating';
import { FeedbackItem } from '@/entities/feedback/ui/FeedbackItem';
import { Sort } from '@/features/sort/ui';
import { REVIEW_SORT_OPTIONS } from '@/features/sort/config';
import { InfoPageLayout } from '@/layouts/InfoPageLayout';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import { useGetFeedbackQuery } from '@/entities/feedback/api/feedbacksApi';
import { useTranslation } from '@/shared/lib/hooks';

export const Feedback = () => {
  const params = usePaginationParams<FeedbackParams>({
    defaultPageSize: 2,
  });

  const { data, isLoading, isError } = useGetFeedbackQuery(params);

  const feedBackItems = data?.content ?? [];

  const totalRating = data?.averageRate;
  const { t } = useTranslation();

  return (
    <InfoPageLayout
      title={t('feedback.title')}
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      isLoading={isLoading}
      isError={isError}
      isEmpty={!feedBackItems.length}
      headerNode={
        <div className={s.feedbackHeader}>
          {totalRating && (
            <div className={s.feedbackRating}>
              <span className={s.ratingTotal}>{totalRating}</span>
              <div className={s.ratingStats}>
                <FeedbackRating rate={totalRating} />
                <span className={s.ratingCount}>
                  {`${feedBackItems.length} ${t('feedback.ratingCount')}`}
                </span>
              </div>
            </div>
          )}

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
