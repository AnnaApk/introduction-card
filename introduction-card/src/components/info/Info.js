'use client'
import { useTranslation } from "react-i18next";
import styles from './info.module.css';
export function Info(props) {

  const { t } = useTranslation();

  return (
    <>
      <p className={styles.hi}>{t('greeting-1')}</p>
      <p className={styles.hi}>{t('greeting-2')}</p>
      {props.children}
      <p className={styles.hi}>{t('docs')}</p>
    </>
  )
}