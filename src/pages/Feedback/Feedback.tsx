import { Breadcrumbs } from '@/shared/ui/BreadCrumbs';
import s from './Feedback.module.scss';
import { type FeedbackFullResponse } from '@/entities/feedback/model';
import { FeedbackRating } from '@/entities/feedback/ui/FeedbackRating';
import { FeedbackItem } from '@/entities/feedback/ui/FeedbackItem';
import { Sort } from '@/features/sort/ui';
import { REVIEW_SORT_OPTIONS } from '@/features/sort/config';

export const Feedback = () => {
  //temp//
  const feedBackItems: FeedbackFullResponse = {
    content: [
      {
        id: 1,
        user: 'BLACK MACHINED',
        imageUrl: 'https://i.gyazo.com/7db7b98453fe5a2efa275bbc98a9faf5.jpg',
        text: 'Неплохо, я взял 20x9x1, оно того стоит',
        textPl: '',
        textRu: 'Хорошо',
        rate: 2,
        createdDate: '2026-05-28T09:15:00.000Z',
      },
      {
        id: 2,
        user: 'BLACK MACHINED',
        imageUrl: 'https://i.gyazo.com/8088106fc5fa3819ffc85010107cfe46.jpg',
        text: 'Я купил серебристую версию с 8 выступами, и они просто потрясающие... Я получил 4 из первых 24 выпущенных Fuel... Очень доволен их внешним видом и качеством',
        textPl: '',
        textRu: 'Отлично',
        rate: 3,
        createdDate: '2026-04-08T14:40:00.000Z',
      },
      {
        id: 3,
        user: 'TACO',
        imageUrl: 'https://i.gyazo.com/3c6921df3d41affc31c5e800a0961753.jpg',
        text: 'Я более чем доволен тем, как эти диски смотрятся на моей «Такоме». Они действительно преображают грузовик. Я видел много таких же дисков на разных грузовиках… но не таких. Они довольно редкие, что придаёт им особый вид.',
        textPl: '',
        textRu: 'Выглядит лучше, чем я ожидал',
        rate: 4,
        createdDate: '2026-03-24T11:20:00.000Z',
      },
      {
        id: 4,
        user: 'CHIEN',
        imageUrl: 'https://i.gyazo.com/94d38de980078bce0718b6b212992adf.jpg',
        text: 'Эти диски Surge — отличное дополнение к и без того потрясающей линейке аксессуаров Fuel для Wrangler. Глянцевый черный цвет с серыми вставками — потрясающее сочетание, которое вносит небольшое разнообразие в цветовую палитру. Диски в стиле «хэдлок» сохраняют верность внедорожным традициям.',
        textPl: '',
        textRu: 'Великий агрессивный взгляд на Рубикон',
        rate: 5,
        createdDate: '2026-05-28T18:05:00.000Z',
      },
      {
        id: 5,
        user: 'RIDER87',
        imageUrl: 'https://i.gyazo.com/9e10c71215a4cfbe686bb91e6f6eb97e.jpg',
        text: 'После нескольких поездок по лесным дорогам могу сказать, что ожидания оправдались. На асфальте ведут себя спокойно, на грунте цепляются отлично.',
        textPl: '',
        textRu: 'Отличный компромисс',
        rate: 5,
        createdDate: '2026-02-15T08:55:00.000Z',
      },
      {
        id: 6,
        user: 'MARCIN',
        imageUrl: 'https://i.gyazo.com/c2d2716ddc091dec2af4f6fdbf37d292.jpg',
        text: 'Покупал для ежедневной эксплуатации. Немного шумнее штатных, но зато внешний вид и проходимость стали намного лучше.',
        textPl: '',
        textRu: 'Хороший выбор',
        rate: 5,
        createdDate: '2026-01-03T16:30:00.000Z',
      },
      {
        id: 7,
        user: 'OFFROADMAX',
        imageUrl: 'https://i.gyazo.com/9e2b65962326e7dbc9afb3b64de09a38.jpg',
        text: 'Использую уже несколько месяцев. Грязь и песок проходят уверенно, износ пока минимальный. Цена полностью оправдана.',
        textPl: '',
        textRu: 'Доволен покупкой',
        rate: 3,
        createdDate: '2025-11-18T12:10:00.000Z',
      },
      {
        id: 8,
        user: 'JEEPMAN',
        imageUrl: 'https://i.gyazo.com/90a6ba8dd178dead1478c681b739d005.jpg',
        text: 'Доставка быстрая, качество изготовления хорошее. На высокой скорости хотелось бы немного меньше шума, но для такого рисунка протектора это ожидаемо.',
        textPl: '',
        textRu: 'Стоят своих денег',
        rate: 3,
        createdDate: '2025-10-27T20:45:00.000Z',
      },
    ],
    pageNumber: 1,
    size: 8,
    totalElements: 8,
    totalPages: 1,
    isFirst: true,
    isLast: true,
  };

  const totalRating = feedBackItems.content.length
    ? feedBackItems.content.reduce((sum, { rate }) => sum + rate, 0) /
      feedBackItems.content.length
    : 0;
  const totalRounded = Math.round(totalRating * 10) / 10;
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
              <h1 className={s.feedbackTitle}>отзывы</h1>
              <div className={s.feedbackRating}>
                <span className={s.ratingTotal}>{totalRounded}</span>
                <div className={s.ratingStats}>
                  <FeedbackRating rate={totalRating} />
                  <span
                    className={s.ratingCount}
                  >{`${feedBackItems.content.length} отзывов`}</span>
                </div>
              </div>
            </div>
            <Sort
              sortOptions={REVIEW_SORT_OPTIONS}
              className={s.feedBackSort}
            />
          </div>
        </div>
        <ul className={s.feedBackItems}>
          {feedBackItems.content.map((item) => (
            <li key={String(item.id)}>
              <FeedbackItem
                review={item}
                className={s.item}
                headerClassName={s.itemHeader}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
