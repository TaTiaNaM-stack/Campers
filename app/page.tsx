import Link from 'next/link';
import css from './page.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <section className={css.hero} aria-labelledby="hero-title">
        <div className={css.inner}>
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
        </div>
      </section>
    </main>
  )
}