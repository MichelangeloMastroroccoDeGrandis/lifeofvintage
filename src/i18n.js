import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from 'i18next-react-native-language-detector';

import en from './lang/en';
import it from './lang/it';
i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: it,
      },
      en: {
        translation: en,
      },
    },
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;