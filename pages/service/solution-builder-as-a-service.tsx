import * as React from 'react';

type Lang = 'de' | 'en';

type Props = {
  defaultLang?: Lang;
  primary?: string;   // brand primary color
  accent?: string;    // brand accent color
  mailto?: string;    // CTA email link
};

const strings: Record<Lang, {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  whatIsTitle: string;
  whatIsIntro: string;
  whatIsBullets: string[];
  serviceTitle: string;
  serviceCards: {title: string; bullets: string[]}[];
  deliverablesTitle: string;
  deliverables: string[];
  processTitle: string;
  process: string[];
  benefitsTitle: string;
  benefits: string[];
  pricingTitle: string;
  pricingNote: string;
  contactTitle: string;
  contactLead: string;
  contactPrimary: string;
  contactSecondary: string;
  langLabel: string;
}> = {
  de: {
    metaTitle: 'Solution Builder als Service – IoT‑Firmware teilen & flashen',
    metaDescription: 'Wir paketieren Ihre IoT‑Firmware als klickbare Lösung im Solution Builder: Teilen, Web‑Flashing ohne IDE, Demos, Dokumentation, QR‑Link, Schulung & Übergabe.',
    heroTitle: 'Solution Builder als Service (SBaaS)',
    heroSubtitle: 'Wir verwandeln Ihre IoT‑Firmware in eine teilbare, klick‑installierbare Lösung: ein Link, ein Klick, fertig. Ideal für Demos, Piloten und Roll‑outs ohne IDE.',
    ctaPrimary: 'Kurzgespräch anfragen',
    ctaSecondary: 'So funktioniert es',
    whatIsTitle: 'Was ist der Solution Builder?',
    whatIsIntro: 'Der Solution Builder ist eine Web‑Plattform, über die sich vorgefertigte IoT‑Lösungen direkt aus dem Browser auf unterstützte Mikrocontroller flashen lassen – ohne lokale IDE. Projekte können als Seite geteilt werden, sodass auch Nicht‑Entwickler Geräte in Minuten installieren können.',
    whatIsBullets: [
      'Web‑Flashing aus dem Browser, keine IDE notwendig',
      'Teilbare Lösungsseiten (Link/QR) für schnelle Demos',
      'Unterstützte Boards u. a. C3‑Mini, D1‑Mini, ESP32, ESP32‑CAM',
      'Ökosysteme: CloudFree, IoT AppStory, Home Assistant, Matter'
    ],
    serviceTitle: 'Unser Service im Überblick',
    serviceCards: [
      { title: '1) Analyse & Verpackung', bullets: [
        'Review von Code/Binaries und Zielhardware',
        'Definition von Name, Icons, Parameter‑UI, Screenshots',
        'Abgleich der Ziel‑Ökosysteme (CloudFree/HA/Matter/IAS)'
      ]},
      { title: '2) Build & Hosting', bullets: [
        'Erstellung/Validierung der Binärdateien',
        'Optionale Varianten pro Board/Sensor',
        'Hosting der Artefakte (bereit zum Web‑Flash)'
      ]},
      { title: '3) Lösungsseite & Sharing', bullets: [
        'Konfiguration der Solution‑Seite inkl. Beschreibung',
        'Ein‑Klick‑Installation, Deeplink & QR‑Code',
        'Kurzanleitung & Troubleshooting‑Abschnitt'
      ]},
      { title: '4) Qualitätssicherung', bullets: [
        'Smoke‑Tests auf Zielboards',
        'Validierung von Datenfluss & UI',
        'Fallback/Recovery‑Pfad dokumentiert'
      ]},
      { title: '5) Handover & Enablement', bullets: [
        'Übergabe inkl. Repro‑Schritte',
        '1–2 h Schulung für Ihr Team',
        'Optionale Wartung (SLA)'
      ]}
    ],
    deliverablesTitle: 'Liefergegenstände',
    deliverables: [
      'Teilbare Solution‑Seite mit Ein‑Klick‑Flash',
      'Geprüfte Firmware‑Artefakte (.bin etc.)',
      'README/Quickstart als Markdown/HTML',
      'QR‑Code & Deeplink für Marketing/Support',
      'Optional: Branding (Farben, Logo)'
    ],
    processTitle: 'Ablauf in 5 Schritten',
    process: [
      'Kick‑off (Ziele, Hardware, Ökosysteme, Branding)',
      'Technical Intake (Code/Binaries, Parameter, Assets)',
      'Konfiguration & Build (Solution‑Seite, Artefakte)',
      'Tests & Abnahme (Live‑Flash, Checklisten)',
      'Go‑Live & Handover (Doku, Training, Optionen)'
    ],
    benefitsTitle: 'Ihre Vorteile',
    benefits: [
      'Sekundenschnelle Demos ohne IDE',
      'Teilbare Links statt komplizierter Setups',
      'Weniger Supportaufwand durch standardisierte Flows',
      'Skalierbar: beliebig viele Geräte flashbar',
      'Schneller Proof‑of‑Concept bis Pilot'
    ],
    pricingTitle: 'Pakete & Preise',
    pricingNote: 'Transparente Paketpreise nach Umfang von Boards/Varianten. Fragen Sie ein Angebot an – wir melden uns innerhalb von 24 h.',
    contactTitle: 'Jetzt unverbindlich anfragen',
    contactLead: 'Wir beraten Sie gern und erstellen auf Wunsch direkt eine erste teilbare Lösungsversion.',
    contactPrimary: 'Termin anfragen',
    contactSecondary: 'Leistungen ansehen',
    langLabel: 'Deutsch'
  },
  en: {
    metaTitle: 'Solution Builder as a Service – Share & Web‑Flash IoT Firmware',
    metaDescription: 'We package your IoT firmware as a shareable, one‑click Solution Builder page: web flashing without IDE, demos, docs, QR link, training & handover.',
    heroTitle: 'Solution Builder as a Service (SBaaS)',
    heroSubtitle: 'We turn your IoT firmware into a shareable, one‑click install: one link, one click. Perfect for demos, pilots and rollouts without an IDE.',
    ctaPrimary: 'Request a quick call',
    ctaSecondary: 'How it works',
    whatIsTitle: 'What is the Solution Builder?',
    whatIsIntro: 'Solution Builder is a web platform that lets you flash prebuilt IoT solutions directly from the browser to supported microcontrollers — no local IDE. Projects can be shared as pages so even non‑developers can install devices within minutes.',
    whatIsBullets: [
      'Browser‑based web flashing, no IDE required',
      'Shareable solution pages (link/QR) for fast demos',
      'Supported boards incl. C3‑Mini, D1‑Mini, ESP32, ESP32‑CAM',
      'Ecosystems: CloudFree, IoT AppStory, Home Assistant, Matter'
    ],
    serviceTitle: 'Our offering at a glance',
    serviceCards: [
      { title: '1) Assessment & Packaging', bullets: [
        'Review of code/binaries and target hardware',
        'Define name, icons, parameter UI, screenshots',
        'Align target ecosystems (CloudFree/HA/Matter/IAS)'
      ]},
      { title: '2) Build & Hosting', bullets: [
        'Create/validate binaries',
        'Optional variants per board/sensor',
        'Host artifacts (ready for web flashing)'
      ]},
      { title: '3) Solution Page & Sharing', bullets: [
        'Configure solution page incl. description',
        'One](#)*
