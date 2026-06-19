import { quickInfo } from '../content';

export function QuickInfo() {
  return (
    <section aria-label="Números da Autoescola Líder" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl divide-y-2 divide-brand-dark/10 px-4 sm:px-6 md:grid-cols-3 md:divide-x-2 md:divide-y-0 lg:px-8">
        {quickInfo.map((item) => (
          <div key={item.label} className="py-8 text-center md:px-7 md:py-3">
            <p className="font-display text-6xl leading-none tracking-[-0.06em] text-brand-green lg:text-7xl">
              {item.value}<span className="ml-1 text-3xl lg:text-4xl">{item.suffix}</span>
            </p>
            <p className="mx-auto mt-3 max-w-[14rem] text-sm font-black uppercase leading-5 tracking-[0.12em] text-brand-dark">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
