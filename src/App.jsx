import { useEffect, useRef, useState } from 'react';

const cars = [
  { name: 'MAGNUM SABER', pilot: 'GO SEIBA', type: 'POWER / JUMP', description: 'A lightning-fast machine made for air time and maximum power.', color: '#4c9cf0' },
  { name: 'SONIC SABER', pilot: 'RETSU SEIBA', type: 'GRIP / CONTROL', description: 'Built to slice through wet turns with a sure-footed racing line.', color: '#469de8' },
  { name: 'TRIDAGGER X', pilot: 'TOUYA HOKUO', type: 'TOUGH / FEARLESS', description: 'A hard-nosed contender that keeps charge through every impact.', color: '#f0a338' },
  { name: 'SPIN AXE', pilot: 'JUN SAGAMI', type: 'AGILE / PRECISE', description: 'Light, sharp and ready to attack every open line.', color: '#6ec4a0' },
];

function TamiyaCar({ exploded, spinning, accent }) {
  return <div className={`tamiya-car ${exploded ? 'is-exploded' : ''} ${spinning ? 'is-spinning' : ''}`}>
    <svg viewBox="0 0 760 470" role="img" aria-label="Magnum Saber Mini 4WD racing car">
      <defs>
        <linearGradient id="tam-body" x1=".15" y1="0" x2=".88" y2="1"><stop stopColor="#ffffff"/><stop offset=".32" stopColor="#e7f0f4"/><stop offset=".68" stopColor="#a9bbc5"/><stop offset="1" stopColor="#627884"/></linearGradient>
        <linearGradient id="tam-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#82d1ff"/><stop offset=".26" stopColor={accent}/><stop offset="1" stopColor="#0b376e"/></linearGradient>
        <linearGradient id="tam-canopy" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#def8ff"/><stop offset=".23" stopColor="#418eb9"/><stop offset=".68" stopColor="#123a5c"/><stop offset="1" stopColor="#071c31"/></linearGradient>
        <radialGradient id="tam-tire"><stop offset="0" stopColor="#e9f4f5"/><stop offset=".2" stopColor="#a7bcc3"/><stop offset=".23" stopColor="#30414a"/><stop offset=".43" stopColor="#121a20"/><stop offset=".72" stopColor="#05090d"/><stop offset="1" stopColor="#263840"/></radialGradient>
        <filter id="tam-shadow" x="-30%" y="-40%" width="160%" height="190%"><feDropShadow dx="0" dy="22" stdDeviation="12" floodOpacity=".72"/></filter>
      </defs>
      <ellipse className="tam-shadow" cx="382" cy="398" rx="282" ry="34" fill="#020609" opacity=".68"/>
      <g className="tam-wheelset" filter="url(#tam-shadow)">
        <g className="tam-wheel"><circle cx="138" cy="129" r="70" fill="url(#tam-tire)"/><circle cx="138" cy="129" r="27" fill="#d5e0e2"/><circle cx="138" cy="129" r="14" fill="#354a54"/><path d="M138 102v54M111 129h54M119 110l38 38M157 110l-38 38" stroke="#7f98a0" strokeWidth="4"/></g>
        <g className="tam-wheel"><circle cx="619" cy="129" r="70" fill="url(#tam-tire)"/><circle cx="619" cy="129" r="27" fill="#d5e0e2"/><circle cx="619" cy="129" r="14" fill="#354a54"/><path d="M619 102v54M592 129h54M600 110l38 38M638 110l-38 38" stroke="#7f98a0" strokeWidth="4"/></g>
        <g className="tam-wheel"><circle cx="138" cy="333" r="70" fill="url(#tam-tire)"/><circle cx="138" cy="333" r="27" fill="#d5e0e2"/><circle cx="138" cy="333" r="14" fill="#354a54"/><path d="M138 306v54M111 333h54M119 314l38 38M157 314l-38 38" stroke="#7f98a0" strokeWidth="4"/></g>
        <g className="tam-wheel"><circle cx="619" cy="333" r="70" fill="url(#tam-tire)"/><circle cx="619" cy="333" r="27" fill="#d5e0e2"/><circle cx="619" cy="333" r="14" fill="#354a54"/><path d="M619 306v54M592 333h54M600 314l38 38M638 314l-38 38" stroke="#7f98a0" strokeWidth="4"/></g>
      </g>
      <g className="tam-chassis">
        <path d="M82 218 146 157 267 132 491 132 614 158 680 221 647 298 535 339 225 339 112 296Z" fill="#111c24" stroke="#5e7785" strokeWidth="10"/>
        <path d="M169 180h421l46 48-45 68-87 26H257l-88-29-44-64Z" fill="#263842"/>
        <path d="M209 292h337" stroke="#718995" strokeWidth="10" strokeDasharray="22 14" opacity=".65"/>
      </g>
      <g className="tam-body">
        <path d="M92 208 169 139 282 89 447 89 586 143 669 211 622 266 510 303 244 303 133 268Z" fill="url(#tam-body)" stroke="#f5ffff" strokeWidth="9"/>
        <path d="M97 205 169 143 221 151 174 218 116 240Z" fill="url(#tam-blue)" stroke="#c5edff" strokeWidth="5"/>
        <path d="M662 205 587 144 535 153 582 218 642 239Z" fill="url(#tam-blue)" stroke="#c5edff" strokeWidth="5"/>
        <path d="M180 141 276 95 379 106 337 173 203 201Z" fill="#e83a3e"/>
        <path d="M579 143 483 95 380 106 423 173 555 201Z" fill="#e83a3e"/>
        <path d="M166 224 267 176 490 176 594 224 555 257 380 280 204 257Z" fill="url(#tam-blue)"/>
        <path d="M198 233 291 193 470 193 563 233 527 249 380 266 233 249Z" fill="#f9fcfb"/>
        <path d="M252 163 302 104 381 91 458 105 507 163 463 192 380 202 296 192Z" fill="url(#tam-canopy)" stroke="#d0f4ff" strokeWidth="7"/>
        <path d="M298 119 378 103 447 120" fill="none" stroke="#e7fbff" strokeWidth="6" opacity=".8"/>
        <path d="M254 266 313 278 380 272 447 278 507 266 476 298 380 313 284 298Z" fill="#eff8f8" stroke="#849aa4" strokeWidth="5"/>
        <path d="M300 202 342 212 315 241 372 231 357 254 382 241 405 254 390 231 448 241 419 212 461 202 380 219Z" fill="#e53b3f"/>
        <path d="M283 212 332 219 315 241 372 230 357 254 380 241 405 254 390 230 446 241 428 219 477 212 380 220Z" fill="none" stroke="#ffffff" strokeWidth="4" opacity=".9"/>
        <path d="M303 278 332 289M457 278l-29 11" stroke="#e63b3f" strokeWidth="8"/>
      </g>
      <g className="tam-rollers" fill="#dce7e8" stroke="#263843" strokeWidth="9"><g><circle cx="76" cy="222" r="31"/><circle cx="76" cy="222" r="14" fill="#54717c"/></g><g><circle cx="685" cy="222" r="31"/><circle cx="685" cy="222" r="14" fill="#54717c"/></g><g><circle cx="141" cy="304" r="27"/><circle cx="141" cy="304" r="11" fill="#54717c"/></g><g><circle cx="619" cy="304" r="27"/><circle cx="619" cy="304" r="11" fill="#54717c"/></g></g>
      <text x="380" y="238" textAnchor="middle" fill="#174d91" fontSize="18" fontWeight="900" fontFamily="Arial">MAGNUM</text>
    </svg>
  </div>;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState('garage');
  const [selected, setSelected] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [part, setPart] = useState('');
  const [sound, setSound] = useState(true);
  const [modal, setModal] = useState(null);
  const [paused, setPaused] = useState(false);
  const [race, setRace] = useState({ elapsed: 0, lane: 0 });
  const [boosting, setBoosting] = useState(false);
  const [stabilizing, setStabilizing] = useState(false);
  const [camera, setCamera] = useState('DIRECTOR');
  const animationRef = useRef();
  const raceStartRef = useRef(0);
  const current = cars[selected];

  useEffect(() => { const timeout = setTimeout(() => setLoading(false), 1550); return () => clearTimeout(timeout); }, []);
  useEffect(() => { document.documentElement.style.setProperty('--blue', current.color); }, [current.color]);
  useEffect(() => {
    if (screen !== 'race' || paused) return undefined;
    raceStartRef.current = performance.now() - race.elapsed * 1000;
    const render = (now) => { setRace((last) => ({ ...last, elapsed: (now - raceStartRef.current) / 1000 })); animationRef.current = requestAnimationFrame(render); };
    animationRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationRef.current);
  }, [screen, paused]);
  useEffect(() => {
    if (screen === 'race' && race.elapsed >= 54 && !modal) {
      setPaused(true);
      setModal({ eyebrow: 'TSUCHIYA WORKSHOP / RUN COMPLETE', title: 'STORM CONQUERED.', mode: 'result' });
    }
  }, [race.elapsed, screen, modal]);
  useEffect(() => {
    const guide = (event) => {
      if (screen !== 'race') return;
      if (event.key === 'a' || event.key === 'ArrowLeft') setRace((last) => ({ ...last, lane: Math.max(-1, last.lane - .18) }));
      if (event.key === 'd' || event.key === 'ArrowRight') setRace((last) => ({ ...last, lane: Math.min(1, last.lane + .18) }));
      if (event.key === ' ' ) { event.preventDefault(); setBoosting(true); }
      if (event.key === 'Shift') setStabilizing(true);
      if (/^[1-6]$/.test(event.key)) setCamera(['DIRECTOR', 'CHASE', 'FPV', 'ROLLER', 'TRACKSIDE', 'WORKSHOP'][Number(event.key) - 1]);
      if (event.key === 'p' || event.key === 'Escape') pauseRace();
    };
    const release = (event) => { if (event.key === ' ') setBoosting(false); if (event.key === 'Shift') setStabilizing(false); };
    window.addEventListener('keydown', guide); window.addEventListener('keyup', release);
    return () => { window.removeEventListener('keydown', guide); window.removeEventListener('keyup', release); };
  });

  const startRace = () => { setRace({ elapsed: 0, lane: 0 }); setPaused(false); setBoosting(false); setScreen('race'); };
  const pauseRace = () => { setPaused(true); setModal({ eyebrow: 'PIT STOP', title: 'RACE PAUSED', mode: 'pause' }); };
  const backToGarage = () => { setModal(null); setPaused(false); setScreen('garage'); };
  const resetCar = () => { setExploded(false); setSpinning(false); setPart(''); };
  const time = `00:${String(Math.floor(race.elapsed)).padStart(2, '0')}.${String(Math.floor(race.elapsed * 100) % 100).padStart(2, '0')}`;
  const speed = Math.round(98 + Math.sin(race.elapsed * 2) * 16 + (boosting ? 42 : 0) - (stabilizing ? 12 : 0));

  return <main id="app">
    {loading && <section className="loading"><p>TSUCHIYA WORKSHOP</p><h1>STORM <i>RACE</i></h1><span>Opening the workshop…</span><div className="loadline"><b /></div></section>}
    {!loading && screen === 'garage' && <section className="garage">
      <div className="rain" /><div className="workshop"><span /><span /><span /><span /></div>
      <header className="brandbar"><div className="wordmark">STORM <i>RACE</i><small>TSUCHIYA WORKSHOP</small></div><nav>GARAGE <b>/</b> 01 <button onClick={() => setSound(!sound)}>SOUND {sound ? 'ON' : 'OFF'}</button><button onClick={() => setModal({ eyebrow: 'SET UP YOUR RUN', title: 'DRIVE BY INSTINCT.', mode: 'settings' })}>SETTINGS</button></nav></header>
      <div className="intro"><label>LET&apos;S &amp; GO!!</label><h1>SMALL MACHINE.<br />BIG INSTINCT.</h1><p>Choose your machine. Own the storm.</p></div>
      <aside className="detail panel"><div className="serial"><span>{current.pilot}</span><span>0{selected + 1} / 04</span></div><h2>{current.name}</h2><p>{current.description}</p><div className="stats">{[['POWER', 93], ['GRIP', 61], ['STABILITY', 73]].map(([label, value]) => <div key={label}>{label}<b><i style={{ width: `${value}%` }} /></b><em>{value}</em></div>)}</div><div className="spec">HIGH-OUTPUT / AERO BODY<br />1:32 SCALE · 132MM</div><button className="wide" onClick={() => setExploded(!exploded)}>{exploded ? 'ASSEMBLE VIEW' : 'EXPLODED VIEW'}</button><button className="wide" onClick={() => setSpinning(!spinning)}>{spinning ? 'STOP TEST' : 'WHEEL SPIN TEST'}</button><button className="plain" onClick={resetCar}>RESET VIEW</button></aside>
      {part && <div className="inspection"><strong>ASSEMBLY INSPECTION</strong><p>{part}: calibrated and ready for workshop inspection.</p></div>}
      <div className="hint">DRAG TO ROTATE <b>·</b> SCROLL TO ZOOM</div>
      <div className="car-stage"><div className="shadow" /><div className={`car car-model ${exploded ? 'exploded' : ''} ${spinning ? 'spin' : ''}`} aria-label="Mini 4WD racing car"><svg className="car-art" viewBox="0 0 620 350" role="img"><defs><linearGradient id="shell" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f8fdff"/><stop offset=".42" stopColor="#bdcfda"/><stop offset="1" stopColor="#526976"/></linearGradient><linearGradient id="canopy" x1="0" x2="1"><stop stopColor="#d8f5ff"/><stop offset=".45" stopColor="#28617d"/><stop offset="1" stopColor="#102f43"/></linearGradient><radialGradient id="tire"><stop offset=".28" stopColor="#d2dce0"/><stop offset=".3" stopColor="#52636b"/><stop offset=".48" stopColor="#151e24"/><stop offset=".72" stopColor="#060a0e"/><stop offset="1" stopColor="#2c3c46"/></radialGradient></defs><g className="car-wheels"><circle cx="135" cy="100" r="54" fill="url(#tire)"/><circle cx="484" cy="104" r="54" fill="url(#tire)"/><circle cx="126" cy="250" r="54" fill="url(#tire)"/><circle cx="493" cy="248" r="54" fill="url(#tire)"/></g><path className="car-chassis" d="M86 161 159 95 441 91 542 161 535 241 434 293 174 291 73 237Z" fill="#141e26" stroke="#5e7787" strokeWidth="8"/><path className="car-body" d="M122 168 181 103 288 80 395 94 496 171 452 245 358 280 191 269 111 224Z" fill="url(#shell)" stroke="#f6ffff" strokeWidth="6"/><path d="m150 177 91-56 142-14 78 68-45 23-130 17-103-9Z" fill="#e73c3c"/><path d="m162 184 99-43 120-10 67 51-25 14-139 12-91-10Z" fill="#1a68c0"/><path d="m202 126 78-36 91 10-35 66-103 9Z" fill="url(#canopy)" stroke="#caefff" strokeWidth="5"/><path d="m124 163 76-75 28 20-57 87Z" fill="#e52e37"/><path d="m397 101 73 55-39 42-66-88Z" fill="#e52e37"/><path d="m165 239 109 23 104-10-45 33-127-10Z" fill="#f2f7f7"/><path d="m80 157 69-30-12 58-77 28Z" fill="#326cae" stroke="#9fd1e6" strokeWidth="5"/><path d="m466 136 69 28-5 59-79-31Z" fill="#326cae" stroke="#9fd1e6" strokeWidth="5"/><g fill="#d7e2e6" stroke="#283942" strokeWidth="7"><circle cx="64" cy="192" r="25"/><circle cx="553" cy="192" r="25"/><circle cx="133" cy="286" r="23"/><circle cx="485" cy="284" r="23"/></g><g className="car-decals" fill="#f7fbff"><path d="m282 175 25 8-29 18 13-19-23-7Z"/><path d="m340 174 27 8-31 18 13-19-23-7Z"/></g></svg></div></div>
      <TamiyaCar exploded={exploded} spinning={spinning} accent={current.color} />
      <div className="parts panel">{['BODY', 'CHASSIS', 'MOTOR', 'GEARS', 'TIRES', 'ROLLERS', 'BATTERY', 'WING'].map((name) => <button className={part === name ? 'active' : ''} onClick={() => setPart(name)} key={name}>{name}</button>)}</div>
      <footer><div className="choices">{cars.map((car, index) => <button className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={car.name}><b>0{index + 1} &nbsp; {car.name}</b><small>{car.type}</small></button>)}</div><div className="start"><small>WORKSHOP CIRCUIT</small><button onClick={startRace}>LET&apos;S RACE</button><span>4 MACHINES <b>·</b> 3 LAPS <b>·</b> ~35 SEC</span></div></footer>
      <div className="foot"><span>UNOFFICIAL FAN PROJECT</span><span>DRY RUN / RAIN INGRESS / STORM FRONT</span></div>
    </section>}
    {!loading && screen === 'race' && <section className={`race ${boosting ? 'is-boosting' : ''} ${stabilizing ? 'is-stabilizing' : ''}`}><div className="track"><div className="trackline" /><div className="racecar" style={{ left: `${44 + race.lane * 26}%` }} /><div className="lights" /></div><header><div className="hud position"><small>POSITION</small><strong>{race.elapsed > 35 ? 1 : 2}<em>/ 4</em></strong></div><div className="hud lap"><div><small>LAP</small><strong>{Math.min(3, 1 + Math.floor(race.elapsed / 18))}<em>/3</em></strong></div><div><small>RACE TIME</small><strong>{time}</strong></div></div><button onClick={pauseRace}>PAUSE</button></header><div className="sector">LAP {String(Math.min(3, 1 + Math.floor(race.elapsed / 18))).padStart(2, '0')} / DRY RUN <span>{camera}</span></div><div className="speed hud"><strong>{String(speed).padStart(3, '0')}</strong><b>KM/H<small>SCALE SPEED</small></b><div className="meter"><i style={{ width: `${Math.min(100, speed - 35)}%` }} /></div><p>MOTOR <span>{boosting ? 'BOOST ' : ''}{Math.round(24 + race.elapsed * 1.8)}°</span></p></div><div className="controls">A / D &nbsp; GUIDE &nbsp;&nbsp; SPACE &nbsp; BOOST &nbsp;&nbsp; SHIFT &nbsp; STABILIZE</div><div className="cameras">1 DIRECTOR &nbsp; 2 CHASE &nbsp; 3 FPV &nbsp; 4 ROLLER &nbsp; 5 TRACKSIDE</div></section>}
    {modal && <div className="modal"><div className="modalcard"><button className="close" onClick={() => setModal(null)}>×</button><label>{modal.eyebrow}</label><h2>{modal.title}</h2>{modal.mode === 'pause' ? <><button onClick={() => { setModal(null); setPaused(false); }}>RESUME RACE</button><button className="secondary" onClick={() => { setRace({ elapsed: 0, lane: 0 }); setPaused(false); setModal(null); }}>RESTART RACE</button><button className="secondary" onClick={backToGarage}>RETURN TO GARAGE</button></> : modal.mode === 'result' ? <><p className="resulttext">POSITION 1 / 4<br />RACE TIME {time}<br />BEST LAP 00:18.00</p><button onClick={() => { setRace({ elapsed: 0, lane: 0 }); setPaused(false); setModal(null); }}>RACE AGAIN</button><button className="secondary" onClick={backToGarage}>BACK TO GARAGE</button></> : <button onClick={() => setModal(null)}>CLOSE</button>}</div></div>}
  </main>;
}

export default App;
