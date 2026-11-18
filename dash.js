/* =====================================================================
   Poket — Financial Command Centre (Home dashboard)
   Loaded after app.js. Reuses its state (S), helpers and calculations so
   every figure comes from the same single source of truth: accounts +
   transactions + plan. Nothing here writes balances directly.
   ===================================================================== */

/* ---------- extra icons ---------- */
Object.assign(IP,{
  eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff:'<path d="M4 4l16 16"/><path d="M9.9 5.8A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3 3.7M6.3 7.4A16.5 16.5 0 0 0 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.3-1"/><path d="M10 10a3 3 0 0 0 4 4"/>',
  sliders:'<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  gift:'<rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M3 9h18M12 9v11"/><path d="M12 9S10.5 4 8 4.5 7.5 9 12 9zM12 9s1.5-5 4-4.5S16.5 9 12 9z"/>',
  users:'<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5a6 6 0 0 1 12 0"/><path d="M16 5.5a3 3 0 0 1 0 6M18 14a5.5 5.5 0 0 1 3 5"/>',
  alert:'<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4"/><path d="M12 17h.01" stroke-width="2.6"/>',
  wallet:'<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16.5" height="11" rx="2"/><path d="M16.5 13.5h.01" stroke-width="2.6"/>',
  pulse:'<path d="M3 12h4l2.5-6 5 12 2.5-6h4"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  arrowUp:'<path d="M12 19V5M6 11l6-6 6 6"/>',arrowDown:'<path d="M12 5v14M6 13l6 6 6-6"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
});

/* ---------- strings (EN / BM) ---------- */
const DL={
en:{
  leftToSpend:'Left to spend',overBy:'Over budget by',spentThisMonth:'Spent this month',
  inNext:n=>n===1?'today':`in the next ${n} days`,perDay:'/day',
  monthClosed:'Month closed',spentOf:(a,b)=>`Spent ${a} of ${b}`,
  spent:'Spent',budget:'Budget',daysLeft:'Days left',
  noBudgetT:'Set a monthly budget',noBudgetB:'Poket will show what is left to spend and a daily allowance.',setBudget:'Set budget',
  glance:'Month at a glance',coming:'Coming up',money:'Your money',recent:'Recent activity',customise:'Customise',
  wTrend:'Spending trend',wTop:'Top category',wDaily:'Daily budget',wFlow:'Money flow',wSave:'Savings rate',wFcst:'Forecast',
  wPay:'Payments due',wCards:'Card bills',wSubs:'Subscriptions',wReview:'To review',
  wNet:'Net worth',wCash:'Cash & debit',wPort:'Portfolio',wGoals:'Goals',wRewards:'Rewards & fees',wRecv:'Receivables',wDebt:'Debt payoff',
  vsSameDay:m=>`vs same day in ${m}`,vsMonth:m=>`vs ${m}`,ofSpend:p=>`${p} of spending`,noSpend:'No spending yet',
  onTrack:'On track',watch:'Watch pace',over:'Over budget',noBudget:'No budget set',daysN:n=>`${n} day${n===1?'':'s'} left`,
  inc:'In',out:'Out',net:'Net',saved:'saved',noIncome:'No income recorded',
  projected:'Projected month-end cash',estimate:'Estimate',actual:'Actual',
  dueTotal:n=>`${n} due this month`,allPaid:'All paid this month',overdue:'Overdue',dueOn:d=>`Due ${d}`,
  utilised:p=>`${p} utilised`,noCards:'No credit cards yet',nextDue:d=>`Next due ${d}`,
  perMonth:'/month',active:n=>`${n} active`,renews:(n,d)=>`${n} renews ${d}`,noSubs:'Add subscriptions as bills with the Subscriptions category.',
  allClear:'All clear',items:n=>`${n} item${n===1?'':'s'}`,
  rUnassigned:n=>`${n} need an account`,rShortcut:n=>`${n} from Shortcut to confirm`,rDup:n=>`${n} possible duplicate${n===1?'':'s'}`,rUncat:n=>`${n} uncategorised`,rStale:n=>`${n} balance${n===1?'':'s'} to check`,rBackup:'Backup due',
  thisMonth:'this month',assetsL:'Assets',liabL:'Liabilities',
  accountsN:n=>`${n} account${n===1?'':'s'}`,unrealised:'unrealised',noInvest:'Add an investment account to track it here.',
  ofTarget:p=>`${p} of target`,noGoals:'Create a savings goal.',
  cashbackYtd:'Cashback this year',feesYtd:'Fees this year',
  owed:'Owed to you',collected:p=>`${p} collected`,noRecv:'Track money people owe you.',add:'Add',
  paidOffL:'Paid off (loans with original amount)',debtRepaid:'Debt repayments',totalDebt:'Total debt',freeBy:m=>`Debt-free ${m}`,paidOff:p=>`${p} paid off`,noDebt:'No debts recorded',
  // detail sheets
  howCalc:'How this is calculated',close:'Close',editBudget:'Edit monthly budget',catBudgets:'Category budgets',
  dailyExpl:(l,n)=>`<b>${l}</b> remaining budget ÷ <b>${n}</b> day${n===1?'':'s'} left this month (including today).`,
  safeT:'Safe-to-spend check',safeCash:'Cash & bank now',safeBills:'Unpaid bills this month',safeInst:'Loan & BNPL instalments due',safeCards:'Card bills due',safeGoals:'Goal contributions',safeResult:'Free cash',
  safeExpl:p=>`Cash you can spend without missing a payment${p?', spread over the days until payday':''}. Poket uses the lower of this and your remaining budget.`,
  safeDaily:'Safe daily allowance',untilPayday:n=>`${n} day${n===1?'':'s'} until payday`,
  trend6:'Last 6 months',mtdNow:'This month so far',mtdPrev:m=>`${m}, same period`,byCat:'Spending by category',byAcc:'Spending by account',
  incomeBy:'Income by category',transfersNote:'Transfers between your own accounts and debt repayments are not counted as income or spending.',
  savingsExpl:'(Income − Spending) ÷ Income for each month. Investments and debt repayments are counted as saved.',
  fcstExpl:'Projection for liquid accounts (cash, bank, e-wallet). Actual figures come from your records; estimates use your last 3 months.',
  fcstNow:'Cash & bank today',fcstInc:'Expected income still to come',fcstBills:'Bills & instalments still due',fcstCards:'Card bills still due',fcstVar:'Day-to-day spending (at current pace)',
  fcstPast:'Forecasts are only shown for the current month.',
  manageBills:'Manage bills',payNow:'Pay',paid:'Paid',
  cardsExpl:'Card balances come from your opening balance plus recorded card spending and payments.',
  subsMonthly:'Monthly cost',subsYearly:'Yearly cost',addSub:'Add subscription',
  reviewTx:'Review transactions',dupExpl:'Same amount, same day, same account and similar description.',
  nwExpl:'History is derived from your recorded transactions and valuation dates. Valuations of property, vehicles and investments are estimates you enter.',
  nwChange:'Change this month',openPortfolio:'Open portfolio',openDebts:'Open debts',openGoals:'Open goals',
  rewardsExpl:'Cashback is income tagged “Cashback & rebates”. Fees are spending whose description mentions a fee or charge.',
  recvT:'Receivable',recvWho:'Who owes you',recvAmt:'Amount owed',recvGot:'Collected so far',recvNote:'Note',recvWhoPh:'e.g. Aiman — concert tickets',
  save:'Save',del:'Delete',sure:'Tap again to delete',
  mbT:'Monthly budget',mbAmt:'Total spending budget per month',mbHint:s=>s?`Leave empty to use the sum of your category budgets (${s}).`:'Leave empty to switch off.',mbPayday:'Payday (day of month, optional)',mbPaydayHint:'Used for the safe-to-spend allowance.',
  czT:'Customise dashboard',czPriv:'Hide amounts',czPrivB:'Masks money values on every screen.',czRecent:'Show recent activity',czWidgets:'Widgets',czHint:'Toggle to show or hide. Use the arrows to reorder.',reset:'Reset layout',
  hiddenN:n=>`${n} widget${n===1?'':'s'} hidden · `,
},
ms:{
  leftToSpend:'Baki untuk dibelanja',overBy:'Lebih bajet sebanyak',spentThisMonth:'Belanja bulan ini',
  inNext:n=>n===1?'hari ini':`dalam ${n} hari lagi`,perDay:'/hari',
  monthClosed:'Bulan telah tamat',spentOf:(a,b)=>`Belanja ${a} daripada ${b}`,
  spent:'Belanja',budget:'Bajet',daysLeft:'Hari lagi',
  noBudgetT:'Tetapkan bajet bulanan',noBudgetB:'Poket akan tunjuk baki untuk dibelanja dan elaun harian.',setBudget:'Tetapkan bajet',
  glance:'Ringkasan bulan',coming:'Akan datang',money:'Wang anda',recent:'Aktiviti terkini',customise:'Ubah suai',
  wTrend:'Trend belanja',wTop:'Kategori utama',wDaily:'Bajet harian',wFlow:'Aliran wang',wSave:'Kadar simpanan',wFcst:'Ramalan',
  wPay:'Bayaran tertunggak',wCards:'Bil kad',wSubs:'Langganan',wReview:'Untuk disemak',
  wNet:'Nilai bersih',wCash:'Tunai & debit',wPort:'Portfolio',wGoals:'Matlamat',wRewards:'Ganjaran & caj',wRecv:'Belum terima',wDebt:'Bayar hutang',
  vsSameDay:m=>`berbanding tarikh sama ${m}`,vsMonth:m=>`berbanding ${m}`,ofSpend:p=>`${p} daripada belanja`,noSpend:'Tiada belanja lagi',
  onTrack:'Terkawal',watch:'Awasi kadar',over:'Lebih bajet',noBudget:'Tiada bajet',daysN:n=>`${n} hari lagi`,
  inc:'Masuk',out:'Keluar',net:'Bersih',saved:'disimpan',noIncome:'Tiada pendapatan direkod',
  projected:'Unjuran tunai hujung bulan',estimate:'Anggaran',actual:'Sebenar',
  dueTotal:n=>`${n} perlu dibayar bulan ini`,allPaid:'Semua dibayar bulan ini',overdue:'Lewat',dueOn:d=>`Tarikh ${d}`,
  utilised:p=>`${p} digunakan`,noCards:'Tiada kad kredit lagi',nextDue:d=>`Bayar sebelum ${d}`,
  perMonth:'/bulan',active:n=>`${n} aktif`,renews:(n,d)=>`${n} diperbaharui ${d}`,noSubs:'Tambah langganan sebagai bil dengan kategori Langganan.',
  allClear:'Semua beres',items:n=>`${n} perkara`,
  rUnassigned:n=>`${n} perlukan akaun`,rShortcut:n=>`${n} dari Shortcut untuk disahkan`,rDup:n=>`${n} mungkin berganda`,rUncat:n=>`${n} tiada kategori`,rStale:n=>`${n} baki perlu disemak`,rBackup:'Sandaran perlu dibuat',
  thisMonth:'bulan ini',assetsL:'Aset',liabL:'Liabiliti',
  accountsN:n=>`${n} akaun`,unrealised:'belum direalisasi',noInvest:'Tambah akaun pelaburan untuk menjejakinya di sini.',
  ofTarget:p=>`${p} daripada sasaran`,noGoals:'Cipta matlamat simpanan.',
  cashbackYtd:'Cashback tahun ini',feesYtd:'Caj tahun ini',
  owed:'Hutang kepada anda',collected:p=>`${p} diterima`,noRecv:'Jejak wang yang orang berhutang dengan anda.',add:'Tambah',
  paidOffL:'Dilunaskan (pinjaman dengan jumlah asal)',debtRepaid:'Bayaran hutang',totalDebt:'Jumlah hutang',freeBy:m=>`Bebas hutang ${m}`,paidOff:p=>`${p} dilunaskan`,noDebt:'Tiada hutang direkod',
  howCalc:'Cara pengiraan',close:'Tutup',editBudget:'Ubah bajet bulanan',catBudgets:'Bajet kategori',
  dailyExpl:(l,n)=>`Baki bajet <b>${l}</b> ÷ <b>${n}</b> hari lagi bulan ini (termasuk hari ini).`,
  safeT:'Semakan selamat dibelanja',safeCash:'Tunai & bank sekarang',safeBills:'Bil belum bayar bulan ini',safeInst:'Ansuran pinjaman & BNPL',safeCards:'Bil kad perlu dibayar',safeGoals:'Sumbangan matlamat',safeResult:'Tunai bebas',
  safeExpl:p=>`Tunai yang boleh dibelanja tanpa terlepas bayaran${p?', dibahagi sehingga hari gaji':''}. Poket guna nilai lebih rendah antara ini dan baki bajet.`,
  safeDaily:'Elaun harian selamat',untilPayday:n=>`${n} hari sehingga gaji`,
  trend6:'6 bulan lepas',mtdNow:'Bulan ini setakat ini',mtdPrev:m=>`${m}, tempoh sama`,byCat:'Belanja ikut kategori',byAcc:'Belanja ikut akaun',
  incomeBy:'Pendapatan ikut kategori',transfersNote:'Pindahan antara akaun sendiri dan bayaran hutang tidak dikira sebagai pendapatan atau belanja.',
  savingsExpl:'(Pendapatan − Belanja) ÷ Pendapatan setiap bulan. Pelaburan dan bayaran hutang dikira sebagai simpanan.',
  fcstExpl:'Unjuran untuk akaun mudah tunai (tunai, bank, e-wallet). Angka sebenar dari rekod anda; anggaran guna purata 3 bulan lepas.',
  fcstNow:'Tunai & bank hari ini',fcstInc:'Pendapatan dijangka masuk',fcstBills:'Bil & ansuran belum bayar',fcstCards:'Bil kad belum bayar',fcstVar:'Belanja harian (kadar semasa)',
  fcstPast:'Ramalan hanya untuk bulan semasa.',
  manageBills:'Urus bil',payNow:'Bayar',paid:'Dibayar',
  cardsExpl:'Baki kad dikira dari baki pembukaan serta belanja dan bayaran kad yang direkod.',
  subsMonthly:'Kos bulanan',subsYearly:'Kos tahunan',addSub:'Tambah langganan',
  reviewTx:'Semak transaksi',dupExpl:'Jumlah sama, hari sama, akaun sama dan keterangan serupa.',
  nwExpl:'Sejarah dikira dari transaksi yang direkod dan tarikh penilaian. Nilai hartanah, kenderaan dan pelaburan ialah anggaran anda.',
  nwChange:'Perubahan bulan ini',openPortfolio:'Buka portfolio',openDebts:'Buka hutang',openGoals:'Buka matlamat',
  rewardsExpl:'Cashback ialah pendapatan berkategori “Cashback & rebat”. Caj ialah belanja yang keterangannya menyebut caj atau yuran.',
  recvT:'Belum terima',recvWho:'Siapa berhutang',recvAmt:'Jumlah hutang',recvGot:'Sudah diterima',recvNote:'Nota',recvWhoPh:'cth. Aiman — tiket konsert',
  save:'Simpan',del:'Padam',sure:'Tekan lagi untuk padam',
  mbT:'Bajet bulanan',mbAmt:'Jumlah bajet belanja sebulan',mbHint:s=>s?`Biarkan kosong untuk guna jumlah bajet kategori (${s}).`:'Biarkan kosong untuk matikan.',mbPayday:'Hari gaji (hari dalam bulan, pilihan)',mbPaydayHint:'Digunakan untuk elaun selamat dibelanja.',
  czT:'Ubah suai papan pemuka',czPriv:'Sembunyi jumlah',czPrivB:'Sorok nilai wang di semua skrin.',czRecent:'Tunjuk aktiviti terkini',czWidgets:'Widget',czHint:'Togol untuk tunjuk atau sorok. Guna anak panah untuk susun.',reset:'Set semula susunan',
  hiddenN:n=>`${n} widget disorok · `,
}};
const d=(k,...a)=>{const v=(DL[LANG]||DL.en)[k]??DL.en[k];return typeof v==='function'?v(...a):v};

