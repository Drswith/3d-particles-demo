# 3D Particle Effects Demo

A showcase of vibrant 3D particle effects built with React + Vite + ReactBits.

## Effects

| Effect | Description | Tech |
|---|---|---|
| **Particles** | Neon rainbow particle system with mouse interaction | WebGL (ogl) |
| **Aurora** | Aurora borealis with vivid tri-color gradient flow | WebGL (ogl + GLSL) |
| **Waves** | Triple-layered neon waves (magenta / cyan / gold) | Canvas 2D |
| **Galaxy** | Starfield with high saturation, glow and twinkle | WebGL (ogl + GLSL) |
| **Hyperspeed** | Hyperspace tunnel with neon lights and curved road | WebGL (three.js + postprocessing) |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Controls

- Click the bottom nav bar to switch between 5 effects
- Move your mouse to interact with supported effects
- Click Fullscreen to enter fullscreen mode

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [ReactBits](https://www.reactbits.dev/) background components (Particles / Aurora / Waves / Galaxy / Hyperspeed)
- [ogl](https://ogl.dev/) / [three.js](https://threejs.org/) / [postprocessing](https://github.com/pmndrs/postprocessing)

## Build

```bash
npm run build
npm run preview
```
