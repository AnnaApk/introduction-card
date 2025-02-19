'use client'
import { FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import spFlag from '../../assets/icons8-spain-30.png';
import enFlag from '../../assets/icons8-usa-30.png';
import styles from './langChoice.module.css';
import Image from "next/image";

export function LangChoice() {

  const [ lang , setLang ] = useState('EN')

  const { t } = useTranslation();

  function handleChange(event) {
    const selectedLang = event.target.value;
    setLang(selectedLang);
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n])
  
  return (
    <FormControl className={styles.form}>
      <Select
        id="lang-select"
        value={lang}
        onChange={handleChange}
      >
        <MenuItem value='ES'>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image src={spFlag} alt={t('es flag')} />
            <Typography className={styles.text}>Español</Typography>
          </Stack>
        </MenuItem>
        <MenuItem value='EN'>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image src={enFlag} alt={t('en flag')} />
            <Typography className={styles.text}>English</Typography>
          </Stack>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
