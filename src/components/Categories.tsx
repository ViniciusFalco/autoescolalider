import { categories, contactLinks } from '../content';
import { ButtonLink, SectionTitle } from './ui';

export function Categories() {
  return (
    <section id="categorias" className="bg-brand-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Escolha seu caminho">Qual categoria é a sua?</SectionTitle>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-7">
          {categories.map((category) => (
            <article key={category.name} className="group relative min-h-[540px] overflow-hidden rounded-[2.25rem] bg-brand-dark shadow-card sm:min-h-[620px]">
              <img
                src={category.image}
                alt={`Aulas para ${category.name} na Autoescola Líder`}
                loading="lazy"
                width="1122"
                height="1402"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="font-display text-5xl uppercase leading-none tracking-[-0.04em] sm:text-6xl xl:text-7xl">{category.name}</p>
                <p className="mt-3 max-w-md text-lg font-bold text-white/85">{category.description}</p>
                <ButtonLink href={contactLinks.whatsapp} className="mt-6">
                  Quero essa categoria
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
