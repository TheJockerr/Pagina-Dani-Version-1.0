// src/components/garden/OrientalGardenCanvas.tsx
import { useMemo } from 'react';
import { useTimeOfDay } from '../../hooks/useTimeOfDay';
import styles from './OrientalGardenCanvas.module.css';

// ── Cherry Branch SVG ──
const CherryBranch = () => (
  <svg className={styles.cherryBranch} viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M420 0 C355 38, 285 18, 200 75 C140 120, 85 108, 25 155" stroke="#6B4F3A" strokeWidth="5" strokeLinecap="round"/>
    <path d="M285 20 C245 52, 185 49, 125 38" stroke="#6B4F3A" strokeWidth="3" strokeLinecap="round"/>
    <path d="M200 78 C168 84, 148 68, 98 74" stroke="#8A6A50" strokeWidth="2" strokeLinecap="round"/>
    <path d="M125 40 C112 28, 102 19, 84 12" stroke="#8A6A50" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M148 70 C138 57, 140 47, 130 37" stroke="#8A6A50" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M225 80 C228 68, 238 58, 245 44" stroke="#8A6A50" strokeWidth="1.1" strokeLinecap="round"/>
    {[{ x:200,y:76,r:15,d:5 },{ x:285,y:20,r:16,d:7 },{ x:125,y:38,r:13,d:2 },{ x:148,y:68,r:11,d:4 },{ x:84,y:12,r:12,d:6 },{ x:50,y:50,r:11,d:0 },{ x:230,y:46,r:12,d:3 }].map(({x,y,r,d},i)=>(
      <g key={i} transform={`translate(${x},${y})`}>
        {[0,72,144,216,288].map((rot,j)=>(
          <ellipse key={j} cx="0" cy={`-${r}`} rx={r*0.6} ry={r}
            fill={j%2===0?'#FAF0F3':'#DEB0BF'} opacity={0.88}
            transform={`rotate(${rot+d})`}/>
        ))}
        <circle r={r*0.32} fill="#FFF8F0"/><circle r={r*0.15} fill="#C4889C"/>
      </g>
    ))}
    <path d="M98 74 Q94 90 91 98" stroke="#8A6A50" strokeWidth="0.9"/>
    <ellipse cx="91" cy="101" rx="5" ry="8" fill="#C4889C" opacity="0.9" transform="rotate(5 91 101)"/>
    <ellipse cx="230" cy="115" rx="5" ry="8" fill="#DEB0BF" opacity="0.75" transform="rotate(30 230 115)"/>
    <ellipse cx="160" cy="100" rx="4" ry="6" fill="#C4889C" opacity="0.65" transform="rotate(-20 160 100)"/>
  </svg>
);

// ── Lotus Pond SVG ──
const LotusPond = () => (
  <svg className={styles.lotusPond} viewBox="0 0 360 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Animated Water Ripples (cinematic) */}
    <ellipse cx="180" cy="255" rx="160" ry="25" className={`${styles.ripple} ${styles.ripple1}`} stroke="var(--theme-accent)" strokeWidth="1.5" />
    <ellipse cx="180" cy="255" rx="120" ry="18" className={`${styles.ripple} ${styles.ripple2}`} stroke="var(--theme-primary)" strokeWidth="1" />
    <ellipse cx="180" cy="255" rx="80" ry="12" className={`${styles.ripple} ${styles.ripple3}`} stroke="var(--theme-secondary)" strokeWidth="0.8" />

    <ellipse cx="180" cy="255" rx="160" ry="25" stroke="#C5CBB0" strokeWidth="1.5" opacity="0.22"/>
    <ellipse cx="180" cy="255" rx="120" ry="16" stroke="#C5CBB0" strokeWidth="1" opacity="0.18"/>
    <path d="M45 258 C18 242, 95 208, 138 235 C148 242, 112 266, 45 258Z" fill="#7A9E89" opacity="0.52"/>
    <path d="M195 268 C172 250, 255 225, 278 256 C285 266, 245 278, 195 268Z" fill="#5C7F6A" opacity="0.46"/>
    <g transform="translate(180,238)">
      <path d="M-48 -5 C-52 -42,-18 -70,0 -85 C18 -70,52 -42,48 -5Z" fill="#DEB0BF" opacity="0.6"/>
      <path d="M-36 -14 C-58 -47,-36 -75,-16 -90 C-2 -74,-6 -42,-36 -14Z" fill="#FAF0F3" opacity="0.72"/>
      <path d="M36 -14 C58 -47,36 -75,16 -90 C2 -74,6 -42,36 -14Z" fill="#FAF0F3" opacity="0.72"/>
      <path d="M-26 0 C-50 -35,-28 -62,-10 -76 C4 -62,0 -28,-26 0Z" fill="#C4889C" opacity="0.82"/>
      <path d="M26 0 C50 -35,28 -62,10 -76 C-4 -62,0 -28,26 0Z" fill="#C4889C" opacity="0.82"/>
      <path d="M-16 5 C-30 -28,-10 -55,0 -68 C10 -55,30 -28,16 5Z" fill="#A56B7F" opacity="0.88"/>
      <ellipse cx="0" cy="-26" rx="10" ry="6" fill="#C4A882" opacity="0.9"/>
      {[-4,-1,4].map((cx,i)=><circle key={i} cx={cx} cy="-29" r="1.4" fill="#FFF8F0"/>)}
    </g>
    <line x1="180" y1="240" x2="180" y2="268" stroke="#5C7F6A" strokeWidth="2.5" opacity="0.45"/>
    <line x1="28" y1="235" x2="28" y2="270" stroke="#8A7A60" strokeWidth="1.5" opacity="0.32"/>
    <ellipse cx="28" cy="232" rx="4" ry="11" fill="#A08A64" opacity="0.42"/>
  </svg>
);

