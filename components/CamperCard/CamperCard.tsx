import { Camper } from '@/types/types';
import Rating from '../Rating/Rating';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CamperCard.module.css';

interface CamperCardProps {
    cars: Camper;
}

export default function CamperCard({ cars }: CamperCardProps) {
    const { 
        id, 
        name, 
        coverImage, 
        price, 
        description, 
        engine, 
        transmission, 
        form 
    } = cars;
    const mainImage = coverImage || "/logo.svg";
    const formattedPrice = `€${price.toFixed(0)}`;
    const capitalize = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    
    return (
        <div className={styles.card}>

            <div className={styles.imageWrapper}>
                <Image
                    src={mainImage}
                    alt={name}
                    width={290}
                    height={240}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.headerRow}>
                    <h2 className={`${styles.title} ${styles.header}`}>{name}</h2>
                    <span className={`${styles.price} ${styles.header}`}>{formattedPrice}</span>
                </div>

                <Rating  data={cars}/>
                
                <p className={`${styles.description} ${styles.text}`}>
                    {description}
                </p>

                <div className={styles.categories}>
                    <div className={`${styles.badge} ${styles.middleBoldText}`}>
                        <div className={`${styles.badgeIcon} ${styles.engineIcon}`} />
                        <span>{capitalize(engine)}</span>
                    </div>

                    <div className={styles.badge}>
                        <div className={`${styles.badgeIcon} ${styles.transmissionIcon}`} />
                        <span>{capitalize(transmission)}</span>
                    </div>

                    <div className={styles.badge}>
                        <div className={`${styles.badgeIcon} ${styles.formIcon}`} />
                        <span>{capitalize(form)}</span>
                    </div>
                </div>

                <Link 
                    href={`/campers/${id}`}
                    className={`${styles.showMoreBtn} ${styles.middleBoldText}`}>
                    Show more
                </Link>
            </div>
        </div>

    );
}