import styles from './PageLoader.module.css';

export default function PageLoader() {
    return (
        <div className={styles.overlay}>
            <div className={styles.loaderCard}>

                <div className={styles.spinner}></div> 
                
                <h2 className={styles.title}>Loading tracks...</h2>
                <p className={styles.subtitle}>
                    Please wait while we fetch the best travel trucks for you
                </p>
            </div>
        </div>
    );
}