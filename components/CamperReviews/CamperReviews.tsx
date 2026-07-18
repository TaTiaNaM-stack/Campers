import { CamperReview } from '@/types/types';
import styles from './CamperReviews.module.css';

interface CamperReviewsProps {
  data: CamperReview[]; 
}

export default function CamperReviews({ data }: CamperReviewsProps) {
  const reviews = data;

  return (
    <div className={styles.reviewsList}>
      {reviews.map((review, index) => {        
        const firstLetter = review.reviewer_name ? review.reviewer_name.charAt(0).toUpperCase() : '?';

        return (
          <div key={index} className={styles.reviewCard}>           
            <div className={styles.reviewHeader}>
              <div className={styles.avatar}>{firstLetter}</div>    
              <div className={styles.nameAndStars}>
                <h4 className={styles.reviewerName}>{review.reviewer_name}</h4>
                <div className={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div 
                      key={star} 
                      className={`${styles.starIcon} ${
                        star <= review.reviewer_rating ? styles.starFilled : styles.starEmpty
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.commentText}>{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
