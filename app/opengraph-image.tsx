import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'Riyasudeen Farook - IT Operations Manager'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // Optional: Load a custom font
  // const interSemiBold = await fetch(
  //   new URL('./fonts/Inter-SemiBold.ttf', import.meta.url)
  // ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: '#011627', // Matches the site's dark theme
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem', // Increased padding for better spacing
          textAlign: 'center', // Ensure text centers if it wraps
        }}
      >
        {/* You could add a simple shape or icon here using standard SVG or divs */}
        <div style={{ 
            display: 'flex', 
            marginBottom: '2rem',
            padding: '1rem',
            borderRadius: '1rem',
            background: 'rgba(56, 189, 248, 0.1)', // Tailwind accent color logic
            border: '1px solid rgba(56, 189, 248, 0.3)'
        }}>
             {/* Simple code-like icon or initial */}
             <span style={{ fontSize: 64, color: '#38bdf8' }}>RF</span>
        </div>

        <h1 style={{ 
            fontSize: 64, // Larger for better visibility on social cards
            color: '#f8fafc', // Slate-50
            margin: 0,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.5rem'
        }}>
          Riyasudeen Farook
        </h1>
        <h2 style={{ 
            fontSize: 36, 
            color: '#38bdf8', // Accent color
            margin: 0,
            fontWeight: 500,
            letterSpacing: '-0.025em'
        }}>
          IT Operations Manager | Riyadh, KSA
        </h2>
        <p style={{
            fontSize: 24,
            color: '#94a3b8', // Slate-400
            marginTop: '2rem'
        }}>
            Strategic IT Leadership for Vision 2030
        </p>
      </div>
    ),
    {
      ...size,
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: interSemiBold,
      //     style: 'normal',
      //     weight: 600,
      //   },
      // ],
    }
  )
}