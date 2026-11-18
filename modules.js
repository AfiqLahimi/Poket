/* =====================================================================
   Poket — module navigation (loaded after app.js and dash.js)
   Tabs: Overview · Spending · Wallet · Bills · Assets, each with
   sub-sections. More (header button) holds Poket Connect, Reports,
   Tax Centre and Settings. Existing views are reused, not duplicated.
   ===================================================================== */

/* ---------- strings ---------- */
Object.assign(L.en.tabs,{home:'Overview',activity:'Spending',wallet:'Wallet',bills:'Bills',assets:'Assets'});
Object.assign(L.ms.tabs,{home:'Ringkasan',activity:'Belanja',wallet:'Dompet',bills:'Bil',assets:'Aset'});
Object.assign(L.en,{ptsLbl:'Reward points balance',ptsHint:'Optional. Update when you check your card app.',feeLbl:'Annual fee (RM)',feeMonLbl:'Fee charged in'});
Object.assign(L.ms,{ptsLbl:'Baki mata ganjaran',ptsHint:'Pilihan. Kemas kini bila semak app kad.',feeLbl:'Yuran tahunan (RM)',feeMonLbl:'Yuran dicaj pada'});
const ML={
en:{
  sgTx:'Transactions',sgBudget:'Budget',sgStats:'Statistics',sgReview:'To review',
  sgAll:'All',sgCredit:'Credit',sgDebit:'Debit',sgOther:'E-wallet & cash',sgRewards:'Rewards & fees',
  sgBills:'Bills',sgLoans:'Loans & instalments',sgRecv:'Receivables',sgBorrowed:'Borrowed',
  sgOverview:'Overview',sgPortfolio:'Portfolio',sgNet:'Net worth',sgGoals:'Goals',
  cashTotal:'Cash & bank',cardDebt:'Card balances',banks:'Bank accounts',ewc:'E-wallets & cash',cards:'Credit cards',
  addBank:'Bank account',addEw:'E-wallet',addCash:'Cash',addCard:'Credit card',noAcc:'No accounts here yet.',
  month:'Month',year:'Year',income:'Income',spending:'Spending',net:'Net',saveRate:'Savings rate',
  vsPrev:'vs previous',catCompare:'Category comparison',thisP:'This',prevP:'Previous',dailySpend:'Daily spending',
  topMerchants:'Top merchants',monthly12:'Income vs spending by month',avgMonth:'Average monthly spending',
  bestMonth:'Best savings month',worstMonth:'Highest spending month',yearCats:'Spending by category this year',noData:'No data for this period yet.',
  tools:'Tools',connect:'Poket Connect',connectSub:'Apple Pay & Shortcuts automation',reports:'Reports',reportsSub:'Statistics by month and year',
  tax:'Tax Centre',taxSub:'Malaysian income tax reliefs',soon:'Coming soon',more:'More',back:'Back',
  stNone:'Not configured',stWait:'Awaiting test transaction',stOk:'Connected and tested',stLast:d=>`Last import ${d}`,
  connIntro:'Log Apple Pay purchases automatically with an iPhone Shortcuts automation. Each payment is saved to a text file; open Poket and tap Import to add them.',
  connSteps:'Written steps',connVideo:'Video tutorial',connDone:'I have created the automation',connImport:'Import now',connStatus:'Status',
  connLimits:'What works and what does not',
  connLim:['Wallet automations only run for <b>Apple Pay</b> payments (tap or in-app). DuitNow QR, FPX, online banking and physical cards are not seen by iOS.',
    'iOS does not let other apps read bank notifications. Use the manual Shortcut, or import a statement (coming soon).',
    'A web app cannot receive data from Shortcuts directly, so the file + Import step is required. The future native app will remove this step.'],
  troubleT:'Troubleshooting',
  trouble:[['Shortcut does not run','Open Shortcuts → Automation, check the Transaction automation is on and “Run Immediately” is selected.'],
    ['Transaction not appearing','Tap Import in Poket — payments wait in the text file until you import.'],
    ['Wrong account','Add the card name or last 4 digits in the account’s “Name in Wallet” field so Poket can match it.'],
    ['Duplicates','Poket skips lines it has already imported. Check To review for possible duplicates.'],
    ['Amount missing','Make sure the Text action includes the Amount variable from the Shortcut Input.']],
  taxIntro:'Track Malaysian personal income tax reliefs (LHDN) through the year, link receipts and spending, and estimate chargeable income and tax.',
  taxWhy:'Not available yet. Relief categories, limits and tax rates change by assessment year, so they will be loaded as data that has been checked against official LHDN publications. Poket will not show tax figures until that is done.',
  taxPlan:['Relief categories with limits per assessment year','Tag spending (medical, education, lifestyle, sports, insurance, EPF) to reliefs','Receipt storage per relief','PCB and EA form tracking','Estimated chargeable income and tax payable — clearly labelled as estimates'],
},
ms:{
  sgTx:'Transaksi',sgBudget:'Bajet',sgStats:'Statistik',sgReview:'Untuk disemak',
  sgAll:'Semua',sgCredit:'Kredit',sgDebit:'Debit',sgOther:'E-wallet & tunai',sgRewards:'Ganjaran & caj',
  sgBills:'Bil',sgLoans:'Pinjaman & ansuran',sgRecv:'Belum terima',sgBorrowed:'Dipinjam',
  sgOverview:'Ringkasan',sgPortfolio:'Portfolio',sgNet:'Nilai bersih',sgGoals:'Matlamat',
  cashTotal:'Tunai & bank',cardDebt:'Baki kad',banks:'Akaun bank',ewc:'E-wallet & tunai',cards:'Kad kredit',
  addBank:'Akaun bank',addEw:'E-wallet',addCash:'Tunai',addCard:'Kad kredit',noAcc:'Belum ada akaun di sini.',
  month:'Bulan',year:'Tahun',income:'Pendapatan',spending:'Belanja',net:'Bersih',saveRate:'Kadar simpanan',
  vsPrev:'berbanding sebelum',catCompare:'Perbandingan kategori',thisP:'Kini',prevP:'Sebelum',dailySpend:'Belanja harian',
  topMerchants:'Peniaga utama',monthly12:'Pendapatan vs belanja ikut bulan',avgMonth:'Purata belanja sebulan',
  bestMonth:'Bulan simpanan terbaik',worstMonth:'Bulan belanja tertinggi',yearCats:'Belanja ikut kategori tahun ini',noData:'Belum ada data untuk tempoh ini.',
  tools:'Alatan',connect:'Poket Connect',connectSub:'Automasi Apple Pay & Shortcuts',reports:'Laporan',reportsSub:'Statistik bulanan dan tahunan',
  tax:'Pusat Cukai',taxSub:'Pelepasan cukai pendapatan Malaysia',soon:'Akan datang',more:'Lagi',back:'Kembali',
  stNone:'Belum disediakan',stWait:'Menunggu transaksi ujian',stOk:'Bersambung dan diuji',stLast:d=>`Import terakhir ${d}`,
  connIntro:'Rekod pembelian Apple Pay secara automatik dengan automasi Shortcuts iPhone. Setiap bayaran disimpan ke fail teks; buka Poket dan tekan Import.',
  connSteps:'Langkah bertulis',connVideo:'Video tutorial',connDone:'Saya sudah cipta automasi',connImport:'Import sekarang',connStatus:'Status',
  connLimits:'Apa yang berfungsi dan tidak',
  connLim:['Automasi Wallet hanya berjalan untuk bayaran <b>Apple Pay</b>. DuitNow QR, FPX, perbankan dalam talian dan kad fizikal tidak dikesan oleh iOS.',
    'iOS tidak benarkan app lain membaca notifikasi bank. Guna Shortcut manual, atau import penyata (akan datang).',
    'App web tidak boleh terima data terus dari Shortcuts, jadi langkah fail + Import diperlukan. App asli kelak akan buang langkah ini.'],
  troubleT:'Penyelesaian masalah',
  trouble:[['Shortcut tidak berjalan','Buka Shortcuts → Automation, pastikan automasi Transaction dihidupkan dan “Run Immediately” dipilih.'],
    ['Transaksi tidak muncul','Tekan Import dalam Poket — bayaran menunggu dalam fail teks sehingga diimport.'],
    ['Akaun salah','Tambah nama kad atau 4 digit akhir dalam ruangan “Nama dalam Wallet” akaun supaya Poket boleh padankan.'],
    ['Berganda','Poket langkau baris yang sudah diimport. Semak Untuk disemak bagi kemungkinan berganda.'],
    ['Jumlah tiada','Pastikan tindakan Text mengandungi pemboleh ubah Amount dari Shortcut Input.']],
  taxIntro:'Jejak pelepasan cukai pendapatan individu Malaysia (LHDN) sepanjang tahun, kaitkan resit dan belanja, dan anggar pendapatan bercukai serta cukai.',
  taxWhy:'Belum tersedia. Kategori pelepasan, had dan kadar cukai berubah setiap tahun taksiran, jadi ia akan dimuatkan sebagai data yang disemak dengan penerbitan rasmi LHDN. Poket tidak akan tunjuk angka cukai sebelum itu.',
  taxPlan:['Kategori pelepasan dengan had setiap tahun taksiran','Tag belanja (perubatan, pendidikan, gaya hidup, sukan, insurans, KWSP) kepada pelepasan','Simpanan resit setiap pelepasan','Jejak PCB dan borang EA','Anggaran pendapatan bercukai dan cukai — dilabel jelas sebagai anggaran'],
}};
const m=(k,...a)=>{const v=(ML[LANG]||ML.en)[k]??ML.en[k];return typeof v==='function'?v(...a):v};

