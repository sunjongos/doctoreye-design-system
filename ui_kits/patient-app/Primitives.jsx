function Icon({ name, size = 20, color = 'currentColor', stroke = 2 }) {
  const paths = {
    eye: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    home: <><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"/></>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    heart: <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></>,
    stethoscope: <><path d="M11 2v2M6 2v2M4.5 2h8a.5.5 0 0 1 .5.5V8a5 5 0 0 1-10 0V2.5a.5.5 0 0 1 .5-.5Z"/><path d="M8 14v1a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="10" r="2"/></>,
    glasses: <><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M10 15h4M2.5 13 5 7h3M21.5 13 19 7h-3"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      {paths[name]}
    </svg>
  );
}

function AccentPill({ color = 'mint' }) {
  return <span style={{ display: 'inline-block', width: 4, height: 22, borderRadius: 999, background: color === 'mint' ? '#17B798' : '#1A2B3C' }} />;
}

function Badge({ tone = 'success', children }) {
  const tones = {
    success: { bg: '#E6F7F3', fg: '#0F8570', dot: '#17B798' },
    info:    { bg: '#E0F3FA', fg: '#035d80', dot: '#0087B6' },
    warn:    { bg: '#FEF3DC', fg: '#8a5800', dot: '#F29D00' },
    danger:  { bg: '#FCEAEA', fg: '#a82930', dot: '#E5484D' },
    neutral: { bg: '#F4F7F6', fg: '#3B4F65', dot: '#6B7280' },
  }[tone];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 999, background: tones.bg, color: tones.fg }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: tones.dot }} />
      {children}
    </span>
  );
}

function PrimaryButton({ children, onClick, full, icon }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: 'inherit', fontWeight: 500, fontSize: 15, border: 0,
      padding: '13px 22px', borderRadius: 10, cursor: 'pointer',
      background: '#17B798', color: '#fff',
      boxShadow: '0 1px 2px rgb(0 0 0 / 0.05)',
      width: full ? '100%' : 'auto',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      transition: 'background 150ms cubic-bezier(.22,1,.36,1)',
    }}
    onMouseEnter={e => e.currentTarget.style.background = '#13a187'}
    onMouseLeave={e => e.currentTarget.style.background = '#17B798'}
    >
      {icon && <Icon name={icon} size={18} color="#fff" />}
      {children}
    </button>
  );
}

function GhostButton({ children, onClick, full }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: 'inherit', fontWeight: 500, fontSize: 14, border: '1px solid #E5E7EB',
      padding: '11px 20px', borderRadius: 10, cursor: 'pointer',
      background: '#fff', color: '#1A2B3C',
      width: full ? '100%' : 'auto',
    }}>
      {children}
    </button>
  );
}

Object.assign(window, { Icon, AccentPill, Badge, PrimaryButton, GhostButton });
