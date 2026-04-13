import { useState, useMemo, useCallback } from 'react';
import Particles from './components/Particles/Particles';
import Aurora from './components/Aurora/Aurora';
import Waves from './components/Waves/Waves';
import Galaxy from './components/Galaxy/Galaxy';
import Hyperspeed from './components/Hyperspeed/Hyperspeed';
import './App.css';

const EFFECTS = [
  { id: 'particles', label: 'Particles', icon: '\u2726' },
  { id: 'aurora', label: 'Aurora', icon: '\uD83C\uDF0C' },
  { id: 'waves', label: 'Waves', icon: '\u301C' },
  { id: 'galaxy', label: 'Galaxy', icon: '\u2727' },
  { id: 'hyperspeed', label: 'Hyperspeed', icon: '\u26A1' },
];

function hexFromHSL(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hslToHex(h, s, l) {
  return hexFromHSL(h, s, l);
}

const NEON_PALETTE = [
  '#FF00FF', '#00FFFF', '#FF3366', '#33FF00', '#FF6600',
  '#FFFF00', '#00FF88', '#FF0088', '#0088FF', '#FF0044',
  '#88FF00', '#FF8800', '#00FFAA', '#FF00CC', '#AA00FF',
  '#00DDFF', '#FF2266', '#66FF00', '#FFAA00', '#FF00AA',
];

function EffectRenderer({ effectId }) {
  const particlesColors = useMemo(() => {
    const shuffled = [...NEON_PALETTE].sort(() => Math.random() - 0.5);
    const extras = [];
    for (let i = 0; i < 8; i++) {
      extras.push(hslToHex(Math.random() * 360, 100, 65));
    }
    return [...shuffled, ...extras];
  }, []);

  const auroraColors = useMemo(() => {
    return [
      '#FF00FF',
      '#00FFAA',
      '#FFFF00',
    ];
  }, []);

  const hyperspeedOptions = useMemo(() => {
    const distortions = ['turbulentDistortion', 'mountainDistortion', 'deepDistortion'];
    const d = distortions[Math.floor(Math.random() * distortions.length)];
    return {
      distortion: d,
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 3,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 50,
      lightPairsPerRoadWay: 50,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.05, 400 * 0.15],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.2, 0.2],
      carFloorSeparation: [0.05, 1],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0x331144,
        brokenLines: 0x331144,
        leftCars: [0xFF00FF, 0xFF0088, 0xFF33CC],
        rightCars: [0x00FFFF, 0x00FFAA, 0x00DDFF],
        sticks: 0xFFFF00,
      }
    };
  }, []);

  switch (effectId) {
    case 'particles':
      return (
        <Particles
          particleCount={2500}
          particleSpread={12}
          speed={0.2}
          particleColors={particlesColors}
          moveParticlesOnHover={true}
          particleHoverFactor={3}
          alphaParticles={false}
          particleBaseSize={150}
          sizeRandomness={1.2}
          cameraDistance={18}
        />
      );
    case 'aurora':
      return (
        <Aurora
          colorStops={['#FF00FF', '#00FFCC', '#FFAA00']}
          amplitude={2.0}
          blend={0.7}
          speed={2.5}
        />
      );
    case 'waves':
      return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Waves
            lineColor="rgba(255, 0, 255, 0.5)"
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={50}
            waveAmpY={25}
            xGap={6}
            yGap={20}
          />
          <Waves
            lineColor="rgba(0, 255, 200, 0.4)"
            backgroundColor="transparent"
            waveSpeedX={0.018}
            waveSpeedY={0.008}
            waveAmpX={35}
            waveAmpY={18}
            xGap={8}
            yGap={28}
          />
          <Waves
            lineColor="rgba(255, 200, 0, 0.35)"
            backgroundColor="transparent"
            waveSpeedX={0.025}
            waveSpeedY={0.012}
            waveAmpX={40}
            waveAmpY={22}
            xGap={10}
            yGap={24}
          />
        </div>
      );
    case 'galaxy':
      return (
        <Galaxy
          hueShift={Math.random() * 360}
          starSpeed={0.8}
          density={1.5}
          speed={1.5}
          mouseInteraction={true}
          glowIntensity={0.8}
          saturation={1.5}
          mouseRepulsion={true}
          twinkleIntensity={0.6}
          rotationSpeed={0.15}
          transparent={true}
        />
      );
    case 'hyperspeed':
      return <Hyperspeed effectOptions={hyperspeedOptions} />;
    default:
      return null;
  }
}

function App() {
  const [activeEffect, setActiveEffect] = useState('particles');

  const handleNavClick = useCallback((id) => {
    setActiveEffect(id);
  }, []);

  return (
    <div className="app">
      <div className="effect-container">
        <EffectRenderer key={activeEffect} effectId={activeEffect} />
      </div>

      <nav className="nav-bar">
        <div className="nav-title">3D Particle Effects</div>
        <div className="nav-buttons">
          {EFFECTS.map(({ id, label, icon }) => (
            <button
              key={id}
              className={`nav-btn ${activeEffect === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              <span className="nav-btn-icon">{icon}</span>
              <span className="nav-btn-label">{label}</span>
            </button>
          ))}
        </div>
        <button
          className="fullscreen-btn"
          onClick={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen();
            } else {
              document.exitFullscreen();
            }
          }}
        >
          Fullscreen
        </button>
      </nav>
    </div>
  );
}

export default App;