/* ---------- tabs & routes ---------- */
TABS.splice(0,TABS.length,['home','home'],['activity','list'],['wallet','card'],['bills','cal'],['assets','pie']);
ROUTES.push('wallet','bills','assets','connect','tax');
// Older links (and in-app links) map onto the new module + section.
const ROUTE_ALIAS={portfolio:['assets','overview'],goals:['assets','goals'],debts:['bills','loans'],networth:['assets','networth'],reports:['activity','stats']};
const MSEG={
  activity:[['tx','sgTx'],['budget','sgBudget'],['stats','sgStats'],['review','sgReview']],
  wallet:[['all','sgAll'],['credit','sgCredit'],['debit','sgDebit'],['other','sgOther'],['rewards','sgRewards']],
  bills:[['bills','sgBills'],['loans','sgLoans'],['recv','sgRecv'],['borrowed','sgBorrowed']],
  assets:[['overview','sgOverview'],['portfolio','sgPortfolio'],['networth','sgNet'],['goals','sgGoals']],
};
const segOf=tab=>{S.seg=S.seg||{};const ok=MSEG[tab].map(x=>x[0]);if(!ok.includes(S.seg[tab]))S.seg[tab]=ok[0];return S.seg[tab]};
const segBar=tab=>{const cur=segOf(tab);return `<div class="chips mseg" role="tablist">${MSEG[tab].map(([k,l])=>`<button class="chip ${k===cur?'on':''}" role="tab" aria-selected="${k===cur}" data-act="seg" data-v="${tab}|${k}">${m(l)}</button>`).join('')}</div>`};
const ptitle=s=>`<h1 class="ptitle">${s}</h1>`;
const monthBar=()=>`<div class="card" style="padding:8px 12px;margin-top:2px">${monthHead().replace('class="mhead"','class="mhead" style="margin:0"')}</div>`;
const groupCard=(title,list,b,addBtns)=>`${sec(title,list.length?`<span>${RM(list.reduce((s,a)=>s+shown(a,b),0))}</span>`:'')}<div class="card list">${list.length?list.map(a=>accRow(a,b)).join(''):`<div class="empty">${m('noAcc')}</div>`}</div>${addBtns?`<div class="btns" style="margin:-2px 0 6px">${addBtns}</div>`:''}`;
const addB=(type,label)=>`<button class="btn xs ghost" data-act="newAcc" data-v="${type}">${ic('plus')}${label}</button>`;

