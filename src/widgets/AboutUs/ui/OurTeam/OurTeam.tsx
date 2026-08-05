import { team } from '@/assets/images';
import s from './OurTeam.module.scss';
import { QuoteIcon } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';
export const OurTeam = () => {
  const { t } = useTranslation();
  return (
    <section className={s.ourTeam}>
      <div className="container">
        <h2 className="visuallyHidden">{t('pages.aboutUs.ourTeam.title')}</h2>
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
            <p className={s.quoteText}>{t('pages.aboutUs.ourTeam.quote')}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
