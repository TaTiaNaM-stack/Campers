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
  // Зберігаємо індекс поточної активної (великої) картинки. За дефолтом — перша (0)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (gallery.length === 0) {
    return <div className={styles.noImages}>No images available</div>;
  }

  // Визначаємо, яку картинку показувати у великому блоці зверху
  const currentMainImage = gallery[activeIndex]?.original || gallery[activeIndex]?.thumb;

  return (
    <div className={styles.galleryContainer}>
      {/* Велике головне фото зверху */}
      <div className={styles.mainImageWrapper}>
        <Image
          src={currentMainImage}
          alt={alt}
          fill
          sizes="(max-width: 1200px) 100vw, 888px"
          className={styles.image}
          priority
        />
      </div>

      {/* Горизонтальний ряд ОВОХ/УСІХ картинок знизу */}
      <div className={styles.sideGrid}>
        {gallery.map((img, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(index)} // Зміна великої картинки при кліку!
              className={`${styles.sideImageWrapper} ${isActive ? styles.activeThumb : ''}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={img.thumb}
                alt={alt}
                fill
                sizes="(max-width: 1200px) 33vw, 200px"
                className={styles.image}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
