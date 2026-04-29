# ✅ Customization Checklist

Nutze diese Checkliste um sicherzustellen, dass alle Inhalte angepasst sind.

## 🎨 Design & Branding

- [ ] Logo überprüft (in `public/logo/`)
- [ ] Farben angepasst (Primary: Türkis, Accent: Grün)
  - [ ] Tailwind Config angepasst (`tailwind.config.ts`)
- [ ] Fonts/Typografie überprüft

## 📋 Unternehmensdaten

- [ ] **Firmenname** aktualisiert (`src/lib/constants.ts`)
- [ ] **Telefonnummer** aktualisiert
  - [ ] Alle Links nutzen neue Nummer
  - [ ] WhatsApp Link angepasst
- [ ] **E-Mail-Adresse** aktualisiert
- [ ] **Adresse** aktualisiert
- [ ] **Geschäftsführer** aktualisiert
- [ ] **Steuernummer** aktualisiert

## 📄 Seitinhalte

### Hero Section
- [ ] Headline angepasst
- [ ] Subheading angepasst
- [ ] Statistiken aktualisiert (10+ Jahre, 100%, 500+ Kunden)

### Über uns
- [ ] Über uns Text überarbeitet
- [ ] Stärken/Highlights angepasst
- [ ] Geschäftsführer Info aktualisiert

### Leistungen/Services
- [ ] Alle 6 Services überprüft
- [ ] Service-Beschreibungen aktualisiert
- [ ] Leistungs-Features angepasst
- [ ] Icons passend gewählt

### Galerie
- [ ] Galerie-Bilder ersetzt (mindestens 4 Bilder)
- [ ] Kategorien angepasst
- [ ] Bildtitel aktualisiert

### Kontakt
- [ ] Alle Kontaktmethoden funktionieren
- [ ] WhatsApp Link korrekt
- [ ] Telefon Link korrekt
- [ ] E-Mail Link korrekt
- [ ] Google Maps Link korrekt

## 📧 Kontaktformular

- [ ] Formulardaten werden aktualisiert
- [ ] `.env.local` erstellt (optional, für E-Mail)
- [ ] SMTP konfiguriert (Gmail/Outlook)
- [ ] Test-Email versendet

## 🔍 SEO

- [ ] Meta Title überprüft (`src/app/layout.tsx`)
- [ ] Meta Description überprüft
- [ ] Open Graph Tags angepasst
- [ ] Lokale Geschäftsdaten korrekt (JSON-LD)
- [ ] URL in metadata.openGraph.url korrekt

## 📱 Responsiveness

- [ ] Website auf Mobile getestet
- [ ] Website auf Tablet getestet
- [ ] Website auf Desktop getestet
- [ ] Alle Bilder responsive
- [ ] Navigation funktioniert auf Mobile

## ⚡ Performance

- [ ] Bilder optimiert
- [ ] Keine großen Assets
- [ ] Lighthouse Score überprüft (Ziel: 90+)
- [ ] Loading Time überprüft

## 🔐 Sicherheit & Privacy

- [ ] Impressum-Link hinzugefügt (optional)
  - [ ] Datenschutz-Seite erstellt
  - [ ] Impressum-Seite erstellt
- [ ] Privacy Policy aktualisiert
- [ ] Cookie-Hinweis überprüft (optional)

## 🚀 Vor dem Launch

- [ ] Alle Texte Korrektur gelesen
- [ ] Alle Links funktionieren
- [ ] Kontaktformular getestet
- [ ] Alle externe Links testen
- [ ] Performance Audit durchgeführt
- [ ] SEO Audit durchgeführt

## 🌐 Deployment

### Für Vercel:
- [ ] GitHub Repo erstellt
- [ ] Vercel Projekt erstellt
- [ ] Environment Variables gesetzt
- [ ] Domain konfiguriert (optional)
- [ ] HTTPS aktiviert
- [ ] Build erfolgreich

### Für Docker:
- [ ] Dockerfile überprüft
- [ ] Docker Image gebaut: `docker build -t akci-site .`
- [ ] Container läuft: `docker run -p 3000:3000 akci-site`
- [ ] ENV-Variablen richtig gesetzt

### Für selbst gehostetes Hosting:
- [ ] Node.js Server läuft
- [ ] npm dependencies installiert
- [ ] `.env.local` gesetzt
- [ ] `npm run build` erfolgreich
- [ ] `npm start` läuft
- [ ] Reverse Proxy (Nginx/Apache) konfiguriert
- [ ] SSL/HTTPS konfiguriert

## 📊 Nach dem Launch

- [ ] Google Analytics eingebunden (optional)
- [ ] Search Console konfiguriert
- [ ] Sitemap eingereicht
- [ ] Robots.txt überprüft
- [ ] Monitoring aktiviert
- [ ] Backup-System eingerichtet

## 📝 Dokumentation

- [ ] README.md vollständig
- [ ] QUICK_START.md überprüft
- [ ] Environment-Beispiele korrekt
- [ ] Jede Komponente dokumentiert
- [ ] API-Routes dokumentiert

---

## 🎯 Prio 1: Must Have (Vor Launch)

Diese Dinge **müssen** erledigt sein:
1. Unternehmensdaten korrekt
2. Kontaktformular funktioniert
3. Mobile responsiv
4. Alle Links funktionieren
5. Logo korrekt

## 🎁 Prio 2: Should Have (Empfohlen)

Diese Dinge sind sehr zu empfehlen:
1. SMTP E-Mail konfiguriert
2. Echte Galerie-Bilder
3. Custom Texte überall
4. Performance optimiert
5. SEO Tags angepasst

## 🌟 Prio 3: Nice to Have (Optional)

Diese Dinge sind optional, machen es aber besser:
1. Impressum & Datenschutz
2. Google Analytics
3. Custom Domain
4. Blog/News Seite
5. Testimonials/Reviews

---

**Fortschritt:** Markiere Items mit ✅ während du sie bearbeitest!

Viel Erfolg bei der Customization! 🚀
