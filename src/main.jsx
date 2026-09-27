import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../style.css';
import '../overrides.css';

function StormRaceReference() {
  return <iframe
    title="STORM RACE · Tsuchiya Workshop"
    src="https://storm-race.vercel.app/"
    style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', border: 0, display: 'block', background: '#101722' }}
    allow="autoplay; fullscreen; gamepad"
  />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode><StormRaceReference /></StrictMode>,
);