/* ---------- widget registry ---------- */
const DSECS={
  glance:['trend','top','daily','flow','save','fcst'],
  coming:['pay','cards','subs','review'],
  money:['net','cash','port','goals','rewards','recv','debt'],
};
const WMETA={trend:['wTrend','trend'],top:['wTop','pie'],daily:['wDaily','sun'],flow:['wFlow','swap'],save:['wSave','target'],fcst:['wFcst','pulse'],
  pay:['wPay','cal'],cards:['wCards','card'],subs:['wSubs','repeat'],review:['wReview','alert'],
  net:['wNet','scale'],cash:['wCash','wallet'],port:['wPort','trend'],goals:['wGoals','target'],rewards:['wRewards','gift'],recv:['wRecv','users'],debt:['wDebt','doc']};
const DCFG=()=>{const c=S.settings.dash=S.settings.dash||{};c.hidden=c.hidden||[];c.order=c.order||{};
  for(const s in DSECS){const o=(c.order[s]||[]).filter(x=>DSECS[s].includes(x));DSECS[s].forEach(x=>{if(!o.includes(x))o.push(x)});c.order[s]=o}
  return c};

/* ---------- date helpers ---------- */
const ymOf=k=>k.split('-').map(Number);
const daysIn=k=>{const [y,m]=ymOf(k);return new Date(y,m,0).getDate()};
const shiftM=(k,n)=>{const [y,m]=ymOf(k);const x=new Date(y,m-1+n,1);return x.getFullYear()+'-'+pad(x.getMonth()+1)};
const monShort=k=>T().mon[ymOf(k)[1]-1];
const dayName=day=>{const td=new Date().getDate();if(day===td)return t('today').toLowerCase();return ordinal(day)};
function periodInfo(k){
  const cur=curMonth(),dim=daysIn(k),today=new Date().getDate();
  if(k===cur)return {state:'cur',dim,elapsed:today,left:dim-today+1,today};
  if(k<cur)return {state:'past',dim,elapsed:dim,left:0,today:dim};
  return {state:'future',dim,elapsed:0,left:dim,today:0};
}

