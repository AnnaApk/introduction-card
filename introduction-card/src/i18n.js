import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: enTranslation,
      },
      ES: {
        translation: esTranslation,
      },
    },
    lng: 'EN',
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
