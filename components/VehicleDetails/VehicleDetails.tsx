import { CamperCar } from '@/types/types';
import styles from './VehicleDetails.module.css';

interface VehicleDetailsProps {
  data: CamperCar;
}

export default function VehicleDetails({ data: camper }: VehicleDetailsProps) {
  // Функція для капіталізації першої літери (наприклад, automatic -> Automatic)
  const capitalize = (str: string) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : '');

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.sectionTitle}>Vehicle details</h2>
      <hr className={styles.divider} />

      {/* 1. Блок круглих бейджів характеристик (як на макеті) */}
      <div className={styles.badgesGrid}>
        <div className={styles.badge}>
          <div className={`${styles.badgeIcon} ${styles.transmissionIcon}`} />
          <span>{capitalize(camper.transmission)}</span>
        </div>
        
        <div className={styles.badge}>
          <div className={`${styles.badgeIcon} ${styles.engineIcon}`} />
          <span>{capitalize(camper.engine)}</span>
        </div>

        {/* Додайте інші бейджі за макетом (AC, Kitchen тощо), якщо вони є в amenities */}
        <div className={styles.badge}>
          <div className={`${styles.badgeIcon} ${styles.acIcon}`} />
          <span>AC</span>
        </div>
      </div>

      {/* 2. Автоматична таблиця параметрів машини */}
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.label}>Form</td>
            <td className={styles.value}>{capitalize(camper.form)}</td>
          </tr>
          <tr>
            <td className={styles.label}>Length</td>
            <td className={styles.value}>{camper.length}</td>
          </tr>
          <tr>
            <td className={styles.label}>Width</td>
            <td className={styles.value}>{camper.width}</td>
          </tr>
          <tr>
            <td className={styles.label}>Height</td>
            <td className={styles.value}>{camper.height}</td>
          </tr>
          <tr>
            <td className={styles.label}>Tank</td>
            <td className={styles.value}>{camper.tank}</td>
          </tr>
          <tr>
            <td className={styles.label}>Consumption</td>
            <td className={styles.value}>{camper.consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}