import { team } from '@/assets/images';
import s from './OurTeam.module.scss';
import { QuoteIcon } from '@/assets/icons';
export const OurTeam = () => {
  return (
    <section className={s.ourTeam}>
      <div className="container">
        <div className={s.ourTeamWrapper}>
          <div className={s.ourTeamImage}>
            <img src={team} />
          </div>
          <blockquote className={s.quote}>
            <div className={s.quoteMarks}>
              {[0, 1].map((index) => (
                <QuoteIcon key={index} className={s.quoteMark} />
              ))}
            </div>
            <p className={s.quoteText}>
              Мы являемся официальным дистрибьютером испанского производителя
              Insa Turbo — компании с более чем 30-летним опытом в
              восстановлении шин. Это позволяет нам гарантировать подлинность и
              высокое качество каждой модели, представленной в нашем каталоге.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
