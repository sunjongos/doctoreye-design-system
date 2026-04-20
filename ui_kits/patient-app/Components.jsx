function TopBar({ greeting = '안녕하세요, 민지님', notifications = 2 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 20px 10px', background: '#F4F7F6',
    }}>
      <div>
        <div style={{ fontSize: 12, color: '#6B7A8C', fontWeight: 500 }}>Today</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.01em' }}>{greeting}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button style={{ position: 'relative', width: 40, height: 40, borderRadius: 999, background: '#fff', border: '1px solid #F3F4F6', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <Icon name="bell" size={18} color="#1A2B3C" />
          {notifications > 0 && (
            <span style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 999, background: '#E5484D', border: '2px solid #fff' }} />
          )}
        </button>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: 'linear-gradient(135deg,#CDEFE7,#17B798)', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>MJ</div>
      </div>
    </div>
  );
}

function TabBar({ current, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'results', label: 'Results', icon: 'activity' },
    { id: 'book', label: 'Book', icon: 'calendar' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: '#fff', height: 72,
      borderTop: '1px solid #F3F4F6',
      boxShadow: '0 -4px 20px rgb(0 0 0 / 0.04)',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      paddingBottom: 8,
    }}>
      {tabs.map(t => {
        const active = t.id === current;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
            color: active ? '#17B798' : '#6B7A8C',
            fontSize: 11, fontWeight: 500,
          }}>
            <Icon name={t.icon} size={22} color={active ? '#17B798' : '#6B7A8C'} stroke={active ? 2.2 : 1.8} />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

function HeroCard({ onStart }) {
  return (
    <div style={{
      background: 'linear-gradient(155deg, #E6F7F3 0%, #ffffff 100%)',
      borderRadius: 16, padding: 22, border: '1px solid #CDEFE7',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: -30, top: -30, width: 160, height: 160, borderRadius: 999, background: 'rgba(23,183,152,0.08)' }} />
      <div style={{ position: 'relative' }}>
        <Badge tone="info">AI Vision Check</Badge>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.01em', marginTop: 10, lineHeight: 1.25 }}>
          오늘의 비전<br/>체크를 시작해 보세요
        </div>
        <div style={{ fontSize: 13, color: '#3B4F65', marginTop: 6, lineHeight: 1.5 }}>2 minutes · contactless · AI-assisted</div>
        <div style={{ marginTop: 16 }}>
          <PrimaryButton onClick={onStart} icon="eye">Run Vision Check</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, left, right, unit, status, accent = 'mint' }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: 16,
      border: '1px solid #F3F4F6',
      boxShadow: '0 4px 20px rgb(0 0 0 / 0.04)',
      flex: 1, minWidth: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <AccentPill color={accent} />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1A2B3C' }}>{title}</div>
      </div>
      <div style={{ fontSize: 11, fontWeight: 500, color: '#6B7A8C', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '10px 0 4px' }}>L · R</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>
        {left}{right && <span style={{ color: '#9CA3AF', fontWeight: 500, margin: '0 6px' }}>·</span>}{right}
        {unit && <span style={{ fontSize: 12, color: '#6B7A8C', fontWeight: 500, marginLeft: 4 }}>{unit}</span>}
      </div>
      <div style={{ marginTop: 10 }}><Badge tone={status.tone}>{status.label}</Badge></div>
    </div>
  );
}

function AppointmentRow({ date, time, doctor, type, active }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px 16px',
      background: active ? '#E6F7F3' : '#fff',
      border: `1px solid ${active ? '#CDEFE7' : '#F3F4F6'}`,
      borderRadius: 12,
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: active ? '#17B798' : '#F4F7F6',
        color: active ? '#fff' : '#1A2B3C',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.85 }}>{date.m}</div>
        <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>{date.d}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#1A2B3C' }}>{type}</div>
        <div style={{ fontSize: 12, color: '#6B7A8C', marginTop: 2 }}>{time} · {doctor}</div>
      </div>
      <Icon name="chevron" size={18} color="#9CA3AF" />
    </div>
  );
}

function SectionHeader({ title, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <AccentPill />
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1A2B3C' }}>{title}</div>
      </div>
      {action && <button style={{ background: 'transparent', border: 0, color: '#17B798', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>{action}</button>}
    </div>
  );
}

Object.assign(window, { TopBar, TabBar, HeroCard, StatCard, AppointmentRow, SectionHeader });
