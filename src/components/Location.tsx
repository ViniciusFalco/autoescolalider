import { contactLinks } from '../content';
import { MapIcon, WhatsAppIcon } from './icons';
import { ButtonLink } from './ui';

export function Location() {
  return (
    <section id="localizacao" className="bg-brand-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-green px-6 py-10 text-white shadow-card sm:px-10 sm:py-14 lg:grid lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-dot-grid bg-[length:18px_18px] opacity-35" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-lime text-brand-dark">
              <MapIcon className="h-7 w-7" />
            </div>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-brand-lime">Estamos no centro</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl">Fácil de chegar.<br />Fácil de começar.</h2>
            <address className="mt-6 max-w-xl text-lg font-bold not-italic leading-7 text-white/85">
              Rua Ananísia Fonseca, 95, Centro,<br className="hidden sm:block" /> Cataguases - MG
            </address>
          </div>

          <div className="relative mt-8 grid gap-3 sm:flex lg:mt-0 lg:flex-col">
            <ButtonLink href={contactLinks.maps} variant="white" className="w-full py-4 text-base">
              <MapIcon /> Ver no mapa
            </ButtonLink>
            <ButtonLink href={contactLinks.whatsapp} className="w-full py-4 text-base">
              <WhatsAppIcon /> Chamar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
