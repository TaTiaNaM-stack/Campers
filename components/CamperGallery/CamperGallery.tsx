import styles from './CamperGallery.module.css';
import {CamperImage} from '@/types/types';

interface GalleryProps {
    gallery: CamperImage[];
    alt: string;
}

export default function CamperGallery({gallery, alt}: GalleryProps){
const img = gallery;
const name = alt;
return(
    <div className={styles.galleryContainer}>
      {gallery && gallery.length > 0 ? (
        gallery.map((img) => (
          <div key={img.id} className={styles.imageWrapper}>
            <img 
              src={img.thumb} 
              alt={alt} 
              className={styles.galleryImage} 
            />
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
)
}