import { Phone, Mail, MessageCircle } from 'lucide-react';
import { ContactInfo } from '../types';

interface Props {
  contact: ContactInfo;
  translations: {
    title: string;
    contactUs: string;
  };
}

export default function ContactSection({ contact, translations }: Props) {
  return (
    <section className="section">
      <h2>{translations.title}</h2>
      <div>
        <a href={`tel:${contact.phone}`} className="contact-link">
          <Phone size={20} />
          <span>{contact.phone}</span>
        </a>
        <a href={`mailto:${contact.email}`} className="contact-link">
          <Mail size={20} />
          <span>{contact.email}</span>
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=¡Buenas%20tardes!%20Su%20candidatura%20ha%20sido%20revisada.%20Le%20escribo%20en%20relación%20al%20alquiler%20del%20apartamento%20en%20la%20dirección:%20Good%20afternoon!%20Your%20application%20has%20been%20reviewed.%20I%20am%20writing%20to%20you%20regarding%20the%20rental%20of%20the%20apartment%20at%20the%20address:%20...`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}