import * as React from 'react';

type Lang = 'de' | 'en';

type Props = {
  defaultLang?: Lang;
  primary?: string; // brand primary color
  accent?: string; // brand accent color
  mailto?: string; // CTA email link
};

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
    serviceTitle: string;
    serviceCards: { title: string; bullets: string[] }[];
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
  }
> = {
  de: {
    metaTitle: 'Solution Builder als Service – IoT‑Firmware teilen & flashen',
    metaDescription:
      'Wir paketieren Ihre IoT‑Firmware als klickbare Lösung im Solution Builder: Teilen, Web‑Flashing ohne IDE, Demos, Dokumentation, QR‑Link, Schulung & Übergabe.',
    heroTitle: 'Solution Builder als Service (SBaaS)',
    heroSubtitle:
      'Wir verwandeln Ihre IoT‑Firmware in eine teilbare, klick‑installierbare Lösung: ein Link, ein Klick, fertig. Ideal für Demos, Piloten und Roll‑outs ohne IDE.',
    ctaPrimary: 'Kurzgespräch anfragen',
    ctaSecondary: 'So funktioniert es',
    whatIsTitle: 'Was ist der Solution Builder?',
    whatIsIntro:
      'Der Solution Builder ist eine Web‑Plattform, über die sich vorgefertigte IoT‑Lösungen direkt aus dem Browser auf unterstützte Mikrocontroller flashen lassen – ohne lokale IDE. Projekte können als Seite geteilt werden, sodass auch Nicht‑Entwickler Geräte in Minuten installieren können.',
    whatIsBullets: [
      'Web‑Flashing aus dem Browser, keine IDE notwendig',
      'Teilbare Lösungsseiten (Link/QR) für schnelle Demos',
      'Unterstützte Boards u. a. C3‑Mini, D1‑Mini, ESP32, ESP32‑CAM',
      'Ökosysteme: CloudFree, IoT AppStory, Home Assistant, Matter',
    ],
    serviceTitle: 'Unser Service im Überblick',
    serviceCards: [
      {
        title: '1) Analyse & Verpackung',
        bullets: [
          'Review von Code/Binaries und Zielhardware',
          'Definition von Name, Icons, Parameter‑UI, Screenshots',
          'Abgleich der Ziel‑Ökosysteme (CloudFree/HA/Matter/IAS)',
        ],
      },
      {
        title: '2) Build & Hosting',
        bullets: [
          'Erstellung/Validierung der Binärdateien',
          'Optionale Varianten pro Board/Sensor',
          'Hosting der Artefakte (bereit zum Web‑Flash)',
        ],
      },
      {
        title: '3) Lösungsseite & Sharing',
        bullets: [
          'Konfiguration der Solution‑Seite inkl. Beschreibung',
          'Ein‑Klick‑Installation, Deeplink & QR‑Code',
          'Kurzanleitung & Troubleshooting‑Abschnitt',
        ],
      },
      {
        title: '4) Qualitätssicherung',
        bullets: [
          'Smoke‑Tests auf Zielboards',
          'Validierung von Datenfluss & UI',
          'Fallback/Recovery‑Pfad dokumentiert',
        ],
      },
      {
        title: '5) Handover & Enablement',
        bullets: [
          'Übergabe inkl. Repro‑Schritte',
          '1–2 h Schulung für Ihr Team',
          'Optionale Wartung (SLA)',
        ],
      },
    ],
    deliverablesTitle: 'Liefergegenstände',
    deliverables: [
      'Teilbare Solution‑Seite mit Ein‑Klick‑Flash',
      'Geprüfte Firmware‑Artefakte (.bin etc.)',
      'README/Quickstart als Markdown/HTML',
      'QR‑Code & Deeplink für Marketing/Support',
      'Optional: Branding (Farben, Logo)',
    ],
    processTitle: 'Ablauf in 5 Schritten',
    process: [
      'Kick‑off (Ziele, Hardware, Ökosysteme, Branding)',
      'Technical Intake (Code/Binaries, Parameter, Assets)',
      'Konfiguration & Build (Solution‑Seite, Artefakte)',
      'Tests & Abnahme (Live‑Flash, Checklisten)',
      'Go‑Live & Handover (Doku, Training, Optionen)',
    ],
    benefitsTitle: 'Ihre Vorteile',
    benefits: [
      'Sekundenschnelle Demos ohne IDE',
      'Teilbare Links statt komplizierter Setups',
      'Weniger Supportaufwand durch standardisierte Flows',
      'Skalierbar: beliebig viele Geräte flashbar',
      'Schneller Proof‑of‑Concept bis Pilot',
    ],
    pricingTitle: 'Pakete & Preise',
    pricingNote:
      'Transparente Paketpreise nach Umfang von Boards/Varianten. Fragen Sie ein Angebot an – wir melden uns innerhalb von 24 h.',
    contactTitle: 'Jetzt unverbindlich anfragen',
    contactLead:
      'Wir beraten Sie gern und erstellen auf Wunsch direkt eine erste teilbare Lösungsversion.',
    contactPrimary: 'Termin anfragen',
    contactSecondary: 'Leistungen ansehen',
    langLabel: 'Deutsch',
  },
  en: {
    metaTitle: 'Solution Builder as a Service – Share & Web‑Flash IoT Firmware',
    metaDescription:
      'We package your IoT firmware as a shareable, one‑click Solution Builder page: web flashing without IDE, demos, docs, QR link, training & handover.',
    heroTitle: 'Solution Builder as a Service (SBaaS)',
    heroSubtitle:
      'We turn your IoT firmware into a shareable, one‑click install: one link, one click. Perfect for demos, pilots and rollouts without an IDE.',
    ctaPrimary: 'Request a quick call',
    ctaSecondary: 'How it works',
    whatIsTitle: 'What is the Solution Builder?',
    whatIsIntro:
      'Solution Builder is a web platform that lets you flash prebuilt IoT solutions directly from the browser to supported microcontrollers — no local IDE. Projects can be shared as pages so even non‑developers can install devices within minutes.',
    whatIsBullets: [
      'Browser‑based web flashing, no IDE required',
      'Shareable solution pages (link/QR) for fast demos',
      'Supported boards incl. C3‑Mini, D1‑Mini, ESP32, ESP32‑CAM',
      'Ecosystems: CloudFree, IoT AppStory, Home Assistant, Matter',
    ],
    serviceTitle: 'Our offering at a glance',
    serviceCards: [
      {
        title: '1) Assessment & Packaging',
        bullets: [
          'Review of code/binaries and target hardware',
          'Define name, icons, parameter UI, screenshots',
          'Align target ecosystems (CloudFree/HA/Matter/IAS)',
        ],
      },
      {
        title: '2) Build & Hosting',
        bullets: [
          'Create/validate binaries',
          'Optional variants per board/sensor',
          'Host artifacts (ready for web flashing)',
        ],
      },
      {
        title: '3) Solution Page & Sharing',
        bullets: [
          'Configure solution page incl. description',
          'One‑click install, deep link & QR code',
          'Quickstart & troubleshooting section',
        ],
      },
      {
        title: '4) Quality Assurance',
        bullets: [
          'Smoke tests on target boards',
          'Validate data flow & UI',
          'Documented fallback/recovery path',
        ],
      },
      {
        title: '5) Handover & Enablement',
        bullets: [
          'Handover incl. reproduction steps',
          '1–2 h enablement for your team',
          'Optional maintenance (SLA)',
        ],
      },
    ],
    deliverablesTitle: 'Deliverables',
    deliverables: [
      'Shareable solution page with one‑click flashing',
      'Verified firmware artifacts (.bin etc.)',
      'README/Quickstart as Markdown/HTML',
      'QR code & deep link for marketing/support',
      'Optional: branding (colors, logo)',
    ],
    processTitle: '5‑step process',
    process: [
      'Kick‑off (goals, hardware, ecosystems, branding)',
      'Technical intake (code/binaries, parameters, assets)',
      'Configuration & build (solution page, artifacts)',
      'Testing & acceptance (live flash, checklists)',
      'Go-live & handover (docs, training, options)',
    ],
    benefitsTitle: 'Your benefits',
    benefits: [
      'Instant demos without an IDE',
      'Share links instead of complex setups',
      'Less support due to standardized flows',
      'Scales to unlimited devices to flash',
      'Fast track from PoC to pilot',
    ],
    pricingTitle: 'Packages & pricing',
    pricingNote:
      'Transparent packages based on boards/variants. Request a quote — we respond within 24 h.',
    contactTitle: 'Get started',
    contactLead:
      "We're happy to advise and can ship a first shareable solution build on request.",
    contactPrimary: 'Request a call',
    contactSecondary: 'See services',
    langLabel: 'English',
  },
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="card">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

const styles = `
  :root {
    --primary: #0b3c5d;
    --accent:  #18a999;
    --bg:      #f7fbfd;
    --text:    #142033;
    --muted:   #6b7280;
    --card:    #ffffff;
    --border:  #e5e7eb;
  }
  * { box-sizing: border-box; }
  body { margin:0 }
  .sb-wrapper { color: var(--text); background: var(--bg); font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Liberation Sans", sans-serif; }
  .container { max-width: 1120px; margin: 0 auto; padding: 24px; }
  header { padding: 56px 0 8px; text-align: center; }
  header h1 { margin: 0 0 12px; font-size: 2.2rem; color: var(--primary); }
  header p  { margin: 0 auto; max-width: 840px; color: var(--muted); font-size: 1.08rem; }
  .cta { display:flex; gap:12px; justify-content:center; margin: 20px 0 0; flex-wrap: wrap; }
  .btn { display:inline-block; padding: 12px 18px; border-radius:10px; font-weight:600; border:1px solid var(--border); background:#fff; color: var(--text); text-decoration:none }
  .btn.primary { background: var(--accent); color:#fff; border-color: var(--accent); }
  .hero { background: linear-gradient(180deg,#fff,#eef6fb); border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .badges { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin:16px 0 0; }
  .badge { background:#fff; border:1px solid var(--border); border-radius:999px; padding:8px 12px; font-weight:600; color:#374151; }
  .section { padding: 40px 0; }
  h2 { color: var(--primary); font-size: 1.6rem; margin: 0 0 12px; }
  h3 { margin: 0 0 8px; font-size: 1.1rem; }
  ul { margin: 8px 0 0 18px; }
  .grid { display:grid; gap:18px; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); }
  .card { background: var(--card); border:1px solid var(--border); border-radius:12px; padding:16px; }
  footer { border-top:1px solid var(--border); color: var(--muted); text-align:center; padding: 28px 0 56px; }
  .lang { display:flex; justify-content:center; gap:10px; margin-top:14px; }
`;

const LangSwitch: React.FC<{ value: Lang; onChange: (l: Lang) => void }> = ({
  value,
  onChange,
}) => (
  <div className="lang" role="radiogroup" aria-label="language switch">
    {(['de', 'en'] as Lang[]).map((l) => (
      <button
        key={l}
        onClick={() => onChange(l)}
        className="btn"
        aria-pressed={value === l}
      >
        {strings[l].langLabel}
      </button>
    ))}
  </div>
);

const SolutionBuilderAsAService: React.FC<Props> = ({
  defaultLang = 'de',
  primary,
  accent,
  mailto = 'mailto:info@example.com?subject=Solution%20Builder%20als%20Service',
}) => {
  const [lang, setLang] = React.useState<Lang>(defaultLang);
  const t = strings[lang];

  React.useEffect(() => {
    if (primary) {
      document.documentElement.style.setProperty('--primary', primary);
    }
    if (accent) {
      document.documentElement.style.setProperty('--accent', accent);
    }
    document.title = t.metaTitle;
    if (typeof window !== 'undefined') {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', t.metaDescription);
    }
  }, [lang, primary, accent, t]);

  return (
    <div className="sb-wrapper">
      <style>{styles}</style>
      <div className="container">
        <header>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
          <div className="cta">
            <a className="btn primary" href={mailto}>
              {t.ctaPrimary}
            </a>
            <a className="btn" href="#process">
              {t.ctaSecondary}
            </a>
          </div>
          <LangSwitch value={lang} onChange={setLang} />
        </header>
      </div>

      <div className="hero">
        <div className="container">
          <Section title={t.whatIsTitle}>
            <p>{t.whatIsIntro}</p>
            <div className="badges">
              {t.whatIsBullets.map((b, i) => (
                <span key={i} className="badge">
                  {b}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </div>

      <main className="container">
        <Section title={t.serviceTitle}>
          <div className="grid">
            {t.serviceCards.map((c, idx) => (
              <Card key={idx} title={c.title}>
                <ul>
                  {c.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section title={t.deliverablesTitle}>
          <ul>
            {t.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </Section>

        <Section title={t.benefitsTitle}>
          <ul>
            {t.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </Section>

        <Section title={t.processTitle}>
          <ol id="process">
            {t.process.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </Section>

        <Section title={t.pricingTitle}>
          <p>{t.pricingNote}</p>
        </Section>

        <Section title={t.contactTitle}>
          <p>{t.contactLead}</p>
          <div className="cta">
            <a className="btn primary" href={mailto}>
              {t.contactPrimary}
            </a>
            <a className="btn" href="#">
              {t.contactSecondary}
            </a>
          </div>
        </Section>
      </main>

      <footer>
        <small>
          © {new Date().getFullYear()} Solution Builder as a Service
        </small>
      </footer>
    </div>
  );
};

export default SolutionBuilderAsAService;
