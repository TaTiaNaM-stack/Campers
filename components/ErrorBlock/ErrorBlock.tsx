'use client';

import styles from './ErrorBlock.module.css';

interface ErrorBlockProps {
  onRetry: () => void;
  onCancel: () => void;
}

export default function ErrorBlock({ onRetry, onCancel }: ErrorBlockProps) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <span className={styles.icon}>⚠️</span>
        <h3 className={styles.title}>Oops! Something went wrong</h3>
        <p className={styles.subtitle}>
          We could not load the travel trucks. Please check your internet connection and try again.
        </p>
        <div className={styles.actionsGroup}>
          <button onClick={onRetry} className={styles.retryBtn}>
            Try Again
          </button>
          <button onClick={onCancel} className={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

