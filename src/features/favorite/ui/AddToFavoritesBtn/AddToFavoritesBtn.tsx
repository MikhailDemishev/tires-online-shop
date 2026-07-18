import clsx from 'clsx';

import s from './AddToFavoritesBtn.module.scss';
import { Button } from '@/shared/ui/Button';
import { HeartIcon } from '@/assets/icons';

type LikeBtnProps = {
  id?: number;
  className?: string;
};

export const AddToFavoritesBtn = ({ className }: LikeBtnProps) => {
  const handeAddToFavorites = () => {
    console.log('added to favorites');
  };
  return (
    <Button
      variant="unset"
      className={clsx(className, s.addToFavoritesBtn)}
      onClick={handeAddToFavorites}
    >
      <HeartIcon className={s.icon} />
    </Button>
  );
};
