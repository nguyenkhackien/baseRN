import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import {LanguageEnum} from '../enum';

export const languageDetector = {
  type: 'languageDetector' as 'languageDetector',
  async: true,
  detect: (callback: Function) => {
    callback(LanguageEnum.EN);
  },
  init: Function.prototype,
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    ns: 'common',
    defaultNS: 'common',
    resources: {
      en: {common: en},
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
