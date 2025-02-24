import { useState } from 'react';
import { Language } from './types';
import { familyInfoEN, familyInfoES, contactInfo, documents } from './data';
import img from "./assets/DSC_6760.jpg";
import LanguageSwitch from './components/LanguageSwitch';
import FamilyCard from './components/FamilyCard';
import ContactSection from './components/ContactSection';
import DocumentSection from './components/DocumentSection';

const translations = {
  en: {
    title: 'Looking for Our New Home in Spain',
    subtitle: 'Responsible family seeking a long-term rental',
    aboutUs: 'About Our Family',
    contact: 'Contact Us',
    documents: 'Documents',
    viewDocument: 'View Document',
    background: 'Originally from Russia, previously lived in Serbia. We do not smoke, have no pets, and maintain a clean, orderly lifestyle.',
  },
  es: {
    title: 'Buscando Nuestro Nuevo Hogar en España',
    subtitle: 'Familia responsable buscando alquiler a largo plazo',
    aboutUs: 'Sobre Nuestra Familia',
    contact: 'Contáctanos',
    documents: 'Documentos',
    viewDocument: 'Ver Documento',
    background: 'Originalmente de Rusia, anteriormente vivimos en Serbia. No fumamos, no tenemos mascotas y mantenemos un estilo de vida limpio y ordenado.',
  },
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];
  const familyInfo = language === 'en' ? familyInfoEN : familyInfoES;

  return (
    <div className="container">
      <LanguageSwitch language={language} setLanguage={setLanguage} />
      
      <section className="hero">
        <img
          src={img}
          alt="Our Family"
        />
        <h1>{t.title}</h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--color-text-light)',
          maxWidth: '32rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {t.subtitle}
        </p>
      </section>

      <section className="section">
        <h2>{t.aboutUs}</h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: 'var(--color-text-light)'
        }}>
          {t.background}
        </p>
        {familyInfo.map((member) => (
          <FamilyCard key={member.name} member={member} />
        ))}
      </section>

      <ContactSection
        contact={contactInfo}
        translations={{
          title: t.contact,
          contactUs: t.contact,
        }}
      />

      <DocumentSection
        documents={documents}
        translations={{
          title: t.documents,
          viewDocument: t.viewDocument,
        }}
      />
    </div>
  );
}

export default App;