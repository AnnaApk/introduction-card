'use client'
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ban from "../../assets/icons8-no-80.png";
import styles from "./bans.module.css";


export function Bans() {

  const { t } = useTranslation();

  return (
    <div className={styles.box}>
     <Image src={ban} alt='' />
     <div>
      <p className={styles.text}>{t('no-smoking')}</p>
      <p className={styles.text}>{t('no-pets')}</p>
      
     </div>
    </div>
  )
}
