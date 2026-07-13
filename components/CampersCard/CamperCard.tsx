import { Camper } from '@/types/types';
import Image from 'next/image';
import styles from './CamperCard.module.css';

interface CamperCardProps {
    data: Camper;
}

export default function CamperCard({ data }: CamperCardProps) {
    const mainImage = data.coverImage || "/logo.png";
    const formattedPrice = `€${data.price.toFixed(0)}`;
    const capitalize = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    console.log(mainImage)
    return (
        <div className={styles.card}>

            <div className={styles.imageWrapper}>
                <Image
                    src={mainImage}
                    alt={data.name}
                    width={290}
                    height={240}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <h2 className={styles.title}>{data.name}</h2>
                    <span className={styles.price}>{formattedPrice}</span>
                </div>

                <div className={styles.metaRow}>
                    <div className={styles.rating}>
                        <div className={styles.starIcon} />
                        <span className={styles.ratingText}>
                            {data.rating}({data.totalReviews} Reviews)
                        </span>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.locationIcon} />
                        <span className={styles.locationText}>{data.location}</span>
                    </div>
                </div>

                <p className={styles.description}>{data.description}</p>

                <div className={styles.categories}>
                    <div className={styles.badge}>
                        <div className={`${styles.badgeIcon} ${styles.engineIcon}`} />
                        <span>{capitalize(data.engine)}</span>
                    </div>

                    <div className={styles.badge}>
                        <div className={`${styles.badgeIcon} ${styles.transmissionIcon}`} />
                        <span>{capitalize(data.transmission)}</span>
                    </div>

                    <div className={styles.badge}>
                        <div className={`${styles.badgeIcon} ${styles.formIcon}`} />
                        <span>{capitalize(data.form)}</span>
                    </div>
                </div>

                <button type="button" className={styles.showMoreBtn}>
                    Show more
                </button>
            </div>
        </div>

    );
}