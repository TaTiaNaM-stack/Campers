import css from './page.module.css'

export default function Home() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Welcome to Next.js!</h1>
      <p className={css.description}>
        Get started by editing <code className={css.code}>app/page.tsx</code>
      </p>
    </main>
  )
}