/* ---------- calculations ---------- */
function monthBudget(){
  const pl=P_();if(+pl.monthly>0)return {amt:+pl.monthly,src:'total'};
  const s=Object.values(pl.budgets||{}).reduce((a,v)=>a+(+v||0),0);
  return s>0?{amt:s,src:'cats'}:null;
}
// Spending in month k up to (and including) day N.
function spendUpTo(k,day){return r2((S.months[k]||[]).filter(x=>!x.pending&&x.t==='exp'&&+x.date.slice(8)<=day).reduce((s,x)=>s+(+x.amt||0),0))}
// Liquid-account spending in month k (affects cash immediately; card spend does not).
function liquidSpend(k){return (S.months[k]||[]).filter(x=>!x.pending&&x.t==='exp'&&LIQUID.includes((accById(x.from)||{}).type)).reduce((s,x)=>s+(+x.amt||0),0)}
function dueItems(){
  // Unpaid obligations for the current calendar month.
  const P=profile(),b=P.b,out=[];
  (P_().bills||[]).forEach(x=>{if(billDueThisMonth(x)&&!billPaid(x))out.push({kind:'bill',id:x.id,name:x.name,amt:+x.amt||0,day:+x.day||1,cat:x.cat||'bills'})});
  accs().filter(a=>(a.type==='loan'||a.type==='bnpl')&&-b[a.id]>0&&+a.monthly>0&&a.dueDay&&!debtPaidThisMonth(a)).forEach(a=>out.push({kind:'inst',id:a.id,name:a.name,amt:Math.min(+a.monthly,-b[a.id]),day:+a.dueDay,type:a.type}));
  return out.sort((x,y)=>x.day-y.day);
}
function cardDues(){const b=computeBalances();return accs().filter(a=>a.type==='cc').map(a=>({a,bal:-b[a.id],paid:debtPaidThisMonth(a)})).filter(x=>x.bal>0)}
function goalCommit(){
  // Monthly contribution needed for dated goals that aren't backed by an account balance.
  const now=new Date();let s=0;
  (P_().goals||[]).forEach(g=>{if(g.acc||!g.by)return;const [y,m]=ymOf(g.by);const n=(y-now.getFullYear())*12+(m-1-now.getMonth());const rem=(+g.target||0)-(+g.saved||0);if(n>0&&rem>0)s+=rem/n});
  return r2(s);
}
function safeToSpend(){
  const P=profile(),pi=periodInfo(curMonth());
  const bills=dueItems().filter(x=>x.kind==='bill').reduce((s,x)=>s+x.amt,0);
  const inst=dueItems().filter(x=>x.kind==='inst').reduce((s,x)=>s+x.amt,0);
  const cards=cardDues().filter(x=>!x.paid&&x.a.dueDay).reduce((s,x)=>s+x.bal,0);
  const goals=goalCommit();
  const free=r2(P.liquid-bills-inst-cards-goals);
  const pd=+S.settings.payday||0;
  const days=pd?(pd>pi.today?pd-pi.today:pi.dim-pi.today+pd):pi.left;
  const B=monthBudget(),M=monthStats(curMonth());
  const budgetLeft=B?B.amt-M.exp:null;
  const pool=Math.max(0,budgetLeft==null?free:Math.min(free,budgetLeft));
  return {liquid:P.liquid,bills,inst,cards,goals,free,days,payday:pd,pool,daily:days>0?pool/days:0};
}
function forecast(){
  const k=curMonth(),pi=periodInfo(k),P=profile(),M=monthStats(k);
  const prev=prevMonths(3).filter(x=>S.months[x]&&S.months[x].length);
  const avgInc=prev.length?prev.reduce((s,x)=>s+monthStats(x).inc,0)/prev.length:0;
  const expInc=Math.max(0,r2(avgInc-M.inc));
  const due=dueItems().reduce((s,x)=>s+x.amt,0);
  const cards=cardDues().filter(x=>!x.paid&&x.a.dueDay&&+x.a.dueDay>=pi.today).reduce((s,x)=>s+x.bal,0);
  const pace=pi.elapsed?liquidSpend(k)/pi.elapsed:0;const variable=r2(pace*Math.max(0,pi.left-1));
  return {now:P.liquid,expInc,due,cards,variable,end:r2(P.liquid+expInc-due-cards-variable),hasHist:prev.length>0};
}
function findDuplicates(){
  const cut=dStr(new Date(Date.now()-90*864e5));const g={};
  allTx().filter(x=>x.date>=cut&&(x.t==='exp'||x.t==='inc')).forEach(x=>{const key=[x.t,r2(x.amt),x.date,x.from||x.to||''].join('|');(g[key]=g[key]||[]).push(x)});
  const out=[];
  Object.values(g).forEach(list=>{if(list.length<2)return;
    for(let i=1;i<list.length;i++){const a=norm(list[0].note),b=norm(list[i].note);if(!a||!b||a===b||a.includes(b)||b.includes(a))out.push([list[0],list[i]])}});
  return out;
}
function reviewInfo(){
  const pc=pendingCount(),dups=findDuplicates();
  const uncat=(S.months[curMonth()]||[]).filter(x=>!x.pending&&x.t==='exp'&&(!x.cat||x.cat==='other'));
  const stale=accs().filter(a=>(LIQUID.includes(a.type)||a.type==='cc')&&(!a.lastCheck||(Date.now()-new Date(a.lastCheck))>7*864e5));
  const backup=accs().length&&(!S.settings.lastBackup||(Date.now()-new Date(S.settings.lastBackup))>14*864e5);
  const lines=[];
  if(pc.p)lines.push(['neg',d('rUnassigned',pc.p)]);
  if(pc.r)lines.push(['warn',d('rShortcut',pc.r)]);
  if(dups.length)lines.push(['warn',d('rDup',dups.length)]);
  if(uncat.length)lines.push(['mut',d('rUncat',uncat.length)]);
  if(stale.length)lines.push(['mut',d('rStale',stale.length)]);
  if(backup)lines.push(['mut',d('rBackup')]);
  return {pc,dups,uncat,stale,backup,lines,count:pc.p+pc.r+dups.length+uncat.length+stale.length+(backup?1:0)};
}
// Balances as of the end of a given date, from opening balances + transactions up to that date.
function netAsOf(end){
  const b={};S.accounts.forEach(a=>{b[a.id]=isLiab(a)?-(+a.opening||0):(+a.opening||0)});
  for(const x of allTx()){if(x.pending||x.date>end)continue;const v=+x.amt||0;
    if(x.t==='exp'&&x.from in b)b[x.from]-=v;else if(x.t==='inc'&&x.to in b)b[x.to]+=v;
    else if(x.t==='trf'){if(x.from in b)b[x.from]-=v;if(x.to in b)b[x.to]+=v}else if(x.t==='adj'&&x.from in b)b[x.from]+=v}
  let as=0,li=0;
  accs().forEach(a=>{if(isLiab(a)){li+=-b[a.id];return}
    if(isValued(a)&&a.value!=null&&a.valueDate&&a.valueDate<=end)as+=valueOf(a,b);else as+=b[a.id]});
  return r2(as-li);
}
function nwSeries(n){const out=[];const k=curMonth();for(let i=n-1;i>=1;i--){const m=shiftM(k,-i);out.push([m,netAsOf(m+'-'+pad(daysIn(m)))])}out.push([k,profile().net]);return out}
function rewardsFees(){
  const y=String(new Date().getFullYear()),FEE=/\b(fee|fees|caj|charge|charges|yuran|annual fee|late payment|finance charge|service tax|sst)\b/i;
  let cb=0,cbM=0,fee=0;const fees=[];
  allTx().forEach(x=>{if(x.pending||!x.date.startsWith(y))return;
    if(x.t==='inc'&&x.cat==='cashback'){cb+=+x.amt||0;if(mKey(x.date)===curMonth())cbM+=+x.amt||0}
    if(x.t==='exp'&&(x.cat==='fees'||FEE.test(x.note||''))){fee+=+x.amt||0;fees.push(x)}});
  return {cb:r2(cb),cbM:r2(cbM),fee:r2(fee),fees};
}
const recvList=()=>{const pl=P_();pl.receivables=pl.receivables||[];return pl.receivables};
function goalTotals(){const b=computeBalances();let tg=0,sv=0;const list=(P_().goals||[]).map(g=>{const a=accById(g.acc);const saved=a?Math.max(0,shown(a,b)):(+g.saved||0);tg+=+g.target||0;sv+=Math.min(saved,+g.target||0);return {g,saved}});return {tg,sv,list}}
function debtInfo(){
  const P=profile(),b=P.b;let orig=0,cur=0,last=null;
  accs().filter(isLiab).forEach(a=>{const v=shown(a,b);if(+a.orig>0){orig+=+a.orig;cur+=Math.max(0,v)}const n=a.type==='cc'?null:debtLeftMonths(a,v);if(n&&(!last||n>last))last=n});
  return {total:P.debt,paidPct:orig>0?(1-cur/orig)*100:null,freeBy:last?addMonths(last):null,monthly:P.debtMonthly};
}