/* ---------- Spending ---------- */
VIEWS.activity=()=>{
  const sg=segOf('activity');let h=ptitle(T().tabs.activity)+segBar('activity');
  if(sg==='tx')return h+vTx().replace(/^<div class="card" style="padding:8px 12px;margin-top:4px">/,'<div class="card" style="padding:8px 12px;margin-top:2px">');
  if(sg==='budget')return h+monthBar()+DS.daily(S.viewMonth);
  if(sg==='review')return h+DS.review();
  return h+vStats();
};
function vStats(){
  S.statP=S.statP||'month';const yr=S.statYear||new Date().getFullYear();
  let h=`<div class="seg" style="margin:2px 0 8px"><button data-act="statP" data-v="month" class="${S.statP==='month'?'on':''}">${m('month')}</button><button data-act="statP" data-v="year" class="${S.statP==='year'?'on':''}">${m('year')}</button></div>`;
  const kpi=(l,v,dl)=>`<div><div class="l">${l}</div><div class="v">${v}</div>${dl?`<div class="s">${dl}</div>`:''}</div>`;
  if(S.statP==='month'){
    const k=S.viewMonth,pk=shiftM(k,-1),M=monthStats(k),P=monthStats(pk);const sr=x=>x.inc>0?(x.inc-x.exp)/x.inc*100:null;
    h+=monthBar();
    h+=`<div class="stats kpi4">${kpi(m('income'),`<span class="pos">${RM0(M.inc)}</span>`,deltaTxt(M.inc,P.inc,false))}${kpi(m('spending'),RM0(M.exp),deltaTxt(M.exp,P.exp,true))}${kpi(m('net'),RM0(M.inc-M.exp))}${kpi(m('saveRate'),sr(M)==null?'—':pct(sr(M)))}</div><p class="small" style="margin:5px 2px 0">${m('vsPrev')}: ${mLabel(pk)}</p>`;
    if(!M.exp&&!M.inc)return h+`<div class="empty">${m('noData')}</div>`;
    const per=new Array(daysIn(k)).fill(0);(S.months[k]||[]).forEach(x=>{if(!x.pending&&x.t==='exp')per[+x.date.slice(8)-1]+=+x.amt||0});
    h+=sec(m('dailySpend'))+`<div class="card">${bars(per,{h:70,hi:-1,c2:'var(--pri)',gap:1})}<div class="ax"><span>1</span><span>15</span><span>${daysIn(k)}</span></div></div>`;
    const cats=[...new Set([...Object.keys(M.byCat),...Object.keys(P.byCat)])].sort((a,b)=>(M.byCat[b]||0)-(M.byCat[a]||0));
    h+=sec(m('catCompare'),`<span>${m('thisP')} · ${m('prevP')}</span>`)+`<div class="card list">${cats.slice(0,10).map(c=>{const a=M.byCat[c]||0,b=P.byCat[c]||0;return `<div class="row tap" data-act="catTx" data-v="${esc(c)}">${catAv(c)}<div class="mid"><div class="t1">${esc(catLabel(c))}</div><div class="t2">${RM0(b)} → ${RM0(a)}</div></div><div style="text-align:right"><div class="amt">${RM0(a)}</div><div class="small">${deltaTxt(a,b,true)||'—'}</div></div></div>`}).join('')}</div>`;
    const mer={};(S.months[k]||[]).forEach(x=>{if(!x.pending&&x.t==='exp'&&x.note){const n=x.note.trim();mer[n]=mer[n]||{v:0,n:0,c:x.cat};mer[n].v+=+x.amt||0;mer[n].n++}});
    const ment=Object.entries(mer).sort((a,b)=>b[1].v-a[1].v).slice(0,5);
    if(ment.length)h+=sec(m('topMerchants'))+`<div class="card list">${ment.map(([n,o])=>`<div class="row">${catAv(o.c||'other')}<div class="mid"><div class="t1">${esc(n)}</div><div class="t2">${o.n}×</div></div><div class="amt">${RM(o.v)}</div></div>`).join('')}</div>`;
    return h;
  }
  const ks=[...Array(12)].map((_,i)=>yr+'-'+pad(i+1));const st=ks.map(k=>({k,...monthStats(k)}));
  const inc=st.reduce((s,x)=>s+x.inc,0),exp=st.reduce((s,x)=>s+x.exp,0);const act=st.filter(x=>x.inc||x.exp);
  h+=`<div class="card" style="padding:8px 12px"><div class="mhead" style="margin:0"><b>${yr}</b><div class="nav"><button class="icbtn" data-act="statYear" data-v="-1">${ic('left')}</button><button class="icbtn" data-act="statYear" data-v="1">${ic('right')}</button></div></div></div>`;
  h+=`<div class="stats kpi4">${kpi(m('income'),`<span class="pos">${RM0(inc)}</span>`)}${kpi(m('spending'),RM0(exp))}${kpi(m('net'),RM0(inc-exp))}${kpi(m('saveRate'),inc?pct((inc-exp)/inc*100):'—')}</div>`;
  if(!act.length)return h+`<div class="empty">${m('noData')}</div>`;
  const mx=Math.max(...st.map(x=>Math.max(x.inc,x.exp)),1);
  h+=sec(m('monthly12'))+`<div class="card"><div class="flowhist y12">${st.map(x=>`<div><div class="fb"><span style="height:${x.inc/mx*100}%;background:var(--pos)"></span><span style="height:${x.exp/mx*100}%;background:var(--neg)"></span></div><small>${monShort(x.k).charAt(0)}</small></div>`).join('')}</div></div>`;
  const best=act.filter(x=>x.inc>0).sort((a,b)=>(b.inc-b.exp)/b.inc-(a.inc-a.exp)/a.inc)[0],worst=act.slice().sort((a,b)=>b.exp-a.exp)[0];
  h+=`<div class="card list">${kvl(m('avgMonth'),RM(exp/act.length))}${best?kvl(m('bestMonth'),`${mLabel(best.k)} · ${pct((best.inc-best.exp)/best.inc*100)}`):''}${worst?kvl(m('worstMonth'),`${mLabel(worst.k)} · ${RM0(worst.exp)}`):''}</div>`;
  const yc={};st.forEach(x=>{for(const c in x.byCat)yc[c]=(yc[c]||0)+x.byCat[c]});
  h+=sec(m('yearCats'),`<span>${RM(exp)}</span>`)+`<div class="card list">${barList(yc,exp,catAv,catLabel,catCol,'ycat')}</div>`;
  return h;
}

