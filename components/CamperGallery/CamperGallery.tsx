'use client'; // Обов'язково для роботи useState та кліків

import { useState } from 'react';
import Image from 'next/image';
import { CamperImage } from '@/types/types';
import styles from './CamperGallery.module.css';

interface CamperGalleryProps {
  gallery: CamperImage[];
  alt: string;
}

export default function CamperGallery({ gallery = [], alt }: CamperGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (gallery.length === 0) {
    return <div className={styles.noImages}>No images available</div>;
  }

  const currentMainImage = gallery[activeIndex]?.original || gallery[activeIndex]?.thumb;

  return (
    <div className={styles.galleryContainer}>

      <div className={styles.mainImageWrapper}>
        <Image
          src={currentMainImage}
          alt={alt}
          width={638}
          height={530}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.sideGrid}>
        {gallery.map((img, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(index)} 
              className={`${styles.sideImageWrapper} ${isActive ? styles.activeThumb : ''}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={img.thumb}
                alt={alt}
                width={136}
                height={124}
                className={styles.image}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
