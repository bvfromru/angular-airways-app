export interface Airport {
  key: string;
  name: string;
  city: string;
  gmt: string;
  country: string;
}

export const airportsList = [
  {
    key: 'AMS',
    name: 'Amsterdam-Schiphol',
    city: 'Amsterdam',
    gmt: '+1.0',
    country: 'Netherlands',
  },
  {
    key: 'ATH',
    name: 'Eleftherios Venizelos',
    city: 'Athens',
    gmt: '+2.0',
    country: 'Greece',
  },
  {
    key: 'BER',
    name: 'Berlin Metropolitan Area',
    city: 'Berlin',
    gmt: '+1.0',
    country: 'Germany',
  },
  {
    key: 'BRN',
    name: 'Belp',
    city: 'Berne',
    gmt: '+1.0',
    country: 'Switzerland',
  },
  {
    key: 'LIS',
    name: 'Portela',
    city: 'Lisbon',
    gmt: '+0.0',
    country: 'Portugal',
  },
  {
    key: 'LHR',
    name: 'London Heathrow',
    city: 'London',
    gmt: '+0.0',
    country: 'United Kingdom',
  },
  {
    key: 'MAD',
    name: 'Barajas',
    city: 'Madrid',
    gmt: '+1.0',
    country: 'Spain',
  },
  {
    key: 'ORY',
    name: 'Orly',
    city: 'Paris',
    gmt: '+1.0',
    country: 'France',
  },
  {
    key: 'FCO',
    name: 'Leonardo da Vinci International (Fiumicino)',
    city: 'Rome',
    gmt: '+1.0',
    country: 'Italy',
  },
  {
    key: 'ARN',
    name: 'Arlanda',
    city: 'Stockholm',
    gmt: '+1.0',
    country: 'Sweden',
  },
];
