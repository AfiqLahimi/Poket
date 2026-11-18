/* =====================================================================
   Poket Connect — animated video-style tutorial (loaded last)
   Illustrated iPhone screens for setting up the Apple Pay (Wallet
   Transaction) automation. Auto-plays like a short video with
   play/pause, back/next, tap-to-pause, progress and resume.
   Screens are illustrations: labelled as such because iOS versions differ.
   ===================================================================== */

const TUT_MS=5200;
const TL={
en:{watch:'Watch the setup video',resume:n=>`Resume from step ${n}`,replay:'Replay',step:(i,n)=>`Step ${i} of ${n}`,
  illus:'Illustration — your iPhone screens may look slightly different depending on your iOS version.',
  play:'Play',pause:'Pause',prev:'Previous step',next:'Next step',done:'Finished! Now make one Apple Pay payment and tap Import.',
  s:[
  ['Open the Shortcuts app','It is pre-installed on every iPhone. If you deleted it, download “Shortcuts” from the App Store.'],
  ['Go to Automation','Tap the Automation tab at the bottom of the screen.'],
  ['Create a new automation','Tap + (or “New Automation” if you have none yet).'],
  ['Choose “Transaction”','Search or scroll to Transaction — it is the Wallet trigger that runs when you pay with Apple Pay.'],
  ['Pick cards and Run Immediately','Choose your cards (or all), leave categories and merchants as any. Select Run Immediately, then tap Next.'],
  ['Start a blank automation','Tap New Blank Automation.'],
  ['Add a Text action','Tap Add Action, search “Text” and tap it.'],
  ['Type the Poket format','Type Poket| then insert variables: Current Date, then from Shortcut Input: Amount, Merchant, Card or Pass — separated by |. Set Current Date format to ISO 8601.'],
  ['Append to a file','Add “Append to Text File”. File path: Poket/inbox.txt. Turn on Make New Line.'],
  ['Save it','Tap Done. The automation is now active for Apple Pay payments.'],
  ['Pay once to test','Make any small Apple Pay payment. The automation writes one line to inbox.txt.'],
  ['Import into Poket','In Poket: More → Poket Connect → Import now → choose inbox.txt in iCloud Drive › Shortcuts › Poket.'],
  ['Check and confirm','The payment appears in To review. Confirm the account once — Poket remembers it next time.'],
  ]},
ms:{watch:'Tonton video persediaan',resume:n=>`Sambung dari langkah ${n}`,replay:'Main semula',step:(i,n)=>`Langkah ${i} daripada ${n}`,
  illus:'Ilustrasi — skrin iPhone anda mungkin sedikit berbeza mengikut versi iOS.',
  play:'Main',pause:'Jeda',prev:'Langkah sebelum',next:'Langkah seterusnya',done:'Siap! Sekarang buat satu bayaran Apple Pay dan tekan Import.',
  s:[
  ['Buka app Shortcuts','Ia sedia ada dalam setiap iPhone. Kalau dah dipadam, muat turun “Shortcuts” dari App Store.'],
  ['Pergi ke Automation','Tekan tab Automation di bawah skrin.'],
  ['Cipta automasi baru','Tekan + (atau “New Automation” jika belum ada).'],
  ['Pilih “Transaction”','Cari atau skrol ke Transaction — pencetus Wallet yang berjalan bila anda bayar guna Apple Pay.'],
  ['Pilih kad dan Run Immediately','Pilih kad anda (atau semua), biarkan kategori dan peniaga sebagai any. Pilih Run Immediately, kemudian Next.'],
  ['Mula automasi kosong','Tekan New Blank Automation.'],
  ['Tambah tindakan Text','Tekan Add Action, cari “Text” dan tekan.'],
  ['Taip format Poket','Taip Poket| kemudian masukkan pemboleh ubah: Current Date, kemudian dari Shortcut Input: Amount, Merchant, Card or Pass — dipisah dengan |. Set format Current Date ke ISO 8601.'],
  ['Tambah ke fail','Tambah “Append to Text File”. Laluan fail: Poket/inbox.txt. Hidupkan Make New Line.'],
  ['Simpan','Tekan Done. Automasi kini aktif untuk bayaran Apple Pay.'],
  ['Bayar sekali untuk uji','Buat satu bayaran kecil guna Apple Pay. Automasi akan tulis satu baris ke inbox.txt.'],
  ['Import ke Poket','Dalam Poket: Lagi → Poket Connect → Import sekarang → pilih inbox.txt dalam iCloud Drive › Shortcuts › Poket.'],
  ['Semak dan sahkan','Bayaran muncul dalam Untuk disemak. Sahkan akaun sekali — Poket akan ingat lain kali.'],
  ]}};
