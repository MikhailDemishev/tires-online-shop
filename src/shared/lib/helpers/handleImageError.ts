import type { SyntheticEvent } from 'react';

export const handleImageError = (
  event: SyntheticEvent<HTMLImageElement>,
  fallBackImage: string,
) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallBackImage;
};
