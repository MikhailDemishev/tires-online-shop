import { Breadcrumbs } from '@/shared/ui/BreadCrumbs';
import s from './Feedback.module.scss';
import { type Feedback as FeedbackModel } from '@/entities/feedback/model';
import { FeedbackRating } from '@/entities/feedback/ui/FeedbackRating';
import { FeedbackItem } from '@/entities/feedback/ui/FeedbackItem';

export const Feedback = () => {
  //temp//
  const feedBackItems: FeedbackModel[] = [
    {
      id: 1,
      user: 'BLACK MACHINED',
      imageUrl: null,
      text: 'Неплохо, я взял 20x9x1, оно того стоит',
      textPl: '',
      textRu: 'Хорошо',
      rate: 2,
      createdDate: '28.05.2026',
    },
    {
      id: 2,
      user: 'BLACK MACHINED',
      imageUrl: null,
      text: 'Я купил серебристую версию с 8 выступами, и они просто потрясающие... Я получил 4 из первых 24 выпущенных Fuel... Очень доволен их внешним видом и качеством',
      textPl: '',
      textRu: 'Отлично',
      rate: 3,
      createdDate: '08.04.2026',
    },
    {
      id: 3,
      user: 'TACO',
      imageUrl: null,
      text: 'Я более чем доволен тем, как эти диски смотрятся на моей «Такоме». Они действительно преображают грузовик. Я видел много таких же дисков на разных грузовиках… но не таких. Они довольно редкие, что придаёт им особый вид.',
      textPl: '',
      textRu: 'Выглядит лучше, чем я ожидал',
      rate: 4,
      createdDate: '24.03.2026',
    },
    {
      id: 4,
      user: 'CHIEN',
      imageUrl: null,
      text: 'Эти диски Surge — отличное дополнение к и без того потрясающей линейке аксессуаров Fuel для Wrangler. Глянцевый черный цвет с серыми вставками — потрясающее сочетание, которое вносит небольшое разнообразие в цветовую палитру. Диски в стиле «хэдлок» сохраняют верность внедорожным традициям.',
      textPl: '',
      textRu: 'Великий агрессивный взгляд на Рубикон',
      rate: 5,
      createdDate: '28.05.2026',
    },
    {
      id: 5,
      user: 'RIDER87',
      imageUrl: null,
      text: 'После нескольких поездок по лесным дорогам могу сказать, что ожидания оправдались. На асфальте ведут себя спокойно, на грунте цепляются отлично.',
      textPl: '',
      textRu: 'Отличный компромисс',
      rate: 5,
      createdDate: '15.02.2026',
    },
    {
      id: 6,
      user: 'MARCIN',
      imageUrl: null,
      text: 'Покупал для ежедневной эксплуатации. Немного шумнее штатных, но зато внешний вид и проходимость стали намного лучше.',
      textPl: '',
      textRu: 'Хороший выбор',
      rate: 4,
      createdDate: '03.01.2026',
    },
    {
      id: 7,
      user: 'OFFROADMAX',
      imageUrl: null,
      text: 'Использую уже несколько месяцев. Грязь и песок проходят уверенно, износ пока минимальный. Цена полностью оправдана.',
      textPl: '',
      textRu: 'Доволен покупкой',
      rate: 5,
      createdDate: '18.11.2025',
    },
    {
      id: 8,
      user: 'JEEPMAN',
      imageUrl: null,
      text: 'Доставка быстрая, качество изготовления хорошее. На высокой скорости хотелось бы немного меньше шума, но для такого рисунка протектора это ожидаемо.',
      textPl: '',
      textRu: 'Стоят своих денег',
      rate: 4,
      createdDate: '27.10.2025',
    },
    {
      id: 9,
      user: 'ADAM',
      imageUrl: null,
      text: 'После первой тысячи километров никаких замечаний. Балансировка прошла без проблем, управляемость предсказуемая.',
      textPl: '',
      textRu: 'Рекомендую',
      rate: 1,
      createdDate: '09.09.2025',
    },
    {
      id: 10,
      user: 'NOMAD',
      imageUrl: null,
      text: 'Для моего пикапа подошли идеально. Уже успел проверить их на камнях и мокрой траве — сцепление заметно лучше, чем у предыдущего комплекта.',
      textPl: '',
      textRu: 'Очень хорошие шины',
      rate: 2,
      createdDate: '30.07.2025',
    },
    {
      id: 11,
      user: 'PETR',
      imageUrl: null,
      text: 'Внешне выглядят отлично. Первые впечатления положительные, посмотрим, как покажут себя после полного сезона.',
      textPl: '',
      textRu: 'Пока всё нравится',
      rate: 4,
      createdDate: '12.06.2025',
    },
    {
      id: 12,
      user: 'TRAILHUNTER',
      imageUrl: null,
      text: 'Искал универсальные шины для города и выездов на природу. Пока это лучший вариант, который мне попадался за такую цену.',
      textPl: '',
      textRu: 'Универсальный вариант',
      rate: 3,
      createdDate: '21.04.2025',
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
      </div>
    </section>
  );
};
