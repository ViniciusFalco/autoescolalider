import { contactLinks } from '../content';
import { WhatsAppIcon } from './icons';

export function WhatsAppButton() {
  return (
    <a
      href={contactLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar a Autoescola Líder no WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 items-center gap-2 rounded-full border-2 border-white bg-brand-lime px-4 font-black uppercase text-brand-black shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:bg-brand-limeLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark sm:bottom-6 sm:right-6 sm:px-5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">WhatsApp</span>
    </a>
  );
}
