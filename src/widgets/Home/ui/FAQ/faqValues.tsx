import { CloseIcon } from '@/assets/icons';
import s from './FAQ.module.scss';

export const FAQ_ACCORDION_ITEMS = [
  {
    value: 'manufacturer',
    header: (
      <span className={s.faqAccordionHeader}>
        <span className={s.faqAccordionTitle}>
          Кто производит шины Insa Turbo?
        </span>
        <CloseIcon className={s.faqAccordionIcon} />
      </span>
    ),
    children: (
      <p className={s.faqAccordionText}>
        Шины Insa Turbo производятся компанией Insa Turbo, базирующейся в
        Испании. Компания специализируется на выпуске восстановленных шин,
        предназначенных для бездорожья, грязевых и вседорожных условий.
      </p>
    ),
  },
  {
    value: 'retreaded',
    header: (
      <span className={s.faqAccordionHeader}>
        <span className={s.faqAccordionTitle}>
          Являются ли шины Insa Turbo восстановленными?
        </span>
        <CloseIcon className={s.faqAccordionIcon} />
      </span>
    ),
    children: (
      <p className={s.faqAccordionText}>
        Да. Шины Insa Turbo являются восстановленными шинами, также известными
        как шины с наложенным протектором. Они производятся путем нанесения
        нового протектора на тщательно проверенные корпуса шин.
      </p>
    ),
  },
  {
    value: 'difference',
    header: (
      <span className={s.faqAccordionHeader}>
        <span className={s.faqAccordionTitle}>
          Чем отличаются шины Insa Turbo от новых шин других брендов?
        </span>
        <CloseIcon className={s.faqAccordionIcon} />
      </span>
    ),
    children: (
      <p className={s.faqAccordionText}>
        Insa Turbo — производитель с более чем 25-летним опытом на международном
        рынке. Бренд предлагает качественные восстановленные шины с хорошим
        соотношением цены, надежности и проходимости.
      </p>
    ),
  },
  {
    value: 'types',
    header: (
      <span className={s.faqAccordionHeader}>
        <span className={s.faqAccordionTitle}>
          Какие типы шин Insa Turbo подходят для моего стиля вождения?
        </span>
        <CloseIcon className={s.faqAccordionIcon} />
      </span>
    ),
    children: (
      <>
        <p className={s.faqAccordionText}>
          Insa Turbo предлагает шины для разных условий эксплуатации:
        </p>

        <ul className={s.faqAccordionList}>
          <li className={s.faqAccordionListItem}>
            <p className={s.faqAccordionText}>
              <span className={s.accent}>Грязевые Mud Terrain — MT:</span> для
              серьёзного бездорожья, грязи и камней. Модели: Dakar MT, K2 MT,
              Risco MT, Sahara MT, Special Track MT.
            </p>
          </li>
          <li className={s.faqAccordionListItem}>
            <p className={s.faqAccordionText}>
              <span className={s.accent}>Вседорожные All-Terrain — AT:</span>{' '}
              для смешанного использования, асфальта и лёгкого бездорожья.
              Модели: Mountain, Ranger AT, Traction Track.
            </p>
          </li>
        </ul>

        <p className={s.faqAccordionText}>
          Если вы не уверены, какой тип выбрать, воспользуйтесь параметрическим
          фильтром на главной странице или свяжитесь с нами для консультации.
        </p>
      </>
    ),
  },
  {
    value: 'size',
    header: (
      <span className={s.faqAccordionHeader}>
        <span className={s.faqAccordionTitle}>Какой размер шин мне нужен?</span>
        <CloseIcon className={s.faqAccordionIcon} />
      </span>
    ),
    children: (
      <p className={s.faqAccordionText}>
        Правильный размер шин указан в руководстве по эксплуатации автомобиля.
        Также его можно посмотреть на боковине текущих шин, например 265/75 R16.
        В каталоге можно отфильтровать шины по размеру.
      </p>
    ),
  },
  {
    value: 'installation',
    header: (
      <span className={s.faqAccordionHeader}>
        <span className={s.faqAccordionTitle}>
          Вы помогаете с установкой шин?
        </span>
        <CloseIcon className={s.faqAccordionIcon} />
      </span>
    ),
    children: (
      <p className={s.faqAccordionText}>
        Для получения более подробной информации свяжитесь с нами по номеру
        телефона +7 ... или через форму обратной связи.
      </p>
    ),
  },
];