/* ---------- tiny SVG charts (no dependencies, offline) ---------- */
function spark(vals,o={}){
  const h=o.h||38,w=100,n=vals.length;if(n<2)return '';
  const mn=Math.min(...vals,o.zero?0:Infinity),mx=Math.max(...vals);const rg=(mx-mn)||1;
  const pts=vals.map((v,i)=>[i/(n-1)*w,h-3-((v-mn)/rg)*(h-8)]);
  const line=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(2)+' '+p[1].toFixed(2)).join(' ');
  const c=o.c||'var(--pri)',id='g'+Math.random().toString(36).slice(2,7);
  const last=pts[n-1];
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="height:${h}px" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".22"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></linearGradient></defs><path d="${line} L${w} ${h} L0 ${h}Z" fill="url(#${id})"/><path d="${line}" fill="none" stroke="${c}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${last[0]}" cy="${last[1]}" r="2.6" fill="${c}" vector-effect="non-scaling-stroke"/></svg>`;
}
function bars(vals,o={}){
  const h=o.h||38,n=vals.length,gap=o.gap??(n>8?1.2:3),w=100;const mx=Math.max(...vals.map(v=>Math.abs(v)),1);const bw=(w-gap*(n-1))/n;
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="height:${h}px" aria-hidden="true">`+vals.map((v,i)=>{const bh=Math.max(1.5,Math.abs(v)/mx*(h-2));const c=v<0?'var(--neg)':(i===(o.hi??n-1)?(o.c||'var(--pri)'):(o.c2||'var(--pri-soft)'));return `<rect x="${(i*(bw+gap)).toFixed(2)}" y="${(h-bh).toFixed(2)}" width="${bw.toFixed(2)}" height="${bh.toFixed(2)}" rx="${Math.min(2.5,bw/3)}" fill="${c}"/>`}).join('')+`</svg>`;
}
function donut(parts,size=58,sw=9){
  const tot=parts.reduce((s,p)=>s+p.v,0);const r=(size-sw)/2,C=2*Math.PI*r;let off=0;
  const segs=tot>0?parts.filter(p=>p.v>0).map(p=>{const len=p.v/tot*C;const gap=parts.length>1?Math.min(2,len/3):0;const s=`<circle r="${r}" cx="${size/2}" cy="${size/2}" fill="none" stroke="${p.c}" stroke-width="${sw}" stroke-dasharray="${Math.max(0,len-gap)} ${C}" stroke-dashoffset="${-off}" transform="rotate(-90 ${size/2} ${size/2})"/>`;off+=len;return s}).join(''):'';
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" style="width:${size}px;flex:none" aria-hidden="true"><circle r="${r}" cx="${size/2}" cy="${size/2}" fill="none" stroke="var(--soft)" stroke-width="${sw}"/>${segs}</svg>`;
}
const stackBar=(parts,h=7)=>{const tot=parts.reduce((s,p)=>s+Math.max(0,p.v),0)||1;return `<div class="stack" style="height:${h}px">${parts.filter(p=>p.v>0).map(p=>`<span style="width:${p.v/tot*100}%;background:${p.c}"></span>`).join('')}</div>`};
const DPAL=['var(--pri)','#22B07D','#F2A93B','#8E7CF0','#E36A8E','#2FB5C9','#A0AEC0'];
function deltaTxt(cur,prev,goodDown){
  if(!(prev>0))return '';const p=(cur-prev)/prev*100;if(Math.abs(p)<0.5)return `<span class="delta">±0%</span>`;
  const up=p>0;const cls=goodDown?(up?'up':'down'):(up?'gup':'gdown');
  return `<span class="delta ${cls}">${up?'▲':'▼'} ${Math.abs(Math.round(p))}%</span>`;
}

