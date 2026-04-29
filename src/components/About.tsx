import { COMPANY } from '@/lib/constants';

export function About() {
  const strengths = [
    {
      icon: '⚡',
      title: 'Schnell & Zuverlässig',
      description: 'Pünktliche Abläufe und professionelle Durchführung'
    },
    {
      icon: '🎯',
      title: 'Gründliche Arbeit',
      description: 'Keine Ecke bleibt unbeachtet - höchste Standards'
    },
    {
      icon: '💚',
      title: 'Umweltfreundlich',
      description: 'Einsatz von nachhaltigen Reinigungsmitteln'
    },
    {
      icon: '💰',
      title: 'Faire Preise',
      description: 'Transparente Kalkulation ohne versteckte Kosten'
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideUp">
            <div>
              <p className="text-primary-600 font-semibold mb-2">Über AKCI</p>
              <h2 className="mb-4">Dein Partner für Sauberkheit</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Seit über 10 Jahren vertrauen Hunderte von Kunden unserer Expertise. Wir sind stolz auf unsere hohe Qualität und den ausgezeichneten Kundenservice.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Unter der Leitung von {COMPANY.ceo} haben wir ein Team von geschulten Profis aufgebaut, die mit Leidenschaft arbeiten. Jeder Kunde ist uns wichtig, ob privat oder gewerblich.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {strengths.map((strength) => (
                <div key={strength.title} className="space-y-2">
                  <div className="text-3xl">{strength.icon}</div>
                  <h3 className="font-semibold text-gray-900">{strength.title}</h3>
                  <p className="text-sm text-gray-600">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl space-y-6">
              <div>
                <p className="text-gray-600 mb-2">Geschäftsführer</p>
                <p className="text-2xl font-bold text-primary-600">{COMPANY.ceo}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Standort</p>
                    <p className="text-gray-600">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Kontakt</p>
                    <p className="text-gray-600">{COMPANY.phone}</p>
                    <p className="text-gray-600">{COMPANY.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-primary-200 p-8 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-4">Warum AKCI?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Professionelle Schulung</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Moderne Ausrüstung</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Flexible Zeitfenster</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Kundenfreundlicher Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
