import { api } from '@/services/api';
import { CamperCar, CamperReview } from '@/types/types';
import CamperGallery from '@/components/CamperGallery/CamperGallery'
import CamperMainInfo from '@/components/CamperMainInfo/CamperMainInfo';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import CamperReviews from '@/components/CamperReviews/CamperReviews';
import BookingForm from '@/components/BookingForm/BookingForm';
import styles from './page.module.css';

interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

export default async function CamperDetailPage({ params }: CamperPageProps) {
  // 1. Отримуємо індивідуальний ID кемпера з URL-рядка
  const { camperId } = await params;

  // 2. Скачуємо чисті дані про цю машину з бекенду GoIT

  const [camperResponse, reviewsResponse] = await Promise.all([
    api.get<CamperCar>(`/campers/${camperId}`),
    api.get<CamperReview[]>(`/campers/${camperId}/reviews`)
  ]);
  const camper = camperResponse.data;
  const reviews = reviewsResponse.data; 

  return (
    /* 🎯 Головний семантичний тег <main> для всієї сторінки деталей */
    <main className={styles.container}>
      
      {/* 📦 ВЕРХНЯ ЧАСТИНА СТОРІНКИ (Двоколонкова сітка за макетом) */}
      <div className={styles.topSection}>
        {/* Ліва колонка: Велика галерея зображень */}
        <div className={styles.galleryColumn}>
          <CamperGallery gallery={camper.gallery} alt={camper.name} />
        </div>

        {/* Права колонка: Назва, рейтинг, ціна та опис машини */}
        <div className={styles.infoColumn}>
          <CamperMainInfo data={camper} />
        </div>
      </div>

      {/* 📦 НИЖНЯ ЧАСТИНА СТОРІНКИ (Дві великі колонки) */}
      <div className={styles.bottomSection}>
        {/* Ліва колонка: Спочатку характеристики, потім відгуки */}
        <div className={styles.leftColumn}>
          <VehicleDetails data={camper} />
          <CamperReviews data={reviews} />
        </div>
        
        {/* Права колонка: Форма бронювання */}
        <div className={styles.rightColumn}>
          <BookingForm />
        </div>
      </div>

    </main>
  );
}