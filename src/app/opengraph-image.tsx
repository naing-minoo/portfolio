import { ImageResponse } from 'next/og'

export const alt = 'Naing Min Oo — Senior Product Manager'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0a0a0a',
          color: '#ffffff',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'flex-start',
            border: '2px solid #262626',
            borderRadius: '36px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            padding: '64px',
            width: '100%',
          }}
        >
          <div style={{ color: '#818cf8', display: 'flex', fontSize: 28, fontWeight: 700 }}>
            NMO · Cambridge, UK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 86, fontWeight: 900, letterSpacing: '-4px' }}>
              Naing Min Oo
            </div>
            <div style={{ color: '#d4d4d4', display: 'flex', fontSize: 38, marginTop: 18 }}>
              Senior Product Manager · Technical Delivery Manager
            </div>
          </div>
          <div style={{ color: '#a3a3a3', display: 'flex', fontSize: 25 }}>
            Engineering depth · Strategic clarity · Delivery momentum
          </div>
        </div>
      </div>
    ),
    size,
  )
}
