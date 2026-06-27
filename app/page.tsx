import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ background: '#fff', color: '#111', minHeight: '100vh' }}>

      {/* hero — full width video */}
      <div style={{ position: 'relative', height: '92vh', overflow: 'hidden', background: '#111' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7
          }}
        >
          <source src="/naijacheck.mp4" type="video/mp4" />
        </video>

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'
        }} />

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '48px 40px',
          zIndex: 2
        }}>
          <div className="ping-border" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0,0,0,0.4)',
            padding: '6px 14px',
            borderRadius: '999px',
            marginBottom: '20px'
          }}>
            <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px' }}>
              <span className="animate-ping" style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: '#00c853',
                opacity: 0.75
              }} />
              <span style={{
                position: 'relative',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00c853',
                display: 'inline-block'
              }} />
            </span>
            <span style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.1em'
            }}>
              BUILT FOR THE 2027 NIGERIAN ELECTIONS
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            maxWidth: '700px'
          }}>
            Your vote.<br />
            <span className="grad-text">Verify first.</span>
          </h1>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '480px',
            lineHeight: 1.6,
            marginBottom: '28px'
          }}>
            Free civic tools to fight election misinformation and keep Nigerian voters — especially young voters — informed and ready.
          </p>

          <Link href="/checker" style={{
            display: 'inline-block',
            background: '#00c853',
            color: '#000',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            padding: '14px 28px',
            borderRadius: '999px',
            textDecoration: 'none'
          }}>
            VERIFY A CLAIM →
          </Link>
        </div>
      </div>

      {/* tools section */}
      <div style={{ padding: '64px 40px' }}>
        <p style={{
          fontSize: '11px',
          color: '#aaa',
          letterSpacing: '0.12em',
          marginBottom: '28px'
        }}>
          CHOOSE A TOOL
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>

          {/* claim verifier card */}
          <Link href="/checker" style={{ textDecoration: 'none' }}>
            <div
              className="tool-card-hover"
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '0.5px solid #e5e5e5',
                cursor: 'pointer',
              }}
            >
              <div style={{
                height: '240px',
                position: 'relative',
                backgroundImage: 'url(/facts_verify.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  padding: '16px',
                }}>
                  <span style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.1em'
                  }}>
                    CLAIM VERIFIER
                  </span>
                </div>
              </div>

              <div style={{ padding: '20px', background: '#fff' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px'
                }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#111' }}>
                    Fact-check any claim
                  </span>
                  <span style={{
                    fontSize: '10px',
                    background: '#e8f5e9',
                    color: '#2e7d32',
                    padding: '2px 8px',
                    borderRadius: '99px',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    LIVE
                  </span>
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '14px'
                }}>
                  Paste any election claim from WhatsApp or social media. Get an instant AI verdict backed by official INEC sources.
                </p>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#00c853',
                  letterSpacing: '0.04em'
                }}>
                  Verify a claim →
                </span>
              </div>
            </div>
          </Link>

          {/* candidate directory card */}
          <div style={{
            borderRadius: '14px',
            overflow: 'hidden',
            border: '0.5px solid #e5e5e5',
            opacity: 0.55,
            cursor: 'not-allowed'
          }}>
            <div style={{
              height: '240px',
              position: 'relative',
              backgroundImage: 'url(/candidates_info.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: '16px',
              }}>
                <span style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.1em'
                }}>
                  CANDIDATE DIRECTORY
                </span>
              </div>
            </div>

            <div style={{ padding: '20px', background: '#fff' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px'
              }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#111' }}>
                  Find your candidates
                </span>
                <span style={{
                  fontSize: '10px',
                  background: '#fff8e1',
                  color: '#f57f17',
                  padding: '2px 8px',
                  borderRadius: '99px',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}>
                  COMING SOON
                </span>
              </div>
              <p style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.6,
                marginBottom: '14px'
              }}>
                Find candidates running in your constituency. See their background, track record, and stated positions.
              </p>
              <span style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#bbb',
                letterSpacing: '0.04em'
              }}>
                Coming soon
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* mission section */}
      <div style={{ padding: '0 40px 64px' }}>
        <div style={{
          background: '#f9f9f9',
          borderRadius: '16px',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <p style={{
              fontSize: '11px',
              color: '#aaa',
              letterSpacing: '0.12em',
              marginBottom: '16px'
            }}>
              OUR MISSION
            </p>
            <h2 style={{
              fontSize: '26px',
              fontWeight: 800,
              color: '#111',
              lineHeight: 1.2,
              marginBottom: '14px'
            }}>
              Apathy and misinformation are stealing your vote.
            </h2>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>
              Every election cycle, millions of young Nigerians either don't vote because
              they don't know how, or unknowingly spread false information that suppresses
              turnout and distorts results. NaijaCheck exists to change that — one
              verified claim at a time.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { stat: '93M+', label: 'Registered voters in Nigeria' },
              { stat: '~26%', label: 'Voter turnout in the 2023 general elections' },
              { stat: '#1', label: 'WhatsApp as source of election misinformation' },
            ].map((item) => (
              <div key={item.stat} style={{
                background: '#fff',
                border: '0.5px solid #e5e5e5',
                borderRadius: '10px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#00c853',
                  whiteSpace: 'nowrap'
                }}>
                  {item.stat}
                </span>
                <span style={{ fontSize: '13px', color: '#888', lineHeight: 1.4 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* how it works */}
      <div style={{ padding: '0 40px 80px' }}>
        <p style={{
          fontSize: '11px',
          color: '#aaa',
          letterSpacing: '0.12em',
          marginBottom: '28px'
        }}>
          HOW IT WORKS
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px'
        }}>
          {[
            {
              step: '01',
              title: 'Paste the claim',
              desc: 'Copy any suspicious claim from WhatsApp or social media and paste it into NaijaCheck.'
            },
            {
              step: '02',
              title: 'AI verifies it',
              desc: 'Our AI cross-references it against a curated database of verified INEC facts using semantic search.'
            },
            {
              step: '03',
              title: 'Share the truth',
              desc: 'Get a shareable verdict link. Send it back into the group chat. Stop misinformation before it spreads.'
            },
          ].map((item) => (
            <div key={item.step} style={{
              borderTop: '2px solid #111',
              paddingTop: '24px',
            }}>
              <p style={{
                fontSize: '11px',
                color: '#aaa',
                letterSpacing: '0.1em',
                marginBottom: '12px'
              }}>
                {item.step}
              </p>
              <p style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#111',
                marginBottom: '8px'
              }}>
                {item.title}
              </p>
              <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div style={{
        borderTop: '0.5px solid #e5e5e5',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <span style={{ fontSize: '11px', color: '#bbb' }}>
          Independent civic project. Not affiliated with INEC or any political party. Data from{' '}
          <a href="https://inecnigeria.org" target="_blank" rel="noopener noreferrer"
            style={{ color: '#00c853' }}>
            inecnigeria.org
          </a>
        </span>
        <span style={{ fontSize: '11px', color: '#bbb' }}>
          Built by a Nigerian.
        </span>
      </div>

    </main>
  )
}