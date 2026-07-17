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
  const { camperId } = await params;

  const [camperResponse, reviewsResponse] = await Promise.all([
    api.get<CamperCar>(`/campers/${camperId}`),
    api.get<CamperReview[]>(`/campers/${camperId}/reviews`)
  ]);
  const camper = camperResponse.data;
  const reviews = reviewsResponse.data;

  return (
    <main className={styles.container}>

      <div className={styles.topSection}>
        <CamperGallery gallery={camper.gallery} alt={camper.name} />
        <div className={styles.rightTop}>
          <CamperMainInfo camper={camper} />
          <VehicleDetails data={camper} />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <h2 className={styles.reviewTitle}>Review</h2>
        <div className={styles.downBlock}>
          <CamperReviews data={reviews} />
          <BookingForm />
        </div>
      </div>

    </main>
  );
}