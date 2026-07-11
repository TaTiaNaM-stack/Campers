import { useRouter, usePathname } from 'next/navigation';
import { useCamperFilters } from '@/hooks/useCamperFilters';
import { FILTER_SECTIONS } from '@/constants/filters';
import styles from './FilterSidebar.module.css';
import Image from 'next/image';

interface FilterSidebarProps {
    onFilterChange: () => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const filters = useCamperFilters();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const params = new URLSearchParams();

        formData.forEach((value, key) => {
            if (typeof value === 'string') {
                const processedValue = key === 'location' ? value.trim() : value;
                if (processedValue) {
                    params.set(key, processedValue);
                }
            }
        });

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
        onFilterChange();
    };

    const handleClearAll = () => {
        router.push(pathname, { scroll: false });
        onFilterChange();
    };

    return (
        <form onSubmit={handleSearch} className={styles.sidebar}>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Location</label>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        name="location"
                        defaultValue={filters.location}
                        placeholder="City"
                        className={styles.input}
                    />
                    <Image
                        src="/icons/map.svg"
                        alt="Map icon"
                        width={20}
                        height={20}
                        className={styles.icon}
                    />
                </div>
            </div>

            <p className={styles.filtersHeading}>Filters</p>

            <div className={styles.filtersBlock}>
                {FILTER_SECTIONS.map((section) => (
                    <div key={section.id} className={styles.filterSection}>
                        <h3 className={styles.filterTitle}>{section.title}</h3>
                        <div className={styles.radioList}>
                            {section.items.map((item) => (
                                <label key={item.id} className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name={section.id}
                                        value={item.id}
                                        key={filters[section.id]}
                                        defaultChecked={filters[section.id] === item.id}
                                        className={styles.radioInput}
                                    />
                                    {item.label}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.buttonsGroup}>
                <button type="submit" className={styles.buttonSubmit}>Search</button>
                <button type="button" onClick={handleClearAll} className={styles.buttonClear}>
                    <Image
                        src="/icons/cancel.svg"
                        alt="Cancel icon"
                        width={16}
                        height={16}
                        className={styles.clearIcon}
                    />
                    Clear filters
                </button>
            </div>
        </form>
    );
}
