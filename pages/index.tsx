import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PromotionCard from '../components/PromotionCard'
import { PromotionCardProps } from '../components/PromotionCard'

interface PromotionProps extends PromotionCardProps {
  id: number
  onlyNewCustomers: boolean
  sequence: number
}

interface promotionsDataProps {
  data: PromotionProps[]
}

export default function Home({ data }: promotionsDataProps) {
  const sortedSequenceArr = data.sort(function (a, b) {
    return a.sequence - b.sequence
  })

  const [promotions, setPromotions] = useState(sortedSequenceArr)

  const showNewCustomersPromos = () => {
    setPromotions(
      sortedSequenceArr.filter((promo) => promo.onlyNewCustomers === true)
    )
  }

  const showAllPromos = () => {
    setPromotions(sortedSequenceArr)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Promotions App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Promotions App</h1>
        <div className={styles.filterBtns}>
          <p>Filters: </p>
          <button onClick={() => showAllPromos()}>All Promotions</button>
          <button onClick={() => showNewCustomersPromos()}>
            New Customers
          </button>
        </div>
        <div className={styles.promotionsGrid}>
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} {...promo} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}