// ── Willow Tree SVG ──
const WillowTree = () => (
  <svg className={styles.willow} viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M100 350 L100 80" stroke="#5C7A50" strokeWidth="6" strokeLinecap="round"/>
    <path d="M100 100 C90 80,70 60,40 20" stroke="#5C7A50" strokeWidth="3" strokeLinecap="round"/>
    <path d="M100 100 C108 78,125 55,155 18" stroke="#5C7A50" strokeWidth="3" strokeLinecap="round"/>
    {[
      {x1:40,y1:20,x2:20,y2:120},{x1:55,y1:40,x2:30,y2:140},
      {x1:80,y1:90,x2:55,y2:200},{x1:100,y1:80,x2:75,y2:220},
      {x1:110,y1:85,x2:130,y2:230},{x1:135,y1:50,x2:155,y2:200},
      {x1:155,y1:18,x2:175,y2:140},{x1:168,y1:30,x2:190,y2:160}
    ].map(({x1,y1,x2,y2},i)=>(
      <path key={i} d={`M${x1} ${y1} Q${(x1+x2)/2+15} ${(y1+y2)/2} ${x2} ${y2}`}
        stroke="#7A9E89" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
    ))}
  </svg>
);

// ── Crane SVG ──
const Crane = () => (
  <svg viewBox="0 0 200 120" fill="none" width="200" height="120" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 80 C90 75,100 72,112 74 C118 75,120 80,112 83 C100 86,90 85,80 80Z" fill="#5E5080" opacity="0.4"/>
    <path d="M80 80 C65 70,45 55,20 40" stroke="#5E5080" strokeWidth="2.8" strokeLinecap="round" opacity="0.4"/>
    <path d="M112 74 C128 63,148 50,172 38" stroke="#5E5080" strokeWidth="2.8" strokeLinecap="round" opacity="0.4"/>
    <path d="M112 74 C120 65,128 60,134 57" stroke="#5E5080" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <circle cx="136" cy="54" r="5" fill="#5E5080" opacity="0.4"/>
    <path d="M140 52 L150 48" stroke="#6B4F3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="136" cy="50" rx="3" ry="2" fill="#D4647A" opacity="0.5"/>
    <path d="M80 80 C68 88,52 94,35 100" stroke="#5E5080" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
  </svg>
);

