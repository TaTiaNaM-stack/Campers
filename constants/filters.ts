import { CamperFilters } from '@/hooks/useCamperFilters';

export interface FilterSectionItem {
  id: string;
  label: string;
}

export interface FilterSection {
  id: keyof CamperFilters;
  title: string;
  items: FilterSectionItem[];
}

export const FILTER_SECTIONS: FilterSection[] = [
  {
    id: 'form',
    title: 'Camper form',
    items: [
      { id: 'alcove', label: 'Alcove' },
      { id: 'panel_van', label: 'Panel Van' },
      { id: 'integrated', label: 'Integrated' },
      { id: 'semi_integrated', label: 'Semi Integrated' },
    ],
  },
  {
    id: 'engine',
    title: 'Engine',
    items: [
      { id: 'diesel', label: 'Diesel' },
      { id: 'petrol', label: 'Petrol' },
      { id: 'hybrid', label: 'Hybrid' },
      { id: 'electric', label: 'Electric' },
    ],
  },
  {
    id: 'transmission',
    title: 'Transmission',
    items: [
      { id: 'automatic', label: 'Automatic' },
      { id: 'manual', label: 'Manual' },
    ],
  },
];