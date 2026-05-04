import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <div className="mb-8">
          <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Zurück zur Startseite
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten geschieht, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Datenerfassung auf dieser Website</h3>
            <div className="space-y-2">
              <div>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <p className="mt-2">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>
              <div>
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <p className="mt-2">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="mt-2">
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenzugriffs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
              </div>
              <div>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
                <p className="mt-2">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
              <div>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <p className="mt-2">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hostess gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mt-4">
              Das externe Hosting erfolgt zum Zwecke der Erfüllung unserer Leistungspflichten gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebotes durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 7 Abs. 2 Nr. 1 TMG, soweit die Einwilligung die Speicherung von Cookies oder die Erfassung von Nutzerinformationen (z. B. über Nutzungsprofile) umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Allgemeine Angaben und Pflichtinformationen</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p>
                <strong>Akci Gebäudereinigung</strong><br />
                Geschäftsführer: Gökhan Akci<br />
                Telefon: 0176 647 52 99 95<br />
                E-Mail: akci.gebaeudereinigung@gmail.com
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Widerruf von Einwilligungen</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere im Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kontaktformular</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten verarbeitet, um Ihre Anfrage zu bearbeiten und um mit Ihnen in Kontakt zu treten.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Rechtsgrundlage für die Datenverarbeitung</h3>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Zweck der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung der personenbezogenen Daten aus dem Kontaktformular dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle eines Kontaktformulares mit Kaufbezug ist die Verarbeitung auch erforderlich zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Speicherdauer</h3>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist grundsätzlich der Fall, wenn die Kommunikation mit dem Nutzer beendet wurde.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>

            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie haben zudem das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese an einen anderen für die Datenverarbeitung Verantwortlichen zu übermitteln (Datenportabilität).
            </p>

            <p className="mt-4">
              Falls Sie Fragen zu Ihren Rechten haben oder eine dieser Rechte in Anspruch nehmen möchten, kontaktieren Sie uns bitte unter:
            </p>

            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p>
                E-Mail: <a href="mailto:akci.gebaeudereinigung@gmail.com" className="text-primary-600 hover:text-primary-700">akci.gebaeudereinigung@gmail.com</a><br />
                Telefon: <a href="tel:01766475299" className="text-primary-600 hover:text-primary-700">0176 647 52 99 95</a>
              </p>
            </div>
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