/* ---------- widget renderers ---------- */
const wrap=(id,body,cls)=>{const [lk,icn]=WMETA[id];return `<div class="w ${cls||''}" data-act="dw" data-v="${id}" role="button" tabindex="0"><div class="wh"><span class="wi">${ic(icn)}</span><span class="wt">${d(lk)}</span>${body.badge||''}</div>${body.html}</div>`};
const W={
  trend(k){const ks=[...Array(6)].map((_,i)=>shiftM(k,i-5));const vals=ks.map(x=>monthStats(x).exp);const pi=periodInfo(k);
    const cur=vals[5];const pk=shiftM(k,-1);const prev=pi.state==='cur'?spendUpTo(pk,pi.today):vals[4];
    const cmp=prev>0?`${deltaTxt(pi.state==='cur'?spendUpTo(k,pi.today):cur,prev,true)} ${pi.state==='cur'?d('vsSameDay',monShort(pk)):d('vsMonth',monShort(pk))}`:'';
    return {html:`<div class="wv">${RM0(cur)}</div><div class="ws">${cmp||'&nbsp;'}</div><div class="wc">${spark(vals,{zero:true})}</div>`}},
  top(k){const M=monthStats(k);const ent=Object.entries(M.byCat).sort((a,b)=>b[1]-a[1]);
    if(!ent.length)return {html:`<div class="wv mut">—</div><div class="ws">${d('noSpend')}</div>`};
    const [c,v]=ent[0];const parts=ent.slice(0,4).map(([cc,vv])=>({v:vv,c:catCol(cc)}));const rest=ent.slice(4).reduce((s,e)=>s+e[1],0);if(rest)parts.push({v:rest,c:'var(--line)'});
    return {html:`<div style="display:flex;gap:10px;align-items:center;margin-top:auto"><div style="min-width:0;flex:1"><div class="wv" style="font-size:16px">${esc(catLabel(c))}</div><div class="ws"><b style="color:var(--ink)">${RM0(v)}</b><br>${d('ofSpend',pct(v/M.exp*100))}</div></div>${donut(parts,54,8)}</div>`}},
  daily(k){const B=monthBudget(),M=monthStats(k),pi=periodInfo(k);
    if(!B)return {html:`<div class="wv mut">—</div><div class="empty2">${d('noBudget')} · <b>${d('setBudget')}</b></div>`};
    const left=B.amt-M.exp;const per=pi.left>0?Math.max(0,left)/pi.left:0;
    const pace=pi.elapsed/pi.dim,used=M.exp/B.amt;const st=used>1?['bad','over']:used>pace*1.1?['ok','watch']:['good','onTrack'];
    return {html:`<div class="wv">${pi.state==='past'?RM0(left):RM0(per)}<span class="ws" style="font-weight:500">${pi.state==='past'?'':d('perDay')}</span></div><div class="ws">${pi.state==='past'?d('monthClosed'):d('daysN',pi.left)}</div><div class="wc"><span class="pill ${st[0]}">${d(st[1])}</span><div class="flowb" style="position:relative;margin-top:7px"><span style="width:${Math.min(100,used*100)}%;background:${used>1?'var(--neg)':'var(--pri)'}"></span></div></div>`}},
  flow(k){const M=monthStats(k);const net=M.inc-M.exp;const mx=Math.max(M.inc,M.exp,1);
    return {html:`<div class="wv ${net<0?'neg':''}">${net>=0?'+':''}${RM0(net)}</div><div class="ws">${d('net')} ${d('thisMonth')}</div><div class="wc mini"><div><div class="r"><span>${d('inc')}</span><b class="pos">${RM0(M.inc)}</b></div><div class="flowb"><span style="width:${M.inc/mx*100}%;background:var(--pos)"></span></div></div><div><div class="r"><span>${d('out')}</span><b>${RM0(M.exp)}</b></div><div class="flowb"><span style="width:${M.exp/mx*100}%;background:var(--neg)"></span></div></div></div>`}},
  save(k){const ks=[...Array(6)].map((_,i)=>shiftM(k,i-5));const rates=ks.map(x=>{const m=monthStats(x);return m.inc>0?(m.inc-m.exp)/m.inc*100:0});const M=monthStats(k);
    if(!M.inc)return {html:`<div class="wv mut">—</div><div class="ws">${d('noIncome')}</div><div class="wc">${bars(rates,{h:30})}</div>`};
    const r=rates[5],prev=rates[4];const diff=Math.round(r-prev);
    return {html:`<div class="wv ${r<0?'neg':''}">${pct(r)}</div><div class="ws">${prev||diff?`<span class="delta ${diff>=0?'gup':'gdown'}">${diff>=0?'▲':'▼'} ${Math.abs(diff)} pt</span> ${d('vsMonth',monShort(ks[4]))}`:RM0(M.inc-M.exp)+' '+d('saved')}</div><div class="wc">${bars(rates,{h:30})}</div>`}},
  fcst(k){const pi=periodInfo(k);if(pi.state!=='cur')return {html:`<div class="wv mut">—</div><div class="ws">${d('fcstPast')}</div>`};
    const F=forecast();return {html:`<div class="wv ${F.end<0?'neg':''}">${RM0(F.end)}</div><div class="ws">${d('projected')} <span class="est" style="margin-left:0">${d('estimate')}</span></div><div class="wc mini"><div class="r"><span>${d('inc')}</span><b class="pos">+${RM0(F.expInc)}</b></div><div class="r"><span>${d('out')}</span><b>-${RM0(F.due+F.cards+F.variable)}</b></div></div>`}},
  pay(){const it=dueItems();const td=new Date().getDate();if(!it.length)return {badge:`<span class="cnt zero">✓</span>`,html:`<div class="wv">${RM0(0)}</div><div class="ws">${d('allPaid')}</div>`};
    const tot=it.reduce((s,x)=>s+x.amt,0);const od=it.filter(x=>x.day<td).length;
    return {badge:od?`<span class="cnt" style="background:var(--neg)">${od}</span>`:'',html:`<div class="wv">${RM0(tot)}</div><div class="ws">${d('dueTotal',it.length)}</div><div class="wc mini">${it.slice(0,2).map(x=>`<div class="r"><span>${esc(x.name)}</span><b class="${x.day<td?'neg':''}">${x.day<td?d('overdue'):ordinal(x.day)}</b></div>`).join('')}</div>`}},
  cards(){const P=profile();const cd=cardDues();if(!accs().some(a=>a.type==='cc'))return {html:`<div class="wv mut">—</div><div class="empty2">${d('noCards')} · <b>${d('add')}</b></div>`};
    const u=P.limit?P.cc/P.limit*100:null;const nx=cd.filter(x=>!x.paid&&x.a.dueDay).sort((a,b)=>a.a.dueDay-b.a.dueDay)[0];
    return {html:`<div class="wv">${RM0(P.cc)}</div><div class="ws">${nx?d('nextDue',ordinal(nx.a.dueDay)):d('allPaid')}</div><div class="wc">${u!=null?`<div class="r ws" style="display:flex;justify-content:space-between;margin:0 0 3px"><span>${d('utilised',pct(u))}</span></div><div class="flowb"><span style="width:${Math.min(100,u)}%;background:${u>70?'var(--neg)':u>30?'var(--warn)':'var(--pos)'}"></span></div>`:''}</div>`}},
  subs(){const subs=(P_().bills||[]).filter(b=>b.cat==='subs');if(!subs.length)return {html:`<div class="wv mut">—</div><div class="empty2">${d('noSubs')}</div>`};
    const mo=subs.reduce((s,b)=>s+(b.freq==='y'?(+b.amt||0)/12:(+b.amt||0)),0);const td=new Date().getDate();
    const nx=subs.filter(b=>b.freq!=='y').map(b=>({b,dd:((+b.day||1)-td+31)%31})).sort((a,b)=>a.dd-b.dd)[0];
    return {html:`<div class="wv">${RM0(mo)}<span class="ws" style="font-weight:500">${d('perMonth')}</span></div><div class="ws">${d('active',subs.length)}</div><div class="wc mini">${nx?`<div class="r"><span>${esc(nx.b.name)}</span><b>${ordinal(nx.b.day||1)}</b></div>`:''}</div>`}},
  review(){const R=reviewInfo();if(!R.count)return {badge:`<span class="cnt zero">✓</span>`,html:`<div class="wv">${d('allClear')}</div><div class="ws">&nbsp;</div>`};
    return {badge:`<span class="cnt">${R.count}</span>`,html:`<div class="wv">${d('items',R.count)}</div><div class="wc mini">${R.lines.slice(0,2).map(([c,l])=>`<div class="r"><span class="${c==='neg'?'neg':''}">${l}</span></div>`).join('')}</div>`}},
  net(){const s=nwSeries(6);const now=s[5][1],prev=s[4][1];const ch=now-prev;const P=profile();
    return {html:`<div class="nwrow"><div style="flex:none;max-width:52%"><div class="wv" style="font-size:22px">${RM0(now)}</div><div class="ws"><span class="delta ${ch>=0?'gup':'gdown'}">${ch>=0?'▲':'▼'} ${RM0(Math.abs(ch))}</span> ${d('thisMonth')}</div></div><div class="wc">${spark(s.map(x=>x[1]),{h:44})}</div></div><div style="margin-top:10px">${stackBar([{v:P.assets,c:'var(--pri)'},{v:P.debt,c:'var(--neg)'}],6)}<div class="legend2"><span><i style="background:var(--pri)"></i>${d('assetsL')} ${RM0(P.assets)}</span><span><i style="background:var(--neg)"></i>${d('liabL')} ${RM0(P.debt)}</span></div></div>`}},
  cash(){const P=profile();const list=accs().filter(a=>LIQUID.includes(a.type)).map(a=>({a,v:P.b[a.id]})).sort((x,y)=>y.v-x.v);
    return {html:`<div class="wv">${RM0(P.liquid)}</div><div class="ws">${d('accountsN',list.length)}</div><div class="wc">${stackBar(list.map((x,i)=>({v:x.v,c:DPAL[i%DPAL.length]})))}<div class="legend2">${list.slice(0,2).map((x,i)=>`<span><i style="background:${DPAL[i]}"></i>${esc(x.a.name.split(' ')[0])}</span>`).join('')}</div></div>`}},
  port(){const P=profile();if(!accs().some(a=>a.type==='invest'))return {html:`<div class="wv mut">—</div><div class="empty2">${d('noInvest')}</div>`};
    const pl=P.inv-P.invCost;const by={};accs().filter(a=>a.type==='invest').forEach(a=>{by[a.kind||'other']=(by[a.kind||'other']||0)+valueOf(a,P.b)});
    return {html:`<div class="wv">${RM0(P.inv)}</div><div class="ws"><span class="${pl>=0?'pos':'neg'}" style="font-weight:600">${pl>=0?'+':''}${RM0(pl)}</span> ${d('unrealised')}</div><div class="wc">${stackBar(Object.values(by).map((v,i)=>({v,c:DPAL[i%DPAL.length]})))}</div>`}},
  goals(){const G=goalTotals();if(!G.list.length)return {html:`<div class="wv mut">—</div><div class="empty2">${d('noGoals')} <b>+</b></div>`};
    return {html:`<div class="wv">${RM0(G.sv)}</div><div class="ws">${d('ofTarget',pct(G.tg?G.sv/G.tg*100:0))}</div><div class="wc">${prog(G.sv,G.tg)}</div>`}},
  rewards(){const R=rewardsFees();return {html:`<div class="wc mini" style="padding-top:0;margin-top:0"><div><div class="ws" style="margin:0">${d('cashbackYtd')}</div><div class="wv pos" style="font-size:16px">+${RM0(R.cb)}</div></div><div><div class="ws" style="margin:0">${d('feesYtd')}</div><div class="wv" style="font-size:16px">${RM0(R.fee)}</div></div></div>`}},
  recv(){const L2=recvList();if(!L2.length)return {html:`<div class="wv mut">—</div><div class="empty2">${d('noRecv')} <b>+ ${d('add')}</b></div>`};
    const amt=L2.reduce((s,x)=>s+(+x.amt||0),0),got=L2.reduce((s,x)=>s+Math.min(+x.got||0,+x.amt||0),0);
    return {html:`<div class="wv">${RM0(amt-got)}</div><div class="ws">${d('collected',pct(amt?got/amt*100:0))}</div><div class="wc">${prog(got,amt)}</div>`}},
  debt(){const D=debtInfo();if(!(D.total>0))return {html:`<div class="wv">${RM0(0)}</div><div class="ws">${d('noDebt')}</div>`};
    return {html:`<div class="wv">${RM0(D.total)}</div><div class="ws">${D.freeBy?d('freeBy',mLabel(D.freeBy)):'&nbsp;'}</div><div class="wc">${D.paidPct!=null?prog(D.paidPct,100)+`<div class="ws">${d('paidOff',pct(D.paidPct))}</div>`:''}</div>`}},
};

