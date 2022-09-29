import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import waffleCMS from './cms';
import {Utilities} from './utilities';

const localStorageEn = window && window.localStorage.getItem('lang');
const currentLang =
  localStorageEn && Utilities.isEmpty(localStorageEn) ? 'eng' : localStorageEn;

const resources = {
  en: {
    translation: {
      app_name: waffleCMS.mainAppTitle,
    },
  },
  mal: {
    translation: {
      app_name: waffleCMS.mainApptitleMal,
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
