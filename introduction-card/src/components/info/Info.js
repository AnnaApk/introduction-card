'use client'
import { useTranslation } from "react-i18next";
import styles from './info.module.css';
export function Info(props) {

  const { t } = useTranslation();

  return (
    <>
      <h2 className={styles.h2}>Reliable Tenants Looking for a Long-Term Rental</h2>
      <p className={styles.hi}>{t('greeting-1')}</p>
      {/* <p className={styles.hi}>{t('greeting-2')}</p> */}
      <p className={styles.hi}>We are a responsible couple with a stable financial situation. Alexander has a reliable job that fully covers our needs, while Anna manages the household. We value cleanliness, tranquility, and good relations with neighbors.</p>
      {props.children}
      <p className={styles.hi}>{t('docs')}</p>
    </>
  )
}