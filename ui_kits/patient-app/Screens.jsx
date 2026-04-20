function HomeScreen({ onGoResults }) {
  return (
    <div style={{ padding: '0 20px 90px', background: '#F4F7F6', minHeight: '100%' }}>
      <HeroCard onStart={onGoResults} />
      <SectionHeader title="Latest readings" action="See all" />
      <div style={{ display: 'flex', gap: 10 }}>
        <StatCard title="Pressure" left="14" right="15" unit="mmHg" status={{ tone: 'success', label: 'Normal' }} />
        <StatCard title="Acuity" left="1.0" right="0.9" status={{ tone: 'success', label: 'Stable' }} accent="navy" />
      </div>
      <SectionHeader title="Upcoming" action="Manage" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <AppointmentRow date={{ m: 'APR', d: '23' }} time="10:30 AM" doctor="Dr. Kim" type="Retinal exam" active />
        <AppointmentRow date={{ m: 'MAY', d: '09' }} time="2:00 PM" doctor="Dr. Park" type="Follow-up · IOP" />
      </div>
    </div>
  );
}

function ResultsScreen() {
  return (
    <div style={{ padding: '0 20px 90px', background: '#F4F7F6', minHeight: '100%' }}>
      <div style={{ padding: '12px 0 4px' }}>
        <div style={{ fontSize: 12, color: '#6B7A8C' }}>Apr 18, 2026 · Reviewed by Dr. Kim</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.02em', marginTop: 4 }}>Your Eye Report</div>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 18, border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgb(0 0 0 / 0.04)', marginTop: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 999, background: '#E6F7F3', display: 'grid', placeItems: 'center' }}>
            <Icon name="check" size={22} color="#17B798" stroke={2.5} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1A2B3C' }}>All clear</div>
            <div style={{ fontSize: 12, color: '#6B7A8C' }}>No issues detected in this exam.</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 4 }}>
          <Reading label="Intraocular Pressure" value="14 · 15" unit="mmHg" tone="success" note="Normal" />
          <Reading label="Visual Acuity" value="20/20" unit="both" tone="success" note="Stable" />
          <Reading label="Dry Eye Index" value="2.1" unit="/10" tone="warn" note="Slight dryness" />
          <Reading label="Retinal Scan" value="A+" unit="grade" tone="success" note="Clear" />
        </div>
      </div>
      <SectionHeader title="AI observations" />
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #F3F4F6' }}>
        <div style={{ fontSize: 13, color: '#1A2B3C', lineHeight: 1.55 }}>
          좌안에 가벼운 건조 증상이 감지되었어요. 하루 2회 인공눈물 사용을 권장합니다.
        </div>
        <div style={{ fontSize: 12, color: '#6B7A8C', marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="activity" size={14} color="#0087B6" /> Doctor Eye AI · 97% confidence
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <PrimaryButton full>Share with care team</PrimaryButton>
      </div>
    </div>
  );
}

function Reading({ label, value, unit, tone, note }) {
  return (
    <div style={{ background: '#F4F7F6', borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 500, color: '#6B7A8C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div style={{ fontSize: 19, fontWeight: 700, color: '#1A2B3C', marginTop: 3, fontVariantNumeric: 'tabular-nums' }}>
        {value} <span style={{ fontSize: 11, fontWeight: 500, color: '#6B7A8C' }}>{unit}</span>
      </div>
      <div style={{ marginTop: 6 }}><Badge tone={tone}>{note}</Badge></div>
    </div>
  );
}

function BookScreen() {
  const [selected, setSelected] = React.useState(23);
  const days = Array.from({ length: 21 }, (_, i) => 17 + i);
  const times = ['9:00', '10:00', '10:30', '11:00', '2:00', '3:30', '4:00'];
  const [time, setTime] = React.useState('10:30');
  return (
    <div style={{ padding: '0 20px 90px', background: '#F4F7F6', minHeight: '100%' }}>
      <div style={{ padding: '12px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.02em' }}>Book an exam</div>
        <div style={{ fontSize: 13, color: '#6B7A8C', marginTop: 4 }}>Select a date and time for your next visit.</div>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #F3F4F6' }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#1A2B3C', marginBottom: 10 }}>April 2026</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 11, color: '#9CA3AF', marginBottom: 6 }}>
          {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} style={{ textAlign: 'center' }}>{d}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {days.map(d => {
            const active = d === selected;
            const disabled = d < 20;
            return (
              <button key={d} onClick={() => !disabled && setSelected(d)} style={{
                aspectRatio: '1', border: 0, borderRadius: 8, cursor: disabled ? 'default' : 'pointer',
                background: active ? '#17B798' : 'transparent',
                color: active ? '#fff' : disabled ? '#D1D5DB' : '#1A2B3C',
                fontSize: 14, fontWeight: active ? 700 : 500,
                fontVariantNumeric: 'tabular-nums',
              }}>{d}</button>
            );
          })}
        </div>
      </div>
      <SectionHeader title="Available times" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {times.map(t => {
          const active = t === time;
          return (
            <button key={t} onClick={() => setTime(t)} style={{
              padding: '10px 16px', borderRadius: 10, border: `1px solid ${active ? '#17B798' : '#E5E7EB'}`,
              background: active ? '#E6F7F3' : '#fff',
              color: active ? '#0F8570' : '#1A2B3C',
              fontWeight: 500, fontSize: 13, cursor: 'pointer',
              fontVariantNumeric: 'tabular-nums',
            }}>{t}</button>
          );
        })}
      </div>
      <div style={{ marginTop: 18 }}>
        <PrimaryButton full>Confirm Apr {selected} · {time}</PrimaryButton>
      </div>
    </div>
  );
}

function ProfileScreen() {
  const items = [
    { icon: 'user', label: 'Personal info', hint: 'Name, DOB, contact' },
    { icon: 'heart', label: 'Care team', hint: 'Dr. Kim · Dr. Park' },
    { icon: 'glasses', label: 'Prescriptions', hint: '2 active' },
    { icon: 'stethoscope', label: 'Medical history', hint: 'Last updated Apr 10' },
    { icon: 'bell', label: 'Notifications', hint: 'Email, push' },
  ];
  return (
    <div style={{ padding: '0 20px 90px', background: '#F4F7F6', minHeight: '100%' }}>
      <div style={{ padding: '14px 0 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 64, height: 64, borderRadius: 999, background: 'linear-gradient(135deg,#CDEFE7,#17B798)', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: 22 }}>MJ</div>
        <div>
          <div style={{ fontSize: 19, fontWeight: 700, color: '#1A2B3C' }}>김민지</div>
          <div style={{ fontSize: 12, color: '#6B7A8C' }}>Patient · ID 0238</div>
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #F3F4F6', overflow: 'hidden' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
            borderBottom: i < items.length - 1 ? '1px solid #F3F4F6' : 'none',
            cursor: 'pointer',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F4F7F6', display: 'grid', placeItems: 'center' }}>
              <Icon name={it.icon} size={18} color="#17B798" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1A2B3C' }}>{it.label}</div>
              <div style={{ fontSize: 12, color: '#6B7A8C', marginTop: 1 }}>{it.hint}</div>
            </div>
            <Icon name="chevron" size={16} color="#9CA3AF" />
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, ResultsScreen, BookScreen, ProfileScreen });