/* ---------- Wallet ---------- */
VIEWS.wallet=()=>{
  const sg=segOf('wallet');const P=profile(),b=P.b;
  let h=ptitle(T().tabs.wallet)+`<div class="stats" style="grid-template-columns:1fr 1fr;margin-top:0"><div><div class="l">${m('cashTotal')}</div><div class="v">${RM(P.liquid)}</div></div><div><div class="l">${m('cardDebt')}</div><div class="v">${RM(P.cc)}</div></div></div><div style="height:10px"></div>`+segBar('wallet');
  const banks=accs().filter(a=>a.type==='bank'),ewc=accs().filter(a=>a.type==='ewallet'||a.type==='cash'),cards=accs().filter(a=>a.type==='cc');
  if(sg==='all')return h+groupCard(m('banks'),banks,b,addB('bank',m('addBank')))+groupCard(m('ewc'),ewc,b,addB('ewallet',m('addEw'))+addB('cash',m('addCash')))+groupCard(m('cards'),cards,b,addB('cc',m('addCard')));
  if(sg==='credit')return h+DS.cards();
  if(sg==='debit')return h+groupCard(m('banks'),banks,b,addB('bank',m('addBank')));
  if(sg==='other')return h+groupCard(m('ewc'),ewc,b,addB('ewallet',m('addEw'))+addB('cash',m('addCash')));
  return h+DS.rewards();
};

