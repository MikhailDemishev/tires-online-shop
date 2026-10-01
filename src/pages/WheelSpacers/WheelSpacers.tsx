import s from './WheelSpacers.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useGetWheelSpacersQuery } from '@/entities/wheelSpacer/api';
import { WheelSpacerCard } from '@/entities/wheelSpacer/ui/WheelSpacerCard';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import type { WheelSpacerParams } from '@/entities/wheelSpacer/model';
import { PRODUCT_SORT_OPTIONS } from '@/features/sort/config';
import { ROUTES } from '@/app/router';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';
export const WheelSpacers = () => {
  const params = usePaginationParams<WheelSpacerParams>();
  const { data, isLoading, isError } = useGetWheelSpacersQuery(params);
  const wheelSpacers = data?.content;
  const seo = useSeo(undefined, undefined, ROUTES.wheelSpacers);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <ProductPageLayout
        title="pages.wheelSpacers.title"
        sortOptions={PRODUCT_SORT_OPTIONS}
        filterType="wheelSpacers"
        className={s.wheelSpacersPage}
        totalPages={data?.totalPages ?? 1}
        currentPage={data?.pageNumber ?? 1}
        category={{
          label: 'pages.wheelSpacers.title',
        }}
        isEmpty={!wheelSpacers?.length}
        isError={isError}
        isLoading={isLoading}
      >
        <ProductGrid
          items={wheelSpacers ?? []}
          getKey={(wheelSpacer) => wheelSpacer.id}
          renderItem={(wheelSpacer) => (
            <WheelSpacerCard wheelSpacer={wheelSpacer} />
          )}
        />
      </ProductPageLayout>
    </>
  );
};
