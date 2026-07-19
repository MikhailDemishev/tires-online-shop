import { Circle } from '@/assets/icons';
import s from './ReturnProcessSection.module.scss';
import { RETURN_STEPS } from '@/widgets/Guarantee/config';
import { Section } from '@/shared/ui/Section/Section';

export const ReturnProcessSection = () => {
  return (
    <Section className={s.returnProcess} title="как оформить возврат">
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
    </Section>
  );
};
