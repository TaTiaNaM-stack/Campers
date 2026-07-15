import styles from './ClearBtn.module.css';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { RefObject } from 'react';

interface ClearBtnProps {
    onClear: () => void;
    formRef: RefObject<HTMLFormElement | null>;
    width?: string;
}

export default function ClearBtn({ onClear, formRef, width = '100%' }: ClearBtnProps) {
    const router = useRouter();
    const pathname = usePathname();
   
    const handleClearAll = () => {
        
        router.replace(pathname, { scroll: false });
        formRef.current?.reset();
        onClear();       
    };

    return (
        <button type="button" className={styles.buttonClear} style={{ width }} onClick={handleClearAll}>
            <Image
                src="/icons/cancel.svg"
                alt="Clear"
                width={12}
                height={12}
                className={styles.iconCancel}
            />
            Clear filters
        </button>
    )
}