/* ---------- Bills ---------- */
VIEWS.bills=()=>{
  const sg=segOf('bills');let h=ptitle(T().tabs.bills)+segBar('bills');
  if(sg==='bills'){const it=dueItems();const tot=it.reduce((s,x)=>s+x.amt,0);
    return h+`<div class="card"><div class="mhead" style="margin-bottom:6px"><b>${d('wPay')} · ${mLabel(curMonth())}</b><span class="small">${RM(tot)}</span></div>${calStrip(payCalendar(),44)}<div class="small" style="margin-top:6px">${it.length?d('paymentsLeft',it.length):d('allPaid')}</div></div>`+(it.length?`<div class="card list">${it.map(x=>`<div class="row">${x.kind==='bill'?catAv(x.cat):accAv(x.type)}<div class="mid"><div class="t1">${esc(x.name)}</div><div class="t2 ${x.day<new Date().getDate()?'neg':''}">${d('dueOn',dayName(x.day))}</div></div><div style="text-align:right"><div class="amt">${RM(x.amt)}</div><div class="acts"><button class="btn xs ghost" data-act="${x.kind==='bill'?'billPay':'payCard'}" data-v="${x.id}">${d('payNow')}</button></div></div></div>`).join('')}</div>`:'')+vBills();}
  if(sg==='loans')return h+vDebts();
  return h+pplPage(sg==='recv'?'recv':'borrowed');
};

/* ---------- Assets ---------- */
VIEWS.assets=()=>{
  const sg=segOf('assets');let h=ptitle(T().tabs.assets)+segBar('assets');
  if(sg==='overview')return h+vPort();
  if(sg==='portfolio')return h+DS.port();
  if(sg==='networth')return h+DS.net().replace(/<button class="btn sm ghost block" data-act="dGo" data-v="assets">.*?<\/button>/,'');
  return h+vGoals();
};

