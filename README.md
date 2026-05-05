# AKCI Gebäudereinigung Website

Moderne, responsive Website für AKCI Gebäudereinigung Karlsruhe.

## Features

- 🎨 **Modern Design** - Sauberes, professionelles Design mit Türkis/Blau und Hellgrün
- 📱 **Responsive** - Perfekt auf allen Geräten (Mobile, Tablet, Desktop)
- ⚡ **Schnell** - Optimiert für maximale Performance
- 🔍 **SEO-optimiert** - Strukturierte Daten und Meta Tags
- 📧 **Kontaktformular** - Mit E-Mail-Versand
- 📞 **Multi-Channel** - WhatsApp, Telegram, E-Mail, Telefon Integration
- 🗺️ **Google Maps** - Standort auf interaktiver Karte
- 📸 **Galerie** - Portfolio mit verschiedenen Kategorien
- 🔒 **Sicher** - CSRF-Protection, Rate Limiting

## Tech Stack

- **Next.js 14** - React Framework mit App Router
- **TypeScript** - Typsicherheit
- **Tailwind CSS** - Styling
- **React Hook Form** - Formular-Verwaltung
- **Nodemailer** - E-Mail-Versand

## Getting Started

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Environment Variables

```bash
# Kopiere .env.example zu .env.local
cp .env.example .env.local

# Konfiguriere deine SMTP-Einstellungen
# (Siehe .env.example für Details)
```

### Email-Konfiguration

Das Kontaktformular sendet E-Mails über SMTP. Ohne SMTP-Konfiguration funktioniert das Formular lokal, sendet aber keine E-Mails.

**Mit Gmail:**
1. [App Password erstellen](https://support.google.com/accounts/answer/185833)
2. In `.env.local` eintragen:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=deine-email@gmail.com
   SMTP_PASSWORD=dein-app-passwort
   SMTP_FROM=noreply@akci-gebaeudereinigung.de
   SMTP_TO=akci.gebaeudereinigung@gmail.com
   ```

**Mit Outlook/Office 365:**
   ```
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=deine-email@outlook.com
   SMTP_PASSWORD=dein-passwort
   ```

## Projektstruktur

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── layout.tsx               # Root layout mit Meta-Tags
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── Navigation.tsx            # Header mit Navigation
│   ├── Hero.tsx                  # Hero section
│   ├── About.tsx                 # Über uns section
│   ├── Services.tsx              # Leistungen
│   ├── Gallery.tsx               # Galerie
│   ├── ContactForm.tsx           # Kontaktformular
│   ├── Footer.tsx                # Footer
│   └── index.ts                  # Barrel exports
└── lib/
    ├── constants.ts              # Konstanten (Unternehmensdaten, Services)
    └── utils.ts                  # Utility-Funktionen
```

## Anpassungen

### Unternehmensdaten ändern
Bearbeite `src/lib/constants.ts`:

```typescript
export const COMPANY = {
  name: 'AKCI Gebäudereinigung',
  phone: '0176 647 529 95',
  email: 'akci.gebaeudereinigung@gmail.com',
  address: 'Volzstraße 7, 76185 Karlsruhe',
  ceo: 'Gökhan Akci',
  taxId: '35045/27074',
};
```

### Logo ändern
Platziere deine Logo-Dateien in `public/logo/`:
- `icon.png` - Favicon (quadratisch)
- `logo.png` - Vollständiges Logo
- `schriftzug.png` - Nur Text-Version

### Farben anpassen
Bearbeite `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* Türkis/Blau */ },
  accent: { /* Hellgrün */ },
}
```

### Dienstleistungen hinzufügen
Bearbeite `src/lib/constants.ts` im `SERVICES` Array.

### Galerie-Bilder hinzufügen
Bearbeite `src/components/Gallery.tsx` - ersetze `galleryItems` mit echten Bildern:

```typescript
const galleryItems = [
  {
    id: 1,
    title: 'Büroreinigung',
    category: 'Gewerbe',
    image: '/images/buero-1.jpg', // Dein Bild
  },
  // ...
];
```

## Build & Deployment

```bash
# Production build
npm run build

# Production server starten
npm run start
```

### Deployment Optionen

- **Vercel** (empfohlen): `vercel deploy`
- **Netlify**: Verbinde Git-Repo
- **Docker**: `docker build -t akci-site .`
- **Selbst-gehostet**: Node.js Server erforderlich

## Performance

- Bilder sind optimiert (WebP, Avif)
- CSS ist minimal und purged
- Code-Splitting auf Route-Basis
- Static Generation wo möglich

Lighthouse Score Target: 90+

## Sicherheit

- ✅ CSRF-Protection (Next.js builtin)
- ✅ Rate Limiting auf Contact API
- ✅ Input Validation
- ✅ HTML Escaping
- ✅ No SQL Injection (kein DB-Access)
- ✅ HTTPS ready

## Maintenance

### Regelmäßige Updates
```bash
npm update
npm audit fix
```

### Monitoring
- Vercel Analytics (wenn auf Vercel)
- Google Analytics Integration (optional)
- Form Submission Logs (via SMTP)

## Support & Kontakt

Bei Fragen oder Problemen:
- 📧 Email: akci.gebaeudereinigung@gmail.com
- 📞 Phone: 0176 647 529 95
- 💬 WhatsApp: +49 176 647 529 95

## Lizenz

© 2024 AKCI Gebäudereinigung. Alle Rechte vorbehalten.
