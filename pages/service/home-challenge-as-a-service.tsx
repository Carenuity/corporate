import * as React from "react";

/**
 * Home Challenge as a Service (HCaaS)
 * Zweisprachige Komponente (DE/EN)
 * Branding via Props
 * Preise (Variante B): 500€ / 750€ / 1200€
 * Basierend auf offiziellen Carenuity-Quellen
 */

type Lang = "de" | "en";

type Props = {
  defaultLang?: Lang;
  primary?: string;
  accent?: string;
  mailto?: string;
};

//
// -------------------------------------------
// Inhalt (Texte Deutsch + Englisch)
// -------------------------------------------
//

const strings: Record<
  Lang,
  {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;

    whatIsTitle: string;
    whatIsIntro: string;
    whatIsBullets: string[];

    levelsTitle: string;
    levels: { level: string; title: string; description: string; reward: string }[];

    thwsTitle: string;
    thwsText: string;

    serviceTitle: string;
    serviceBullets: string[];

    packagesTitle: string;
    packages: { name: string; price: string; features: string[] }[];

    contactTitle: string;
    contactLead: string;
    contactPrimary: string;

    langLabel: string;
  }
> = {
  //
  // -------------------------------------------
  // DEUTSCH
  // -------------------------------------------
  //
  de: {
    metaTitle: "Home Challenge as a Service – IoT-Ausbildung für Hochschulen & Unternehmen",
    metaDescription:
      "Wir führen die komplette Carenuity Home Challenge für Hochschulen, Fakultäten und Unternehmen durch – inklusive Hardware, Betreuung, Portal, Zertifikaten und Abschluss-Event.",

    heroTitle: "Home Challenge as a Service",
    heroSubtitle:
      "Ein schlüsselfertiges Lernprogramm über 5–6 Level: Elektronik, IoT, PCB-Design, Sensorik, APIs, 3D-Design, Datenbanken & AI‑Edge Computing – sofort einsatzbereit für Hochschulen & Unternehmen.",

    ctaPrimary: "Anfrage stellen",
    ctaSecondary: "Mehr erfahren",

    whatIsTitle: "Was ist die Home Challenge?",
    whatIsIntro:
      "Die Home Challenge ist ein strukturiertes IoT‑Programm, bei dem Teilnehmende in mehreren Leveln praxisnah lernen, wie man Smart‑Home‑Geräte entwickelt – von Löten und PCB‑Design bis hin zu APIs, Datenbanken und KI‑Modellen. Studierende und Talente bauen in Minuten funktionierende Geräte und entwickeln Schritt für Schritt professionelle IoT‑Kompetenzen.",
    whatIsBullets: [
      "Für Einsteiger entwickelt – kein Vorwissen nötig",
      "5–6 Level mit steigender Komplexität",
      "Hardware‑Rewards nach jedem Level",
      "Fördert Talente in IoT, AI & Embedded Systems",
      "Erprobt an Hochschulen wie der THWS",
    ],

    levelsTitle: "Level‑Struktur",
    levels: [
      {
        level: "Level 1",
        title: "Löten & Simulation (WOKWI)",
        description:
          "Grundlagen der Elektronik, einfache Verbindungen, Simulation von Sensor‑Lösungen im Browser. (Carenuity Home Challenge Level 1) ",
        reward: "Reward: C3‑Mini oder D1‑Mini",
      },
      {
        level: "Level 2",
        title: "PCB‑Design & GPIO Viewer",
        description:
          "Erste Änderungen am PCB‑Layout, Verständnis für Pin‑Mapping, Live‑Monitoring auf dem Smartphone. (Carenuity Home Challenge Level 2)",
        reward: "Reward: 0.66'' / 0.96'' OLED Display",
      },
      {
        level: "Level 3",
        title: "API‑Nutzung & App‑Entwicklung",
        description:
          "Arduino‑Coding, API‑Calls, KI‑optimierte Sketches. Teilnehmende erstellen eigene IoT‑Apps. (Carenuity Home Challenge Level 3)",
        reward: "Reward: Sensor (z. B. DS18B20 oder Oximeter)",
      },
      {
        level: "Level 4",
        title: "3D‑Modeling & Gehäuse",
        description:
          "Design von professionellen Device‑Gehäusen inkl. Rendering & Export. (Carenuity Home Challenge Level 4)",
        reward: "Reward: 25% ChipGlobe.shop Gutschein",
      },
      {
        level: "Level 5",
        title: "Datenbanken & Machine Learning",
        description:
          "Erste ML‑Modelle, Sensor‑Datenlogging, Datenübertragung. (Carenuity Home Challenge Level 5)",
        reward: "Reward: ESP32‑CAM + Cloud Access",
      },
      {
        level: "Level 6",
        title: "AI‑Assisted Edge Computing",
        description:
          "Edge‑AI‑Anwendungen wie Computer Vision & On‑Device‑Inference. Abschlusslevel der Roadmap. (Carenuity Roadmap Level 6)",
        reward: "Reward: Hero Website + Device Stocking",
      },
    ],

    thwsTitle: "Praxisbeispiel: Hochschule THWS",
    thwsText:
      "Die THWS führte die Home Challenge mehrfach durch. Studierende entwickelten reale Smart‑Home‑Lösungen, lernten Elektronik, PCB‑Design, Sensorik, Apps & AI kennen und präsentierten die Ergebnisse in einer Abschlussveranstaltung. Dabei wurden Sachpreise vergeben, und die Challenge erwies sich laut Fakultät als idealer, modularer Lernpfad für IoT‑Einsteiger. (THWS, Januar 2026)",

    serviceTitle: "Unser Service",
    serviceBullets: [
      "Durchführung der kompletten Challenge (Level 1–6)",
      "Hardware‑Kits für alle Teilnehmenden",
      "Begleitportal & White‑Label‑Branding",
      "Online‑Kickoff & wöchentliche Sprechstunden",
      "Abschluss‑Event & Zertifikate",
      "Optionale Industrie‑Case‑Integration",
    ],

    packagesTitle: "Pakete & Preise",
    packages: [
      {
        name: "Campus Paket",
        price: "500 €",
        features: [
          "Ideal für einzelne Kurse oder Lehrstühle",
          "Bis zu 25 Teilnehmende",
          "Hardware‑Starter‑Kit pro TN",
          "Durchführung Level 1–3",
          "Digitale Zertifikate",
        ],
      },
      {
        name: "Fakultät Paket",
        price: "750 €",
        features: [
          "Für ganze Semester oder Fakultäten",
          "Bis zu 75 Teilnehmende",
          "Level 1–5",
          "Betreuung + Q&A‑Sessions",
          "White‑Label‑Portal",
        ],
      },
      {
        name: "Konzern‑Akademie Paket",
        price: "1.200 €",
        features: [
          "Für Firmen, Akademien & Weiterbildung",
          "Unbegrenzte Teilnehmende",
          "Komplette Challenge Level 1–6",
          "Branding + Industrie‑Use‑Case",
          "Optionale Vor‑Ort‑Workshops",
        ],
      },
    ],

    contactTitle: "Kontakt",
    contactLead:
      "Wir richten die Home Challenge maßgeschneidert für Ihren Campus, Ihre Fakultät oder Ihr Unternehmen ein.",
    contactPrimary: "Kontakt aufnehmen",

    langLabel: "Deutsch",
  },

  //
  // -------------------------------------------
  // ENGLISH
  // -------------------------------------------
  //
  en: {
    metaTitle: "Home Challenge as a Service – IoT Education Program for Universities & Companies",
    metaDescription:
      "We deliver the full Carenuity Home Challenge as a turnkey service for universities, faculties and corporate academies – including hardware, support, portal, certificates and final event.",

    heroTitle: "Home Challenge as a Service",
    heroSubtitle:
      "A complete 5–6‑level IoT learning program: electronics, IoT, PCB design, sensors, APIs, 3D design, databases & AI‑edge computing — ready to deploy for schools, universities and industry.",

    ctaPrimary: "Request details",
    ctaSecondary: "Learn more",

    whatIsTitle: "What is the Home Challenge?",
    whatIsIntro:
      "The Home Challenge is a structured, hands‑on IoT learning program where participants build functional devices within minutes and progress through multiple levels, learning electronics, PCB design, APIs, sensors, databases and AI‑edge computing.",
    whatIsBullets: [
      "Designed for beginners — no prior knowledge needed",
      "5–6 progressive levels",
      "Hardware reward after each level",
      "Boosts talent in IoT, embedded systems & AI",
      "Proven at universities such as THWS (Germany)",
    ],

    levelsTitle: "Level Structure",
    levels: [
      {
        level: "Level 1",
        title: "Soldering & Simulation (WOKWI)",
        description:
          "Introduction to electronics, basic wiring, WOKWI simulation. (Carenuity Home Challenge Level 1)",
        reward: "Reward: C3‑Mini or D1‑Mini",
      },
      {
        level: "Level 2",
        title: "PCB Design & GPIO Viewer",
