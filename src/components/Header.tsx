import { contactLinks } from '../content';
import { ButtonLink } from './ui';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Autoescola Líder - início" className="shrink-0">
          <img
            src="/logo.png"
            alt="Autoescola Líder"
            width="2320"
            height="2320"
            className="h-16 w-16 object-contain sm:h-[68px] sm:w-[68px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <a className="nav-link" href="#categorias">Categorias</a>
          <a className="nav-link" href="#aprovados">Aprovados</a>
          <a className="nav-link" href="#localizacao">Localização</a>
        </nav>

        <ButtonLink href={contactLinks.whatsapp} className="min-h-11 px-4 sm:px-6">
          WhatsApp
        </ButtonLink>
      </div>
    </header>
  );
}
