export const COMPANY = {
  name: 'AKCI Gebäudereinigung',
  phone: '0176 64752995',
  email: 'akci.gebaeudereinigung@gmail.com',
  address: 'Volzstraße 7, 76185 Karlsruhe',
  ceo: 'Gökhan Akci',
  taxId: '35045/27074',
  whatsapp: '+4917664752995',
  telegram: '@akcigebaudereinigung',
} as const;

export const SERVICES = [
  {
    id: 'unterhaltsreinigung',
    name: 'Unterhaltsreinigung',
    description: 'Regelmäßige Reinigung für Büros, Wohngebäude und Gewerberäume',
    icon: '🏢',
    features: [
      'Büro- und Fensterreinigung',
      'Bodenreinigung und Pflege',
      'Sanitärreinigung',
      'Flexible Einsatzzeiten',
    ],
  },
  {
    id: 'grundreinigung',
    name: 'Grundreinigung',
    description: 'Intensive Tiefenreinigung für optimale Sauberkeit',
    icon: '✨',
    features: [
      'Komplette Raumreinigung',
      'Spezialreinigung schwieriger Oberflächen',
      'Desinfektionsreinigung',
      'Professionelle Ausrüstung',
    ],
  },
  {
    id: 'fensterreinigung',
    name: 'Fensterreinigung',
    description: 'Professionelle Fensterreinigung für klare Sicht',
    icon: '🪟',
    features: [
      'Innen- und Außenreinigung',
      'Rahmen und Dichtungen',
      'Hochwertige Reinigungsmittel',
      'Regelmäßige oder einmalige Reinigung',
    ],
  },
  {
    id: 'fassadenreinigung',
    name: 'Fassadenreinigung',
    description: 'Moderne Fassadenreinigung für strahlende Gebäude',
    icon: '🏗️',
    features: [
      'Hochdruckwäsche',
      'Schonende Reinigung empfindlicher Materialien',
      'Algenentfernung',
      'Schutzbehandlung',
    ],
  },
  {
    id: 'spezialreinigung',
    name: 'Spezialreinigung',
    description: 'Maßgeschneiderte Lösungen für spezielle Anforderungen',
    icon: '🔧',
    features: [
      'Teppichreinigung',
      'Polsterreinigung',
      'Parkettreinigung',
      'Industrie-Reinigung',
    ],
  },
  {
    id: 'gebaeudeverwaltung',
    name: 'Gebäudeverwaltung',
    description: 'Umfassende Reinigungslösungen für Ihre Immobilie',
    icon: '📋',
    features: [
      'Komplettbetreuung',
      'Qualitätskontrolle',
      'Transparente Abrechnung',
      'Kostenoptimierung',
    ],
  },
  {
    id: 'winterdienst',
    name: 'Winterdienst',
    description: 'Zuverlässiger Schnee- und Eisdienst für sichere Wege und Flächen',
    icon: '❄️',
    features: [
      'Schneeräumung',
      'Eisbekämpfung',
      'Streudienste',
      'Rund um die Uhr verfügbar',
    ],
  },
] as const;

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`,
  phone: `tel:${COMPANY.phone}`,
  email: `mailto:${COMPANY.email}`,
  location: 'https://maps.google.com/?q=Volzstraße+7+76185+Karlsruhe',
} as const;
