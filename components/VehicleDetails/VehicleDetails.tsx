import { CamperCar } from '@/types/types';
import styles from './VehicleDetails.module.css';

interface VehicleDetailsProps {
  data: CamperCar;
}

export default function VehicleDetails({ data: camper }: VehicleDetailsProps) {
  const formatText = (str: string) => {
    if (!str) return '';
    
    const cleanStr = str.replaceAll('_', ' ');
    return cleanStr.charAt(0).toUpperCase() + cleanStr.slice(1);
  };
 
  const badgesOrder = ['transmission', 'ac', 'engine', 'kitchen', 'radio', 'form'];

  const normalizedAmenities: string[] = Array.isArray(camper.amenities)
    ? camper.amenities
    : typeof camper.amenities === 'string'
    ? camper.amenities.split(',').map(item => item.trim().toLowerCase())
    : [];

  const badgesToRender = badgesOrder.filter(key => {
    if (key === 'transmission' || key === 'engine' || key === 'form') {
      return !!camper[key];
    }
    return normalizedAmenities.includes(key);
  });

  const tableFields = ['form', 'length', 'width', 'height', 'tank', 'consumption'] as const;

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.sectionTitle}>Vehicle details</h2>
      <div className={styles.badgesGrid}>
        {badgesToRender.map((key) => {
          const displayValue = (key === 'transmission' || key === 'engine' || key === 'form')
            ? camper[key]
            : key;
          return (
            <div key={key} className={styles.badge}>
              {formatText(displayValue)}
            </div>
          );
        })}
      </div>
      <hr className={styles.divider} />
      <table className={styles.table}>
        <tbody className={styles.tableRows}>
          {tableFields.map((field) => (
            <tr key={field}>
              <td className={styles.label}>{formatText(field)}</td>
              <td className={styles.value}>
                {field === 'form' ? formatText(camper[field]) : camper[field]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}