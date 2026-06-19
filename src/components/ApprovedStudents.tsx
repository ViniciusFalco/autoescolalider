import { approvedStudents } from '../content';
import { CampaignImage, SectionTitle } from './ui';

export function ApprovedStudents() {
  return (
    <section id="aprovados" className="relative overflow-hidden bg-brand-lime py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-dot-grid-dark bg-[length:18px_18px] opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Resultado de verdade">Quem faz, conquista.</SectionTitle>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {approvedStudents.map((student, index) => (
            <article key={student.image} className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border-[6px] border-white bg-brand-dark shadow-[0_22px_60px_rgba(0,75,47,0.25)]">
              <CampaignImage
                src={student.image}
                alt={student.alt}
                fallback={<span className="font-display text-[9rem] leading-none opacity-20">0{index + 1}</span>}
                className="absolute inset-0 h-full w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
