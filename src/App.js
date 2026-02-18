import React, { useState, useEffect } from "react";
import weddingImg from "./cozy-couple.jpeg";
import villaImg from "./villa zarri.jpg"; // La nuova foto della location

export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.2384734791845!2d11.36531331252329!3d44.57164479262828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd37380f5888d%3A0x62957f864459f1c7!2sVilla%20Zarri!5e0!3m2!1sit!2sit!4v1708280000000!5m2!1sit!2sit";

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#5D4037] font-sans selection:bg-[#D97B45]/20 antialiased">
      {/* --- HERO SECTION: REFINED --- */}
      <header
        className={`transition-all duration-[1.5s] ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } pt-24 pb-12 px-6 text-center`}
      >
        <span className="text-[10px] tracking-[0.8em] uppercase text-[#8C7B70] mb-6 block ml-[0.8em]">
          Save the Date
        </span>

        <h1 className="serif text-7xl md:text-[10rem] text-[#D97B45] italic font-light leading-none">
          Alice{" "}
          <span className="text-3xl md:text-5xl not-italic align-middle mx-2 text-[#5D4037]/20">
            &
          </span>{" "}
          Edoardo
        </h1>

        {/* CONTENITORE FOTO LOCATION (Riempie lo spazio vuoto con eleganza) */}
        <div className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-sm group">
          <img
            src={villaImg}
            alt="Villa Zarri"
            className="w-full h-[300px] md:h-[450px] object-cover scale-105 group-hover:scale-100 transition-transform duration-[5s] ease-out shadow-inner"
          />
        </div>

        <div className="mt-12 flex flex-col items-center">
          <p className="serif text-2xl md:text-4xl tracking-[0.2em] uppercase font-light">
            05 . 09 . 2026
          </p>
          <div className="w-12 h-[1px] bg-[#D97B45] my-4"></div>
          <p className="text-xs tracking-[0.4em] text-[#8C7B70] uppercase">
            Villa Zarri • Castel Maggiore
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT: EDITORIAL GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* Foto di Coppia (Emotional) */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
              <img
                src={weddingImg}
                className="w-full h-full object-cover"
                alt="Alice e Edoardo"
              />
              <div className="absolute inset-0 border-[15px] border-[#FDF8F3]/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Dettagli (Informational) */}
          <div className="lg:col-span-6 space-y-16">
            <section className="relative">
              <span className="serif text-8xl absolute -top-10 -left-6 opacity-[0.03] pointer-events-none">
                Details
              </span>
              <h2 className="serif text-5xl mb-10 italic relative z-10">
                Il Rito e la Festa
              </h2>

              <div className="space-y-10 border-l border-[#D97B45]/20 pl-8">
                <div className="relative">
                  <div className="absolute -left-[34.5px] top-2 w-3 h-3 bg-[#D97B45] rounded-full"></div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D97B45] font-bold mb-2">
                    Dove
                  </p>
                  <p className="text-3xl font-light">Villa Zarri</p>
                  <p className="text-[#8C7B70] text-lg">
                    Via Ronco, 1 — Castel Maggiore (BO)
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[34.5px] top-2 w-3 h-3 bg-[#D97B45] rounded-full"></div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D97B45] font-bold mb-2">
                    Quando
                  </p>
                  <p className="text-3xl font-light">Sabato 05.09.2026</p>
                  <p className="text-[#8C7B70] text-lg">
                    Il ricevimento inizierà alle ore 17:00
                  </p>
                </div>
              </div>
            </section>

            {/* Mappa (Utility) */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-white h-72 group relative">
              <iframe
                title="Mappa"
                src={mapEmbedUrl}
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* --- RSVP: THE CALL TO ACTION --- */}
      <section className="bg-[#1F1F1F] text-[#FDF8F3] py-40 px-6 rounded-t-[4rem] md:rounded-t-[10rem]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="serif text-6xl md:text-8xl mb-8 italic">Ci sarete?</h2>
          <p className="font-light text-stone-400 mb-16 text-lg tracking-wide">
            Saremmo onorati di festeggiare con voi. <br />
            Confermate gentilmente entro il{" "}
            <span className="text-[#D97B45] font-medium italic border-b border-[#D97B45]/40">
              15 Luglio 2026
            </span>
            .
          </p>

          {!confirmed ? (
            <form
              className="space-y-10"
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    placeholder="I vostri nomi"
                    className="w-full bg-transparent border-b border-stone-800 py-3 focus:border-[#D97B45] outline-none transition-all serif text-2xl text-white placeholder:text-stone-900"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500">
                    Note o Intolleranze
                  </label>
                  <input
                    type="text"
                    placeholder="Eventuali allergie"
                    className="w-full bg-transparent border-b border-stone-800 py-3 focus:border-[#D97B45] outline-none transition-all text-lg text-white placeholder:text-stone-900"
                  />
                </div>
              </div>

              <button className="w-full py-6 mt-8 border border-[#D97B45] text-[#D97B45] hover:bg-[#D97B45] hover:text-white rounded-full transition-all duration-500 uppercase tracking-[0.5em] text-xs font-bold">
                Invia Conferma
              </button>
            </form>
          ) : (
            <div className="py-20 animate-fade-in border border-[#D97B45]/20 rounded-3xl bg-white/[0.02]">
              <h3 className="serif text-4xl italic text-white mb-2">
                Grazie di cuore!
              </h3>
              <p className="text-stone-500 uppercase tracking-widest text-xs">
                Conferma ricevuta con successo
              </p>
            </div>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center bg-[#1F1F1F] border-t border-white/5">
        <div className="opacity-30 flex flex-col items-center gap-6">
          <p className="serif text-3xl italic">A & E</p>
          <div className="flex items-center gap-6 text-[10px] tracking-[0.6em] uppercase">
            <span>05</span>
            <div className="w-1.5 h-1.5 bg-[#D97B45] rounded-full"></div>
            <span>09</span>
            <div className="w-1.5 h-1.5 bg-[#D97B45] rounded-full"></div>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
