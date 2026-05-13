import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/laguna")({
  component: LagunaPage,
  head: () => ({
    meta: [
      { title: "Laguna di Venezia · Acqua Pulita" },
      { name: "description", content: "Clorofilla, sedimenti e qualità complessiva della Laguna di Venezia nel 2025, con confronto satellitare Sentinel-2 2020 vs 2025." },
      { property: "og:title", content: "Laguna di Venezia — stagioni e nutrienti" },
      { property: "og:description", content: "Un ecosistema fragile osservato attraverso clorofilla, sedimenti e dati Copernicus." },
      { property: "og:image", content: "/images/laguna-2025.gif" },
    ],
  }),
});

const clorofilla = [
  ["Febbraio", "≈ 1,11 µg/L", "max 2,8"],
  ["Maggio", "≈ 2,13 µg/L", "max 14,6"],
  ["Luglio–Agosto", "≈ 2,68 µg/L", "max 10,2 — picco fino a 7,1 nelle stazioni interne"],
  ["Ottobre–Novembre", "≈ 0,72 µg/L", "max 1,8"],
];

const tss = [
  ["Febbraio", "≈ 3,9 mg/L", "Acqua più limpida, basso moto ondoso"],
  ["Maggio", "≈ 7,1 mg/L", "Risospensione primaverile dei sedimenti"],
  ["Luglio–Agosto", "≈ 6,1 mg/L", "Traffico nautico, crescita biologica"],
  ["Ottobre–Novembre", "≈ 3,2 mg/L", "Stabilizzazione autunnale"],
];

const nutrienti = [
  ["Febbraio", "0,22", "0,028", "0,37"],
  ["Maggio", "0,28", "0,019", "1,08"],
  ["Luglio–Agosto", "0,16", "0,010", "0,50"],
  ["Ottobre–Novembre", "0,44", "0,017", "1,07"],
];

const poc = [
  ["Febbraio", "≈ 0,37 mg/L"],
  ["Maggio", "≈ 0,73 mg/L"],
  ["Luglio–Agosto", "≈ 0,88 mg/L"],
  ["Ottobre–Novembre", "≈ 0,22 mg/L"],
];

function LagunaPage() {
  return (
    <article className="pb-24">
      <header className="bg-water">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Capitolo II</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 text-balance">
            Laguna di Venezia
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Un sistema di transizione fra terra e mare, governato dalle stagioni, dalle
            maree e dall'attività umana. I dati 2025 raccontano una stagionalità marcata
            ma uno stato complessivo ancora buono.
          </p>
        </div>
      </header>

      <Compare
        leftSrc="/images/laguna-2020.gif"
        leftLabel="Gennaio 2020"
        rightSrc="/images/laguna-2025.gif"
        rightLabel="Gennaio 2025"
        caption="Sentinel-2 L2A · Copernicus Data Space Ecosystem"
      />

      <Section title="Clorofilla nel 2025" lead="La concentrazione di clorofilla-a mostra una forte stagionalità, tipica delle lagune eutrofiche dell'Adriatico settentrionale.">
        <Table head={["Periodo 2025", "Clorofilla media", "Note"]} rows={clorofilla} />
        <Stat value="7,1 µg/L" label="Picco estivo di clorofilla osservato in Laguna nel 2025" />
        <ul className="mt-6 space-y-2 text-muted-foreground">
          <li>· In inverno la produttività biologica è bassa.</li>
          <li>· In estate si osserva un netto aumento del fitoplancton.</li>
          <li>· Il picco di luglio–agosto è compatibile con temperature elevate, maggiore radiazione solare, disponibilità di nutrienti e minore ricambio idrico.</li>
        </ul>
      </Section>

      <Section title="Sedimenti e solidi sospesi" lead="I valori più alti tra primavera ed estate possono essere collegati a moto ondoso da traffico nautico, risospensione dei sedimenti, crescita biologica ed eventi di marea e vento.">
        <Table head={["Periodo", "TSS medio", "Lettura"]} rows={tss} />
      </Section>

      <Section title="Nutrienti disciolti (medie 2025)" lead="Quattro campagne ARPAV su 30 stazioni della Laguna di Venezia. L'azoto totale disciolto cresce in autunno, il fosforo cala progressivamente, i silicati seguono la stagionalità del fitoplancton.">
        <Table head={["Periodo", "Azoto totale disciolto (mg/L)", "Fosforo totale disciolto (mg/L)", "Silicati disciolti (mg/L)"]} rows={nutrienti} />
      </Section>

      <Section title="Carbonio organico particellato" lead="Il POC raddoppia tra inverno ed estate, segnale di intensa produzione biologica e di maggiore biomassa fitoplanctonica in colonna d'acqua.">
        <Table head={["Periodo 2025", "POC medio"]} rows={poc} />
      </Section>

      <Section title="Clorofilla e sedimenti" lead="Tra le due variabili emerge una correlazione positiva moderata, r ≈ 0,45.">
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="font-display text-6xl text-deep">r ≈ 0,45</p>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Quando aumentano i solidi sospesi tende ad aumentare anche la clorofilla.
            I sedimenti rilasciano nutrienti, la torbidità è associata a maggiore
            materiale organico e il fitoplancton stesso contribuisce alla frazione sospesa.
          </p>
        </div>
      </Section>

      <Section title="Segnali ecologici dell'estate 2025">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Aumento della clorofilla",
            "Carbonio organico particellato (POC) in crescita",
            "Nutrienti disciolti più abbondanti",
            "Silicati elevati",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <span className="text-foreground">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">
          Indicano elevata attività fitoplanctonica, possibile dominanza di diatomee e
          condizioni favorevoli a un'eutrofizzazione moderata.
        </p>
      </Section>

      <Section title="Qualità complessiva">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Stato generale">
            <ul className="space-y-1.5">
              <li>· Ossigeno disciolto generalmente buono</li>
              <li>· Salinità stabile</li>
              <li>· pH relativamente alcalino (~ 8)</li>
              <li>· Assenza di anossia grave</li>
              <li>· Sedimenti sospesi moderati</li>
            </ul>
          </Card>
          <Card title="Criticità potenziali">
            <ul className="space-y-1.5">
              <li>· Aumento estivo della produttività biologica</li>
              <li>· Sensibilità alle ondate di calore</li>
              <li>· Ristagno idrico</li>
              <li>· Pressione antropica costante</li>
            </ul>
          </Card>
        </div>
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
          <tr>{head.map((h) => <th key={h} className="px-5 py-3 font-medium">{h}</th>)}</tr>
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
      <div className="mt-3 text-muted-foreground leading-relaxed">{children}</div>
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
