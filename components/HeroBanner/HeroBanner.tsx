import Image from "next/image";
import LinkBtn from '@/components/LinkBtn/LinkBtn';
import css from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
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
            <LinkBtn text="View now" width="173px" />
          </div>    
      </section>
  )
}