/* ---------- More (settings + tools) ---------- */
function connectState(){
  const sc=allTx().filter(x=>x.src==='shortcut').sort((a,b)=>(b.ts||b.date).localeCompare(a.ts||a.date));
  if(sc.length)return {k:'ok',label:m('stOk'),cls:'good',last:sc[0].date};
  if((S.settings.connect||{}).started)return {k:'wait',label:m('stWait'),cls:'ok'};
  return {k:'none',label:m('stNone'),cls:''};
}
VIEWS.settings=()=>{
  const cs=connectState();
  const row=(icn,label,sub,act,v,right)=>`<div class="row" data-act="${act}" ${v?`data-v="${v}"`:''}>${icAv(icn)}<div class="mid"><div class="t1">${label}</div><div class="t2">${sub}</div></div>${right||''}<span class="chev">${ic('right')}</span></div>`;
  return ptitle(m('more'))+sec(m('tools'))+`<div class="card list menu">${row('zap',m('connect'),m('connectSub'),'dGo','connect',`<span class="pill ${cs.cls}" style="margin-right:4px">${cs.label}</span>`)}${row('pie',m('reports'),m('reportsSub'),'dGo','reports')}${row('doc',m('tax'),m('taxSub'),'dGo','tax',`<span class="pill" style="margin-right:4px;background:var(--soft);color:var(--muted)">${m('soon')}</span>`)}</div>`+vSettings().replace('<div style="height:6px"></div>','');
};
VIEWS.connect=()=>{
  const cs=connectState(),tpl='Poket|[Current Date]|[Amount]|[Merchant]|[Card or Pass]';
  const flow=['none','wait','ok'];const idx=flow.indexOf(cs.k);
  let h=`<button class="backl" data-act="tab" data-v="settings">${ic('left')}${m('more')}</button>`+ptitle(m('connect'))+`<p class="p">${m('connIntro')}</p>`;
  h+=`<div class="card"><div class="mhead" style="margin-bottom:8px"><b>${m('connStatus')}</b><span class="pill ${cs.cls}">${cs.label}</span></div><div class="steps3">${[m('stNone'),m('stWait'),m('stOk')].map((l,i)=>`<div class="${i<=idx?'on':''}"><span>${i<idx||cs.k==='ok'?ic('check'):i+1}</span>${l}</div>`).join('')}</div>${cs.last?`<div class="small" style="margin-top:8px">${m('stLast',dLabel(cs.last))}</div>`:''}</div>`;
  if(typeof tutCard==='function')h+=sec(m('connVideo'))+tutCard();
  h+=sec(m('connSteps'))+`<div class="card list">${T().sc.map((s,i)=>`<div class="tip"><span class="n">${i+1}</span><div>${s}${i===2?`<span class="code">${esc(tpl)}</span>${t('sc3b')}`:''}</div></div>`).join('')}</div>`;
  h+=`<div class="btns"><button class="btn sm ghost" data-act="copy" data-v="${esc(tpl)}">${t('copyFormat')}</button>${cs.k==='none'?`<button class="btn sm" data-act="connStart">${m('connDone')}</button>`:''}<button class="btn sm ${cs.k==='none'?'ghost':''}" data-act="importSheet">${m('connImport')}</button></div>`;
  h+=sec(m('connLimits'))+`<div class="card list">${m('connLim').map(s=>`<div class="tip"><span class="n">!</span><div>${s}</div></div>`).join('')}</div><div class="msg warn">${t('scWarn')}</div>`;
  h+=sec(m('troubleT'))+`<div class="card list">${m('trouble').map(([a,b])=>`<div class="tip"><span class="n">?</span><div><b>${a}.</b> ${b}</div></div>`).join('')}</div>`;
  return h;
};
VIEWS.tax=()=>`<button class="backl" data-act="tab" data-v="settings">${ic('left')}${m('more')}</button>`+ptitle(m('tax'))+`<p class="p">${m('taxIntro')}</p><div class="msg warn">${m('taxWhy')}</div>`+sec(m('soon'))+`<div class="card list">${m('taxPlan').map((s,i)=>`<div class="tip"><span class="n">${i+1}</span><div>${s}</div></div>`).join('')}</div>`;

/* ---------- actions ---------- */
Object.assign(ACT,{
  seg:v=>{const [tab,k]=v.split('|');S.seg=S.seg||{};S.seg[tab]=k;if(tab==='activity'&&k!=='tx'&&S.txFilter==='review')S.txFilter='all';render();window.scrollTo(0,0)},
  statP:v=>{S.statP=v;render()},
  statYear:v=>{S.statYear=(S.statYear||new Date().getFullYear())+(+v);render()},
  connStart:()=>{S.settings.connect=Object.assign({},S.settings.connect,{started:todayStr()});saveSettings();render()},
});
// Keep "Review" shortcuts landing on the transactions list.
{const gr=ACT.goReview;ACT.goReview=(...a)=>{closeSheet();S.seg=S.seg||{};S.seg.activity='tx';gr(...a)}}
