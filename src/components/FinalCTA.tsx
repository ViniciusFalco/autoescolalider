import { contactLinks } from '../content';
import { WhatsAppIcon } from './icons';
import { ButtonLink } from './ui';

export function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-brand-dark px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-grid bg-[length:17px_17px] opacity-40" />
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-lime/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-lime">Seu próximo passo</p>
        <h2 className="mt-5 font-display text-5xl uppercase leading-[0.88] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
          Pronto para conquistar sua CNH?
        </h2>
        <ButtonLink href={contactLinks.whatsapp} className="mt-9 w-full px-9 py-5 text-base sm:w-auto sm:text-lg">
          <WhatsAppIcon className="h-6 w-6" /> Chamar no WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}
