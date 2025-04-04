import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locals/en/en.json';
import uz from './locals/uz/uz.json';
import ру from './locals/ru/ru.json';

const resources = {
  en: {
    translation: en,
  },
  uz: {
    translation: uz,
  },
  ру: {
    translation: ру,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') ? localStorage.getItem('lng') : 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;