import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/garda")({
  component: GardaPage,
  head: () => ({
    meta: [
      { title: "Lago di Garda · Acqua Pulita" },
      { name: "description", content: "Fosforo, trasparenza e stato ecologico del Lago di Garda dal 2000 al 2024 secondo i dati ARPAV, con confronto satellitare Sentinel-2." },
      { property: "og:title", content: "Lago di Garda — vent'anni di qualità delle acque" },
      { property: "og:description", content: "Dall'eutrofizzazione al lento ritorno dell'oligotrofia. Dati ARPAV e immagini Copernicus." },
      { property: "og:image", content: "/images/garda-2025.gif" },
    ],
  }),
});

const fosforo = [
  ["2000–2002", "≈ 22–25", "Pre by-pass del collettore: trend in crescita"],
  ["2003–2006", "≈ 19–23", "Avvio del by-pass, prime riduzioni"],
  ["2007–2010", "≈ 17–21", "Lieve miglioramento, oscillazioni stagionali"],
  ["2011–2015", "≈ 15–20", "Riduzione evidente del carico"],
  ["2016–2020", "≈ 13–18", "Stato generalmente buono"],
  ["2021–2024", "≈ 12–17", "Qualità discreta, lago meso-oligotrofico"],
];

const trasparenza = [
  ["2000–2005", "≈ 7–9 m", "Acqua più ricca di fitoplancton"],
  ["2006–2010", "≈ 8–10 m", "Lenta ripresa post-by-pass"],
  ["2011–2015", "≈ 9–11 m", "Disco di Secchi in crescita"],
  ["2016–2020", "≈ 10–12 m", "Trasparenza stabile / buona"],
  ["2021–2024", "≈ 10–13 m", "Valori tipici di lago oligotrofico"],
];

const sel = [
  ["2003–2010", "Sufficiente / meso-oligotrofico"],
  ["2011–2015", "Miglioramento graduale"],
  ["2016–2018", "Buono nelle stazioni profonde"],
  ["2019–2024", "Prevalentemente buono"],
];

const metalli = [
  ["Arsenico totale", "≈ 1 µg/L", "Sotto limite di quantificazione"],
  ["Mercurio totale", "< 1 µg/L", "Non rilevabile in colonna d'acqua"],
  ["Nichel totale", "≈ 2,5 µg/L", "Sotto soglia di qualità"],
  ["Rame totale", "≈ 1–1,5 µg/L", "Picchi locali in superficie estiva"],
  ["Zinco totale", "< 30 µg/L", "Tracce, sotto LOQ"],
  ["Piombo totale", "< 2 µg/L", "Stabile dal 2010"],
];

