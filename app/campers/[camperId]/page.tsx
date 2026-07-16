import { api } from '@/services/api';
import { Camper } from '@/types/types';
import CamperMainInfo from '@/components/CamperMainInfo/CamperMainInfo';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import CamperReviews from '@/components/CamperReviews/CamperReviews';
import BookingForm from '@/components/BookingForm/BookingForm';
import styles from './page.module.css';

interface CamperPageProps {
  params: Promise<{ id: string }>;
}

export default async function CamperDetailPage({ params }: CamperPageProps) {
  // 1. Отримуємо індивідуальний ID кемпера з URL-рядка
  const { id } = await params;

  // 2. Скачуємо чисті дані про цю машину з бекенду GoIT
  const response = await api.get<Camper>(`/campers/${id}`);
  const camper = response.data;

  return (
    /* 🎯 Головний семантичний тег <main> для всієї сторінки деталей */
    <main className={styles.container}>
      
      {/* 📦 БЛОК 1: Фотогалерея, Назва, Рейтинг, Ціна та Опис */}
      <CamperMainInfo data={camper} />

      {/* 📦 БЛОК 2: Круглі бейджі характеристик та Автоматична таблиця */}
      <VehicleDetails data={camper} />

      {/* 💬 БЛОК 3: Нижня частина сторінки (Дві колонки за Figma) */}
      <div className={styles.reviewBlock}>
        {/* Колонка відгуків зліва */}
        <div className={styles.reviewSection}>
          <CamperReviews data={camper} />
        </div>
        
        {/* Колонка форми бронювання справа */}
        <div className={styles.bookingForm}>
          <BookingForm />
        </div>
      </div>

    </main>
  );
}