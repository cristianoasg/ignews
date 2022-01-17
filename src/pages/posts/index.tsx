import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client'

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>05 de junho de 2022</time>
            <strong> Creating a Monorepo with Learning & Yarn Workspaces</strong>
            <p>Breve descrição do paragrafo</p>
          </a>
          <a href="#">
            <time>05 de junho de 2022</time>
            <strong> Creating a Monorepo with Learning & Yarn Workspaces</strong>
            <p>Breve descrição do paragrafo</p>
          </a>
          <a href="#">
            <time>05 de junho de 2022</time>
            <strong> Creating a Monorepo with Learning & Yarn Workspaces</strong>
            <p>Breve descrição do paragrafo</p>
          </a>
        </div>
      </main>
    </>

  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}