// ── Small Bird SVG ──
const SmallBird = () => (
  <svg viewBox="0 0 60 40" fill="none" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20 C25 17,18 12,8 6" stroke="#D4956A" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M30 20 C35 17,42 12,52 6" stroke="#D4956A" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="30" cy="21" rx="5" ry="3.5" fill="#D4956A" opacity="0.55"/>
    <path d="M35 21 L42 19" stroke="#6B4F3A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

// ── Watercolor Mountains SVG ──
const Mountains = ({ period }: { period: string }) => {
  const col = period === 'night' ? '#3C3264' : period === 'morning' ? '#D4956A' : '#B4A5D2';
  const op1 = period === 'night' ? 0.32 : 0.20;
  const op2 = period === 'night' ? 0.24 : 0.15;
  return (
    <svg className={styles.mountains} viewBox="0 0 1400 580" preserveAspectRatio="xMidYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="mblur"><feGaussianBlur stdDeviation="6"/></filter>
        <filter id="mblur2"><feGaussianBlur stdDeviation="12"/></filter>
      </defs>
      <path d="M0 580 L0 400 C100 360,200 295,360 275 C520 255,640 285,760 268 C880 251,1000 235,1150 258 C1300 280,1360 320,1400 355 L1400 580Z"
        fill={col} opacity={op2} filter="url(#mblur2)"/>
      <path d="M0 580 L0 450 C120 418,260 368,430 358 C580 348,660 380,780 372 C900 364,1000 342,1130 360 C1260 378,1340 408,1400 432 L1400 580Z"
        fill={col} opacity={op1} filter="url(#mblur)"/>
    </svg>
  );
};

// ── Stars (night only) ──
const STAR_DATA = [
  {top:'5%',left:'10%',s:2,dur:2.8,del:0},{top:'8%',left:'28%',s:1.5,dur:3.5,del:0.8},
  {top:'3%',left:'45%',s:2.5,dur:2.2,del:1.5},{top:'12%',left:'62%',s:1.8,dur:4.0,del:0.3},
  {top:'7%',left:'72%',s:1.2,dur:3.2,del:2.1},{top:'15%',left:'85%',s:2.0,dur:2.6,del:0.6},
  {top:'2%',left:'90%',s:1.5,dur:3.8,del:1.2},{top:'18%',left:'30%',s:1.0,dur:4.2,del:0.9},
  {top:'20%',left:'55%',s:1.8,dur:2.9,del:1.8},{top:'10%',left:'78%',s:1.3,dur:3.3,del:2.4},
  {top:'6%',left:'38%',s:2.2,dur:2.5,del:0.4},{top:'22%',left:'15%',s:1.5,dur:3.6,del:1.0},
];

// ── Fireflies (night) ──
const FIREFLY_DATA = [
  {top:'55%',left:'15%',dur:9,del:0},{top:'65%',left:'32%',dur:12,del:2},
  {top:'70%',left:'50%',dur:8,del:4},{top:'60%',left:'68%',dur:11,del:1},
  {top:'75%',left:'22%',dur:10,del:3},{top:'58%',left:'80%',dur:13,del:5},
  {top:'72%',left:'42%',dur:9,del:6},{top:'65%',left:'88%',dur:11,del:2},
];

// ── Petal classes ──
const PETAL_CLS = [
  styles.p1,styles.p2,styles.p3,styles.p4,styles.p5,styles.p6,
  styles.p7,styles.p8,styles.p9,styles.p10,styles.p11,styles.p12,
];

export function OrientalGardenCanvas() {
  const theme = useTimeOfDay();
  const { period, vars } = theme;
  const isNight = period === 'night';
  const isMorning = period === 'morning';
  const petalColor = vars['--theme-petal-color'] || '#DEB0BF';

  const petalStyle = useMemo(() => ({
    background: petalColor,
    ...(isNight ? { boxShadow: `0 0 5px 2px ${petalColor}80`, borderRadius: '50%' } : {}),
  }), [petalColor, isNight]);

  return (
    <div className={styles.canvas} aria-hidden="true">
      {/* Layer 1: Watercolor mountains */}
      <Mountains period={period} />

      {/* Night: moon */}
      {isNight && <div className={styles.moon} />}
      {/* Morning: sun */}
      {isMorning && <div className={styles.sun} />}

      {/* Night: stars */}
      {isNight && (
        <div className={styles.starsLayer}>
          {STAR_DATA.map((s, i) => (
            <div key={i} className={styles.star} style={{
              top: s.top, left: s.left,
              width: `${s.s * 2}px`, height: `${s.s * 2}px`,
              ['--twinkle-dur' as string]: `${s.dur}s`,
              ['--twinkle-delay' as string]: `${s.del}s`,
            }}/>
          ))}
        </div>
      )}

      {/* Layer 2: Mist */}
      <div className={[styles.mistLayer, styles.mist1].join(' ')} />
      <div className={[styles.mistLayer, styles.mist2].join(' ')} />
      <div className={[styles.mistLayer, styles.mist3].join(' ')} />

      {/* Layer 3: Cherry branch (morning + afternoon) */}
      <CherryBranch />

      {/* Layer 4: Willow tree left (afternoon + night) */}
      {!isMorning && <WillowTree />}

      {/* Layer 5: Lotus pond */}
      <LotusPond />

      {/* Layer 6: Cranes (afternoon + night) */}
      {!isMorning && (
        <div className={styles.craneGroup}>
          {[styles.crane1, styles.crane2, styles.crane3].map((cls, i) => (
            <div key={i} className={[styles.crane, cls].join(' ')}>
              <Crane />
            </div>
          ))}
        </div>
      )}

      {/* Layer 7: Morning birds */}
      {isMorning && (
        <div className={styles.birdsGroup}>
          {[styles.bird1, styles.bird2, styles.bird3, styles.bird4].map((cls, i) => (
            <div key={i} className={[styles.bird, cls].join(' ')}>
              <SmallBird />
            </div>
          ))}
        </div>
      )}

      {/* Layer 8: Fireflies (night) */}
      {isNight && (
        <div className={styles.firefliesLayer}>
          {FIREFLY_DATA.map((f, i) => (
            <div key={i} className={styles.firefly} style={{
              top: f.top, left: f.left,
              ['--ff-dur' as string]: `${f.dur}s`,
              ['--ff-delay' as string]: `${f.del}s`,
            }}/>
          ))}
        </div>
      )}

      {/* Layer 9: Falling petals */}
      <div className={styles.petalContainer}>
        {PETAL_CLS.map((cls, i) => (
          <div key={i} className={[styles.petal, cls, isNight ? styles.glowing : ''].join(' ')}
            style={petalStyle}
          />
        ))}
      </div>
    </div>
  );
}

export default OrientalGardenCanvas;
