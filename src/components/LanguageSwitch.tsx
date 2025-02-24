import { Languages } from 'lucide-react';
import { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSwitch({ language, setLanguage }: Props) {
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="language-switch"
    >
      <Languages size={16} />
      <span>{language === 'en' ? '🇪🇸' : '🇬🇧'}</span>
    </button>
  );
}