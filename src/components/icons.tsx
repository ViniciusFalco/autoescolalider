type IconProps = {
  className?: string;
};

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3Zm0 0V7m6-3v13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607ZM7.994 14.52a6.603 6.603 0 0 1-3.356-.92l-.24-.144-2.493.654.666-2.432-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.558 6.558 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.066-.315-.099-.445.099-.133.197-.514.645-.629.775-.115.133-.23.148-.428.05-.197-.1-.836-.308-1.592-.984-.59-.525-.986-1.173-1.102-1.371-.115-.198-.012-.305.087-.404.088-.088.197-.23.296-.345.1-.115.133-.198.198-.33.066-.132.033-.248-.016-.347-.05-.099-.445-1.075-.61-1.47-.16-.389-.323-.335-.445-.34-.115-.007-.247-.007-.379-.007a.733.733 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.132 1.394 2.132 3.383 2.992.474.204.842.326 1.129.418.475.151.907.129 1.248.078.38-.057 1.171-.48 1.338-.943.164-.462.164-.858.115-.943-.05-.082-.182-.132-.38-.23Z"
      />
    </svg>
  );
}

export function SoundIcon({ muted, className = 'h-5 w-5' }: IconProps & { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 5 6.5 9H3v6h3.5L11 19V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {muted ? (
        <path d="m16 9 5 5m0-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path
          d="M15 8.5a5 5 0 0 1 0 7m2.5-9.5a8.5 8.5 0 0 1 0 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function PhoneIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 4.5h3l1.5 4-1.8 1.2c1 2 2.6 3.6 4.6 4.6L15 12.5l4 1.5v3c0 1.1-.9 2-2 2C10.4 19 5 13.6 5 7c0-1.1.9-2 1.5-2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
