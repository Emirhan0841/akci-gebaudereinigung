# 🚀 Quick Start Guide

Willkommen! Hier eine Schritt-für-Schritt Anleitung zum Starten der Website.

## 1️⃣ Installation

```bash
# Abhängigkeiten installieren
npm install

# Development Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) und du solltest die Website sehen! 🎉

## 2️⃣ Erste Anpassungen

### Dein Logo verwenden

Deine Logo-Dateien sind bereits in `public/logo/`. Die Website nutzt automatisch:

- `icon.png` - für die Navigation
- `logo.png` - wo benötigt
- `schriftzug.png` - für Schriftzug-Variante

Wenn du neue Logos hinzufügen möchtest, speichere sie einfach im selben Ordner.

### Unternehmensdaten anpassen

Bearbeite `src/lib/constants.ts`:

```typescript
export const COMPANY = {
  name: "AKCI Gebäudereinigung", // Dein Name
  phone: "0176 647 529 95", // Deine Nummer
  email: "akci.gebaeudereinigung@gmail.com", // Deine Email
  address: "Volzstraße 7, 76185 Karlsruhe", // Deine Adresse
  ceo: "Gökhan Akci", // Geschäftsführer
  taxId: "35045/27074", // Steuernummer
};
```

### Farben anpassen

In `tailwind.config.ts` kannst du die Farben ändern:

```typescript
primary: {   // Türkis/Blau (main color)
  600: '#1aa5b8', // Änder diese Werte
},
accent: {    // Hellgrün (highlight color)
  500: '#2be88c', // Änder diese Werte
},
```

## 3️⃣ Kontaktformular aktivieren (Optional)

Das Formular funktioniert lokal auch ohne E-Mail-Versand. Um E-Mails zu aktivieren:

### Mit Gmail:

1. Gehe zu [myaccount.google.com](https://myaccount.google.com)
2. Security → App passwords → erstelle ein Passwort
3. Erstelle `.env.local`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=deine-email@gmail.com
SMTP_PASSWORD=dein-app-passwort
SMTP_FROM=noreply@akci-gebaeudereinigung.de
SMTP_TO=akci.gebaeudereinigung@gmail.com
```

4. Server neu starten: `npm run dev`

### Mit Outlook/Office 365:

```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=deine-email@outlook.com
SMTP_PASSWORD=dein-passwort
SMTP_FROM=noreply@akci-gebaeudereinigung.de
SMTP_TO=akci.gebaeudereinigung@gmail.com
```

## 4️⃣ Inhalte anpassen

### Über uns Section

Bearbeite `src/components/About.tsx` - passe Text und Stärken an

### Leistungen/Services

Bearbeite `src/lib/constants.ts` - das `SERVICES` Array enthält alle Services

### Galerie

Bearbeite `src/components/Gallery.tsx` - ersetze die Placeholder-Bilder:

```typescript
const galleryItems = [
  {
    id: 1,
    title: "Dein Projekt Titel",
    category: "Kategorie",
    image: "/images/dein-bild.jpg", // Speichere Bilder in public/images/
  },
];
```

## 5️⃣ Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build (Production-Simulation)
npm run build
npm start
```

## 6️⃣ Deployment

### Einfachste Lösung: Vercel (kostenlos & empfohlen)

1. Schiebe dein Git-Repo zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. "Import" → wähle dein GitHub Repo
4. Setze SMTP-Umgebungsvariablen
5. Deploy! 🚀

```bash
npm install -g vercel
vercel
```

### Mit Docker:

```bash
# Docker Image bauen
docker build -t akci-site .

# Container starten
docker run -p 3000:3000 akci-site
```

Oder mit Docker Compose:

```bash
docker-compose up
```

### Traditionelles Hosting:

1. `npm run build` ausführen
2. Ordner `.next` und `public` hochladen
3. Node.js Hosting konfigurieren
4. Umgebungsvariablen setzen

## 7️⃣ Nützliche Dateien

| Datei                  | Zweck                                     |
| ---------------------- | ----------------------------------------- |
| `src/lib/constants.ts` | Unternehmensdaten, Services, Kontaktlinks |
| `tailwind.config.ts`   | Farben, Fonts, Theming                    |
| `src/components/`      | Alle Seiten-Komponenten                   |
| `src/app/api/contact/` | Kontaktformular API                       |
| `.env.example`         | SMTP-Konfiguration Template               |
| `README.md`            | Ausführliche Dokumentation                |

## 📚 Weitere Ressourcen

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)

## 🆘 Häufige Probleme

**"Port 3000 wird bereits verwendet"**

```bash
npm run dev -- -p 3001  # Nutze Port 3001 statt 3000
```

**"Kontaktformular sendet keine Emails"**

- Überprüfe `.env.local` (muss neu geladen werden nach Änderung)
- Teste mit `npm run dev` neu
- Überprüfe SMTP-Daten in `.env.local`

**"Bilder werden nicht angezeigt"**

- Stelle sicher, dass Bilder in `public/` liegen
- Nutze pfade wie `/images/bild.jpg` (mit /)

**"Style/CSS fehlt"**

- Taildwind CSS wird automatisch generiert
- `npm install` nochmal ausführen
- Browser Cache clearen (Ctrl+Shift+Del)

## ✨ Nächste Schritte

1. ✅ Unternehmensdaten aktualisieren
2. ✅ Logo anpassen
3. ✅ Farben customizen
4. ✅ Texte übersetzen/anpassen
5. ✅ E-Mail Versand aktivieren
6. ✅ Echtbilder in Galerie hinzufügen
7. ✅ Zu Vercel oder anderem Host deployen

Viel Erfolg! 🎉
