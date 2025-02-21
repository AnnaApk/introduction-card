import { FileText } from 'lucide-react';
import { Document } from '../types';

interface Props {
  documents: Document[];
  translations: {
    title: string;
    viewDocument: string;
  };
}

export default function DocumentSection({ documents, translations }: Props) {
  return (
    <section className="section">
      <h2>{translations.title}</h2>
      <div>
        {documents.map((doc) => (
          <a key={doc.title} href={doc.url} className="document-link" target='_blank'>
            <FileText size={20} />
            <span>{doc.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}