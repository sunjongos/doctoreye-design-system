function DIcon({ name, size = 18, color = 'currentColor', stroke = 1.8 }) {
  const paths = {
    eye: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
    home: <><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"/></>,
    users: <><circle cx="9" cy="8" r="4"/><path d="M3 21a6 6 0 0 1 12 0M16 4a4 4 0 0 1 0 8M21 21a6 6 0 0 0-4-5.6"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 15 4-4 4 4 5-7"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    filter: <path d="M22 3H2l8 9.5V19l4 2v-8.5Z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      {paths[name]}
    </svg>
  );
}

function DBadge({ tone = 'success', children, dot = true }) {
  const tones = {
    success: { bg: '#E6F7F3', fg: '#0F8570', dot: '#17B798' },
    info:    { bg: '#E0F3FA', fg: '#035d80', dot: '#0087B6' },
    warn:    { bg: '#FEF3DC', fg: '#8a5800', dot: '#F29D00' },
    danger:  { bg: '#FCEAEA', fg: '#a82930', dot: '#E5484D' },
    neutral: { bg: '#F4F7F6', fg: '#3B4F65', dot: '#6B7280' },
    ai:      { bg: '#1A2B3C', fg: '#17B798', dot: '#17B798' },
  }[tone];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 999, background: tones.bg, color: tones.fg, whiteSpace: 'nowrap' }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: tones.dot }} />}
      {children}
    </span>
  );
}

function DPill() {
  return <span style={{ display: 'inline-block', width: 4, height: 22, borderRadius: 999, background: '#17B798' }} />;
}

Object.assign(window, { DIcon, DBadge, DPill });
