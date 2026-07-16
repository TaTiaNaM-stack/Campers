import { CamperReview } from '@/types/types';
import styles from './CamperReviews.module.css';

interface CamperReviewsProps {
  data: CamperReview[]; // Приймаємо нашу мандаринку-кемпер, щоб дістати з неї дольку reviews
}

export default function CamperReviews({ data }: CamperReviewsProps) {
  const reviews = data;

  // Якщо відгуків взагалі немає в базі
  if (reviews.length === 0) {
    return <p className={styles.noReviews}>No reviews yet for this camper.</p>;
  }

  return (
    <div className={styles.reviewsList}>
      {reviews.map((review, index) => {
        // Беремо першу літеру імені для красивої круглої аватарки (наприклад, "A" для Alex)
        const firstLetter = review.reviewer_name ? review.reviewer_name.charAt(0).toUpperCase() : '?';

        return (
          <div key={index} className={styles.reviewCard}>
            {/* 👤 Верхній рядок: Аватарка, Ім'я та індивідуальні зірочки */}
            <div className={styles.reviewHeader}>
              <div className={styles.avatar}>{firstLetter}</div>
              
              <div className={styles.nameAndStars}>
                <h4 className={styles.reviewerName}>{review.reviewer_name}</h4>
                
                {/* Рендеримо точну кількість жовтих зірочок від 1 до 5 для цього користувача */}
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

            {/* 💬 Текст самого коментаря */}
            <p className={styles.commentText}>{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
