import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import s from './ProductGalleryMobile.module.scss';
import { handleImageError } from '@/shared/lib/helpers';

type ProductGalleryMobileProps = {
  url: string;
  urls: string;
  fallbackImage: string;
  inStock: boolean;
  className?: string;
};

export const ProductGalleryMobile = ({
  url,
  fallbackImage,
  inStock,
  className,
}: ProductGalleryMobileProps) => {
  // После исправления бэка:
  // const images = urls
  //   ? urls
  //       .split(',')
  //       .map((url) => url.trim())
  //       .filter(Boolean)
  //   : [];

  // Временно
  const images = [url, url, url];

  return (
    <div className={clsx(className, s.galleryMobile, !inStock && s.outOfStock)}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className={s.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <div className={s.imageWrap}>
              <img
                src={image || fallbackImage}
                alt={`Zdjęcie produktu ${index + 1}`}
                onError={(event) => handleImageError(event, fallbackImage)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
