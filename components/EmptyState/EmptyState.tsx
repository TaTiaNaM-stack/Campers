import ClearBtn from '../ClearBtn/ClearBtn';
import styles from './EmptyState.module.css';
import LinkBtn from '../LinkBtn/LinkBtn';
import Image from 'next/image';

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className={styles.container}>
      <Image 
        src="/images/no-campers.png"
        alt="No campers found"
        width={488}
        height={463}
        className={styles.imgNoCar}
        priority
      /> 
      
      <div className={styles.textContainer}>
        <h2 className={styles.title}>No campers found</h2>
        <p className={styles.text}>
          We could not find any campers that match your filters.
          <br/>
          Try adjusting your search or clearing some filters.
        </p>      
      </div>

      <div className={styles.btnContainer}>
        <ClearBtn onClear={onClear} formRef={{ current: null }} width="240px" />
        <LinkBtn text="View all campers" width="240px" />        
      </div>
    </div>
  );
}