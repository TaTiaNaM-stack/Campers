import { Camper, CamperCar } from '@/types/types';
import styles from './Rating.module.css';

interface RatingProps {
    data: Camper | CamperCar;
}

export default function Rating({ data }: RatingProps) {
    const {
        rating,
        totalReviews,
        location
    } = data
    return (
        <div className={styles.metaRow}>
            <div className={styles.rating}>
                <div className={styles.starIcon} />
                <span className={`${styles.ratingText} ${styles.text}`}>
                    {rating}({totalReviews} Reviews)
                </span>
            </div>
            <div className={styles.location}>
                <div className={styles.locationIcon} />
                <span className={`${styles.locationText} ${styles.text}`}>
                    {location}
                </span>
            </div>
        </div>
    )
}