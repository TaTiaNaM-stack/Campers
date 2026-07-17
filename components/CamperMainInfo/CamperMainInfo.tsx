import { CamperCar } from '@/types/types';
import Rating from '@/components/Rating/Rating';
import styles from './CamperMainInfo.module.css';

interface CamperMainInfoProps {
  camper: CamperCar;
}

export default function CamperMainInfo({ camper }: CamperMainInfoProps) {
  const { name, price, description } = camper;

  return (
    <div className={styles.infoContainer}>
      <h2 className={`${styles.title} ${styles.txt}`}>{name}</h2>
      <Rating data={camper} />
      <h3 className={`${styles.price} ${styles.txt}`}>€{price.toFixed(0)}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
