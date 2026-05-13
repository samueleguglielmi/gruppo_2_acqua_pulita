import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Acqua Pulita — Vent'anni di acque venete" },
      { name: "description", content: "Come è cambiata la qualità dell'acqua in Veneto tra il 2000 e il 2025: dati ARPAV, immagini satellitari Copernicus e analisi del Lago di Garda e della Laguna di Venezia." },
    ],
  }),
});

function Index() {
  return (
    <>
      <section className="bg-water">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-32">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Educazione Civica · Gruppo 2 · 2026
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance max-w-4xl">
            Vent'anni di acqua,<br />
            <span className="italic text-deep">osservati dall'orbita.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-2xl text-muted-foreground text-balance">
            Come è cambiata la qualità delle acque del Veneto tra il 2000 e il 2025?
            Un viaggio nei dati ARPAV e nelle immagini Sentinel-2 tra il
            Lago di Garda e la Laguna di Venezia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/garda"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Esplora il Lago di Garda →
            </Link>
            <Link
              to="/laguna"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:bg-secondary transition"
            >
              Laguna di Venezia
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid md:grid-cols-2 gap-6">
        <Link
          to="/garda"
          className="group relative overflow-hidden rounded-3xl border border-border bg-card aspect-[4/5] md:aspect-[4/3] flex flex-col justify-end p-8"
        >
          <img
            src="/images/garda-2025.gif"
            alt="Lago di Garda visto dal satellite Sentinel-2"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />
          <div className="relative text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">Capitolo I</p>
            <h2 className="font-display text-4xl mt-2">Lago di Garda</h2>
            <p className="mt-2 opacity-90 max-w-md">Dall'eutrofizzazione cronica al lento ritorno dell'oligotrofia.</p>
          </div>
        </Link>

        <Link
          to="/laguna"
          className="group relative overflow-hidden rounded-3xl border border-border bg-card aspect-[4/5] md:aspect-[4/3] flex flex-col justify-end p-8"
        >
          <img
            src="/images/laguna-2025.gif"
            alt="Laguna di Venezia vista dal satellite Sentinel-2"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />
          <div className="relative text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">Capitolo II</p>
            <h2 className="font-display text-4xl mt-2">Laguna di Venezia</h2>
            <p className="mt-2 opacity-90 max-w-md">Stagioni, clorofilla e sedimenti in un ecosistema fragile.</p>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="font-display text-3xl md:text-4xl text-balance">
          Perché studiare l'acqua del Veneto?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          L'acqua è la prima infrastruttura del territorio. Sostiene città, agricoltura,
          turismo e biodiversità. Misurarne la qualità — fosforo, clorofilla, trasparenza,
          ossigeno disciolto — significa leggere lo stato di salute di intere comunità.
          Grazie ai dati aperti di <span className="text-foreground">ARPAV</span> e alle
          immagini di <span className="text-foreground">Copernicus Sentinel-2</span> oggi
          possiamo osservare questi cambiamenti con una precisione impensabile fino a vent'anni fa.
        </p>
      </section>
    </>
  );
}
