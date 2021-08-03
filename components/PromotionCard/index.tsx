import Image from 'next/image'
import styles from './PromotionCard.module.css'

export interface PromotionCardProps {
  name: string
  description: string
  heroImageUrl: string
  termsAndConditionsButtonText: string
  joinNowButtonText: string
}

const PromotionCard = ({
  name,
  description,
  heroImageUrl,
  termsAndConditionsButtonText,
  joinNowButtonText,
}: PromotionCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={heroImageUrl} alt="Vercel Logo" layout="fill" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h3>{name}</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>{description}</p>
        </div>
        <div className={styles.cardBtns}>
          <button>{termsAndConditionsButtonText}</button>
          <button>{joinNowButtonText}</button>
        </div>
      </div>
    </div>
  )
}

export default PromotionCard
