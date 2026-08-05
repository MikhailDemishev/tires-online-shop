import { FeedbackItem } from '@/entities/feedback/ui/FeedbackItem';
import s from './HomeFeedback.module.scss';
import { type Feedback } from '@/entities/feedback/model';
import { Section } from '@/shared/ui/Section/Section';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from '@/shared/lib/hooks';

type HomeFeedBackProps = {
  feedBackItems: Feedback[];
};

export const HomeFeedBack = ({ feedBackItems }: HomeFeedBackProps) => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  const { t } = useTranslation();
  return (
    <Section className={s.homeFeedBack} title={t('pages.home.reviews.title')}>
      <div className={s.homeFeedBackViewport} ref={emblaRef}>
        <ul className={s.homeFeedBackItems}>
          {feedBackItems.map((item) => (
            <li key={String(item.id)} className={s.homeFeedBackItemWrapper}>
              <FeedbackItem
                review={item}
                className={s.homeFeedBackItem}
                headerClassName={s.homeFeedBackItemHeader}
                hasDate={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
