import { LoaderIcon } from '@/assets/icons';
import s from './Loader.module.scss';
import clsx from 'clsx';

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
  return <LoaderIcon className={clsx(className, s.loader)} />;
};
