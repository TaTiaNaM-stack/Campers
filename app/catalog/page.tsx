import CampersSection from '@/components/CampersSection/CampersSection';

interface CatalogPageProps {
  searchParams: Promise<{
    location?: string;
    form?: string;
    engine?: string;
    transmission?: string;
  }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
    const params = await searchParams;

     const initLocation = params.location || '';
  const initForm = params.form || '';
  const initEngine = params.engine || '';
  const initTransmission = params.transmission || '';

  const filters = {
    location: initLocation,
    form: initForm,
    engine: initEngine,
    transmission: initTransmission
  };

    return (
        <main>
            <CampersSection initialFilters={filters} />
        </main>
    );
}



