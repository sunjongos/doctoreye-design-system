function Sidebar({ current = 'patients', onChange }) {
  const nav = [
    { id: 'home', label: 'Dashboard', icon: 'home' },
    { id: 'patients', label: 'Patients', icon: 'users', badge: 12 },
    { id: 'appts', label: 'Appointments', icon: 'calendar' },
    { id: 'reports', label: 'Reports', icon: 'file' },
    { id: 'analytics', label: 'Analytics', icon: 'chart' },
  ];
  return (
    <div style={{
      width: 260, background: '#fff', borderRight: '1px solid #F3F4F6',
      padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: 24,
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 6px' }}>
        <img src="../../assets/logo-mark.svg" width="34" height="34" />
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.01em' }}>Doctor<span style={{ color: '#17B798' }}>Eye</span></div>
          <div style={{ fontSize: 10, color: '#6B7A8C', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Clinician</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 10px 6px' }}>Workspace</div>
        {nav.map(n => {
          const active = n.id === current;
          return (
            <button key={n.id} onClick={() => onChange?.(n.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 8, cursor: 'pointer',
              background: active ? '#E6F7F3' : 'transparent', border: 0,
              color: active ? '#0F8570' : '#3B4F65',
              fontSize: 13, fontWeight: active ? 600 : 500,
              textAlign: 'left',
            }}>
              <DIcon name={n.icon} size={18} color={active ? '#17B798' : '#6B7A8C'} />
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.badge && <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 999, background: active ? '#17B798' : '#F4F7F6', color: active ? '#fff' : '#3B4F65' }}>{n.badge}</span>}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 'auto', padding: 12, borderRadius: 12, background: '#F4F7F6', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: '#1A2B3C', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>SK</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#1A2B3C' }}>Dr. Seon Kim</div>
          <div style={{ fontSize: 11, color: '#6B7A8C' }}>Ophthalmology</div>
        </div>
        <DIcon name="settings" size={16} color="#6B7A8C" />
      </div>
    </div>
  );
}

function DTopBar() {
  return (
    <div style={{
      height: 64, background: '#fff', borderBottom: '1px solid #F3F4F6',
      display: 'flex', alignItems: 'center', padding: '0 28px', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, maxWidth: 480, padding: '9px 14px', background: '#F4F7F6', borderRadius: 10 }}>
        <DIcon name="search" size={16} color="#6B7A8C" />
        <input placeholder="Search patients, exams, reports…" style={{ border: 0, background: 'transparent', outline: 'none', flex: 1, fontSize: 13, color: '#1A2B3C', fontFamily: 'inherit' }} />
        <span style={{ fontSize: 10, color: '#9CA3AF', fontFamily: 'var(--font-mono)', padding: '2px 5px', border: '1px solid #E5E7EB', borderRadius: 4 }}>⌘K</span>
      </div>
      <div style={{ flex: 1 }} />
      <button style={{ background: '#F4F7F6', border: 0, padding: '9px 14px', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: '#1A2B3C', cursor: 'pointer' }}>
        <DIcon name="plus" size={16} color="#17B798" /> New exam
      </button>
      <button style={{ width: 40, height: 40, borderRadius: 999, background: 'transparent', border: '1px solid #F3F4F6', display: 'grid', placeItems: 'center', cursor: 'pointer', position: 'relative' }}>
        <DIcon name="bell" size={18} color="#1A2B3C" />
        <span style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 999, background: '#F29D00', border: '2px solid #fff' }} />
      </button>
    </div>
  );
}

function MetricTile({ label, value, unit, delta, tone = 'mint' }) {
  const accent = tone === 'mint' ? '#17B798' : tone === 'blue' ? '#0087B6' : tone === 'orange' ? '#F29D00' : '#1A2B3C';
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: 18,
      border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgb(0 0 0 / 0.04)',
      flex: 1, minWidth: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ display: 'inline-block', width: 3, height: 18, borderRadius: 999, background: accent }} />
        <div style={{ fontSize: 12, fontWeight: 500, color: '#6B7A8C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 10 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
        {unit && <div style={{ fontSize: 13, color: '#6B7A8C', fontWeight: 500 }}>{unit}</div>}
      </div>
      {delta && (
        <div style={{ fontSize: 12, color: delta.startsWith('+') ? '#0F8570' : '#a82930', marginTop: 4, fontWeight: 500 }}>
          {delta} vs last week
        </div>
      )}
    </div>
  );
}

function PatientListRow({ patient, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'grid', gridTemplateColumns: '44px 2fr 1.4fr 1fr 1fr 90px',
      gap: 12, alignItems: 'center',
      padding: '12px 18px',
      background: active ? '#E6F7F3' : 'transparent',
      borderLeft: `3px solid ${active ? '#17B798' : 'transparent'}`,
      cursor: 'pointer', transition: 'background 120ms',
    }}>
      <div style={{ width: 36, height: 36, borderRadius: 999, background: patient.color, display: 'grid', placeItems: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>{patient.initials}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#1A2B3C', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{patient.name}</div>
        <div style={{ fontSize: 11, color: '#6B7A8C', fontVariantNumeric: 'tabular-nums' }}>ID {patient.id} · {patient.age}y · {patient.sex}</div>
      </div>
      <div style={{ fontSize: 13, color: '#1A2B3C' }}>{patient.reason}</div>
      <div style={{ fontSize: 12, color: '#6B7A8C', fontVariantNumeric: 'tabular-nums' }}>{patient.last}</div>
      <div><DBadge tone={patient.tone}>{patient.status}</DBadge></div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {patient.aiFlagged && <DBadge tone="ai">AI</DBadge>}
      </div>
    </div>
  );
}

Object.assign(window, { Sidebar, DTopBar, MetricTile, PatientListRow });
