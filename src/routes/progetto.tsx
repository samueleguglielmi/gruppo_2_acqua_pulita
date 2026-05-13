import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/progetto")({
  component: ProgettoPage,
  head: () => ({
    meta: [
      { title: "Il progetto · Acqua Pulita" },
      { name: "description", content: "Scheda del progetto di Educazione Civica ‘Acqua Pulita' del Gruppo 2: obiettivo, piano d'azione, tempistiche e risorse." },
    ],
  }),
});

function ProgettoPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Scheda di progetto</p>
      <h1 className="font-display text-5xl md:text-6xl mt-4 text-balance">
        Educazione Civica · <em className="text-deep">Acqua Pulita</em>
      </h1>

      <dl className="mt-12 space-y-10">
        <Row label="Gruppo">Gruppo 2 — Zampini, Guglielmi, Uzhentsev</Row>
        <Row label="Argomento">Qualità dell'acqua</Row>
        <Row label="Obiettivo">
          Capire come è cambiata nel tempo la qualità dell'acqua in Veneto, in quali zone
          il cambiamento è stato maggiore e in che modo. Cercare di scoprirne le cause.
        </Row>
        <Row label="Piano d'azione">
          <ul className="space-y-1.5">
            <li>· Ricerca di immagini satellitari</li>
            <li>· Analisi dei dati</li>
            <li>· Discussione in gruppo</li>
            <li>· Creazione di una presentazione</li>
            <li>· Presentazione alla classe</li>
          </ul>
        </Row>
        <Row label="Tempistiche">
          Inizio 22/04/2026 — Conclusione prevista 13/05/2026
        </Row>
        <Row label="Risorse">
          Computer, immagini satellitari nel tempo, materiale per la presentazione,
          dati aperti ARPAV e archivio Copernicus Sentinel-2.
        </Row>
      </dl>

      <div className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="font-display text-2xl text-deep">Glossario rapido</h2>
        <dl className="mt-4 space-y-4 text-muted-foreground">
          <div>
            <dt className="text-foreground font-medium">Termoclino</dt>
            <dd>Strato di transizione che separa l'acqua superficiale, più calda e rimescolata, da quella profonda, più fredda e densa.</dd>
          </div>
          <div>
            <dt className="text-foreground font-medium">Avvezione</dt>
            <dd>Trasporto di una sostanza o proprietà (calore, umidità, inquinanti) per movimento di massa di un fluido.</dd>
          </div>
          <div>
            <dt className="text-foreground font-medium">Eutrofizzazione</dt>
            <dd>Eccesso di nutrienti — soprattutto fosforo e azoto — che provoca la proliferazione di alghe e il deterioramento della qualità dell'acqua.</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-8 border-b border-border pb-8">
      <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-1">{label}</dt>
      <dd className="text-foreground leading-relaxed">{children}</dd>
    </div>
  );
}
