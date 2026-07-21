import { Breadcrumbs } from '@/shared/ui/BreadCrumbs';
import s from './Feedback.module.scss';
import { type Feedback as FeedbackModel } from '@/entities/feedback/model';
import { FeedbackRating } from '@/entities/feedback/ui';

export const Feedback = () => {
  //temp//
  const feedBackItems: FeedbackModel[] = [
    {
      id: 1,
      user: 'BLACK MACHINED',
      imageUrl: null,
      text: 'Хорошо',
      textPl: '',
      textRu: 'Хорошо',
      rate: 2,
      createdDate: '28.05.2026',
    },
    {
      id: 2,
      user: 'BLACK MACHINED',
      imageUrl: null,
      text: 'Отлично',
      textPl: '',
      textRu: 'Отлично',
      rate: 3,
      createdDate: '08.04.2026',
    },
    {
      id: 3,
      user: 'TACO',
      imageUrl: null,
      text: 'Выглядит лучше, чем я ожидал',
      textPl: '',
      textRu: 'Выглядит лучше, чем я ожидал',
      rate: 4,
      createdDate: '24.03.2026',
    },
    {
      id: 4,
      user: 'CHIEN',
      imageUrl: null,
      text: 'Великий агрессивный взгляд на Рубикон',
      textPl: '',
      textRu: 'Великий агрессивный взгляд на Рубикон',
      rate: 5,
      createdDate: '28.05.2026',
    },
  ];

  const totalRating = feedBackItems.length
    ? feedBackItems.reduce((sum, { rate }) => sum + rate, 0) /
      feedBackItems.length
    : 0;

  return (
    <section className={s.feedback}>
      <div className="container">
        <div className={s.feedbackHeader}>
          <div className={s.feedbackHeaderTop}>
            <Breadcrumbs
              items={[{ label: 'Главная', to: '/' }, { label: 'Отзывы' }]}
            />
          </div>
          <div className={s.feedbackHeaderBottom}>
            <div className={s.feedbackHeaderBottomLeft}>
              <h1 className={s.feedbackTitle}>
                отзывы <span>{`(${feedBackItems.length})`}</span>
              </h1>
              <FeedbackRating rate={totalRating} />
            </div>
            <span>тут будет фильтр</span>
          </div>
        </div>
      </div>
    </section>
  );
};
