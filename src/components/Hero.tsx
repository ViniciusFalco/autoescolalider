import { contactLinks } from '../content';
import { WhatsAppIcon } from './icons';
import { ButtonLink } from './ui';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 bg-dot-grid bg-[length:17px_17px] opacity-50" />
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="flex flex-col justify-center px-4 pb-10 pt-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <span className="w-fit rotate-[-2deg] bg-brand-lime px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-black">
            Sua CNH começa aqui
          </span>
          <h1 className="mt-7 max-w-2xl font-display text-[clamp(3.35rem,15vw,5.3rem)] uppercase leading-[0.84] tracking-[-0.055em]">
            Chega de adiar sua vontade de <span className="text-brand-lime">dirigir.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg font-semibold leading-7 text-white/80 sm:text-xl">
            Tire sua CNH na Autoescola Líder em Cataguases.
          </p>
          <div className="mt-8 grid gap-3 sm:flex">
            <ButtonLink href={contactLinks.whatsapp} className="px-7 py-4 text-base">
              <WhatsAppIcon /> Chamar no WhatsApp
            </ButtonLink>
            <ButtonLink href="#categorias" variant="outline" className="px-7 py-4 text-base">
              Ver categorias
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[52svh] px-4 pb-5 sm:px-6 lg:min-h-full lg:px-8 lg:py-8">
          <div className="h-full min-h-[52svh] overflow-hidden rounded-[2.5rem_2.5rem_1rem_1rem] border-4 border-white/10 bg-brand-green lg:rounded-[3rem]">
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/videohero-poster.jpg"
              aria-label="Vídeo de apresentação da Autoescola Líder"
            >
              <source src="/videos/videohero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute bottom-10 left-8 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-brand-dark shadow-card sm:left-10 lg:bottom-14 lg:left-14">
            23 anos de história
          </div>
        </div>
      </div>
    </section>
  );
}