/* ---------- Home view ---------- */
function vDash(){
  const name=(S.settings.profile||{}).name;
  let h=`<div class="greet">${t('hi',esc(name||''))}</div>`;
  if(!accs().length)return h+`<div class="hero"><div class="big" style="font-size:22px">${t('welcomeT')}</div></div><p class="p">${t('welcomeB')}</p><div class="btns"><button class="btn sm" data-act="newAcc" data-v="bank">${ic('plus')}${t('addAccount')}</button><button class="btn sm ghost" data-act="help">${t('guide')}</button></div>`;
  const k=S.viewMonth,cfg=DCFG();
  h+=heroCard(k);
  h+=`<div class="qa"><button data-act="addType" data-v="exp">${ic('minus')}${t('qSpend')}</button><button data-act="addType" data-v="inc">${ic('in')}${t('qIncome')}</button><button data-act="addType" data-v="trf">${ic('swap')}${t('qTransfer')}</button><button data-act="importSheet">${ic('save')}${t('qImport')}</button></div>`;
  const secT={glance:d('glance')+` <span class="secper" style="font-weight:500;color:var(--muted);font-size:14px">· ${mLabel(k)}</span>`,coming:d('coming'),money:d('money')};
  let first=true;
  for(const s of ['glance','coming','money']){
    const ids=cfg.order[s].filter(x=>!cfg.hidden.includes(x));if(!ids.length)continue;
    h+=`<div class="dsec"><h2>${secT[s]}</h2>${first?`<span class="lnk" data-act="dCust">${d('customise')}</span>`:''}</div>`;first=false;
    h+=`<div class="wgrid">`+ids.map(id=>{const r=W[id](k);return wrap(id,r,(id==='net')?'full':'')}).join('')+`</div>`;
  }
  if(first)h+=`<div class="ghosthint"><span data-act="dCust">${d('customise')}</span></div>`;
  if(cfg.recent!==false){const recent=allTx().slice().sort((a,b)=>(b.date+(b.ts||'')).localeCompare(a.date+(a.ts||''))).slice(0,5);
    if(recent.length)h+=`<div class="dsec"><h2>${d('recent')}</h2><span class="lnk" data-act="tab" data-v="activity">${t('seeAll')}</span></div><div class="card list">${recent.map(txRow).join('')}</div>`;}
  const nh=cfg.hidden.length;
  h+=`<div class="ghosthint">${nh?d('hiddenN',nh):''}<span data-act="dCust">${d('customise')}</span></div>`;
  return h;
}
function heroCard(k){
  const B=monthBudget(),M=monthStats(k),pi=periodInfo(k);
  const priv=!!S.settings.privacy;
  const top=`<div class="top"><div class="per"><button class="hb" data-act="month" data-v="-1" aria-label="Previous month">${ic('left')}</button>${mLabelF(k)}<button class="hb" data-act="month" data-v="1" aria-label="Next month">${ic('right')}</button></div><button class="hb" data-act="dPriv" aria-label="${d('czPriv')}">${ic(priv?'eyeOff':'eye')}</button></div>`;
  if(!B)return `<div class="hero2">${top}<div class="lbl">${d('spentThisMonth')}</div><div class="big">${RM(M.exp)}</div><div class="sub">${d('noBudgetB')}</div><button class="cta" data-act="mBudget">${d('setBudget')}</button></div>`;
  const left=B.amt-M.exp,used=M.exp/B.amt,pace=pi.elapsed/pi.dim;
  let lbl,big,sub;
  if(pi.state==='past'){lbl=d('monthClosed');big=RM(left);sub=d('spentOf',RM0(M.exp),RM0(B.amt))}
  else if(left<0){lbl=d('overBy');big=RM(-left);sub=d('spentOf',RM0(M.exp),RM0(B.amt))}
  else{lbl=d('leftToSpend');big=RM(left);sub=`${d('inNext',pi.left)} · <b>${RM0(left/pi.left)}</b>${d('perDay')}`}
  return `<div class="hero2">${top}<div class="tap" data-act="dw" data-v="daily"><div class="lbl">${lbl}</div><div class="big">${big}</div><div class="sub">${sub}</div>
   <div class="bar" role="img" aria-label="${pct(used*100)}"><span style="width:${Math.min(100,used*100)}%;${used>1?'background:#FFB4B4':''}"></span>${pi.state==='cur'?`<i style="left:${pace*100}%"></i>`:''}</div></div>
   <div class="row3"><div class="tap" data-act="dw" data-v="trend"><div class="l">${d('spent')}</div><div class="v">${RM0(M.exp)}</div></div><div class="tap" data-act="mBudget"><div class="l">${d('budget')}</div><div class="v">${RM0(B.amt)}</div></div><div><div class="l">${d('daysLeft')}</div><div class="v">${pi.left}</div></div></div></div>`;
}

