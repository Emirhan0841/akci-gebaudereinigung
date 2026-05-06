import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <div className="mb-8">
          <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Zurück zur Startseite
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Name des Unternehmens</h3>
                <p>Akci Gebäudereinigung</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geschäftsführer</h3>
                <p>Gökhan Akci</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontaktinformationen</h3>
                <p>
                  Telefon: <a href="tel:01783907693" className="text-primary-600 hover:text-primary-700">0178 3907693</a>
                </p>
                <p>
                  E-Mail: <a href="mailto:akci.gebaeudereinigung@gmail.com" className="text-primary-600 hover:text-primary-700">akci.gebaeudereinigung@gmail.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Steuer-Identifikationsnummer</h3>
                <p>35045/27074</p>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlichkeit für Inhalte</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Schöpfers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem eine Urheberrechtsverletzung bemerken, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Datenschutz</h2>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Bitte beachten Sie unsere Datenschutzerklärung in Bezug auf die Verwendung von Daten bei der Nutzung dieser Website.
            </p>
            <p className="mt-4">
              Für mehr Informationen besuchen Sie unsere <Link href="/datenschutz" className="text-primary-600 hover:text-primary-700 font-semibold">Datenschutzerklärung</Link>.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p>
              Wir bemühen uns, dass die Informationen auf dieser Website korrekt, vollständig und aktuell sind. Trotz sorgfältiger redaktioneller Kontrolle übernehmen wir keine Haftung für die Korrektheit, Vollständigkeit oder Aktualität der bereitgestellten Informationen, insbesondere für Inhalte von Dritten.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Akci Gebäudereinigung. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </main>
  );
}
