'use client';

// import { Camper } from '@/types/types';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { useSearchParams } from 'next/navigation';
// import FilterSidebar from '../FilterSidebar/FilterSidebar';
// import CamperCard from '../CamperCard/CamperCard';
import Loader from '../Loader/Loader';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
// import { api } from '@/services/api';
import styles from './CampersSection.module.css';

// interface Filters {
//     location: string;
//     form: string;
//     engine: string;
//     transmission: string;
// }

// interface CampersSectionProps {
//     initialFilters: Filters;
// }

export default function CampersSection() {
    // const searchParams = useSearchParams();

    // const activeFilters: Filters = {
    //     location: searchParams.get('location') || '',
    //     form: searchParams.get('form') || '',
    //     engine: searchParams.get('engine') || '',
    //     transmission: searchParams.get('transmission') || '',
    // };

    // const {
    //     data,
    //     fetchNextPage,
    //     hasNextPage,
    //     isFetchingNextPage,
    //     // isLoading,
    //     isError,
    //     refetch,
    // } = useInfiniteQuery({
    //     queryKey: ['campers', activeFilters] as const,
    //     queryFn: async ({ pageParam = 1, queryKey }) => {
    //         const filters = queryKey[1];

    //         const response = await api.get('/campers', {
    //             params: {
    //                 ...filters,
    //                 page: pageParam,
    //                 limit: 4,
    //             },
    //         });

    //         return response.data;
    //     },

    //     initialPageParam: 1,
    //     getNextPageParam: (lastPage, allPages) => {
    //         const lastPageItems = Array.isArray(lastPage) ? lastPage : lastPage.items || [];
    //         return lastPageItems.length === 4 ? allPages.length + 1 : undefined;
    //     },
    // });

    // const handleFilterChange = () => {
    //     refetch();
    // };

    // const allCampers: Camper[] = data?.pages.flatMap((page) =>
    //     Array.isArray(page) ? page : page.items || []
    // ) || [];

    const isLoading = false;
    const isError = true;

    const handleFilterChange = () => {}; 
    

    return (
        <div className={styles.container}>
            {/* <FilterSidebar onFilterChange={handleFilterChange} /> */}
            <div className={styles.cardsList}>
                {isLoading ? (
                    <Loader />
                ) : isError ? (
                    <ErrorBlock onRetry={handleFilterChange} onCancel={handleFilterChange} />
                // ) : allCampers.length === 0 ? (
                //     <p className={styles.message}>No campers found matching your criteria.</p>
                ) : (
                    <p></p>
                //     <>
                //         {allCampers.map((camper) => (
                //             <CamperCard key={camper.id} data={camper} />
                //         ))}

                //         {hasNextPage && (
                //             <button
                //                 onClick={() => fetchNextPage()}
                //                 disabled={isFetchingNextPage}
                //                 className={styles.loadMoreBtn}
                //             >
                //                 {isFetchingNextPage ? 'Loading...' : 'Load More'}
                //             </button>
                //         )}
                //     </>
                )}
            </div>
        </div>
    );
}


