import Link from 'next/link';
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{COMPANY.name}</h3>
            <p className="text-gray-400 text-sm mb-4">
              Professionelle Reinigungslösungen für Gewerbe und Privatkundschaft.
            </p>
            <p className="text-gray-400 text-xs">
              Steuer-Nr.: {COMPANY.taxId}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#home" className="text-gray-400 hover:text-white transition-colors">
                  Startseite
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.phone}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📞</span>
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 break-all"
                >
                  <span>✉️</span>
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span>📍</span>
                {COMPANY.address}
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktiere uns</h4>
            <div className="space-y-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
              >
                <span>💬</span>
                WhatsApp
              </a>
              <a
                href={SOCIAL_LINKS.phone}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>☎️</span>
                Anrufen
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>📧</span>
                E-Mail
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
