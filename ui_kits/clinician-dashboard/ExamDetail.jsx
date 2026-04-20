function ExamDetail({ patient }) {
  if (!patient) return null;
  return (
    <div style={{
      width: 420, background: '#fff', borderLeft: '1px solid #F3F4F6',
      padding: 24, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius: 999, background: patient.color, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 18 }}>{patient.initials}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#1A2B3C', letterSpacing: '-0.01em' }}>{patient.name}</div>
          <div style={{ fontSize: 12, color: '#6B7A8C', fontVariantNumeric: 'tabular-nums' }}>ID {patient.id} · DOB 1987-03-14 · {patient.reason}</div>
        </div>
        <DBadge tone={patient.tone}>{patient.status}</DBadge>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <DPill />
        <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Latest exam · Apr 18</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <MiniReading label="IOP (L)" value="14" unit="mmHg" tone="success" />
        <MiniReading label="IOP (R)" value="15" unit="mmHg" tone="success" />
        <MiniReading label="Acuity (L)" value="1.0" unit="" tone="success" />
        <MiniReading label="Acuity (R)" value="0.9" unit="" tone="warn" />
        <MiniReading label="Dry Eye" value="2.1" unit="/10" tone="warn" />
        <MiniReading label="Retinal" value="A+" unit="grade" tone="success" />
      </div>

      <div style={{ borderRadius: 12, background: '#1A2B3C', padding: 18, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -40, top: -40, width: 120, height: 120, borderRadius: 999, background: 'rgba(23,183,152,0.18)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <DIcon name="activity" size={16} color="#17B798" stroke={2.2} />
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#17B798' }}>Doctor Eye AI</div>
            <span style={{ marginLeft: 'auto', fontSize: 11, color: '#9CA3AF', fontVariantNumeric: 'tabular-nums' }}>97% conf.</span>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, color: '#E5E7EB' }}>
            Mild dry-eye indicators in OS. Pressures within normal limits. Recommend artificial tears b.i.d.; no urgent referral needed.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <button style={{ background: '#17B798', color: '#fff', border: 0, padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Accept findings</button>
            <button style={{ background: 'transparent', color: '#fff', border: '1px solid #3B4F65', padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Override</button>
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <DPill />
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2B3C' }}>Recent activity</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Activity when="Apr 18 · 10:22" text="Retinal scan completed · AI reviewed" icon="eye" />
          <Activity when="Apr 02" text="Prescription renewed · Artificial tears" icon="shield" />
          <Activity when="Mar 14" text="Annual exam · Dr. Kim" icon="file" />
        </div>
      </div>
    </div>
  );
}

function MiniReading({ label, value, unit, tone }) {
  const toneColor = { success: '#17B798', warn: '#F29D00', danger: '#E5484D' }[tone] || '#6B7280';
  return (
    <div style={{ padding: 12, background: '#F4F7F6', borderRadius: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 500, color: '#6B7A8C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#1A2B3C', marginTop: 3, fontVariantNumeric: 'tabular-nums' }}>
        {value}{unit && <span style={{ fontSize: 11, color: '#6B7A8C', fontWeight: 500, marginLeft: 3 }}>{unit}</span>}
      </div>
      <div style={{ width: 24, height: 3, borderRadius: 999, background: toneColor, marginTop: 6 }} />
    </div>
  );
}

function Activity({ when, text, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F4F7F6', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <DIcon name={icon} size={14} color="#17B798" />
      </div>
      <div>
        <div style={{ fontSize: 13, color: '#1A2B3C', lineHeight: 1.4 }}>{text}</div>
        <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{when}</div>
      </div>
    </div>
  );
}

Object.assign(window, { ExamDetail });
