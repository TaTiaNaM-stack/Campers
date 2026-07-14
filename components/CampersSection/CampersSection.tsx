'use client';

import { Camper } from '@/types/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCamperFilters } from '@/hooks/useCamperFilters';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import CamperCard from '../CamperCard/CamperCard';
import PageLoader from '../PageLoader/PageLoader';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import { api } from '@/services/api';
import styles from './CampersSection.module.css';

export default function CampersSection() {
    const activeFilters = useCamperFilters();

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isFetching,
        isError,
        refetch,
    } = useInfiniteQuery({
        queryKey: ['campers', activeFilters] as const,
        queryFn: async ({ pageParam = 1, queryKey }) => {
            const filters = queryKey[1] || {};

            const cleanParams = Object.fromEntries(
                Object.entries(filters).filter(([_, value]) => {
                    if (value === '' || value === null || value === undefined) return false;
                    if (Array.isArray(value) && value.length === 0) return false;
                    return true;
                })
            );

            const response = await api.get('/campers', {
                params: {
                    ...cleanParams,
                    page: pageParam,
                    perPage: 4,
                },
            });

            return response.data;
        },

        initialPageParam: 1,

        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.totalPages
                ? lastPage.page + 1
                : undefined;
        },
    });

    const handleFilterChange = () => {
        refetch();
    };

    const allCampers: Camper[] =
        data?.pages.flatMap((page) => page.campers) ?? [];

    return (
        <div className={styles.container}>
             {isFetching && <PageLoader />}
            <FilterSidebar onFilterChange={handleFilterChange} />
            <div className={styles.cardsList}>
                {isError ? (
                    <ErrorBlock onRetry={handleFilterChange} onCancel={handleFilterChange} />
                ) : allCampers.length === 0 ? (
                    <p className={styles.message}>No campers found matching your criteria.</p>
                ) : (
                    <>                   
                        {allCampers.map((camper) => (
                            <CamperCard key={camper.id} data={camper} />
                        ))}                       

                        {hasNextPage && (
                            <button
                                onClick={() => fetchNextPage()}
                                disabled={isFetchingNextPage}
                                className={styles.loadMoreBtn}
                            >
                                {isFetchingNextPage ? 'Loading...' : 'Load More'}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}


