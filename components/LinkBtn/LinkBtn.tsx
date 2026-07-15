'use client';

import Link from 'next/link';
import styles from './LinkBtn.module.css';

interface LinkBtnProps {
  text: string;   
  href?: string;    
  width?: string;
}

export default function LinkBtn({ text, href = '/campers', width = '100%' }: LinkBtnProps) {
  return (
    <Link href={href} className={styles.buttonLink} style={{ width }}>
      {text}
    </Link>
  );
}
