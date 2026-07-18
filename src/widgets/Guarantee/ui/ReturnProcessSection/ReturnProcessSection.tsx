import { Circle } from '@/assets/icons';
import s from './ReturnProcessSection.module.scss';
import { RETURN_STEPS } from '@/widgets/Guarantee/config';

export const ReturnProcessSection = () => {
  return (
    <section className={s.returnProcess}>
      <div className="container">
        <h2 className={s.returnTitle}>как оформить возврат</h2>
        <ul className={s.returnSteps}>
          {RETURN_STEPS.map((text, index) => (
            <li key={text} className={s.returnStep}>
              <Circle className={s.returnStepIcon} />
              <div className={s.returnStepDescription}>
                <span className={s.returnStepNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={s.returnStepText}>{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
