import clsx from 'clsx';
import s from './ProductGallery.module.scss';
import { handleImageError } from '@/shared/lib/helpers';
import { AddToFavoritesBtn } from '@/features/favorite/ui/AddToFavoritesBtn';

type ProductGalleryDesktopProps = {
  url: string;
  urls: string;
  fallbackImage: string;
  inStock: boolean;
  className?: string;
};

export const ProductGallery = ({
  url,
  fallbackImage,
  inStock,
  className,
}: ProductGalleryDesktopProps) => {
  // после исправления бэка
  //   const images = urls
  //     ? urls
  //         .split(',')
  //         .map((url) => url.trim())
  //         .filter(Boolean)
  //     : [];

  //временно
  const images = [url, url, url];

  return (
    <div className={className}>
      <div className={clsx(s.gallery, !inStock && s.outOfStock)}>
        <div className={s.smallImages}>
          {images.map((image, index) => (
            <div className={s.imageWrap} key={`${image}-${index}`}>
              <img
                src={image || fallbackImage}
                alt="Dodatkowe zdjęcie produktu"
                onError={(event) => handleImageError(event, fallbackImage)}
              />
            </div>
          ))}
        </div>
        <div className={s.imageWrap}>
          <img
            src={url || fallbackImage}
            alt="Zdjęcie produktu"
            onError={(event) => handleImageError(event, fallbackImage)}
          />
        </div>

        <AddToFavoritesBtn className={s.favorites} />
      </div>
    </div>
  );
};
