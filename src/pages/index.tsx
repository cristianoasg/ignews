import Head from 'next/head';
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <head>
        <title>Inicio | ig.news</title>
      </head>
      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </>
  )
}