/* ---------- detail sheets (progressive disclosure) ---------- */
const kvl=(k,v,cls)=>`<div class="kvl ${cls||''}"><span class="k">${k}</span><span class="v">${v}</span></div>`;
const expl=s=>`<div class="expl"><b>${d('howCalc')}.</b> ${s}</div>`;
const closeBtn=()=>`<button class="btn block" style="margin-top:12px" data-act="close">${d('close')}</button>`;
const axis=ks=>`<div class="ax">${ks.map(x=>`<span>${monShort(x)}</span>`).join('')}</div>`;
const DS={
  trend(k){const ks=[...Array(6)].map((_,i)=>shiftM(k,i-5));const vals=ks.map(x=>monthStats(x).exp);const pi=periodInfo(k),M=monthStats(k);
    let h=`<div class="subhead">${d('trend6')}</div><div class="chartbig">${bars(vals,{h:110})}</div>${axis(ks)}`;
    if(pi.state==='cur'){const pk=shiftM(k,-1);h+=`<div class="card list" style="margin-top:12px">${kvl(d('mtdNow'),RM(spendUpTo(k,pi.today)))}${kvl(d('mtdPrev',mLabel(pk)),RM(spendUpTo(pk,pi.today)))}</div>`}
    h+=`<div class="subhead">${d('byCat')}</div><div class="card list">${barList(M.byCat,M.exp,catAv,catLabel,catCol,'dcat')}</div>`;
    h+=`<div class="subhead">${d('byAcc')}</div><div class="card list">${barList(M.byAcc,M.exp,x=>accAv((accById(x)||{}).type),x=>(accById(x)||{}).name||t('deletedAcc'),x=>isLiab(accById(x))?'var(--neg)':'var(--pri)','dacc')}</div>`;
    return h},
  top(k){const M=monthStats(k);const ent=Object.entries(M.byCat).sort((a,b)=>b[1]-a[1]);
    const parts=ent.map(([c,v])=>({v,c:catCol(c)}));
    return `<div style="display:flex;justify-content:center;margin:6px 0 10px">${donut(parts,150,20)}</div><div class="card list">${barList(M.byCat,M.exp,catAv,catLabel,catCol,'dtop')}</div>`},
  daily(k){const B=monthBudget(),M=monthStats(k),pi=periodInfo(k);const pl=P_();
    let h='';
    if(B){const left=B.amt-M.exp;h+=`<div class="card list">${kvl(d('budget'),RM(B.amt))}${kvl(d('spent'),RM(M.exp))}${kvl(d('leftToSpend'),RM(left),'tot')}${pi.state==='cur'?kvl(d('daysLeft'),pi.left)+kvl(d('wDaily'),RM(Math.max(0,left)/pi.left)+d('perDay'),'tot'):''}</div>`;
      if(pi.state==='cur')h+=expl(d('dailyExpl',RM(Math.max(0,left)),pi.left));}
    if(periodInfo(k).state==='cur'){const s=safeToSpend();
      h+=`<div class="subhead">${d('safeT')}</div><div class="card list">${kvl(d('safeCash'),RM(s.liquid))}${kvl(d('safeBills'),'-'+RM(s.bills))}${kvl(d('safeInst'),'-'+RM(s.inst))}${kvl(d('safeCards'),'-'+RM(s.cards))}${s.goals?kvl(d('safeGoals'),'-'+RM(s.goals)):''}${kvl(d('safeResult'),RM(s.free),'tot')}${kvl(d('safeDaily')+(s.payday?` <span class="small">· ${d('untilPayday',s.days)}</span>`:''),RM(s.daily)+d('perDay'),'tot')}</div>${expl(d('safeExpl',s.payday))}`;}
    const bud=Object.entries(pl.budgets||{}).filter(e=>e[1]>0);
    h+=`<div class="subhead">${d('catBudgets')}</div><div class="card list">`+(bud.length?bud.map(([c,lim])=>{const sp=M.byCat[c]||0,lf=lim-sp;return `<div class="row tap" data-act="budget" data-v="${esc(c)}">${catAv(c)}<div class="mid"><div style="display:flex;justify-content:space-between;gap:8px"><span class="t1">${esc(catLabel(c))}</span><span class="small ${lf<0?'neg':''}">${lf>=0?t('budgetLeft',RM0(lf)):t('budgetOver',RM0(-lf))}</span></div>${prog(sp,lim,true)}<div class="t2" style="margin-top:3px">${RM0(sp)} / ${RM0(lim)}</div></div></div>`}).join(''):`<div class="empty">${t('noBudgets')}</div>`)+`</div>`;
    h+=`<div class="btns" style="margin-top:10px"><button class="btn sm" style="flex:1" data-act="mBudget">${d('editBudget')}</button><button class="btn sm ghost" style="flex:1" data-act="budget">${d('catBudgets')}</button></div>`;
    return h},
  flow(k){const M=monthStats(k);const inc={};(S.months[k]||[]).filter(x=>!x.pending&&x.t==='inc').forEach(x=>{const c=x.cat||'otherIn';inc[c]=(inc[c]||0)+(+x.amt||0)});
    return `<div class="card list">${kvl(t('income'),'<span class="pos">+'+RM(M.inc)+'</span>')}${kvl(d('spent'),'-'+RM(M.exp))}${kvl(d('net'),RM(M.inc-M.exp),'tot')}${M.invested?kvl(t('invested'),RM(M.invested)):''}${M.debtPaid?kvl(d('debtRepaid'),RM(M.debtPaid)):''}</div><div class="subhead">${d('incomeBy')}</div><div class="card list">${barList(inc,M.inc,catAv,catLabel,catCol,'dinc')}</div><div class="expl">${d('transfersNote')}</div>`},
  save(k){const ks=[...Array(6)].map((_,i)=>shiftM(k,i-5));const st=ks.map(x=>{const m=monthStats(x);return {k:x,inc:m.inc,exp:m.exp,r:m.inc>0?(m.inc-m.exp)/m.inc*100:null}});
    return `<div class="chartbig">${bars(st.map(x=>x.r||0),{h:100})}</div>${axis(ks)}<div class="card list" style="margin-top:12px">${st.slice().reverse().map(x=>kvl(mLabel(x.k),x.r==null?'—':`<span class="${x.r<0?'neg':''}">${pct(x.r)}</span> <span class="small">· ${RM0(x.inc-x.exp)}</span>`)).join('')}</div>${expl(d('savingsExpl'))}`},
  fcst(k){if(periodInfo(k).state!=='cur')return `<p class="p">${d('fcstPast')}</p>`;const F=forecast();const tag=a=>`<span class="est ${a?'act':''}">${a?d('actual'):d('estimate')}</span>`;
    return `<div class="card list">${kvl(d('fcstNow')+tag(1),RM(F.now))}${kvl(d('fcstInc')+tag(0),'+'+RM(F.expInc))}${kvl(d('fcstBills')+tag(1),'-'+RM(F.due))}${kvl(d('fcstCards')+tag(1),'-'+RM(F.cards))}${kvl(d('fcstVar')+tag(0),'-'+RM(F.variable))}${kvl(d('projected')+tag(0),RM(F.end),'tot')}</div>${expl(d('fcstExpl'))}`},
  pay(){const it=dueItems();const td=new Date().getDate();
    return `<div class="card list">`+(it.length?it.map(x=>`<div class="row">${x.kind==='bill'?catAv(x.cat):accAv(x.type)}<div class="mid"><div class="t1">${esc(x.name)}</div><div class="t2 ${x.day<td?'neg':''}">${x.day<td?d('overdue')+' · ':''}${d('dueOn',dayName(x.day))}</div></div><div style="text-align:right"><div class="amt">${RM(x.amt)}</div><div class="acts"><button class="btn xs ${x.day<td?'':'ghost'}" data-act="${x.kind==='bill'?'billPay':'payCard'}" data-v="${x.id}">${d('payNow')}</button></div></div></div>`).join(''):`<div class="empty">${d('allPaid')}</div>`)+`</div><button class="btn sm ghost block" style="margin-top:10px" data-act="dBills">${d('manageBills')}</button>`},
  cards(){const b=computeBalances();const list=accs().filter(a=>a.type==='cc');
    return `<div class="card list">`+(list.length?list.map(a=>accRow(a,b)).join(''):`<div class="empty">${d('noCards')}</div>`)+`</div><button class="btn sm ghost block" style="margin-top:10px" data-act="newAcc" data-v="cc">${ic('plus')}${T().acct.cc}</button><div class="expl">${d('cardsExpl')}</div>`},
  subs(){const subs=(P_().bills||[]).filter(b=>b.cat==='subs');const mo=subs.reduce((s,b)=>s+(b.freq==='y'?(+b.amt||0)/12:(+b.amt||0)),0);
    return `<div class="card list">${kvl(d('subsMonthly'),RM(mo),'tot')}${kvl(d('subsYearly'),RM(mo*12))}</div><div class="card list">`+(subs.length?subs.map(x=>`<div class="row tap" data-act="bill" data-v="${x.id}">${catAv('subs')}<div class="mid"><div class="t1">${esc(x.name)}</div><div class="t2">${x.freq==='y'?t('yearly')+' · ':''}${t('dueOn',x.day||1)}</div></div><div class="amt">${RM(x.amt)}</div></div>`).join(''):`<div class="empty">${d('noSubs')}</div>`)+`</div><button class="btn sm ghost block" style="margin-top:4px" data-act="dAddSub">${ic('plus')}${d('addSub')}</button>`},
  review(){const R=reviewInfo();
    let h=`<div class="card list">`+(R.lines.length?R.lines.map(([c,l])=>`<div class="row"><span class="dot" style="margin:0;background:var(--${c==='mut'?'muted':c})"></span><div class="mid"><div class="t1">${l}</div></div></div>`).join(''):`<div class="empty">${d('allClear')}</div>`)+`</div>`;
    if(R.pc.p||R.pc.r)h+=`<button class="btn sm block" style="margin-top:4px" data-act="goReview">${d('reviewTx')}</button>`;
    if(R.dups.length)h+=`<div class="subhead">${d('rDup',R.dups.length)}</div><div class="card list">${R.dups.slice(0,6).map(p=>txRow(p[1])).join('')}</div><p class="small">${d('dupExpl')}</p>`;
    if(R.uncat.length)h+=`<div class="subhead">${d('rUncat',R.uncat.length)}</div><div class="card list">${R.uncat.slice(0,6).map(txRow).join('')}</div>`;
    if(R.stale.length)h+=`<div class="subhead">${d('rStale',R.stale.length)}</div><div class="card list">${R.stale.map(a=>`<div class="row">${accAv(a.type)}<div class="mid"><div class="t1">${esc(a.name)}</div><div class="t2">${a.lastCheck?t('checked',dLabel(a.lastCheck).toLowerCase()):t('neverChecked')}</div></div><button class="btn xs ghost" data-act="check" data-v="${a.id}">${t('check')}</button></div>`).join('')}</div>`;
    if(R.backup)h+=`<div class="msg warn" style="margin-top:10px">${S.settings.lastBackup?t('backupNudge'):t('backupFirst')}<br><button class="btn xs" data-act="backup">${t('sBackup')}</button></div>`;
    return h},
  net(){const s=nwSeries(12);const P=profile();
    return `<div class="chartbig">${spark(s.map(x=>x[1]),{h:120})}</div><div class="ax"><span>${mLabel(s[0][0])}</span><span>${mLabel(s[s.length-1][0])}</span></div><div class="card list" style="margin-top:12px">${kvl(d('assetsL'),RM(P.assets))}${kvl(d('liabL'),'-'+RM(P.debt))}${kvl(d('wNet'),RM(P.net),'tot')}${kvl(d('nwChange'),RM(P.net-s[s.length-2][1]))}</div>${expl(d('nwExpl'))}<button class="btn sm ghost block" data-act="dGo" data-v="portfolio">${d('openPortfolio')}</button>`},
  cash(){const b=computeBalances();const list=accs().filter(a=>LIQUID.includes(a.type));
    return `<div class="card list">${list.map(a=>accRow(a,b)).join('')||`<div class="empty">—</div>`}</div><button class="btn sm ghost block" style="margin-top:4px" data-act="newAcc" data-v="bank">${ic('plus')}${t('addAccount')}</button>`},
  port(){const P=profile(),b=P.b;const list=accs().filter(a=>a.type==='invest');const by={};list.forEach(a=>{by[a.kind||'other']=(by[a.kind||'other']||0)+valueOf(a,b)});const ent=Object.entries(by).sort((x,y)=>y[1]-x[1]);
    return (list.length?`<div style="display:flex;gap:16px;align-items:center;margin:4px 0 12px">${donut(ent.map(([,v],i)=>({v,c:DPAL[i%DPAL.length]})),96,14)}<div class="legend2" style="flex-direction:column;gap:5px">${ent.map(([kk,v],i)=>`<span><i style="background:${DPAL[i%DPAL.length]}"></i>${esc(kindLabel(kk))} · ${pct(v/P.inv*100)}</span>`).join('')}</div></div><div class="card list">${list.map(a=>accRow(a,b)).join('')}</div>`:`<p class="p">${d('noInvest')}</p>`)+`<button class="btn sm ghost block" style="margin-top:4px" data-act="dGo" data-v="portfolio">${d('openPortfolio')}</button>`},
  goals(){return `<div class="card list">${goalTotals().list.map(({g,saved})=>`<div class="row tap" data-act="goal" data-v="${g.id}">${icAv('target')}<div class="mid"><div style="display:flex;justify-content:space-between;gap:8px"><span class="t1">${esc(g.name)}</span><span class="small">${RM0(saved)} / ${RM0(g.target)}</span></div>${prog(saved,+g.target||0)}</div></div>`).join('')||`<div class="empty">${d('noGoals')}</div>`}</div><button class="btn sm ghost block" style="margin-top:4px" data-act="dGo" data-v="goals">${d('openGoals')}</button>`},
  rewards(){const R=rewardsFees();
    return `<div class="card list">${kvl(d('cashbackYtd'),'<span class="pos">+'+RM(R.cb)+'</span>')}${kvl(d('thisMonth'),'+'+RM(R.cbM))}${kvl(d('feesYtd'),RM(R.fee))}</div>${R.fees.length?`<div class="card list">${R.fees.slice(-6).reverse().map(txRow).join('')}</div>`:''}${expl(d('rewardsExpl'))}`},
  recv(){const L2=recvList();
    return `<div class="card list">`+(L2.length?L2.map(x=>`<div class="row tap" data-act="recv" data-v="${x.id}">${icAv('users')}<div class="mid"><div style="display:flex;justify-content:space-between;gap:8px"><span class="t1">${esc(x.name)}</span><span class="small">${RM0(x.got||0)} / ${RM0(x.amt)}</span></div>${prog(+x.got||0,+x.amt||0)}</div></div>`).join(''):`<div class="empty">${d('noRecv')}</div>`)+`</div><button class="btn sm block" style="margin-top:4px" data-act="recv">${ic('plus')}${d('add')}</button>`},
  debt(){const D=debtInfo();const b=computeBalances();
    return `<div class="card list">${kvl(d('totalDebt'),RM(D.total),'tot')}${kvl(t('debtMonthly'),RM(D.monthly))}${D.paidPct!=null?kvl(d('paidOffL'),pct(D.paidPct)):''}${D.freeBy?kvl(t('debtFreeBy'),mLabel(D.freeBy)):''}</div><div class="card list">${accs().filter(isLiab).map(a=>accRow(a,b)).join('')}</div><button class="btn sm ghost block" style="margin-top:4px" data-act="dGo" data-v="debts">${d('openDebts')}</button>`},
};
function openDetail(id){
  const k=S.viewMonth;const [lk]=WMETA[id];
  openSheet(`<h3>${d(lk)}${['fcst','trend','top','daily','flow','save'].includes(id)?` <span class="small" style="font-weight:500">· ${mLabel(k)}</span>`:''}</h3>${DS[id](k)}${closeBtn()}`,()=>openDetail(id));
}

