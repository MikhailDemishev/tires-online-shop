import type { Tire } from '@/entities/tire/model';
import s from './TireCard.module.scss';
type Props = {
  tire: Tire;
};

export const TireCard = ({ tire }: Props) => {
  return <div className={s.tireCard}>{tire.title}</div>;
};
