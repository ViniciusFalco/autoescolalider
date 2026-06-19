import type { ReactNode } from 'react';
import { ChevronRightIcon } from './icons';

export function ButtonLink({
  href,
  children,
  variant = 'lime',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'lime' | 'white' | 'outline';
  className?: string;
}) {
  const styles = {
    lime: 'bg-brand-lime text-brand-black shadow-lime hover:bg-brand-limeLight',
    white: 'bg-white text-brand-dark hover:bg-brand-cream',
    outline: 'border-2 border-white/45 bg-white/5 text-white hover:bg-white hover:text-brand-dark',
  } as const;
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-extrabold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime ${styles[variant]} ${className}`}
    >
      {children}
      <ChevronRightIcon />
    </a>
  );
}

export function CampaignImage({
  src,
  alt,
  fallback,
  className = '',
  imageClassName = '',
  eager = false,
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-brand-green ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-dot-grid-dark bg-[length:16px_16px] text-brand-lime">
        {fallback}
      </div>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
        className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}

export function SectionTitle({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-green">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.95] tracking-[-0.04em] text-brand-dark sm:text-5xl lg:text-6xl">
        {children}
      </h2>
    </div>
  );
}
