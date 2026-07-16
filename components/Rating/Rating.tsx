import { Camper } from '@/types/types';
import styles from './Rating.module.css';

interface RatingProps {
    data: Camper;
}

export default function Rating({ data }: RatingProps) {
    return(
        <div className={styles.metaRow}>
                    <div className={styles.rating}>
                        <div className={styles.starIcon} />
                        <span className={`${styles.ratingText} ${styles.text}`}>
                            {data.rating}({data.totalReviews} Reviews)
                        </span>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.locationIcon} />
                        <span className={`${styles.locationText} ${styles.text}`}>
                            {data.location}
                        </span>
                    </div>
                </div>
    )
}