function GardaPage() {
  return (
    <article className="pb-24">
      <header className="bg-water">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Capitolo I</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 text-balance">
            Lago di Garda
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Il più grande lago italiano è anche un termometro climatico ed ecologico.
            Dopo decenni di pressione antropica, dal 2003 in poi i dati raccontano
            una graduale ripresa.
          </p>
        </div>
      </header>

      <Compare
        leftSrc="/images/garda-2020.gif"
        leftLabel="Gennaio 2020"
        rightSrc="/images/garda-2025.gif"
        rightLabel="Gennaio 2025"
        caption="Sentinel-2 L2A · Copernicus Data Space Ecosystem"
      />

      <Section title="Fosforo totale" lead="È il principale indicatore dell'inquinamento da scarichi civili e del rischio di eutrofizzazione. Secondo ARPAV, il trend di crescita ‘tende ad arrestarsi' dopo l'attivazione del by-pass del collettore tra il 2003 e il 2004.">
        <Table head={["Periodo", "Fosforo medio (µg/L)", "Stato del lago"]} rows={fosforo} />
        <Stat value="−40%" label="Riduzione del fosforo medio nel Garda dal 2000 al 2024" />
      </Section>

      <Section title="Trasparenza dell'acqua" lead="Misurata con il disco di Secchi. L'aumento della trasparenza indica una riduzione delle alghe e dei nutrienti disponibili in superficie.">
        <Table head={["Periodo", "Trasparenza media", "Lettura ecologica"]} rows={trasparenza} />
        <Stat value="+4 m" label="Trasparenza guadagnata dal disco di Secchi tra il 2000 e il 2024" />
      </Section>

      <Section title="Stato ecologico (SEL)" lead="L'indice SEL combina fosforo, ossigeno, clorofilla e trasparenza. ARPAV mantiene i dati completi scaricabili per il periodo 2003–2024.">
        <Table head={["Anno", "Valutazione generale"]} rows={sel} />
      </Section>

      <Section title="Inquinanti chimici recenti (2017–2024)" lead="I monitoraggi su pesci e biota del lago segnalano la presenza di sostanze persistenti.">
        <ul className="grid sm:grid-cols-2 gap-2 text-foreground">
          {["PCB", "Diossine", "Mercurio", "PFOS", "IPA"].map((p) => (
            <li key={p} className="rounded-lg border border-border bg-card px-4 py-3">
              {p}
            </li>
          ))}
        </ul>
        <h3 className="font-display text-2xl mt-10 mb-4">Metalli in colonna d'acqua (ARPAV 2010–2025)</h3>
        <Table head={["Parametro", "Valore tipico", "Note"]} rows={metalli} />
        <h3 className="font-display text-2xl mt-10 mb-4">Cause principali</h3>
        <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Scarichi urbani e depurazione storicamente insufficiente</li>
          <li>Turismo e urbanizzazione delle coste</li>
          <li>Agricoltura nel bacino</li>
          <li>Traffico stradale e nautico</li>
          <li>Deposizione atmosferica</li>
          <li>Sedimenti storicamente contaminati</li>
        </ol>
      </Section>

      <Section title="Il mixing invernale" lead="L'aumento di clorofilla osservato in dicembre e gennaio nel basso Garda — soprattutto a Sirmione e San Benedetto di Lugana — non è un peggioramento improvviso, ma un fenomeno fisico stagionale.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Estate">
            <p>Il lago è fortemente stratificato: acqua calda in superficie, acqua fredda e ricca di nutrienti in profondità.</p>
          </Card>
          <Card title="Inverno">
            <p>Vento e raffreddamento indeboliscono il <em>termoclino</em>: si innesca il rimescolamento verticale, risalgono fosforo e azoto, cresce il fitoplancton.</p>
          </Card>
        </div>
        <p className="mt-6 text-muted-foreground">
          Nel basso Garda il fenomeno è più evidente: il bacino è meno profondo, l'acqua circola
          lentamente, i nutrienti antropici sono più abbondanti e i sedimenti vengono risospesi
          con maggiore facilità.
        </p>
      </Section>

      <Section title="Fonti">
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>ARPAV — Rapporto stato delle acque interne 2020</li>
          <li>ARPAV — Stato ecologico dei laghi (open data)</li>
          <li>ARPAV — Qualità chimica dei laghi 2024</li>
          <li>ARPAV — Inquinanti chimici nella matrice biota</li>
          <li>Studio sull'evoluzione trofica del Lago di Garda — ResearchGate</li>
          <li>Gavardo in Movimento — depurazione ed eutrofizzazione del Garda</li>
        </ul>
      </Section>
    </article>
  );
}

function Section({ title, lead, children }: { title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-6 mt-20">
      <h2 className="font-display text-3xl md:text-4xl text-balance">{title}</h2>
      {lead && <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{lead}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <table className="w-full text-left">
        <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-5 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              {r.map((c, j) => (
                <td key={j} className={`px-5 py-4 ${j === 0 ? "font-display text-foreground" : "text-muted-foreground"}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-display text-xl text-deep">{title}</h3>
      <div className="mt-2 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-8 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
      <p className="font-display text-5xl text-deep">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

function Compare({ leftSrc, leftLabel, rightSrc, rightLabel, caption }: { leftSrc: string; leftLabel: string; rightSrc: string; rightLabel: string; caption: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-12">
      <div className="grid md:grid-cols-2 gap-4">
        {[{src: leftSrc, label: leftLabel}, {src: rightSrc, label: rightLabel}].map((s) => (
          <figure key={s.label} className="relative rounded-2xl overflow-hidden border border-border bg-deep">
            <img src={s.src} alt={s.label} className="w-full h-full object-cover" />
            <figcaption className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{caption}</p>
    </section>
  );
}
