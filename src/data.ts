import { FamilyInfo, ContactInfo, Document } from './types';

export const familyInfoEN: FamilyInfo[] = [
  {
    name: 'Aleksandr',
    role: 'Frontend Developer',
    description: 'Working remotely as a Frontend Developer at Podscribe, an American company',
  },
  {
    name: 'Anna',
    role: 'Homemaker',
    description: 'Taking care of the household and ensuring a well-maintained living space',
  },
];

export const familyInfoES: FamilyInfo[] = [
  {
    name: 'Aleksandr',
    role: 'Desarrollador Frontend',
    description: 'Trabajando remotamente como Desarrollador Frontend en Podscribe, una empresa americana',
  },
  {
    name: 'Anna',
    role: 'Ama de Casa',
    description: 'Encargada del hogar y asegurando un espacio de vida bien mantenido',
  },
];

export const contactInfo: ContactInfo = {
  phone: '+34 661 048 419',
  email: 'aapkhanova@gmail.com',
  whatsapp: '+7 916 453 8622',
};

export const documents: Document[] = [
  {
    title: 'Bank Statement',
    url: 'https://drive.google.com/file/d/1aQ8WUPa6-QCbBp09oCpVwUdgd42XTwH4/view?usp=sharing',
  },
  {
    title: 'Employment Contract',
    url: 'https://drive.google.com/file/d/172S3yjuue1wIzDXsYNvO-cRxh5s-_JCc/view?usp=sharing',
  },
];