const tl=(k,...a)=>{const v=(TL[LANG]||TL.en)[k]??TL.en[k];return typeof v==='function'?v(...a):v};

/* ---------- illustrated phone screens ---------- */
const hl=(html,cls)=>`<span class="ts-hl ${cls||''}">${html}</span>`;
const sb=()=>`<div class="ts-sb"><b>9:41</b><span>▮▮▮ ◔</span></div>`;
const nav=(title,left,right)=>`<div class="ts-nav"><span>${left||''}</span><b>${title||''}</b><span>${right||''}</span></div>`;
const tabbar=on=>`<div class="ts-tab">${['Shortcuts','Automation','Gallery'].map(x=>x===on?hl(`<span class="on">◆<br>${x}</span>`):`<span>◇<br>${x}</span>`).join('')}</div>`;
const row=(ic,txt,extra,cls)=>`<div class="ts-row ${cls||''}"><i style="background:${ic}"></i><span>${txt}</span>${extra||'<em>›</em>'}</div>`;
const chip=t=>`<span class="ts-var">${t}</span>`;
const TSC=[
  ()=>`<div class="ts-home">${sb()}<div class="ts-grid">${['#34C759','#FF9500','#5856D6','#FF2D55','#007AFF','#AF52DE','#FFCC00','#8E8E93','#30B0C7','#FF3B30','#5AC8FA'].map((c,i)=>`<div><i style="background:${c}"></i><small>${['Phone','Photos','Music','Health','Mail','Podcasts','Notes','Settings','Maps','Calendar','Weather'][i]}</small></div>`).join('')}<div>${hl('<i class="ts-sc"></i>')}<small>Shortcuts</small></div></div><div class="ts-dock"><i></i><i></i><i></i><i style="background:linear-gradient(135deg,#1554A5,#2878E5)"></i></div></div>`,
  ()=>`${sb()}${nav('','','+')}<div class="ts-h1">All Shortcuts</div><div class="ts-cards"><div style="background:#FF9500">Text Last Image</div><div style="background:#5856D6">Music Quiz</div><div style="background:#34C759">Log Water</div><div style="background:#FF2D55">Shazam</div></div>${tabbar('Automation')}`,
  ()=>`${sb()}${nav('','',hl('<b class="ts-plus">+</b>'))}<div class="ts-h1">Automation</div><div class="ts-empty">Personal<br><small>Have your devices react to changes in conditions.</small><div>${hl('<span class="ts-pill">New Automation</span>','soft')}</div></div>${tabbar('Automation')}`,
  ()=>`${sb()}${nav('New Automation','Cancel','')}<div class="ts-search">⌕ Transaction</div><div class="ts-list">${row('#8E8E93','Time of Day')}${row('#FF9500','Alarm')}${row('#5856D6','Sleep')}${hl(row('#1C1C1E','<b>Transaction</b><br><small>Wallet · when you tap a card</small>','<em>›</em>','big'),'block')}${row('#34C759','Message')}${row('#007AFF','Email')}</div>`,
  ()=>`${sb()}${nav('When','‹ Back',hl('<b class="ts-blue">Next</b>'))}<div class="ts-list">${row('#1C1C1E','When I tap','<em class="ts-blue">Any Card</em>')}${row('#FF9500','Categories','<em class="ts-blue">Any</em>')}${row('#AF52DE','Merchants','<em class="ts-blue">Any</em>')}</div><div class="ts-list">${row('transparent','Run After Confirmation','<em></em>')}${hl(row('transparent','<b>Run Immediately</b>','<em class="ts-blue">✓</em>'),'block')}${row('transparent','Notify When Run','<em class="ts-tg"></em>')}</div>`,
  ()=>`${sb()}${nav('','Cancel','')}<div class="ts-h2">Get Started</div><div class="ts-list">${hl(row('#007AFF','<b>New Blank Automation</b>'),'block')}</div><div class="ts-sub">Suggested Shortcuts</div><div class="ts-list">${row('#FF2D55','Play Music')}${row('#34C759','Send Message')}</div>`,
  ()=>`${sb()}${nav('','Cancel','Done')}<div class="ts-act">${hl('<span class="ts-pill blue">Add Action</span>','soft')}</div><div class="ts-search">⌕ Text</div><div class="ts-list">${hl(row('#FFCC00','<b>Text</b><br><small>Scripting</small>','<em>+</em>'),'block')}${row('#FFCC00','Combine Text')}${row('#FFCC00','Split Text')}</div>`,
  ()=>`${sb()}${nav('','','Done')}<div class="ts-blk"><div class="ts-bh"><i style="background:#FFCC00"></i>Text</div>${hl(`<div class="ts-txt">Poket|${chip('Current Date')}|${chip('Amount')}|${chip('Merchant')}|${chip('Card or Pass')}</div>`,'block')}</div><div class="ts-pop"><b>Shortcut Input</b><span>Amount</span><span>Merchant</span><span>Card or Pass</span><small>Current Date → Date Format: ISO 8601</small></div>`,
  ()=>`${sb()}${nav('','','Done')}<div class="ts-blk"><div class="ts-bh"><i style="background:#FFCC00"></i>Text</div><div class="ts-txt small">Poket|${chip('Current Date')}|${chip('Amount')}|…</div></div><div class="ts-blk">${hl(`<div class="ts-bh"><i style="background:#1E90FF"></i>Append ${chip('Text')} to <span class="ts-blue">Poket/inbox.txt</span></div><div class="ts-opt">Make New Line <em class="ts-tg on"></em></div>`,'block')}</div>`,
  ()=>`${sb()}${nav('','',hl('<b class="ts-blue">Done</b>'))}<div class="ts-blk"><div class="ts-bh"><i style="background:#FFCC00"></i>Text</div></div><div class="ts-blk"><div class="ts-bh"><i style="background:#1E90FF"></i>Append to Text File</div></div><div class="ts-ok">✓ When I tap any card<br><small>Run Immediately</small></div>`,
  ()=>`<div class="ts-pay">${sb()}<div class="ts-card"></div><div class="ts-tap">${hl('<span>))) </span>','soft')}<b>Done</b><small>Apple Pay</small></div><div class="ts-note"><b>Shortcuts</b><br><small>Running your automation</small></div></div>`,
  ()=>`${sb()}${nav('Shortcuts','‹ iCloud Drive','')}<div class="ts-list">${row('#5AC8FA','Poket','<em>›</em>')}</div><div class="ts-sub">Poket</div><div class="ts-list">${hl(row('#E5E5EA','<b>inbox.txt</b><br><small>1 line · just now</small>','<em></em>'),'block')}</div><div class="ts-act">${hl('<span class="ts-pill blue">Open</span>','soft')}</div>`,
  ()=>`<div class="ts-pk">${sb()}<div class="ts-pkh"><i></i>Poket</div><div class="ts-pkc"><small>To review</small><b>1 new from Shortcut</b></div>${hl(`<div class="ts-pkr"><span>S</span><div><b>Starbucks</b><small>Food & drinks · CIMB Visa</small></div><b>-RM14.50</b></div>`,'block')}<div class="ts-pkok">✓ Connected and tested</div></div>`,
];

