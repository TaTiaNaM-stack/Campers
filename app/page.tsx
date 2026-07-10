import Image from "next/image";
import Link from 'next/link';
import css from './page.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <section className={css.hero} aria-labelledby="hero-title">
        <Image 
        src="/images/banner.jpg" 
        alt="Campers background"
        fill                      
        priority   
        quality={85} 
        className={css.backgroundImage}
      />
      <div className={css.gradientOverlay} />
          <div className={css.container}>
            <div className={css.content}>
              <h1 id="hero-title" className={css.title}>
                Campers of your dreams
              </h1>
              <p className={css.description}>
                You can find everything you want in our catalog
              </p>
            </div>
            <Link href="/campers" className={css.ctaButton}>
              View Now
            </Link>
          </div>    
      </section>
    </main>
  )
}