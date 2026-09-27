const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const cars=[
  ['MAGNUM SABER','GO SEIBA','POWER / JUMP','A lightning-fast machine made for air time and maximum power.','#e34146'],
  ['SONIC SABER','RETSU SEIBA','GRIP / CONTROL','Built to slice through wet turns with a sure-footed racing line.','#469de8'],
  ['TRIDAGGER X','TOUYA HOKUO','TOUGH / FEARLESS','A hard-nosed contender that keeps charge through every impact.','#f0a338'],
  ['SPIN AXE','JUN SAGAMI','AGILE / PRECISE','Light, sharp and ready to attack every open line.','#6ec4a0']
];let selected=0, racing=false, startTime=0, raf, lane=0, paused=false;
function choose(n){selected=n;let c=cars[n];$('#carname').textContent=c[0];$('#pilot').textContent=c[1];$('#number').textContent=`0${n+1} / 04`;$('#description').textContent=c[3];document.documentElement.style.setProperty('--blue',c[4]);$$('.choices button').forEach((b,i)=>b.classList.toggle('active',i===n));}
function choices(){cars.forEach((c,i)=>{let b=document.createElement('button');b.innerHTML=`<b>0${i+1} &nbsp; ${c[0]}</b><small>${c[2]}</small>`;b.onclick=()=>choose(i);$('#choices').append(b)});choose(0)}choices();
setTimeout(()=>{$('#loading').classList.add('hidden');$('#garage').classList.remove('hidden')},1550);
$('#explode').onclick=()=>{$('#car').classList.toggle('exploded');$('#inspection').classList.toggle('hidden');$('#explode').textContent=$('#inspection').classList.contains('hidden')?'EXPLODED VIEW':'ASSEMBLE VIEW'};
$('#spin').onclick=()=>{$('#car').classList.toggle('spin');$('#spin').textContent=$('#car').classList.contains('spin')?'STOP TEST':'WHEEL SPIN TEST'};
$('#reset').onclick=()=>{$('#car').className='car';$('#inspection').classList.add('hidden');$('#explode').textContent='EXPLODED VIEW';$('#spin').textContent='WHEEL SPIN TEST'};
$$('.parts button').forEach(b=>b.onclick=()=>{$$('.parts button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#inspection').classList.remove('hidden');$('#parttext').textContent=`${b.dataset.part}: calibrated and ready for workshop inspection.`});
$('#sound').onclick=e=>{e.target.textContent=e.target.textContent==='SOUND ON'?'SOUND OFF':'SOUND ON'};
$('#settings').onclick=()=>openModal('SET UP YOUR RUN','DRIVE BY INSTINCT.','CLOSE');
function openModal(eyebrow,title,main='RESUME RACE'){$('#modaleyebrow').textContent=eyebrow;$('#modaltitle').textContent=title;$('#resume').textContent=main;$('#modal').classList.remove('hidden')}
function closeModal(){$('#modal').classList.add('hidden')}
$('#race').onclick=()=>{racing=true;paused=false;$('#garage').classList.add('hidden');$('#raceview').classList.remove('hidden');startTime=performance.now();tick()};
function tick(now=performance.now()){if(!racing||paused)return;let t=(now-startTime)/1000, speed=Math.round(98+Math.sin(t*2)*16);$('#timer').textContent=`00:${String(Math.floor(t)).padStart(2,'0')}.${String(Math.floor(t*100)%100).padStart(2,'0')}`;$('#speed').textContent=String(speed).padStart(3,'0');$('#meter').style.width=`${speed-35}%`;$('#heat').textContent=`${Math.round(24+t*1.8)}°`;$('#lap').innerHTML=`${Math.min(3,1+Math.floor(t/18))}<em>/3</em>`;raf=requestAnimationFrame(tick)}
function guide(dir){lane=Math.max(-1,Math.min(1,lane+dir*.18));$('#racecar').style.left=`${44+lane*26}%`};addEventListener('keydown',e=>{if(e.key==='a'||e.key==='ArrowLeft')guide(-1);if(e.key==='d'||e.key==='ArrowRight')guide(1);if((e.key==='p'||e.key==='Escape')&&racing)pause()});
function pause(){if(!racing)return;paused=true;openModal('PIT STOP','RACE PAUSED')};$('#pause').onclick=pause;$('#resume').onclick=()=>{closeModal();if(racing){paused=false;startTime=performance.now();tick()}};$('.close').onclick=closeModal;$('#restart').onclick=()=>{startTime=performance.now();paused=false;closeModal();tick()};$('#garageback').onclick=()=>{racing=false;cancelAnimationFrame(raf);closeModal();$('#raceview').classList.add('hidden');$('#garage').classList.remove('hidden')};