/* ---------- edit sheets ---------- */
function openMonthBudget(){
  const pl=P_();const sum=Object.values(pl.budgets||{}).reduce((a,v)=>a+(+v||0),0);
  openSheet(`<h3>${d('mbT')}</h3><div class="f"><label>${d('mbAmt')}</label><input id="mb_amt" class="amtin" inputmode="decimal" placeholder="${sum?RM0(sum):'RM0'}" value="${+pl.monthly>0?pl.monthly:''}"><div class="hint" style="text-align:center">${d('mbHint',sum?RM0(sum):'')}</div></div><div class="f"><label>${d('mbPayday')}</label><input id="mb_pd" inputmode="numeric" placeholder="25" value="${S.settings.payday||''}"><div class="hint">${d('mbPaydayHint')}</div></div><button class="btn block" data-act="mBudgetSave">${d('save')}</button>`,openMonthBudget);
}
function openRecv(id){
  const ex=id?recvList().find(x=>x.id===id):null;const x=ex||{name:'',amt:'',got:'',note:''};
  openSheet(`<h3>${d('recvT')}</h3><div class="f"><label>${d('recvWho')}</label><input id="rv_name" placeholder="${esc(d('recvWhoPh'))}" value="${esc(x.name)}"></div><div class="inline"><div class="f"><label>${d('recvAmt')}</label><input id="rv_amt" inputmode="decimal" value="${esc(x.amt)}"></div><div class="f"><label>${d('recvGot')}</label><input id="rv_got" inputmode="decimal" value="${esc(x.got||'')}"></div></div><div class="btns"><button class="btn" style="flex:1" data-act="recvSave" data-v="${id||''}">${d('save')}</button>${ex?`<button class="btn danger" data-act="recvDel" data-v="${id}">${d('del')}</button>`:''}</div>`,()=>openRecv(id));
}
function openCustomise(){
  const c=DCFG();const secN={glance:d('glance'),coming:d('coming'),money:d('money')};
  let h=`<h3>${d('czT')}</h3><div class="card list cz"><div class="row"><div class="mid"><div class="t1">${d('czPriv')}</div><div class="t2">${d('czPrivB')}</div></div><button class="tog ${S.settings.privacy?'on':''}" data-act="dPriv" aria-pressed="${!!S.settings.privacy}" aria-label="${d('czPriv')}"></button></div><div class="row"><div class="mid"><div class="t1">${d('czRecent')}</div></div><button class="tog ${c.recent!==false?'on':''}" data-act="dRecent" aria-label="${d('czRecent')}"></button></div></div><p class="small" style="margin:10px 2px 0">${d('czHint')}</p>`;
  for(const s in DSECS){const o=c.order[s];
    h+=`<div class="subhead">${secN[s]}</div><div class="card list cz">`+o.map((id,i)=>{const on=!c.hidden.includes(id);return `<div class="row"><span class="wi">${ic(WMETA[id][1])}</span><div class="mid"><div class="t1 ${on?'':'mut'}">${d(WMETA[id][0])}</div></div><div class="mv"><button class="icbtn" data-act="dMove" data-v="${s}|${id}|-1" aria-label="Move up" ${i===0?'disabled style="opacity:.35"':''}>${ic('arrowUp')}</button><button class="icbtn" data-act="dMove" data-v="${s}|${id}|1" aria-label="Move down" ${i===o.length-1?'disabled style="opacity:.35"':''}>${ic('arrowDown')}</button></div><button class="tog ${on?'on':''}" data-act="dHide" data-v="${id}" aria-pressed="${on}" aria-label="${d(WMETA[id][0])}"></button></div>`}).join('')+`</div>`;}
  h+=`<div class="btns" style="margin-top:12px"><button class="btn ghost" style="flex:1" data-act="dReset">${d('reset')}</button><button class="btn" style="flex:1" data-act="close">${t('done')}</button></div>`;
  openSheet(h,openCustomise);
}

/* ---------- actions ---------- */
const reSheet=()=>{render();if(SHEET&&!$('#sheet').classList.contains('hidden'))SHEET()};
Object.assign(ACT,{
  dw:v=>{if(DS[v])openDetail(v)},
  dCust:openCustomise,
  dPriv:()=>{S.settings.privacy=!S.settings.privacy;saveSettings();reSheet()},
  dRecent:()=>{const c=DCFG();c.recent=c.recent===false;saveSettings();reSheet()},
  dHide:v=>{const c=DCFG();c.hidden=c.hidden.includes(v)?c.hidden.filter(x=>x!==v):c.hidden.concat([v]);saveSettings();reSheet()},
  dMove:v=>{const [s,id,dir]=v.split('|');const c=DCFG();const o=c.order[s];const i=o.indexOf(id),j=i+(+dir);if(i<0||j<0||j>=o.length)return;[o[i],o[j]]=[o[j],o[i]];saveSettings();reSheet()},
  dReset:()=>{const c=DCFG();c.order={};c.hidden=[];c.recent=true;saveSettings();reSheet()},
  dGo:v=>{closeSheet();location.hash=v},
  dBills:()=>{closeSheet();S.actView='bills';location.hash='activity';render()},
  dAddSub:()=>openBill(null,{cat:'subs',acc:(accs().find(a=>a.type==='cc')||accs().find(a=>a.type==='bank')||{}).id||''}),
  mBudget:openMonthBudget,
  mBudgetSave:()=>{const pl=P_();const raw=$('#mb_amt').value.trim();const v=r2(num(raw));if(raw&&!(v>0))return toast(t('tEnterAmt'));
    if(raw)pl.monthly=v;else delete pl.monthly;
    const pd=parseInt($('#mb_pd').value,10);if(pd>=1&&pd<=31)S.settings.payday=pd;else delete S.settings.payday;
    savePlan();saveSettings();closeSheet();render();toast(t('tSaved'))},
  recv:v=>openRecv(v||null),
  recvSave:v=>{const name=$('#rv_name').value.trim();const amt=r2(num($('#rv_amt').value));const got=r2(num($('#rv_got').value)||0);
    if(!name)return toast(t('tEnterName'));if(!(amt>0))return toast(t('tEnterAmt'));
    const L2=recvList();const ex=v?L2.find(x=>x.id===v):null;const rec={id:ex?ex.id:nid(),name,amt,got:Math.max(0,got),date:ex?ex.date:todayStr()};
    if(ex)Object.assign(ex,rec);else L2.push(rec);savePlan();openDetail('recv');render();toast(t('tSaved'))},
  recvDel:(v,el)=>{if(!el.dataset.sure){el.dataset.sure='1';el.textContent=d('sure');return}const pl=P_();pl.receivables=recvList().filter(x=>x.id!==v);savePlan();openDetail('recv');render()},
});
// Keyboard access for widget cards.
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.w[data-act]')){e.preventDefault();e.target.click()}});
