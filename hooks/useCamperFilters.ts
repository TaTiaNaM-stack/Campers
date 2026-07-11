import { useSearchParams } from 'next/navigation';

export interface CamperFilters {
  location: string;
  form: string;
  engine: string;
  transmission: string;
}

export function useCamperFilters(): CamperFilters {
  const searchParams = useSearchParams();

  const keys: (keyof CamperFilters)[] = ['location', 'form', 'engine', 'transmission'];
  const filters: CamperFilters = keys.reduce((acc, key) => {
    acc[key] = searchParams.get(key) || '';
    return acc;
  }, {} as CamperFilters);

  return filters;
}