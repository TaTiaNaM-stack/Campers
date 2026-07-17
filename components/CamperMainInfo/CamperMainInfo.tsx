import { CamperCar } from '@/types/types';
import Rating from '@/components/Rating/Rating';
import styles from './CamperMainInfo.module.css';

interface CamperMainInfoProps {
  camper: CamperCar;
}

// 🎯 В аргументах только один пропс, который мы сразу превращаем в понятное слово camper
export default function CamperMainInfo({ camper }: CamperMainInfoProps) {
  
  // 🎯 Деструктуризация внутри функции — чисто, наглядно и без дублирования
  const { name, price, description } = camper;

  return (
    <div className={styles.infoContainer}>
      {/* Название кемпера */}
      <h1 className={styles.title}>{name}</h1>

      {/* Передаем сугубо типизированный объект camper в рейтинг */}
      <Rating data={camper} />

      {/* Цена кемпера */}
      <div className={styles.price}>€{price.toFixed(0)}</div>

      {/* Описание кемпера */}
      <p className={styles.description}>{description}</p>
    </div>
  );
}