/* ---------- player ---------- */
let TUT={i:0,play:false,t0:0,el:0,timer:null};
const tutN=()=>TSC.length;
function tutCard(){
  const c=S.settings.connect||{};const at=+c.tut||0;
  return `<div class="tut" id="tut" aria-roledescription="video">${tutInner()}</div>${!TUT.play&&!TUT.started?`<div class="btns" style="margin:-4px 0 6px"><button class="btn sm" data-act="tutPlay" data-v="${at&&at<tutN()-1?at:0}">${ic('right')}${at&&at<tutN()-1?tl('resume',at+1):tl('watch')}</button></div>`:''}`;
}
function tutInner(){
  const i=TUT.i,n=tutN(),[title,body]=tl('s')[i];const prog=TUT.play?Math.min(1,TUT.el/TUT_MS):(TUT.started?1:0);
  return `<div class="tut-bars">${TSC.map((_,k)=>`<span><i style="width:${k<i?100:k===i?prog*100:0}%"></i></span>`).join('')}</div>
   <div class="tut-stage" data-act="tutToggle"><div class="tphone"><div class="tscreen">${TSC[i]()}</div></div>${!TUT.play&&(!TUT.started||(i===n-1&&TUT.el>=TUT_MS))?`<div class="tut-big">${TUT.started?'↺':'▶'}</div>`:''}</div>
   <div class="tut-cap"><div class="small">${tl('step',i+1,n)}</div><b>${title}</b><p>${body}</p></div>
   <div class="tut-ctl"><button class="icbtn" data-act="tutStep" data-v="-1" aria-label="${tl('prev')}" ${i===0?'disabled':''}>${ic('left')}</button><button class="icbtn tut-pp" data-act="tutToggle" aria-label="${TUT.play?tl('pause'):tl('play')}">${TUT.play?'❚❚':'▶'}</button><button class="icbtn" data-act="tutStep" data-v="1" aria-label="${tl('next')}" ${i===n-1?'disabled':''}>${ic('right')}</button></div>
   ${i===n-1&&!TUT.play&&TUT.started?`<div class="msg ok" style="margin:8px 0 0">${tl('done')}</div>`:''}
   <p class="small" style="margin:8px 2px 0">${tl('illus')}</p>`;
}
function tutDraw(){const el=document.getElementById('tut');if(!el){tutStop();return}el.innerHTML=tutInner()}
function tutSave(){const c=S.settings.connect=Object.assign({},S.settings.connect);if(TUT.i>(+c.tut||0)||TUT.i===tutN()-1){c.tut=TUT.i;saveSettings()}}
function tutStop(){TUT.play=false;clearInterval(TUT.timer);TUT.timer=null}
function tutStart(){
  tutStop();TUT.play=true;TUT.started=true;TUT.t0=Date.now()-TUT.el;
  TUT.timer=setInterval(()=>{if(!document.getElementById('tut')){tutStop();return}
    TUT.el=Date.now()-TUT.t0;
    if(TUT.el>=TUT_MS){if(TUT.i<tutN()-1){TUT.i++;TUT.el=0;TUT.t0=Date.now();tutSave();tutDraw()}else{TUT.el=TUT_MS;tutSave();tutStop();tutDraw()}return}
    const bar=document.querySelector('#tut .tut-bars span:nth-child('+(TUT.i+1)+') i');if(bar)bar.style.width=(TUT.el/TUT_MS*100)+'%';
  },100);
  tutDraw();
}
Object.assign(ACT,{
  tutPlay:v=>{TUT.i=Math.max(0,Math.min(tutN()-1,+v||0));TUT.el=0;render();tutStart()},
  tutToggle:()=>{if(TUT.play){tutStop();tutDraw();return}
    if(TUT.i===tutN()-1&&TUT.el>=TUT_MS){TUT.i=0;TUT.el=0}
    if(!TUT.started){TUT.started=true;render()}tutStart()},
  tutStep:v=>{const was=TUT.play;tutStop();TUT.i=Math.max(0,Math.min(tutN()-1,TUT.i+(+v)));TUT.el=0;TUT.started=true;tutSave();if(was)tutStart();else tutDraw()},
});
// Stop playback when leaving the page.
window.addEventListener('hashchange',()=>{if(location.hash.slice(1)!=='connect')tutStop()});
