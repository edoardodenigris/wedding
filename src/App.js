import React, { useState } from "react";
// Questa riga "pesca" la foto che hai appena caricato nella cartella src
import weddingImg from "./cozy-couple.jpeg";

export default function App() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#5D4037] font-sans selection:bg-[#EBD4C1]">
      {/* --- HERO SECTION: CALDA E AVVOLGENTE --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* L'immagine anime come sfondo */}
        <div className="absolute inset-0 z-0">
          <img
            src={weddingImg}
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Alice & Edoardo"
          />
          {/* Sfumatura per far leggere bene i nomi */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F3]/20 via-transparent to-[#FDF8F3]"></div>
        </div>

        <div className="relative z-10 text-center px-4 fade-in">
          <h1 className="serif text-7xl md:text-9xl mb-2 text-[#D97B45] drop-shadow-md italic font-light">
            Alice{" "}
            <span className="text-4xl md:text-6xl not-italic text-[#5D4037] mx-2">
              &
            </span>{" "}
            Edoardo
          </h1>
          <p className="text-lg md:text-xl tracking-[0.4em] uppercase font-light text-[#8C7B70] mb-10">
            Finalmente Sposi
          </p>
          <div className="inline-block border-y border-[#D97B45]/30 py-4 px-10">
            <p className="serif text-3xl md:text-4xl tracking-widest uppercase text-[#5D4037]">
              24 . 06 . 2026
            </p>
          </div>
        </div>
      </header>

      {/* --- SEZIONE DETTAGLI: PULITA E MINIMALE --- */}
      <section className="max-w-6xl mx-auto py-32 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="border-l-2 border-[#D97B45] pl-8">
              <h3 className="serif text-4xl mb-4 italic">La Cerimonia</h3>
              <p className="text-xl text-[#8C7B70] font-light">
                Ore 11:00 <br />
                Chiesa di Santa Maria, Roma
              </p>
              <button className="mt-4 text-xs uppercase tracking-widest text-[#D97B45] font-bold border-b border-transparent hover:border-[#D97B45] transition-all pb-1">
                Visualizza Mappa
              </button>
            </div>

            <div className="border-l-2 border-[#D97B45] pl-8">
              <h3 className="serif text-4xl mb-4 italic">Il Ricevimento</h3>
              <p className="text-xl text-[#8C7B70] font-light">
                Ore 13:30 <br />
                Villa Allegra, Via Appia Antica
              </p>
              <button className="mt-4 text-xs uppercase tracking-widest text-[#D97B45] font-bold border-b border-transparent hover:border-[#D97B45] transition-all pb-1">
                Indicazioni Stradali
              </button>
            </div>
          </div>

          {/* Immagine secondaria o decorativa */}
          <div className="hidden md:block relative group">
            <div className="absolute -inset-4 border border-[#D97B45]/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              src={weddingImg}
              className="relative z-10 rounded-2xl shadow-2xl filter sepia-[0.2]"
              alt="Dettaglio Alice & Edoardo"
            />
          </div>
        </div>
      </section>

      {/* --- RSVP: DESIGN MODERNO --- */}
      <section className="bg-[#1F1F1F] text-[#FDF8F3] py-32 px-6 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="serif text-5xl md:text-6xl mb-8 italic">Ci sarete?</h2>
          <p className="font-light text-stone-400 mb-12">
            La vostra presenza è il regalo più bello. Confermate entro il 30
            Aprile.
          </p>

          {!confirmed ? (
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
              }}
            >
              <input
                type="text"
                placeholder="Nome e Cognome"
                className="w-full bg-transparent border-b border-stone-700 py-4 focus:border-[#D97B45] outline-none transition-colors serif text-2xl placeholder:text-stone-800"
                required
              />
              <button className="group relative w-full py-5 border border-[#D97B45]/50 hover:border-[#D97B45] transition-all overflow-hidden rounded-full">
                <span className="relative z-10 uppercase tracking-[0.3em] text-xs font-bold text-[#D97B45]">
                  Conferma Presenza
                </span>
                <div className="absolute inset-0 bg-[#D97B45] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <style>{`.group:hover span { color: white; }`}</style>
              </button>
            </form>
          ) : (
            <div className="p-12 border border-[#D97B45]/30 rounded-[2rem] animate-fade-in">
              <p className="serif text-3xl italic text-[#D97B45]">
                Vi aspettiamo con gioia!
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="py-20 text-center opacity-30 bg-[#1F1F1F]">
        <p className="serif text-xl italic mb-2 text-[#FDF8F3]">A & E</p>
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#FDF8F3]">
          2026 • Rome, Italy
        </p>
      </footer>
    </div>
  );
}
